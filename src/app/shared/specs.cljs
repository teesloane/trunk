(ns app.shared.specs)


;; these aren't real specs yet; just the shapes of data until spec is (or is not?) added.
;;

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

(defn m->word
  [m]
  (select-keys m (vec (keys word))))
