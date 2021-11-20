(ns app.main.handlers
  (:require
   [app.main.db :as db]
   [app.main.windows :as windows]
   [app.shared.ipc-events :refer [s-ev]]
   ["fs" :as fs]))

(defn reply!
  "Sends data back to renderer from IPC back end.
  Data going over ipc MUST be in JS, so it is converted here.
  ;; TODO: note that the use of `name` here causes errors if the key doesn't exist.
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
   (js/electron-event.reply (name (s-ev :ipc-error)) (js-obj "msg" err-msg "err" (str err)))))

;; --- handlers

;; -- Articles

(defn article-create
  [event data]
  (try
    (let [_                (db/words-insert data)
          word-ids-str     (db/words-get-ids-for-article data)
          inserted-article (db/article-insert (merge data {:word_ids word-ids-str}))]
      (reply! event (s-ev :article-created) inserted-article))
    (catch js/Error e
      (reply-err! event "Failed to create article" e))))

(defn article-delete
  [event id]
  (let [_ (db/article-delete id)]
    (reply! event (s-ev :article-deleted) id)))

(defn articles-get
  [event data]
  (try (let [res (db/articles-get data)]
         (reply! event (s-ev :articles-got) res))
       (catch js/Error e
         (reply-err! event "Failed to get articles" e))))

(defn article-get
  [event data]
  (try
    (db/article-update-last-opened data)
    (->> data
         db/article-get-by-id
         db/article-attach-words
         db/article-attach-phrases
         (reply! event (s-ev :article-received)))
    (catch js/Error e
      (reply-err! event "Failed to get article."  e))))

;; -- Langs
;;
(defn languages-get
  [event _]
  (try
    (let [res (db/langs-all)]
      (reply! event (s-ev :languages-got) res))
    (catch js/Error e reply-err! event "Failed to fetch languages" e)))

(defn language-create
  [event data]
  (try
    (let [_     (db/lang-create data)
          langs (db/langs-all)]
      (reply! event (s-ev :language-created) langs))
    (catch js/Error e reply-err! event "Failed to create a language" e)))

(defn language-delete
  [event data]
  (try
    (let [_     (db/lang-delete data)
          langs (db/langs-all)]
      (reply! event (s-ev :language-deleted) langs))
    (catch js/Error e reply-err! event "Failed to create a language" e)))

(defn language-update [event data]
  (try
    (let [updated-lang (db/lang-update data)]
      (reply! event (s-ev :language-updated) updated-lang))
    (catch js/Error e reply-err! event "Failed to update language" e)))

;; -- Words
;;
(defn words-get [event data]
  (try
    (let [res (db/words-get data)]
      (reply! event (s-ev :words-got) res))
    (catch js/Error e
      reply-err! event "Failed to get words" e)))

(defn word-update
  [event data]
  (try
    (let [_   (db/word-update data)
          res (db/word-get (data :id))]
      (reply! event (s-ev :word-updated) res))
    (catch js/Error e
      (reply-err! event "Failed to update word" e))))

(defn words-mark-all-known
  [event data]
  (try
    (let [_ (db/words-and-phrases-mark-all-known data)]
      (reply! event (s-ev :words-marked-as-known) nil))
    (catch js/Error e
      (reply-err! event "Failed to mark all words known" e))))

(defn phrase-update
  "TODO: update -> upsert"
  [event data]
  (try
    (let [res             (db/phrase-upsert data)
          is-insert       (-> data :id nil?) ;no id yet == insert.
          lastInsertRowid (or (data :id) (res :lastInsertRowid))
          updated-phrase  (db/phrase-get lastInsertRowid )]
      (if is-insert
        (reply! event (s-ev :phrase-inserted) updated-phrase)
        (reply! event (s-ev :phrase-updated) updated-phrase)))
    (catch js/Error e
      (reply-err! event "Failed to insert phrase" e))))

;; -- settings
;;
(defn settings-get
  [event _]
  (try
    (let [settings (db/settings-get)]
      (reply! event (s-ev :settings-got) settings))
    (catch js/Error e
      (reply-err! event "Failed to get settings" e))))

(defn settings-update
  [event data]
  (try
    (let [_            (db/settings-update data)
          new-settings (db/settings-get)]
      (reply! event (s-ev :settings-updated) new-settings))
    (catch js/Error e
      (reply-err! event "Failed to update settings" e))))

(defn settings-backup-db
  [event _]
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

(defn settings-restore-db
  [event _]
  (-> (windows/restore-db-window?)
      (.then (fn [res]
               (let [selected-path (-> res (goog.object/get "filePaths") (aget 0))]
                 (.copyFile fs selected-path db/db-path
                            (fn [err]
                              (if err
                                (reply-err! event "Failed to restore database.")
                                (reply! event "Restored Trunk database.")))))))
      (.catch #(reply-err! event "Failed to open restore window." %))))

;; -- translation window
;;
(defn translation-win-open
  [event data]
  (windows/t-win-init data)
  (reply! event (s-ev :t-win-opened) nil))

(defn translation-win-update-word [event data]
     (windows/t-win-update-word data)
     ;; there is not re-frame handler for t-win-updated-word. not needed yet.
     (reply! event (s-ev :t-win-updated-word) nil))

(defn translate-win-close
  [event _]
  (windows/t-win-close)
  (reply! event (s-ev :t-win-closed) nil))
