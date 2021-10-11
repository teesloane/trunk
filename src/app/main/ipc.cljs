(ns app.main.ipc
  "This namespace is sort of like an http router;
  it sets up a series of handlers and attaches (mostly) db calls to them
  - Front-end: `click delete` on article
  - sends ipc event, which we setup listeners for in this ns.
  - get the handler for that event, based on the shared event-name (see s-ev)
  - run the hander to do some work, and reply with success or error."
  (:require
   [app.main.db :as db]
   [app.main.windows :as windows]
   [app.shared.ipc-events :refer [s-ev]]
   ["fs" :as fs]
   ["path" :as path]
   ["electron" :refer [app ipcMain]]))

(defn reply!
  "Sends data back to renderer from IPC back end.
  Data going over ipc MUST be in JS, so it is converted here.
  "
  ([electron-event msg]
   (js/electron-event.reply (name (s-ev :ipc-success)) msg))
  ([electron-event event-name data]
   ;; TODO, if event-name isn't around, throw an error.
   (js/electron-event.reply (name event-name) (clj->js data))))

(defn reply-err!
  "Sends data back to renderer in which case there is an error."
  ([electron-event err-msg]
   (reply-err! electron-event err-msg nil))
  ([electron-event err-msg err]
   (js/electron-event.reply (name (s-ev :ipc-error)) {:msg err-msg :err err})))

;; TODO, could loop through a list to create this, or make a partial "handle" func?
(def ipcHandlers
  ;; creating a 2500~ word article: 580.027ms
  {(s-ev :article-create)
   (fn [event data]
     (let [_                (db/words-insert data)
           word-ids-str     (db/words-get-ids-for-article data)
           inserted-article (db/article-insert (merge data {:word_ids word-ids-str}))]
       (reply! event (s-ev :article-created) inserted-article)))

   (s-ev :article-delete)
   (fn [event id]
     (let [_ (db/article-delete id)]
       (reply! event (s-ev :article-deleted) id)))

   (s-ev :articles-get)
   (fn [event data]
     (let [res (db/articles-get data)]
       (reply! event (s-ev :articles-got) res)))

   (s-ev :article-get)
   (fn [event data]
     (db/article-update-last-opened data)
     (->> data
          db/article-get-by-id
          db/article-attach-words
          (reply! event (s-ev :article-received))))

   ;; -- WORDS HANDLERS ---------------------------

   (s-ev :words-get)
   (fn [event data]
     (let [res (db/words-get data)]
       (reply! event (s-ev :words-got) res)))

   (s-ev :word-update)
   (fn [event data]
     (let [_   (db/word-update data)
           res (db/word-get (data :word_id))]
       (reply! event (s-ev :word-updated) res)))

   (s-ev :words-mark-all-known)
   (fn [event data]
     (let [_ (db/words-mark-all-known data)]
       (reply! event (s-ev :words-marked-as-known) nil)))

   ;; -- Settings --------------------------------------------------------------

   (s-ev :settings-get)
   (fn [event data]
     (let [settings (db/settings-get)]
       (reply! event (s-ev :settings-got) settings)))

   (s-ev :settings-update)
   (fn [event data]
     (let [updated      (db/settings-update data)
           new-settings (db/settings-get)]
       (reply! event (s-ev :settings-updated) new-settings)))

   (s-ev :settings-backup-db)
   (fn [event _]
     (let [db-backup-name  (str "trunk-backup-" (js/Date.now) ".db")]
       (-> (windows/bkup-db-window? db-backup-name) ; <1> try and open the window.
           (.then (fn [res]
                    (when-let [new-bkup-path (goog.object/get res "filePath")]
                      (.copyFile fs db/db-path new-bkup-path
                                 (fn [err]
                                   (if err
                                     (reply-err! event "Failed to backup database." err)
                                     (reply! event "Backed up database.")))))))
           (.catch #(reply-err! event "Failed to save file path." %)))))

   (s-ev :wipe-db!)
   (fn [event data] (db/wipe!))

   ;; -- Translation window ----------------------------------------------------

   (s-ev :t-win-open)
   (fn [event data]
     (windows/t-win-init data)
     (reply! event (s-ev :t-win-opened) nil))

   (s-ev :t-win-update-word)
   (fn [event data]
     (windows/t-win-update-word data)
     ;; there is not re-frame handler for t-win-updated-word. not needed yet.
     (reply! event (s-ev :t-win-updated-word) nil))

   (s-ev :t-win-close)
   (fn [event data]
     (windows/t-win-close)
     (reply! event (s-ev :t-win-closed) nil))})

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
