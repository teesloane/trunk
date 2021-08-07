(ns main.ipc
  (:require ["electron" :refer [ipcMain]]
            [main.db :as db]))

(def ipcHandlers
  {"<-article-create" (fn [event data]
                        (println "toMain called" data)
                        (db/insert-words data)
                        (js/event.reply "->article-created" "pong"))})

(defn init
  []
  (doseq [[key handler] ipcHandlers]
    (.on ipcMain key
         (fn [event args] (handler event (js->clj args :keywordize-keys true))))))
