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
 ::current-article
 (fn [db]
   (db :current-article)))

(rf/reg-sub
 ::current-word
 (fn [db]
   (db :current-word)))


;; -- loading subs --
;;
(rf/reg-sub ::loading? (fn [db]
                         (prn "loading computed!")
                         (-> db :loading?)))
