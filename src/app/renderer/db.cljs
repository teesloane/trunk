(ns app.renderer.db)

(def default-db
  {:current-view "article-create"
   :articles nil
   :current-article nil
   :loading? {:articles false
              :article false}
   })
