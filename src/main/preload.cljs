(ns main.preload
  (:require ["electron" :refer [contextBridge ipcRenderer]]))

;; -- API fns to explose in the renderer

(def toMainChans   ["toMain" "other-channels"])
(def fromMainChans ["fromMain" "other-channels"])

(defn send
  [channel data]
  (js/console.log channel data)
  (if (some #{channel} toMainChans)
    (.send ipcRenderer channel data)))


(defn receive
  [channel func]
  (if (some #{channel} fromMainChans)
    (println "receive called!")
    (.on ipcRenderer channel (fn [event data] (func data)))))

(defn main
  []
  (println "🙇‍️ Establishing renderer's api from preload...")
  (.exposeInMainWorld contextBridge "api"
                      (clj->js {:send        send
                                :ipcRenderer ipcRenderer
                                :receive     receive })))
