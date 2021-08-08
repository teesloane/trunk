(ns app.main.ipc
  (:require ["electron" :refer [ipcMain]]
            [app.main.db :as db]))

(def ipcHandlers
  {"<-article-create" (fn [event data]
                        (db/insert-words data) ;; < try catch here
                        ;; TODO: this should be done in the above's callback
                        (js/event.reply "->article-created" "return value"))
   "<-articles-get"   (fn [event data]
                        (prn "main: received articles-get from renderer")

                        (db/articles-get (fn [data]
                                           (js/event.reply "->articles-got" data))))
   })

(defn init
  []
  (doseq [[key handler] ipcHandlers]
    (.on ipcMain key
         (fn [event args] (handler event (js->clj args :keywordize-keys true))))))
