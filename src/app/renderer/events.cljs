(ns app.renderer.events
  (:require
   [re-frame.core :as rf]
   [app.renderer.db :as db]))


(def |> re-frame.core/dispatch)

(defn send!
  [channel data]
  (let [ipcRenderer (.. (js/require "electron") -ipcRenderer)
        _           (.send ipcRenderer channel (clj->js data))]))

(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))


(rf/reg-event-db
 ::navigate
 (fn [db [_ new-route]]
   (assoc db :current-view new-route)))

;; TODO: this will eventually move to reg-event-fx + a reg-fx?
(rf/reg-event-db
 ::fetch-articles
 (fn [db [_ _]]
   (send! "<-articles-get" nil)
   db))

;; TODO: should be fx?
(rf/reg-event-db
 ::articles-got
 (fn [db [_ data]]
   (prn "in articles got handler " data)
   (assoc db :articles data)
   ))
