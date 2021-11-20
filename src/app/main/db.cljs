(ns app.main.db
  (:require
   [app.shared.util :as u]
   [app.shared.specs :as specs]
   ["better-sqlite3" :as sqlite]
   [clojure.string :as str]
   [clojure.data :as data]
   ["electron" :refer [app]]
   ["fs" :as fs]
   ["path" :as path]))

(def db-name (if u/debug? "trunk-dev.db" "trunk.db"))
(def db-path (.join path (.getPath app "userData") db-name))
(def db (sqlite. db-path))

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

;; TODO: rename `article_id` -> `id`; same with `settings_id`
(def db-seed "

  CREATE TABLE IF NOT EXISTS words (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT NOT NULL,
    comfort INTEGER DEFAULT 0,
    translation TEXT,
    language TEXT,
    is_not_a_word BOOLEAN NOT NULL CHECK (is_not_a_word IN (0, 1)),
    count INTEGER DEFAULT 1,
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
    last_opened INTEGER,
    current_page INTEGER DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS languages (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    iso_639_1 TEXT NOT NULL,
    text_splitting_regex TEXT NOT NULL,
    word_regex TEXT NOT NULL,
    UNIQUE(name, iso_639_1)
  );

  CREATE TABLE IF NOT EXISTS settings (
    settings_id INTEGER PRIMARY KEY,
    user TEXT
  );

")

;; -- Helpers -----------------------------------------------------------------

(defn bool->int
  "Convert a bool into an integer. Needed as SQLite does not store booleans."
  [b]
  (if b 1 0))

(defn sql
  "A wrapper around better-sqlite, making it easier to make (simple) db calls.
  `stmt`   - a sql statement with placeholders: ie: 'SELECT * FROM X WHERE Y = ?'
  `params` - a vector or map of params to substitute into the prepare stmt.
  `op`     - the type of operation to run ('run' 'all' 'get' etc)
  "
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

(defn read-sample-file
  "Pulls in a sample file as a string."
  [name]
  (-> (.readFileSync ^:export fs (.join path js/__dirname ".." "test/sample_texts/" name) "utf8")))

;; -- DB: Langs ----------------------------------------------------------------
;;

(defn langs-init
  "Create the starting languages for the database, if they don't exist yet."
  []
  (let [langs (sql {:op :get :stmt "SELECT * FROM languages" :params []})]
    (when (= (count langs) 0)
      (doseq [[lang lang-map] specs/langs-db]
        (sql {:op     :run
              :params (assoc lang-map :id nil)
              :stmt    "INSERT INTO languages VALUES (@id, @name, @iso_639_1, @text_splitting_regex, @word_regex)"})))))

(defn langs-all
  "Fetch all languages"
  []
  (sql {:op :all :params [] :stmt "SELECT * FROM languages;"}))

(defn lang-get-by-code
  "Get a language by its 2 letter iso_639_1 code."
  [lang-code]
  (sql {:op :get :params [lang-code] :stmt "SELECT * FROM languages where iso_639_1 = ?;"}))

(defn lang-get-text-split-regex
  "Get a language's text_splitting_regex."
  [lang-code]
  (get (lang-get-by-code lang-code) :text_splitting_regex))

(defn lang-get-word-regex
  "Get a language's word_regex."
  [lang-code]
  (get (lang-get-by-code lang-code) :word_regex))

(defn lang-update
  "Takes a new language and updates it in the database,
  then finds all texts (articles) in this language, and resplits and inserts
  words based on how it splits up."
  [language]
  (sql {:op     :run
        :stmt   "UPDATE languages SET word_regex=@word_regex, text_splitting_regex=@text_splitting_regex WHERE id = @id"
        :params (select-keys language [:word_regex :text_splitting_regex :id])})
  (lang-get-by-code (language :iso_639_1)))

(defn lang-create
  "Allows user's to add their own language."
  [lang-form-data]
  (let [form-data (select-keys lang-form-data [:name :iso_639_1 :word_regex :text_splitting_regex])
        form-data (assoc form-data :id nil)]
    (sql {:op     :run
          :params form-data
          :stmt   "INSERT INTO languages VALUES(@id, @name, @iso_639_1, @word_regex, @text_splitting_regex)"})))

(defn lang-delete
  "Deletes a language by id."
  [lang]
  (let [id (lang :id)]
    (sql {:op     :run
          :params [id]
          :stmt   "DELETE FROM languages WHERE id=?"})))

;; -- DB: Settings -------------------------------------------------------------
;; Settings are handled in JSON. For better or worse: ¯\_(ツ)_/¯
;; All settings updates/inserts need to be jsonified.

(defn- settings->json
  "Convert a settings map into json."
  [s]
  (-> s clj->js js/JSON.stringify))

(defn- settings->edn
  "Convert settings-as-json-from-the-db into edn."
  [json-from-db]
  (-> json-from-db js/JSON.parse js->clj))

(defn settings-get
  "Get settings (json) from the db."
  []
  (let [res (sql {:op :get :stmt "SELECT user FROM settings"})]
    (-> res :user settings->edn)))

(defn settings-hook!
  "since we batch update settings as json (for better or worse)) we need to
    sometimes handle side-effectful things, so we diff the new settings
    against the old, and run 'hooks' based on what changed."
  [new-settings-from-fe]
  (let [old-settings   (settings-get)
        ;; normalize new-settings to look like it came from the db before we diff it.
        new-settings   (-> new-settings-from-fe settings->json settings->edn)
        [_ new-diff _] (data/diff new-settings old-settings)]
    (cond
      (contains? new-diff "page-size")
      (sql {:op :run :params [] :stmt "UPDATE articles SET current_page = 0"})

      :else nil)))

(defn settings-update
  "Update the settings, (runs settings update hook before the actual patching.)"
  [settings]
  (settings-hook! settings)
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

;; -- DB: Articles -------------------------------------------------------------

(defn article-get-by-id
  "Fetch an article by id.
  TODO/FIXME: not sure why I need language param - id's are unique."
  [{:keys [article_id language]}]
  (sql {:stmt "SELECT * FROM articles WHERE article_id = ? AND language = ?"
        :op :get
        :params [article_id language]}))

(defn article-delete
  "Delete an article by id."
  [id]
  (sql {:stmt "DELETE FROM articles WHERE article_id = ?"
        :op :run
        :params [id]}))

(defn articles-get
  "Fetch  ALL articles of a specific language"
  [{:keys [language]}]
  (sql {:stmt "SELECT * FROM articles WHERE language = ? ORDER BY date_created DESC"
        :params [language]
        :op :all}))

(defn article-update-last-opened
  "Update the last_opened col on a language."
  [{:keys [article_id current_page]}]
  (let [current_page (if (< current_page 0) 0 current_page)]
    (sql {:stmt "UPDATE articles SET last_opened = ?, current_page = ? WHERE article_ID = ?"
          :op :run
          :params [(js/Date.now) current_page article_id]})))

(defn article-attach-words
  "When given an article, it fetches the word data for each word from the DB and
  attaches it back to the article."
  [article]
  (let [page-size     (get (settings-get) "page-size" 1000) ; aka 'limit'
        curr-page     (get article :current_page 0)
        word-ids      (get article :word_ids)
        words-ids-vec (u/split-delimited-article word-ids)
        total-pages   (/ (count words-ids-vec) page-size)
        ;; paginate the words we return.
        words-ids-slice (u/paginate-vector words-ids-vec page-size curr-page)
        words-out     (atom [])]
    (doseq [word-id words-ids-slice]
      (let [res (sql {:stmt   "SELECT * FROM words WHERE id = ?"
                      :params [word-id]
                      :op     :get})]
        (swap! words-out conj res)))
    (assoc article :word-data @words-out :total-pages (js/Math.ceil total-pages))))

(defn article-insert
  "Creates a new article. Requirements:
  -> words for article are already in words table.
  -> words from article have been queried
  -> queried words' ids have been made into a delimited string with $."
  [{:keys [article title source word_ids language]}]
  (sql {:op     :run
        :params [article word_ids title source (js/Date.now) language]
        :stmt    "INSERT INTO articles(original, word_ids, name, source, date_created, language) VALUES (?, ?, ?, ?, ?, ?)"}))

(defn word-get
  "Get a single word from the db."
  [id]
  (sql {:op :get
        :stmt "SELECT * FROM words WHERE id = ?"
        :params [id]}))

(defn words-get
  "Returns all words that the user has interacted  (changed comfort / translation).
  FIXME: Currently not working exactly the way I want.
  https://stackoverflow.com/a/612268 < query help"
  [{:keys [language]}]
  (sql {:op :all
        :params [language]
        ;; TODO: come back and get this sql query working so only the correct words are returned to fe.
        ;; :stmt "SELECT m.* FROM words m LEFT JOIN words b ON m.slug = b.slug AND m.count < b.count WHERE b.count IS NULL AND m.is_not_a_word = 0 AND m.language = 'fr' ORDER BY count DESC"
        ;; NOTE: this query almost works - but the above query will be better because it returns distinct results by slug - for for example
        ;; If `le` shows up 323 times in the db, it will be returned instead of `Le` which might only show up 5 times.
        ;; Both are technically the same, but we want to sort words by how common they are.)
        :stmt "SELECT * FROM words WHERE is_not_a_word = 0 AND language = ? AND comfort != 0 AND comfort != 5 GROUP BY slug ORDER BY comfort DESC"}))

(defn words-and-phrases-mark-all-known
  "Receives a list of words and updates their comfort to `known` for all.
  Used when a user imports an article and already knows most words in it, but
  doesn't want to have to mark them manually."
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
  "Update a word's comfort or translation."
  [data]
  (let [{:keys [translation comfort slug language]} data]
    (sql {:op :run
          :stmt " UPDATE words SET comfort = ?, translation = ? WHERE slug = ? AND language = ?"
          :params [comfort translation slug language]})))

(defn words-get-ids-for-article
  "Before inserting an article, we need to get the id for each word in the db
  then we can build a delimited string that will get stored under the `word_ids` column"
  [{:keys [article language]}]
  (let [split-regex     (lang-get-text-split-regex language)
        article-str-vec (u/split-article article split-regex)
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
  (let [split-regex     (lang-get-text-split-regex language)
        word-regex      (lang-get-word-regex language)
        words        (u/split-article article split-regex)
        placeholders (str/join ", " (map (fn [_] "(?, ?, ?, ?)") words)) ;; this is annoying
        params         (->> words
                            (map (fn [word]
                                   ;; THIS is the param list!
                                   (vector
                                    word
                                    (u/slug-word word)
                                    (bool->int (not (u/word? word word-regex)))
                                    language)))
                            flatten
                            (apply array))
        queryWords   (str "INSERT INTO words(name, slug, is_not_a_word, language) VALUES " placeholders " ON CONFLICT(name, language) DO UPDATE SET count=count+1")]
    (sql {:op :run :stmt queryWords :params params})))

;; -- DB: Phrases --------------------------------------------------------------

(defn phrase-upsert
  "Inserts/Updates a phrase. "
  [phrase]
  (sql {:op     :run
        :params phrase
        :stmt    "INSERT INTO phrases VALUES (@id, @word_ids, @name, @slug, @comfort, @translation, @first_word_slug, @last_word_slug, @language)
                  ON CONFLICT(name, language) DO UPDATE SET comfort=@comfort, name=@name, translation=@translation"}))

(defn phrase-get
  "Fetches a phrase"
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
    ;; now we do the work of looking through the collected phrases to find ones
    ;; that are actually in the article. this involves some reducing through the
    ;; words and building a temporary buffer whenever we encounter alignment
    ;; between phrase and word, and then comparing the collected buffer against the phrase to see if it is the same.
    (doseq [phrase (dedupe @collected-phrases)]
      (let [result (u/update-word-list-with-phrases phrase @new-word-data)]
        (reset! new-word-data result)))
    (if (empty? @new-word-data)
      article
      (assoc article :word-data @new-word-data))))

;; ----------------------------------------------------------------------------------------
;; Seed fns

(defn seed-article
  "Seeds a dummy article, should only be used in dev (= true u/debug?)"
  []
  (let [data             {:article (read-sample-file "fr_compte2.txt") :title "Compte, Ch 2", :source "..", :language "fr"}
        _                (words-insert data)
        word-ids-str     (words-get-ids-for-article data)
        inserted-article (article-insert (merge data {:word_ids word-ids-str}))]))

(defn run-seeds

  []
  (let [articles       (sql {:op :get :stmt "SELECT * FROM articles" :params []})
        words          (sql {:op :get :stmt "SELECT * FROM words" :params []})
        no-content-yet (and (= (count articles) 0)
                            (= (count words) 0))]
    (when no-content-yet
      (seed-article))))

;; Wipe / Init -----------------------------------------------------------------------------

(defn wipe!
  "Wipes the database and relaunches the application."
  []
  (.exec db "DROP TABLE words;
             DROP TABLE articles;
             DROP TABLE phrases;
             DROP TABLE languages;
             DROP TABLE settings;" #(println %))
  (.relaunch app)
  (.quit app))

(defn init
  []
  (.exec db db-seed
         (fn [err]
           (when err
             (throw (js/Error. (str "Failed db" err))))))
  (settings-init)
  (langs-init)

  (when u/debug? (run-seeds)))

;; FIXME: when do I run "db.close()"?
