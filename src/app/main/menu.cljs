(ns app.main.menu
  (:require
   ["electron" :refer [app Menu]]))

(def is-mac (= (.-platform js/process) "darwin"))

(def mac-menu
  [{:label   (.-name app)
    :submenu [{:role "hide"}
              {:role "hideOthers"}
              {:role "unhide"}
              {:type "separator"}
              {:role "quit"}]}] )

(def shared-menu
  [{:label "Edit"
    :submenu [{:role "undo"}
              {:role "redo"}
              {:type "separator"}
              {:role "cut"}
              {:role "copy"}
              {:role "paste"}
              {:role "selectAll"}]}
   {:label   "View"
    :submenu [{ :role "reload" },
              {:role "toggleDevTools"}
              { :type "separator" },
              { :role "togglefullscreen" }]}
   {:label   "Window"
    :submenu [{:role "minimize"}]}])

(def final-menu
    (concat (if is-mac mac-menu []) shared-menu))

(defn init
  []
  (let [menu (.buildFromTemplate Menu (clj->js final-menu))]
    (.setApplicationMenu Menu menu)))

