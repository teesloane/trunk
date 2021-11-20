(ns app.main.ipc
  "This namespace is sort of like an http router;
  it sets up a series of handlers and attaches (mostly) db calls to them
  - Front-end: `click delete` on article
  - sends ipc event, which we setup listeners for in this ns.
  - get the handler for that event, based on the shared event-name (see s-ev)
  - run the hander to do some work, and reply with success or error."
  (:require
   [app.main.db :as db]
   [app.main.handlers :as handle]
   [app.shared.ipc-events :refer [s-ev]]
   ["electron" :refer [ipcMain]]))

(def ipcHandlers
  {;; -- articles handlers -----------------------------------------------------
   (s-ev :article-create)       handle/article-create
   (s-ev :article-delete)       handle/article-delete
   (s-ev :articles-get)         handle/articles-get
   (s-ev :article-get)          handle/article-get
   (s-ev :article-change-page)  handle/article-get
   ;; -- language handlers -----------------------------------------------------
   (s-ev :languages-get)        handle/languages-get
   (s-ev :language-create)      handle/language-create
   (s-ev :language-delete)      handle/language-delete
   (s-ev :language-update)      handle/language-update
   ;; -- words handlers --------------------------------------------------------
   (s-ev :words-get)            handle/words-get
   (s-ev :word-update)          handle/word-update
   (s-ev :words-mark-all-known) handle/words-mark-all-known
   ;; -- phrase handlers -------------------------------------------------------
   (s-ev :phrase-update)        handle/phrase-update
   ;; -- Settings --------------------------------------------------------------
   (s-ev :settings-get)         handle/settings-get
   (s-ev :settings-update)      handle/settings-update
   (s-ev :settings-backup-db)   handle/settings-backup-db
   (s-ev :settings-restore-db)  handle/settings-restore-db
   (s-ev :wipe-db!)             (fn [_ _] (db/wipe!))
   ;; -- Translation window ----------------------------------------------------
   (s-ev :t-win-open)           handle/translation-win-open
   (s-ev :t-win-update-word)    handle/translation-win-update-word
   (s-ev :t-win-close)          handle/translate-win-close})

;; dev mode:
;; Hot-reloading with shadow-cljs seems to re-run event `on` handlers
;; can't seem to use ipcMain.eventNames() to check what exists
;; (like in ipcRenderer.eventNames) so I'm storing them in an atom to check if
;; they exist before running the on.
(def existing-events (atom []))
(defn init
  []
  (doseq [[key handler] ipcHandlers]
    ;; check if the event handler exists before adding it.
    (when-not (some #{key} @existing-events)
      (swap! existing-events conj key)
      (.on ipcMain (name key)
           (fn [event args] (handler event (js->clj args :keywordize-keys true)))))))
