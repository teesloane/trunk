(ns app.renderer.subs
  (:require
   [re-frame.core :as rf]))

(def <| (comp deref rf/subscribe))

(rf/reg-sub
 ::current-view
 (fn [db]
   (:current-view db)))

(rf/reg-sub
 ::articles
 (fn [db]
   (:articles db)))

(rf/reg-sub
 ::loading?
 (fn [db]
   (:loading? db)))

;; loading subs
(rf/reg-sub ::articles-loading? (fn [db] (-> db :loading? :articles)))
