(ns app.shared.ipc-events)

;; used to ipc knows what to listen and dispatch on and use in re-frame
(def s-ev
  {
   :articles-fetch              ::articles-fetch ;; TODO - change fetch/get to one thing.
   :articles-received           ::articles-received
   :article-create              ::article-create
   :article-created             ::article-created
   :article-fetch               ::article-fetch
   :article-update              ::article-update
   :article-update-last-opened  ::article-update-last-opened
   :article-updated-last-opened ::article-updated-last-opened
   :article-updated             ::article-updated
   :article-received            ::article-received
   :word-update                 ::word-update
   :word-updated                ::word-updated
   :wipe-db!                    ::wipe-db!
   })

