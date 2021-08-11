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
     (db/article-get (data :article_id) (fn [data]
                                          (println "data out is! " data)
                        (reply! event (shared-events :article-received) data))))


   (shared-events :wipe-db!)
   (fn [event data] (db/wipe!))

   })

(defn init
  []
  (doseq [[key handler] ipcHandlers]
    (.on ipcMain (name key)
         (fn [event args] (handler event (js->clj args :keywordize-keys true))))))
