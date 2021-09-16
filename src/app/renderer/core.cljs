(ns app.renderer.core
  (:require
   [reagent.dom :as rdom]
   [re-frame.core :as rf]
   [app.renderer.events :as events]
   [app.renderer.re-pressed :as rp]
   [app.renderer.views.index :refer [main-panel]]))


(defn ^:dev/after-load start! []
  (rf/dispatch-sync [::events/initialize-db])
  (rf/dispatch-sync [::rp/add-keyboard-event-listener "keydown"])
  (rf/clear-subscription-cache!)
  (events/ipc-init)
  (let [root-el (.getElementById js/document "app-container")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [main-panel] root-el)))
