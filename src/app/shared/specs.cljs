(ns app.shared.specs
  "This file has several maps that describe the shape of common data throughout Trunk.
  These are not clojure/spec shapes (yet)."
  (:require [app.shared.util :as u]
            ["path" :as path]))

(def trunk-version
  (let [package-path (.join path (.cwd js/process) "package.json")
        as-js        (js/require package-path)]
    (-> as-js .-version)))

;; the word comfort integers as they are reflected in the db.
(def word-comfort
  {:unknown 0
   :hard    1
   :medium  2
   :easy    3
   :known   4})

(def word
  {:word_id     nil
   :name        nil
   :slug        nil
   :comfort     0
   :translation nil})

(def langs
  {"french"  "fr"
   "english" "en"
   "spanish" "es"
   "german"  "de"
   "italian" "it"})

(def settings-default
  {:native-lang (get langs "english")
   :target-lang (get langs "french")
   :trunk-version trunk-version})

(defn m->word
  [m]
  (select-keys m (vec (keys word))))
