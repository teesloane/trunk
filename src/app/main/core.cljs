(ns app.main.core
  (:require
   [app.main.db :as db]
   [app.main.ipc :as ipc]
   [app.main.windows :as windows]
   ["electron" :refer [BrowserWindow BrowserView app]]))

(enable-console-print!)

(defn main
  []
  (.on app "window-all-closed"
       (fn []
         (when-not (= js/process.platform "darwin")
           (.quit app))))

  (db/init)
  (ipc/init)

  (.on app "ready" windows/init-browser))
