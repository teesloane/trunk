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
   "<-article-create"
   (fn [event data]
     (db/insert-words data) ;; < try catch here
     ;; TODO: this should be done in the above's callback
     (js/event.reply "->article-created" "return value"))

   (shared-events :fetch-articles)
   (fn [event data]
     (db/articles-get (fn [data]
                        (reply! event (shared-events :received-articles) data))))})

(defn init
  []
  (doseq [[key handler] ipcHandlers]
    (.on ipcMain (name key)
         (fn [event args] (handler event (js->clj args :keywordize-keys true))))))
