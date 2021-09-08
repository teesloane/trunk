(ns app.shared.util
  (:require [clojure.string :as str]))


(defn print-deep-js
  [o]
  (js/console.log (js/JSON.stringify o nil 4)))

(def log (.-log js/console))


(defn seq->sql-placeholder
  [seq]
  (->> seq
       (map (fn [_] "(?)"))
       (apply array)
       (str/join ",")))

(defn split-article
  "Splits a string by whitespace and punctuation"
  [string]
  (let [re  #"(\s+|[.,!?:;\"])"
        res (str/split string re)
        res (filter (fn [s]
                      (and (not= s " ")
                           (not= s ""))) res)]
    (vec res)))

(defn delimit-article
  "Turns a string of ids into a delimited$by$dollar$sign"
  [vec-str-ids]
  (str/join "$" vec-str-ids))

(defn is-punctuation?
  "NOTE: Eventually punctuation will vary by language...
  Example, french, usually words will not split on apostraphe
  J'ai !== J | ai.
  Eventually each language will need a user configure regex.
  "
  [s]
  (if (nil? s)
    false
    (re-matches #"[!,\/?\.:\"()]" s)))

(defn is-punctuation-or-newline?
  "Check's if a string is a punctuation item(s) or newline(s)."
  [s]
  (if (nil? s)
    false
    (not (nil? (re-matches  #"[,!.\"\'?\-\n]*" s)))))


;; -- db functionality selector things?

(defn curr-word-view-open?
  [{:keys [current-word current-view]}]
  (and current-word (= current-view "article")))

(defn slug-word
  "Makes a word slug-ready for the db."
  [s]
  (str/lower-case s))


(defn map->js-obj->sql
  "Convert a clojure map into a suitable object for sqlite queries."
  [m]
  (->> m
       (map (fn [[k v]] [(str "$" (name k)) v]))
       (into {})
       (clj->js)))


(defn trunc
  [s n]
  (subs s 0 (min (count s) n)))

(defn trunc-ellipse
  [s n]
  (str (trunc s n) "..."))

(defn date-unix->readable
  [ts]
  (-> ts js/Date. (.toLocaleDateString)))
