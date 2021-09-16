(ns app.main.db
  (:require
   [app.shared.util :as u]
   [cljs.core.async :refer [promise-chan put!]]
   [clojure.pprint]
   [clojure.string :as str]
   ["fs" :as fs]
   ["sqlite3" :as sqlite]))

(def db-path "./trunk.db")
(def db (sqlite/Database. db-path))

(defn db-del!  [] (.unlinkSync fs db-path))
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

(defn <sql
  "Creates a sql operation that returns a channel, allowsing for async/await like syntax.
  Has been abstracted to handle variety of return types depending on sql op(eration)"
  [{:keys [sql params op]}]
  (let [out    (promise-chan)
        err-text (str "Failed to run async query of type " (name op))
        params (apply array params) ;; TODO - if this is not a sequence, handle it?
        cb     (fn [err res]
                 (this-as this
                          (if err
                            (put! out (ex-info err-text {:error :sql-error :res res}))
                     ;; TODO nil - nothing coming back.
                            (cond
                              (= :insert op) (put! out (.-lastID ^js this))
                              res            (put! out (js->clj res :keywordize-keys true))
                              :else          (put! out (js->clj this :keywordize-keys true))))))]

    (case op
      :all    (.all db sql params cb)
      :get    (.get db sql params cb)
      :insert (.run db sql params cb)
      :run    (.run db sql params cb))
    out))

;; -- DB calls -----------------------------------------------------------------

(defn <articles-get
  []
  (<sql {:op :all :sql "SELECT * FROM articles ORDER BY date_created DESC"}))

;; Look into preparing statements -- less recursion:
;; https://stackoverflow.com/questions/28803520/does-sqlite3-have-prepared-statements-in-node-js
(defn <article-attach-words
  "Split up word_ids in an article, and query for each word. This is/will be slow."
  [article]
  (let [word-ids   (get article :word_ids)
        words-orig (str/split word-ids "$") ;; FIXME: shouldn't this be (u/split-article article)?
        out-chan   (promise-chan)]
    (letfn [(recurse [words out]
              (if (= (count out) (count words-orig))
                (put! out-chan (clj->js (assoc article :word-data out)))
                (let [[x & xs] words]
                  (.get db "SELECT * FROM words WHERE word_id = ?" (array x)
                        (fn [err row]
                          (recurse xs (conj out (js->clj row))))))))]
      (recurse words-orig []))
    out-chan))

(defn <article-update-last-opened
  "Sets the last-opened value of an article."
  [id]
  (<sql
   {:sql    "UPDATE articles SET last_opened = ? WHERE article_id = ?"
    :op     :run
    :params [(js/Date.now) id]}))

(defn <article-get-by-id
  "Fetches an article by id."
  [id]
  (<sql
   {:sql    "SELECT * FROM articles WHERE article_id = ?"
    :op     :get
    :params [id]}))

(defn <article-insert
  "Creates a new article. Requirements:
  -> words for article are already in words table.
  -> words from article have been re-queries
  -> requiriesed words' ids have been made into a delimited string with $."
  [{:keys [article title source word_ids]}]
  (<sql {:op     :insert
         :params [article word_ids title source (js/Date.now)]
         :sql "INSERT INTO articles(original, word_ids, name, source, date_created) VALUES (?, ?, ?, ?, ?)"}))

(defn <get-word-ids
  "Before inserting an article, we need to get the id for each word in the db
  then we can build a delimited string that will get stored under the `word_ids` column"
  [article-str]
  (prn "insize get -words ids" article-str)
  (let [article-str-vec (u/split-article article-str)
        word-ids        []
        query           "SELECT word_id FROM words WHERE slug = ? AND name = ?"
        out-chan        (promise-chan)]
    ;; Now some recursion...
    (letfn [(iterate-words [words word-ids cb]
              (if (empty? words)
                (cb word-ids) ;; <1> ;; see 1 below for implementation
                (let [[frst & rst] words
                      slug-word    (u/slug-word frst)
                      vals         (array slug-word frst)]
                  (.get db query vals
                        (fn [err res]
                          ;; TODO - handle errs - if there is ever an err it should abort.
                          (iterate-words rst (conj word-ids (.-word_id ^js res)) cb))))))]
      (iterate-words article-str-vec [] (fn [word-ids] ;; <1>
                                          (put! out-chan (u/delimit-article word-ids)))))
    out-chan))

(defn <insert-words
  "Splits a string and inserts each word into the `words` table if it doesn't
  exist."
  [word-str]
  (let [words        (u/split-article word-str)
        placeholders (str/join ", " (map (fn [w] "(?, ?)") words)) ;; this is annoying
        params         (->> words (map #(vector %1 (u/slug-word %1))) flatten (apply array))
        queryWords   (str "INSERT OR IGNORE INTO words(name, slug) VALUES " placeholders)]
    (<sql {:op :insert :sql queryWords :params params})))

;; This isn't really being used yet:
;; (defn article-update
;;   "Article update wholesale patches a new article into an existing one; ie,
;;   the entire `article` map is taken from the frontend and put into the db
;;   regardless of what has changed.
;;   Takes a object of values to update an article by."
;;   [data cb]
;;   (let [sql     "UPDATE articles SET name = $name, source = $source, original = $original, word_ids = $word_ids, date_created = $date_created"
;;         columns (dissoc data :word-data :article_id, :last_opened) ;; num of coulmns must match num of placeholders in sql statement.
;;         params  (u/map->js-obj->sql columns)]
;;     (.run db sql params (fn [err _]
;;                           (println err) ;; TODO: column error out of range.
;;                           (article-get (data :article_id) cb)))))

(defn <word-get
  [word_id]
  (<sql {:op :get
         :sql "SELECT * FROM words WHERE word_id = ?"
         :params [word_id]}))

(defn <word-update
  [data]
  (let [{:keys [word_id translation comfort slug]} data]
    (<sql {:op :insert ; it's the same as update anyway for now.
           :sql "UPDATE words SET comfort = ?, translation = ? WHERE slug = ?"
           :params [comfort translation slug]})))

(defn init
  []
  (.exec db db-seed
         (fn [err]
           (when err
             (throw (js/Error. (str "Failed db" err)))))))

;; FIXME: when do I run "db.close()"?
