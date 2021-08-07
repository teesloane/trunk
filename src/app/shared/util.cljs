(ns app.shared.util
  (:require [clojure.string :as str]))


(defn print-deep-js
  [o]
  (js/console.log (js/JSON.stringify o nil 4)))


(defn seq->sql-placeholder
  "TODO, move to utils."
  [seq]
  (->> seq
       (map (fn [_] "(?)"))
       (apply array)
       (str/join ",")))
