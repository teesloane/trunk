(ns app.shared.ipc-events)


;; used to ipc knows what to listen and dispatch on and use in re-frame
(def shared-events
  {
   :articles-fetch    ::articles-fetch
   :articles-received ::articles-received
   :article-create    ::article-create
   :article-created   ::article-created

   :wipe-db! ::wipe-db!
   })
