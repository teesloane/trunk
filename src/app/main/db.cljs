(ns app.main.db
  (:require
   [app.shared.util :as u]
   [app.shared.specs :as specs]
   ["better-sqlite3" :as sqlite]
   [clojure.string :as str]
   ["electron" :refer [app]]
   ["fs" :as fs]
   ["path" :as path]))

(def db-name (if u/debug? "trunk-dev.db" "trunk.db"))
(def db-path (.join path (.getPath app "userData") db-name))
(def db (sqlite. db-path))

(defn wipe!
  "Wipes the database and relaunches the application."
  []
  (.exec db "DROP TABLE words;
             DROP TABLE articles;
             DROP TABLE phrases;
             DROP TABLE settings;" #(println %))
  (.relaunch app)
  (.quit app))

;; (defn remove-db-file! []
;;   (.unlink fs db-path #(when % (prn "Failed to delete db file") %)))

;; NOTE: each word has a `slug` which is a lowercased, cleaned version of the
;; word. This way, if an article has a capitalized version of a word etc, you
;; can still update multiple version of the word.`
;;
;; For example, a word will have `The` and `the` in an article, but they will
;; both have the slug value of `the`, making it possible to update them both in
;; an UPDATE! call where slug matches, while at the same time allowing multiple
;; versions of their actual spelling and ID, making it possible to reconstruct
;; the word from the delimisted string (word_ids) in the article table.

;; FIXME: words table needs new columns
;; TODO - last updated
;; TODO - last seen
(def db-seed "

  CREATE TABLE IF NOT EXISTS words (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT NOT NULL,
    comfort INTEGER DEFAULT 0,
    translation TEXT,
    language TEXT,
    is_not_a_word BOOLEAN NOT NULL CHECK (is_not_a_word IN (0, 1)),
    count INTEGER DEFAULT 0,
    UNIQUE(name, language)
  );

  CREATE TABLE IF NOT EXISTS phrases (
    id INTEGER PRIMARY KEY,
    word_ids TEXT,
    name TEXT NOT NULL,
    slug TEXT NOT NULL,
    comfort INTEGER DEFAULT 0,
    translation TEXT,
    first_word_slug TEXT,
    last_word_slug TEXT,
    language TEXT,
    UNIQUE(name, language)
  );

  CREATE TABLE IF NOT EXISTS articles (
    article_id INTEGER PRIMARY KEY,
    name TEXT,
    source TEXT,
    original TEXT,
    word_ids TEXT,
    language TEXT,
    date_created INTEGER,
    last_opened INTEGER
  );

  CREATE TABLE IF NOT EXISTS settings (
    settings_id INTEGER PRIMARY KEY,
    user TEXT
  )

")

;; -- Helpers -----------------------------------------------------------------

(defn bool->int
  [b]
  (if b 1 0))

(defn sql
  [{:keys [stmt params op]}]
  (let [prepared (.prepare db stmt)
        params   (cond
                   (vector? params) (apply array params)
                   (map? params)    (clj->js params)
                   :else            params)]
    (js->clj
     (case op
       :all (if params (.all prepared params) (.all prepared))
       :get (if params (.get prepared params) (.get prepared))
       :run (if params (.run prepared params) (.run prepared)))
     :keywordize-keys true)))

;; get the trunk version from package.json.
(def trunk-version
  (-> (.readFileSync ^:export fs (.join path js/__dirname ".." "package.json") "utf8")
      js/JSON.parse
      js->clj
      (get "version")))

;; -- DB calls -----------------------------------------------------------------

(defn article-get-by-id
  [{:keys [article_id language]}]
  (sql {:stmt "SELECT * FROM articles WHERE article_id = ? AND language = ?"
        :op :get
        :params [article_id language]}))

(defn article-delete
  [id]
  (sql {:stmt "DELETE FROM articles WHERE article_id = ?"
        :op :run
        :params [id]}))

(defn articles-get
  [{:keys [language]}]
  (sql {:stmt "SELECT * FROM articles WHERE language = ? ORDER BY date_created DESC"
        :params [language]
        :op :all}))

(defn article-update-last-opened
  [{:keys [article_id]}]
  (sql {:stmt "UPDATE articles SET last_opened = ? WHERE article_ID = ?"
        :op :run
        :params [(js/Date.now) article_id]}))

(defn article-attach-words
  "When given an article, it fetches the word data for each word from the DB and
  attaches it back to the article."
  [article]
  (let [word-ids      (get article :word_ids)
        words-ids-vec (u/split-delimited-article word-ids)
        words-out     (atom [])]
    (doseq [word-id words-ids-vec]
      (let [res (sql {:stmt   "SELECT * FROM words WHERE id = ?"
                      :params [word-id]
                      :op     :get})]
        (swap! words-out conj res)))
    (assoc article :word-data @words-out)))

(defn article-insert
  "Creates a new article. Requirements:
  -> words for article are already in words table.
  -> words from article have been re-queries
  -> requiriesed words' ids have been made into a delimited string with $."
  [{:keys [article title source word_ids language]}]
  (sql {:op     :run
        :params [article word_ids title source (js/Date.now) language]
        :stmt    "INSERT INTO articles(original, word_ids, name, source, date_created, language) VALUES (?, ?, ?, ?, ?, ?)"}))

(defn word-get
  [id]
  (sql {:op :get
        :stmt "SELECT * FROM words WHERE id = ?"
        :params [id]}))

(defn words-get
  [{:keys [language]}]
  (sql {:op :all
        :params [language]
        :stmt "SELECT * FROM words WHERE is_not_a_word = 0 AND language = ? GROUP BY slug ORDER BY comfort DESC"}))

(defn words-and-phrases-mark-all-known
  "Receives a list of words and updates their comfort to `known` for all."
  [words]
  (let [stmt-words         (str "UPDATE words SET comfort = " (specs/word-comfort :known) " WHERE slug = ? AND language = ?")
        stmt-phrases       (str "UPDATE phrases SET comfort = " (specs/word-comfort :known) " WHERE id = ? AND language = ?")
        just-phrases       (filter :first_word_slug words)
        sql-update         (.prepare db stmt-words)
        sql-update-phrases (.prepare db stmt-phrases)
        update-words       (.transaction db (fn [words]
                                              (doseq [word words]
                                                (.run sql-update (word :slug) (word :language)))))
        update-phrases     (.transaction db (fn [phrases]
                                              (doseq [phrase phrases]
                                                (.run sql-update-phrases (phrase :id) (phrase :language)))))]
    (update-words words)
    (update-phrases just-phrases)))

(defn word-update
  [data]
  (let [{:keys [translation comfort slug language]} data]
    (sql {:op :run
          :stmt " UPDATE words SET comfort = ?, translation = ? WHERE slug = ? AND language = ?"
          :params [comfort translation slug language]})))

(defn words-get-ids-for-article
  "Before inserting an article, we need to get the id for each word in the db
  then we can build a delimited string that will get stored under the `word_ids` column"
  [{:keys [article language]}]
  (let [article-str-vec (u/split-article article)
        word-ids        (atom [])
        query           "SELECT id FROM words WHERE slug = ? AND name = ? AND language = ?"]
    (doseq [word article-str-vec]
      (let [res (sql {:op :get
                      :stmt query
                      :params [(u/slug-word word) word language]})]
        (swap! word-ids conj (get res :id))))
    (u/delimit-article @word-ids)))

(defn words-insert
  "Splits a string and inserts each word into the `words` table if it doesn't
  exist.
  The sql placeholder is a string with many question marks because we are doing a bulk insert?
  "
  [{:keys [article language]}]
  (let [words        (u/split-article article)
        placeholders (str/join ", " (map (fn [_] "(?, ?, ?, ?)") words)) ;; this is annoying
        params         (->> words
                            (map (fn [word]
                                   ;; THIS is the param list!
                                   (vector
                                    word
                                    (u/slug-word word)
                                    (bool->int (not (u/word? word)))
                                    language)))
                            flatten
                            (apply array))
        queryWords   (str "INSERT INTO words(name, slug, is_not_a_word, language) VALUES " placeholders " ON CONFLICT(name, language) DO UPDATE SET count=count+1")]
    (sql {:op :run :stmt queryWords :params params})))

;; -- DB: Phrases --------------------------------------------------------------

(defn phrase-upsert
  [phrase]
  (sql {:op     :run
        :params phrase
        :stmt    "INSERT INTO phrases VALUES (@id, @word_ids, @name, @slug, @comfort, @translation, @first_word_slug, @last_word_slug, @language)
                  ON CONFLICT(name, language) DO UPDATE SET comfort=@comfort, name=@name, translation=@translation"
        }))

(defn phrase-get
  [id]
  (sql {:op :get
        :stmt "SELECT * FROM phrases WHERE id = ?"
        :params [id]}))

(defn article-attach-phrases
  "Attaches phrase data to the `article` map.
  How it works:

  - Once an article has its `word-data` attached to it:
    - we iterate over each word and search the phrase table for phrases that STARTS  with that word's slug.
    - we filter over that list, and keep it IF:
      - the phrase's word_ids are a substring of the article's word_ids substr
      - then, we loop over the word data, replacing them with phrases"
  [{:keys [word-data] :as article}]
  (let [collected-phrases (atom [])
        new-word-data     (atom word-data)]
    (doseq [word word-data :let [{:keys [slug]} word]]
      (let [res (sql {:stmt   "SELECT * FROM phrases WHERE first_word_slug = ?"
                      :params [slug]
                      :op     :get})]
        (when res
          ;; if the word_ids of the phrase are in the article word_ids...
          (when (str/includes? (article :word_ids) (get res :word_ids))
            (swap! collected-phrases conj res)))))
    ;; now that we have all the phrases that MIGHT appear in the article,
    ;; now we do the work of looking through the collecting phrases to find ones
    ;; that are actually in the article. this involves some reducing through the
    ;; words and building a temporary buffer whenever we encounter alignment
    ;; between phrase and word, and then comparing the collected buffer against the phrase to see if it is the same.
    (doseq [phrase (dedupe @collected-phrases)]
      (let [result (u/update-word-list-with-phrases phrase @new-word-data)]
        (reset! new-word-data result)))
    (if (empty? @new-word-data)
      article
      (assoc article :word-data @new-word-data))))


;; -- DB: Settings -------------------------------------------------------------
;; All settings updates/inserts need to be jsonified.
(defn- settings->json
  [s]
  (-> s clj->js js/JSON.stringify))

(defn- settings->edn
  [json-from-db]
  (-> json-from-db js/JSON.parse js->clj))

(defn settings-get
  []
  (let [res (sql {:op :get :stmt "SELECT user FROM settings"})]
    (-> res :user settings->edn)))

(defn settings-update
  [settings]
  (sql {:op :run
        :stmt "UPDATE settings SET user = ? WHERE settings_id = 1"
        :params [(settings->json settings)]}))

(defn settings-init
  "If there are no rows in the settings table, initialize it."
  []
  (let [default-settings (settings->json (specs/make-default-settings trunk-version))
        existing-settings (settings-get)]
    (when-not existing-settings
      (sql {:op :run
            :stmt "INSERT INTO settings(user) VALUES (?)"
            :params [default-settings]}))))

;; -----------------------------------------------------------------------------

(defn init
  []
  (.exec db db-seed
         (fn [err]
           (when err
             (throw (js/Error. (str "Failed db" err))))))
  (settings-init))

;; FIXME: when do I run "db.close()"?
