(ns app.shared.specs)


;; these aren't real specs yet; just the shapes of data until spec is (or is not?) added.
;;

(def word
  {:word_id nil
   :name nil
   :slug nil
   :comfort 0
   :translation nil
   })

(defn m->word
  [m]
  (select-keys m (vec (keys word))))
