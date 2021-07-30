(ns renderer.ipc)

;; create our front end api functions for interfacing with ipcRenderer (from preload.js)
(defn send!
  [channel data]
  (let [send-fn (.. js/window -api -send)]
    (send-fn channel (clj->js data))))


(defn receive!
  [channel func]
  (let [receive-fn (.. js/window -api -receive)]
    (receive-fn channel func)))


;; setup our applications to receive vals.

(defn init
  []
  (println "Initing renderer ipc handlers.")
  (receive! "my-reply" (fn [data]
                            (println "received stuff" data)
                            ))
  )
