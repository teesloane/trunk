(ns app.shared.ipc-events)


;; used to ipc knows what to listen and dispatch on and use in re-frame
(def shared-events
  {
   :articles-fetch    ::articles-fetch ;; TODO - change fetch/get to one thing.
   :articles-received ::articles-received
   :article-create    ::article-create
   :article-created   ::article-created
   :article-fetch     ::article-fetch
   :article-received  ::article-received

   :wipe-db! ::wipe-db!
   })
