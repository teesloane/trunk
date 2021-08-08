(ns app.renderer.events
  (:require
   [re-frame.core :as rf]
   [app.renderer.db :as db]))


(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))


(rf/reg-event-db
 ::navigate
 (fn [db [_ new-route]]
   (assoc db :current-view new-route)))
