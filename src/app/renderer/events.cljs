(ns app.renderer.events
  (:require
   [re-frame.core :as rf]
   [app.renderer.db :as db]
   [app.shared.ipc-events :refer [shared-events]]
   ))


(def |> re-frame.core/dispatch)

(defn send!
  "This is how we send data to the ipc back end.
  Channels must be strings, so we convert keywords here."
  [channel data]
  (let [ipcRenderer (.. (js/require "electron") -ipcRenderer)
        _           (.send ipcRenderer (name channel) (clj->js data))]))

(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))


(rf/reg-event-db
 ::navigate
 (fn [db [_ new-route]]
   (assoc db :current-view new-route)))

(rf/reg-event-fx
 (shared-events :fetch-articles)
 (fn [{:keys [db]} event]
   {:db         (assoc-in db [:loading? :articles] true)
    ::ipc-send! event}))

;; TODO: should be fx?
(rf/reg-event-db
 ::articles-got
 (fn [db [_ data]]
   (-> db
       (assoc :articles data)
       (assoc-in [:loading? :articles] false))))

(rf/reg-fx
 ::ipc-send!
 (fn [[event-key payload]]
   (println "sending IPC event: " event-key payload)
   (send! event-key nil)))


;; -- IPC Event registrations --------------------------------------------------

(defonce ipcHandlers
  {"->article-created"
   (fn [event data]
     (println "->article-created" event data))

   (shared-events :received-articles)
   (fn [event data] (|> [::articles-got data]))})

(defn ipc-init
  "Load ipcRenderer and loop through defined handlers
  and attach handlers with handle."
  []
  (println "Initing renderer ipc handlers.")
  (let [ipcRenderer    (.. (js/require "electron") -ipcRenderer)
        existingEvents (.eventNames ipcRenderer)]
    (doseq [[key handler] ipcHandlers]
      (when-not (some #{key} existingEvents)
        (.on ipcRenderer (name key) ;; convert str to be readable for ipcRenderer.
             (fn [event args]
               (println "[IPC]: " key)
               (handler event (js->clj args :keywordize-keys true))))))))
