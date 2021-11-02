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
   ["electron" :refer [ipcMain]]
   ["fs" :as fs]))

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
   (js/electron-event.reply (name (s-ev :ipc-error)) (js-obj "msg" err-msg "err" (str err)) )))

(def ipcHandlers
  {(s-ev :article-create)
   (fn [event data]
     (try
       (let [_                (db/words-insert data)
             word-ids-str     (db/words-get-ids-for-article data)
             inserted-article (db/article-insert (merge data {:word_ids word-ids-str}))]
         (reply! event (s-ev :article-created) inserted-article))
       (catch js/Error e
         (reply-err! event "Failed to create article" e))))

   (s-ev :article-delete)
   (fn [event id]
     (let [_ (db/article-delete id)]
       (reply! event (s-ev :article-deleted) id)))

   (s-ev :articles-get)
   (fn [event data]
     (try (let [res (db/articles-get data)]
            (reply! event (s-ev :articles-got) res))
          (catch js/Error e
            (reply-err! event "Failed to get articles" e))))

   (s-ev :article-get)
   (fn [event data]
     (try
       (db/article-update-last-opened data)
       (->> data
            db/article-get-by-id
            db/article-attach-words
            db/article-attach-phrases
            (reply! event (s-ev :article-received)))
       (catch js/Error e
         (reply-err! event "Failed to get article."  e))))

   ;; TODO dedupe with article-get
   (s-ev :article-change-page)
   (fn [event data]
     (try
       (db/article-update-last-opened data)
       (->> data
            db/article-get-by-id
            db/article-attach-words
            db/article-attach-phrases
            (reply! event (s-ev :article-received)))
       (catch js/Error e
         (reply-err! event "Failed to get article."  e)))
     )

   ;; -- WORDS HANDLERS ---------------------------

   (s-ev :words-get)
   (fn [event data]
     (try
       (let [res (db/words-get data)]
         (reply! event (s-ev :words-got) res))
       (catch js/Error e
         reply-err! event "Failed to get words" e)))

   (s-ev :word-update)
   (fn [event data]
     (try
       (let [_   (db/word-update data)
             res (db/word-get (data :id))]
         (reply! event (s-ev :word-updated) res))
       (catch js/Error e
         (reply-err! event "Failed to update word" e))))

   (s-ev :words-mark-all-known)
   (fn [event data]
     (try
       (let [_ (db/words-and-phrases-mark-all-known data)]
         (reply! event (s-ev :words-marked-as-known) nil))
       (catch js/Error e
         (reply-err! event "Failed to mark all words known" e))))

   ;; -- Phrase ----------------------------------------------------------------
   ;;
   ;;
   (s-ev :phrase-update)
   (fn [event data]
     (try
       (let [res            (db/phrase-upsert data)
             is-insert       (-> data :id nil?) ;no id yet == insert.
             lastInsertRowid (or (data :id) (res :lastInsertRowid))
             updated-phrase (db/phrase-get lastInsertRowid )]
         (if is-insert
           (reply! event (s-ev :phrase-inserted) updated-phrase)
           (reply! event (s-ev :phrase-updated) updated-phrase)))
       (catch js/Error e
         (reply-err! event "Failed to insert phrase" e))))

   ;; -- Settings --------------------------------------------------------------

   (s-ev :settings-get)
   (fn [event _]
     (try
       (let [settings (db/settings-get)]
         (reply! event (s-ev :settings-got) settings))
       (catch js/Error e
         (reply-err! event "Failed to get settings" e))))

   (s-ev :settings-update)
   (fn [event data]
     (try
       (let [_            (db/settings-update data)
             new-settings (db/settings-get)]
         (reply! event (s-ev :settings-updated) new-settings))
       (catch js/Error e
         (reply-err! event "Failed to update settings" e))))

   (s-ev :settings-backup-db)
   (fn [event _]
     (let [db-backup-name (str "trunk-backup-" (js/Date.now) ".db")]
       (-> (windows/bkup-db-window? db-backup-name) ; <1> try and open the window.
           (.then (fn [res]
                    (when-let [new-bkup-path (goog.object/get res "filePath")]
                      (.copyFile fs db/db-path new-bkup-path
                                 (fn [err]
                                   (if err
                                     (reply-err! event "Failed to backup database." err)
                                     (reply! event "Backed up database.")))))))
           (.catch #(reply-err! event "Failed to save file path." %)))))


   (s-ev :settings-restore-db)
   (fn [event _]
     (-> (windows/restore-db-window?)
         (.then (fn [res]
                  (let [selected-path (-> res (goog.object/get "filePaths") (aget 0))]
                    (.copyFile fs selected-path db/db-path
                               (fn [err]
                                 (if err
                                   (reply-err! event "Failed to restore database.")
                                   (reply! event "Restored Trunk database.")))))))
         (.catch #(reply-err! event "Failed to open restore window." %))))

   (s-ev :wipe-db!)
   (fn [_ _] (db/wipe!))

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
   (fn [event _]
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
