(ns app.renderer.core
  (:require
   [reagent.dom :as rdom]
   [re-frame.core :as rf]
   [app.renderer.events :as events]
   [app.renderer.views :as views]
   ))


(defn ^:dev/after-load start! []
  (rf/dispatch-sync [::events/initialize-db])
  (rf/clear-subscription-cache!)
  (events/ipc-init)
  (let [root-el (.getElementById js/document "app-container")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [views/main-panel] root-el)))
