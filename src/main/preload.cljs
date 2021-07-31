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

(defn foo
  []
  "foooo bar")

(defn main
  []
  ;; (println "🙇‍️ Establishing renderer's api from preload...")
  (set! js/window -foo "bar")
  (js/console.log "window is " js/window)
  (set! (.-foo js/window) "barrrr")
;; (set! (.-innerHTML el) "Hi!")

  (.exposeInMainWorld contextBridge "api"
                      (clj->js {:send    send
                                :foo     foo
                                :receive receive })))
