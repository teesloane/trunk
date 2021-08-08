(ns app.renderer.ipc)

(defn send!
  [channel data]
  (let [ipcRenderer (.. (js/require "electron") -ipcRenderer)
        _           (.send ipcRenderer channel (clj->js data))]))


;; -- Outgoing IPC calls

(defn article-create
  [data]
  (send! "<-article-create" data))

(defn articles-get
  []
  (prn "Requesting articles from ipc renderer")
  (send! "<-articles-get" nil))


;; -- Incoming IPC handlers

(defonce ipcHandlers
  {"->article-created" (fn [event data]
                         (println "->article-created" event data))
   "->articles-got"    (fn [event data]
                         (println "->articles-got" data))
   })

;; setup our applications to receive vals.

(defn init
  "Load ipcRenderer and loop through defined handlers
  and attach handlers with handle."
  []
  (println "Initing renderer ipc handlers.")
  (let [ipcRenderer    (.. (js/require "electron") -ipcRenderer)
        existingEvents (.eventNames ipcRenderer)]
    (doseq [[key handler] ipcHandlers]
      (when-not (some #{key} existingEvents)
        (.on ipcRenderer key
             (fn [event args]
               (println "[IPC]: " key)
               (handler event (js->clj args :keywordize-keys true))))))))
