(ns app.main.ipc
  (:require ["electron" :refer [ipcMain]]
            [app.main.db :as db]
            [app.shared.ipc-events :refer [s-ev]]
            ))

(defn reply!
  "Sends data back to renderer from IPC back end.
  Data going over ipc MUST be in JS, so it is converted here.
  "
  [electron-event event-name data]
  (js/electron-event.reply (name event-name) (clj->js data)))


;; TODO, could loop through a list to create this, or make a partial "handle" func?
(def ipcHandlers
  {
   (s-ev :article-create)
   (fn [event data]
     (db/article-create data (fn [data] (reply! event (s-ev :article-created) data))))

   (s-ev :articles-fetch)
   (fn [event data]
     (db/articles-get (fn [data]
                        (reply! event (s-ev :articles-received) data))))

   (s-ev :article-fetch)
   (fn [event data]
     (db/article-get (data :article_id)
                     (fn [data]
                       (reply! event (s-ev :article-received) data))))

   (s-ev :article-update)
   (fn [event data]
     (db/article-update data (fn [data]
                               (reply! event (s-ev :article-updated) data))))

   (s-ev :word-update)
   (fn [event data]
     (db/word-update data (fn [data]
                            (reply! event (s-ev :word-updated) data))))

   (s-ev :wipe-db!)
   (fn [event data] (db/wipe!))

   })

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
