(ns app.main.ipc
  (:require ["electron" :refer [ipcMain]]
            [app.main.db :as db]
            [app.shared.ipc-events :refer [shared-events]]
            ))

(defn reply!
  "Sends data back to renderer from IPC back end."
  [electron-event event-name data]
  (js/electron-event.reply (name event-name) data))

(def ipcHandlers
  {
   (shared-events :article-create)
   (fn [event data]
     (db/article-create data
                        (fn [data]
                          (reply! event (shared-events :article-created) data))))

   (shared-events :articles-fetch)
   (fn [event data]
     (db/articles-get (fn [data]
                        (reply! event (shared-events :articles-received) data))))

   (shared-events :article-fetch)
   (fn [event data]
     (db/article-get (data :article_id)
                     (fn [data]
                       (reply! event (shared-events :article-received) data))))


   (shared-events :word-update)
   (fn [event data]
     (db/word-update data (fn [data]
                            (reply! event (shared-events :word-updated) data))))

   (shared-events :wipe-db!)
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
