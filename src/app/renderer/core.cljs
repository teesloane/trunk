(ns app.renderer.core
  (:require
   [app.renderer.events :as events]
   [app.renderer.re-pressed :as rp]
   [app.shared.ipc-events :refer [s-ev]]
   [app.renderer.views.index :refer [main-panel]]
   [re-frame.core :as rf]
   [reagent.dom :as rdom]))

(defn ^:dev/after-load start! []
  (rf/dispatch-sync [::events/initialize-db])
  (rf/dispatch-sync [::rp/add-keyboard-event-listener "keydown"])
  (rf/dispatch-sync [(s-ev :settings-get)])
  (rf/clear-subscription-cache!)
  (events/ipc-init)
  (let [root-el (.getElementById js/document "app-container")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [main-panel] root-el)))
