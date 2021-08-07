(ns main.db
  (:require ["sqlite3" :as sqlite]
            ["fs" :as fs]
            [clojure.string :as str]))

(def db-path "./trunk.db")
(def db (sqlite/Database. db-path))

(defn db-del! []
  (.unlinkSync fs db-path))

;; (db-del!)

(def db-seed "

  CREATE TABLE IF NOT EXISTS words (
    word_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    comfort INTEGER,
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

(defn seq->placeholder
  [seq]
  (->> seq
       (map (fn [_] "(?)"))
       (apply array)
       (str/join ",")))


(defn insert-words
  [word-str]
  (let [words       (str/split word-str " " )
        placeholder (seq->placeholder words)
        vals        (apply array words)
        queryWords  (str "INSERT INTO words(name) VALUES " placeholder)
        _           (println "query [words]: " queryWords "[placeholders]: " vals)
        ]
    (.run db queryWords vals (fn [err]
                               (println "err is " err) ;; do what with err?
                          ))))

(defn init
  []
  (.exec db db-seed
        (fn [err]
          (when err
            (throw (js/Error. (str "Failed db" err)))))))


;; FIXME: when do I run "db.close()"?
