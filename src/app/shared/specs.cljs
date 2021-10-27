(ns app.shared.specs
  "This file has several maps that describe the shape of common data throughout Trunk.
  These are not clojure/spec shapes (yet)."
  (:require [app.shared.util :as u]
            [clojure.string :as str]))


;; the word comfort integers as they are reflected in the db.
(def word-comfort
  {:unknown 0
   :hard    1
   :medium  2
   :easy    3
   :known   4})

(def word
  {:id     nil
   :name        nil
   :slug        nil ; lowercased version of the word
   :comfort     0
   :count       0
   :translation nil})

(def phrase
  {:id       nil ; auto set by sqlite
   :word_ids        ""  ; $ delimited string of ints.
   :slug            ""
   :name            ""
   :translation     nil
   :comfort         0
   :first_word_slug ""
   :last_word_slug  ""
   :language        ""
   })

(defn make-phrase
  [list-words]
  (let [words (->> list-words (map :name))]
    (-> phrase
        (assoc :word_ids (str/join "$" (map :id list-words))
               :name  (str/join " " words)
               :slug     (str/join " " (map u/slug-word words))
               :first_word_slug (-> list-words first :slug)
               :last_word_slug (-> list-words last :slug)
               :language (-> list-words first :language)))))

(def langs
  {"french"  "fr"
   "english" "en"
   "spanish" "es"
   "polish"  "pl"
   "german"  "de"
   "swedish" "sv"
   "dutch"   "nl"
   "italian" "it"})

(defn make-default-settings
  [trunk-version]
  {:native-lang (get langs "english")
   :target-lang (get langs "french")
   :trunk-version trunk-version})

(defn m->word
  [m]
  (select-keys m (vec (keys word))))
