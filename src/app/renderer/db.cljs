(ns app.renderer.db)



(def default-db
  {:current-view     "words"
   :articles         nil
   :words            []
   :current-article  nil
   :current-word-idx 0
   :current-word     nil
   :loading?         false
   :toast            ""
   :t-win            {:open?    false
                      :loading? false}
   })



;; helpers --

(def views
  {:words          "words"
   :article        "article"
   :article-create "article-create"
   :article-list   "article-list"})

;; view checkers:

(defn view-words? [db]
  (= (-> db :current-view) (views :words)))

(defn view-article? [db]
  (= (-> db :current-view) (views :article)))

(defn view-article-list?  [db]
  (= (-> db :current-view) (views :article-list)))

(defn view-article-create? [db]
  (= (-> db :current-view) (views :article-create)))
