(ns app.main.ipc
  (:require
   [app.main.db :as db]
   [app.main.windows :as windows]
   [app.shared.ipc-events :refer [s-ev]]
   ["electron" :refer [ipcMain]]))

(defn reply!
  "Sends data back to renderer from IPC back end.
  Data going over ipc MUST be in JS, so it is converted here.
  "
  [electron-event event-name data]
  ;; TODO, if event-name isn't around, throw an error.
  (js/electron-event.reply (name event-name) (clj->js data)))

;; TODO, could loop through a list to create this, or make a partial "handle" func?
(def ipcHandlers
  ;; creating a 2500~ word article: 580.027ms
  {(s-ev :article-create)
   (fn [event data]
     (let [_                (db/words-insert (data :article))
           word-ids-str     (db/words-get-ids-for-article (data :article))
           inserted-article (db/article-insert (merge data {:word_ids word-ids-str}))]
       (reply! event (s-ev :article-created) inserted-article)))

   (s-ev :articles-get)
   (fn [event data]
     (let [res (db/articles-get)]
       (reply! event (s-ev :articles-received) res)))

   (s-ev :article-get)
   (fn [event data]
     (let [id            (data :article_id)]
       (db/article-update-last-opened id)
       (->> id
            db/article-get-by-id
            db/article-attach-words
            (reply! event (s-ev :article-received)))))

   ;; -- WORDS HANDLERS ---------------------------

   (s-ev :words-get)
   (fn [event data]
     (let [res (db/words-get)]
       (reply! event (s-ev :words-got) res)))

   (s-ev :word-update)
   (fn [event data]
     (let [_   (db/word-update data)
           res (db/word-get (data :word_id))]
       (reply! event (s-ev :word-updated) res)))

   (s-ev :wipe-db!)
   (fn [event data] (db/wipe!))

;; -- Translation window

   (s-ev :t-win-open)
   (fn [event data]
     (windows/t-win-init data)
     (reply! event (s-ev :t-win-opened) nil))

   (s-ev :t-win-update-word)
   (fn [event data]
     (windows/t-win-update-word data)
     (reply! event (s-ev :t-win-update-word) nil))

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
