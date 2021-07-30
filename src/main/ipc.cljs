(ns main.ipc
  (:require ["electron" :refer [ipcMain]]))

(def ipcHandlers
  {"toMain" (fn [event data]
              (println data)
              (js/event.reply "my-reply" "pong")
              ;; (.send (.-sender js/event) "my-reply" "pong")
   )})

(defn init
  []
  (doseq [[key handler] ipcHandlers]
    (.on ipcMain key
         (fn [event args] (handler event (js->clj args :keywordize-keys true))))))
