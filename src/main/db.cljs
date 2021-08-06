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

  CREATE TABLE words (
    word_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    comfort INTEGER,
    translation TEXT
  );

  CREATE TABLE articles (
    article_id INTEGER PRIMARY KEY,
    name TEXT,
    source TEXT,
    original TEXT,
    word_ids TEXT
  );

")

(defn insert-words
  [word-str]
  (let [words (str/split word-str " " )]
    (println words)))

(defn init
  []
  (.exec db db-seed
        (fn [err]
          (when err
            (throw (js/Error. (str "Failed db" err)))))))


;; -- Create articles table

;; CREATE TABLE articles (
;;   article_id INTEGER PRIMARY KEY,
;;   name TEXT,
;;   source TEXT,
;;   original TEXT,
;;   word_ids TEXT
;; )

;; var sqlite3 = require('sqlite3').verbose();
;; var db = new sqlite3.Database(':memory:');

;; db.serialize(function() {
;;   db.run("CREATE TABLE lorem (info TEXT)");

;;   var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
;;   for (var i = 0; i < 10; i++) {
;;       stmt.run("Ipsum " + i);
;;   }
;;   stmt.finalize();

;;   db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
;;       console.log(row.id + ": " + row.info);
;;   });
;; });

;; db.close();
