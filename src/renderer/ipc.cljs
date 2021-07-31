(ns renderer.ipc)

(defn send!
  [channel data]
  (let [ipcRenderer (.. (js/require "electron") -ipcRenderer)
        _         (.send ipcRenderer channel (clj->js data))]))


(defonce ipcHandlers
  {"->article-created" (fn [event data]
                         (println "->article-created" event data)
                         )})

;; setup our applications to receive vals.

(defn init
  "Load ipcRenderer and loop through defined handlers,
  then "
  []
  ;; TODO: this seems to bind multiple times with hot reload.
  (println "Initing renderer ipc handlers.")
  (let [ipcRenderer (.. (js/require "electron") -ipcRenderer)]
    (doseq [[key handler] ipcHandlers]
      (.on ipcRenderer key
           (fn [event args]
             (println "[IPC]: " key)
             (handler event (js->clj args :keywordize-keys true)))))))
