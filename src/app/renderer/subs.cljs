(ns app.renderer.subs
  (:require
   [re-frame.core :as rf]))


(rf/reg-sub
 ::current-view
 (fn [db]
   (:current-view db)))
