(ns app.main.core
  (:require ["electron" :refer [app BrowserWindow]]
            ["path" :as path]
            [app.main.db :as db]
            [app.main.ipc :as ipc]))

(def main-window (atom nil))

(defn init-browser
  []
  (reset! main-window
          (BrowserWindow.
           (clj->js {:width  800
                     :height 600
                     :webPreferences
                     {:nodeIntegration  true
                      :contextIsolation false ;; come back and figure out preload.js someday.
                      }

                     })))
  (.loadURL ^js/electron.BrowserWindow @main-window (str "file://" js/__dirname "/public/index.html"))
  (.on ^js/electron.BrowserWindow @main-window "closed" #(reset! main-window nil))
  )


(defn main
  []
  (.on app "window-all-closed"
       (fn []
         (when-not (= js/process.platform "darwin")
           (.quit app))))

  (db/init)
  (ipc/init)

  (.on app "ready" init-browser))