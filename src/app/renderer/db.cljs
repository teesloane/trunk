(ns app.renderer.db)

(def default-db
  {:current-view "article-list"
   :articles nil
   :current-article nil
   :loading? {:articles false}
   })
