(ns app.main.ipc
  (:require ["electron" :refer [ipcMain]]
            [app.main.db :as db]))

(def ipcHandlers
  {"<-article-create" (fn [event data]
                        (db/insert-words data) ;; < try catch here
                        (js/event.reply "->article-created" "return value"))})

(defn init
  []
  (doseq [[key handler] ipcHandlers]
    (.on ipcMain key
         (fn [event args] (handler event (js->clj args :keywordize-keys true))))))
