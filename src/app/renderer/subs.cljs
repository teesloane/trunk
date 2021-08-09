(ns app.renderer.subs
  (:require
   [re-frame.core :as rf]))

(def <| (comp deref rf/subscribe))

(rf/reg-sub
 ::current-view
 (fn [db]
   (:current-view db)))
