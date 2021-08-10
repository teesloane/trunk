(ns app.shared.util
  (:require [clojure.string :as str]))


(defn print-deep-js
  [o]
  (js/console.log (js/JSON.stringify o nil 4)))


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
        res (filter (fn [s] (and (not= s " ")
                                (not= s ""))) res)]
    res))
