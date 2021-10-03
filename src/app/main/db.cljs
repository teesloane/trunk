(ns app.main.db
  (:require
   [app.shared.util :as u]
   ["better-sqlite3" :as sqlite]
   [clojure.string :as str]))

;; const Database = require('better-sqlite3');
;; const db = new Database('foobar.db', { verbose: console.log });

(def db (sqlite. "./trunk.db"))

(defn wipe! []
  (println "wipe!  called")
  (.exec db "DELETE FROM words; DELETE FROM articles;" #(println %)))

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
    word_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL,
    comfort INTEGER DEFAULT 0,
    translation TEXT
  );

  CREATE TABLE IF NOT EXISTS articles (
    article_id INTEGER PRIMARY KEY,
    name TEXT,
    source TEXT,
    original TEXT,
    word_ids TEXT,
    date_created INTEGER,
    last_opened INTEGER
  );

")

;; -- Helpers -----------------------------------------------------------------

(defn sql
  [{:keys [stmt params op]}]
  (let [prepared (.prepare db stmt)
        params   (apply array params)]
    (js->clj
     (case op
       :all (if params (.all prepared params) (.all prepared))
       :get (if params (.get prepared params) (.get prepared))
       :run (if params (.run prepared params) (.run prepared)))
     :keywordize-keys true)))

;; -- DB calls -----------------------------------------------------------------

(defn article-get-by-id
  [id]
  (sql {:stmt "SELECT * FROM articles WHERE article_id = ?"
        :op :get
        :params [id]}))

(defn article-delete
  [id]
  (sql {:stmt "DELETE FROM articles WHERE article_id = ?"
        :op :run
        :params [id]}))


(defn articles-get
  []
  (sql {:stmt "SELECT * FROM articles ORDER BY date_created DESC"
        :op :all}))

(defn article-update-last-opened
  [id]
  (sql {:stmt "UPDATE articles SET last_opened = ? WHERE article_ID = ?"
        :op :run
        :params [(js/Date.now) id]}))

(defn article-attach-words
  [article]
  (let [word-ids      (get article :word_ids)
        words-ids-vec (u/split-delimited-article word-ids)
        words-out     (atom [])]
    (doseq [word-id words-ids-vec]
      (let [res (sql {:stmt   "SELECT * FROM words WHERE word_id = ?"
                      :params [word-id]
                      :op     :get})]
        (swap! words-out conj res)))
    (assoc article :word-data @words-out)))

(defn article-insert
  "Creates a new article. Requirements:
  -> words for article are already in words table.
  -> words from article have been re-queries
  -> requiriesed words' ids have been made into a delimited string with $."
  [{:keys [article title source word_ids]}]
  (sql {:op     :run
        :params [article word_ids title source (js/Date.now)]
        :stmt    "INSERT INTO articles(original, word_ids, name, source, date_created) VALUES (?, ?, ?, ?, ?)"}))

(defn word-get
  [word_id]
  (sql {:op :get
        :stmt "SELECT * FROM words WHERE word_id = ?"
        :params [word_id]}))

(defn words-get
  []
  (sql {:op :all :stmt "SELECT * FROM words GROUP BY slug ORDER BY translation DESC"}))

(defn word-update
  [data]
  (let [{:keys [translation comfort slug]} data]
    (sql {:op :run
          :stmt "UPDATE words SET comfort = ?, translation = ? WHERE slug = ?"
          :params [comfort translation slug]})))

(defn words-get-ids-for-article
  "Before inserting an article, we need to get the id for each word in the db
  then we can build a delimited string that will get stored under the `word_ids` column"
  [article-str]
  (let [article-str-vec (u/split-article article-str)
        word-ids        (atom [])
        query           "SELECT word_id FROM words WHERE slug = ? AND name = ?"]
    (doseq [word article-str-vec]
      (let [res (sql {:op :get
                      :stmt query
                      :params [(u/slug-word word) word]})]
        (swap! word-ids conj (get res :word_id))))
    (u/delimit-article @word-ids)))

(defn words-insert
  "Splits a string and inserts each word into the `words` table if it doesn't
  exist."
  [word-str]
  (let [words        (u/split-article word-str)
        placeholders (str/join ", " (map (fn [w] "(?, ?)") words)) ;; this is annoying
        params         (->> words (map #(vector %1 (u/slug-word %1))) flatten (apply array))
        queryWords   (str "INSERT OR IGNORE INTO words(name, slug) VALUES " placeholders)]
    (sql {:op :run :stmt queryWords :params params})))

(defn init
  []
  (.exec db db-seed
         (fn [err]
           (when err
             (throw (js/Error. (str "Failed db" err)))))))

;; FIXME: when do I run "db.close()"?
