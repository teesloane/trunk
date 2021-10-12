(ns app.shared.ipc-events)

;; used so ipc knows what to listen and dispatch on and use in re-frame
(def s-ev
  {
   :articles-get          ::articles-get
   :articles-got          ::articles-got
   :article-create        ::article-create
   :article-created       ::article-created
   :article-get           ::article-get
   :article-update        ::article-update
   :article-updated       ::article-updated
   :article-delete        ::article-delete
   :article-deleted       ::article-deleted
   :article-received      ::article-received
   :settings-get          ::settings-get
   :settings-got          ::settings-got
   :settings-update       ::settings-update
   :settings-updated      ::settings-updated
   :settings-backup-db    ::settings-backup-db
   :settings-restore-db   ::settings-restore-db
   :word-update           ::word-update
   :word-updated          ::word-updated
   :words-get             ::words-get
   :words-got             ::words-got
   :words-mark-all-known  ::words-mark-all-known
   :words-marked-as-known ::words-marked-as-known
   :wipe-db!              ::wipe-db!

   ;; twin == translation window
   :t-win-open         ::t-win-open
   :t-win-opened       ::t-win-opened
   :t-win-close        ::t-win-close
   :t-win-closed       ::t-win-closed
   :t-win-update-word  ::t-win-update-word
   :t-win-updated-word ::t-win-updated-word

   ;; misc events / generic
   :ipc-success        ::ipc-success
   :ipc-error          ::ipc-error

   })
