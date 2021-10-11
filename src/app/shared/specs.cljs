(ns app.shared.specs)


;; these aren't "real" specs (ie clojure/spec yet; just the shapes of data until
;; clojure/spec is (or is not?) added.

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
   :translation nil
   })

(def langs
  {"french"  "fr"
   "english" "en"
   "spanish" "es"
   "german"  "de"
   "italian" "it"
   })

(def settings-default
  {:native-lang (get langs "english")
   :target-lang (get langs "french")})

(defn m->word
  [m]
  (select-keys m (vec (keys word))))
