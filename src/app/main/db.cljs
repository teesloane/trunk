(ns app.main.db
  (:require ["sqlite3" :as sqlite]
            ["fs" :as fs]
            [app.shared.util :as util]
            [clojure.string :as str]
            [app.shared.util :as u]))


(def db-path "./trunk.db")
(def db (sqlite/Database. db-path))

(defn db-del!  [] (.unlinkSync fs db-path))
(defn wipe! []
  (println "wip!  called")
  (.exec db "DELETE FROM words; DELETE FROM articles;" #(println %)))


;; NOTE: each word has a `slug` which is a lowercased, cleaned
;; version of the word. This way, if an article has a capitalized version
;; of a word etc, you can still update multiple version of the word.`
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
    word_ids TEXT
  );

")

(defn articles-get
  [callback]
  (let [sql "SELECT * FROM articles"]
    (.all db sql (fn [err rows]
                   (callback rows)))))

(defn- words-get-for-article
  "Looks at a delimited string and queries for all the words in it.
  TODO: maybe just combine this with article-get.
  "
  [article cb]
  (let [word-ids   (article :word_ids)
        words-orig (str/split word-ids "$")]
    (letfn [(recurse [words out]
              (if (= (count out) (count words-orig))
                (cb (clj->js (assoc article :word-data out))) ;; maybe not efficient in the future to use clj->js, could do raw js interop in this fn.
                (let [[x & xs] words]
                  (.get db "SELECT * FROM words WHERE word_id = ?" (array x)
                        (fn [err row]
                          (recurse xs (conj out (js->clj row))))))))]
      (recurse words-orig []))))


(defn article-get
  "Fetches an article, and computes the `:word-data` for it."
  [id cb]
  (let [query  "SELECT * FROM articles WHERE article_id = ?"
        params (array id)]
    (.get db query params (fn [err row]
                            (words-get-for-article  (js->clj row :keywordize-keys true ) cb)))))

(defn- insert-article
  "Takes a word string and creates a new article entry for it.
  NOTE: This happens after `insert-words`!
  Welcome to the callback swamp!
  "
  [data cb]
  (let [{:keys [article title source]} data
        words                          (util/split-article article)
        word-ids                       []]

    (letfn [;; The function for actually inserting the article. We can't do
            ;; this until we've gotten all the word_ids for the article to
            ;; make to compose word_ids
            (insert-new-article [word-ids-vec]
              (let [sql-new-article (str "INSERT INTO articles(original, word_ids, name, source) VALUES (?, ?, ?, ?)")
                    delimited-ids   (str/join "$" word-ids-vec)
                    vals            (apply array [article delimited-ids title source])]
                ;; once we have inserted the article, in our callback, get the article as well.
                (.run db sql-new-article vals (fn [err]
                                                (this-as this
                                                  (article-get (.-lastID ^js this) cb))))))

            ;; recursively get the ids for all the words in the article.
            (get-word-ids-recursive [words word-ids cb]
              (if (empty? words)
                (cb word-ids)
                (let [[frst & rst] words
                      slug-word    (u/slug-word frst)
                      query        "SELECT word_id FROM words WHERE slug = ? AND name = ?"
                      vals         (array slug-word frst)
                      ]
                  (println query)
                  (println vals)
                  (println slug-word frst)

                  (.get db query vals
                        (fn [err res]
                          (prn "res is existingadlkj fword: " err res)
                          (get-word-ids-recursive rst (conj word-ids (.-word_id ^js res)) cb))))))]
      ;; Launch it off 🎯!
      (get-word-ids-recursive words word-ids insert-new-article))))

(defn- insert-words
  "Takes a string representing a new article, and breaks it into chunks.
  Then insert ALL words into the `words` table, if they don't already exist."
  [word-str cb]
  (let [words        (util/split-article word-str)
        placeholders (str/join ", " (map (fn [w] "(?, ?)") words)) ;; this is annoying
        vals         (->> words (map #(vector %1 (u/slug-word %1))) flatten (apply array))
        queryWords   (str "INSERT OR IGNORE INTO words(name, slug) VALUES " placeholders)]
    (.run db queryWords vals cb)))

(defn article-create
  [data cb]
  (insert-words (data :article)
                (fn [err]
                  (prn "error is " err)
                  ;; TODO error handling.
                  (insert-article data cb))))

(defn word-get
  [word_id cb]
  (let [query  "SELECT * FROM words WHERE word_id = ?"
        params (array word_id)]
    (.get db query params (fn [err row]
                            (cb row)))))

(defn word-update
  [data cb]
  (let [{:keys [word_id translation comfort slug] } data
        sql    "UPDATE words SET comfort = ?, translation = ? WHERE slug = ?"
        params (array comfort translation slug)]
    (.run db sql params (fn [err] (word-get word_id cb)))))

(defn init
  []
  (.exec db db-seed
        (fn [err]
          (when err
            (throw (js/Error. (str "Failed db" err)))))))


;; FIXME: when do I run "db.close()"?
