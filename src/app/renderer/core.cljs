(ns app.renderer.core
  (:require
   [app.renderer.events :as events]
   [app.renderer.re-pressed :as rp]
   [app.renderer.views.index :refer [main-panel]]
   [re-frame.core :as rf]
   [reagent.dom :as rdom]))

(defn ^:dev/after-load start! []
  (events/ipc-init)
  (rf/dispatch-sync [:boot])
  (rf/dispatch-sync [::rp/add-keyboard-event-listener "keydown"])
  (rf/dispatch-sync [::rp/add-keyboard-event-listener "keyup"])

  (rf/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app-container")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [main-panel] root-el)))
