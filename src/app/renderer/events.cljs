(ns app.renderer.events
  (:require
   [re-frame.core :as rf]
   [app.renderer.db :as db]
   [app.shared.ipc-events :refer [shared-events]]
   [app.shared.util :as u]))

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

;; -- UI / UX Events (Loading, toast etc.) -------------------------------------

(rf/reg-event-db
 ::navigate
 (fn [db [_ new-route]]
   (assoc db :current-view new-route)))

(rf/reg-event-fx
 ::set-toast
 (fn [cofx [event-name data]]
   {:db (assoc (cofx :db) :toast data)
    :dispatch-later [{:ms 4000 :dispatch [::remove-toast]}]
    }))

(rf/reg-event-fx
 ::remove-toast
 (fn [cofx [event-name data]]
   {:db (assoc (cofx :db) :toast "")}))


;; -- Key press handling -------------------------------------------------------
;;
;;

(defn move-word
  "Moves the current word in the db based on user input.
  Configured to recurse to skip 'words' if they are punctuation
  Also contains logic to prevent moving beyond the beginning and end of an article."
  [dir db]
  ;; check we can move word before starting...
  (let [{:keys [current-word current-article current-word-idx]} db]
      (loop [db                      db
             last-known-word-and-idx nil]
        (let [idx-dir-fn              (case dir :right inc :left dec)
              next-word-idx           (-> db :current-word-idx idx-dir-fn)
              next-word               (-> db (get-in [:current-article :word-data next-word-idx]))
              last-known-word-and-idx (if (or (nil? next-word)
                                              (u/is-punctuation-or-newline? (get next-word :name)))
                                        [current-word current-word-idx]
                                        [next-word next-word-idx])
              next-db                 (-> db
                                          (assoc :current-word next-word)
                                          (assoc :current-word-idx next-word-idx))
              ;; recur when we are on punctuation; ie, skip punctuation.
              continue-recur          (and (u/is-punctuation-or-newline? (get next-word :name))
                                           (not (nil? next-word)))]
          (if continue-recur
            (recur next-db last-known-word-and-idx)
            (let [[lkw lki] last-known-word-and-idx]
              (-> db
                       (assoc :current-word lkw)
                       (assoc :current-word-idx lki))))))))


;; I don't know why but this doesn't need to return {:db ...}
(rf/reg-event-fx
 :key-pressed-right
 (fn [{:keys [db]} [event-name data]]
   (let [{:keys [current-word current-view current-article]} db]
     (when (u/curr-word-view-open? db)
       {:db (move-word :right db)}))))


(rf/reg-event-fx
 :key-pressed-left
 (fn [{:keys [db]} [event-name data]]
    (when (u/curr-word-view-open? db)
      {:db (move-word :left db)})))

(rf/reg-event-fx
 :key-pressed-num
 (fn [{:keys [db]} event]
   (let [last-key              (-> event last last)
         key->comfort-val      {49 0 50 1 51 2 52 3 53 4}
         current-word          (-> db :current-word)
         new-word-with-comfort (assoc current-word :comfort (get key->comfort-val (last-key :keyCode)))
         ]
     (when (u/curr-word-view-open? db)
       {:db (assoc db :current-word new-word-with-comfort)
        :fx [[:dispatch [(shared-events :word-update) new-word-with-comfort] ]]}))))

;; -- Article(s) - fetching, updating, creating --------------------------------

(rf/reg-event-fx
 (shared-events :article-fetch)
 (fn [cofx event]
   {:db (assoc (cofx :db) :loading? true)
    ::ipc-send! event}))

(rf/reg-event-db
 (shared-events :article-received)
 (fn [db [_ data]]
   (-> db
       (assoc :current-article data)
       (assoc :current-view "article")
       (assoc :loading? false))))

(rf/reg-event-fx
 (shared-events :articles-fetch)
 (fn [{:keys [db]} event]
   {:db         (assoc db :loading? true)
    ::ipc-send! event}))

(rf/reg-event-fx
 (shared-events :article-create)
 (fn [_ event]
   {::ipc-send! event}))

(rf/reg-event-fx
 (shared-events :article-created)
 (fn [{:keys [db]} [_ data]]
   {:db (assoc db :current-article data)
    :fx [[:dispatch [::set-toast "Article created."]]
         [:dispatch [::navigate "article-list"]]]
    }))

(rf/reg-event-db
 (shared-events :articles-received)
 (fn [db [_ data]]
   (-> db
       (assoc :articles data)
       (assoc :loading?  false))))

;; -- Word(s) - CRUD -----------------------------------------------------------

(rf/reg-event-fx
 (shared-events :word-update)
 (fn [cofx event]
   {:db (assoc (cofx :db) :loading? true)
    ::ipc-send! event}))

(rf/reg-event-fx
 (shared-events :word-updated)
 (fn [cofx [event-name data]]
   (let [word-data (-> cofx :db :current-article :word-data)
         new-word-data (map (fn [curr-word]
                              (if (= (:word_id curr-word) (:word_id data)) data curr-word)
                              ) word-data)]
     {:db (-> (cofx :db)
              (assoc :loading? false)
              (assoc :current-word data)
              (assoc-in [:current-article :word-data] (vec new-word-data)))
      :dispatch [::set-toast "Word updated."]
      })))

(rf/reg-event-db
 ::set-current-word
 (fn [db [_ data]]
   (let [{:keys [word index]} data]
     (-> db
         (assoc :current-word word)
         (assoc :current-word-idx index)))))


;; -- DEBUG THINGS -------------------------------------------------------------

(rf/reg-event-fx
 (shared-events :wipe-db!)
 (fn [_ event]
   {::ipc-send! event
    :dispatch [::initialize-db]}))


;; -- Registered Effects -------------------------------------------------------

(rf/reg-fx
 ::ipc-send!
 (fn [[event-key payload]]
   (println "[ipcRenderer <-]: " event-key)
   (send! event-key (clj->js payload))))

;; -- IPC Event registrations --------------------------------------------------

(defonce ipcHandlers
  {(shared-events :article-created)
   (fn [event data]
     (|> [(shared-events :article-created) data]))

   (shared-events :articles-received)
   (fn [event data] (|> [(shared-events :articles-received) data]))

   (shared-events :article-received)
   (fn [event data]
     (|> [(shared-events :article-received) data]))

   (shared-events :word-updated)
   (fn [event data]
     (|> [(shared-events :word-updated) data]))

   })

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
               (println "[ipcRenderer ->]: " key)
               (handler event (js->clj args :keywordize-keys true))))))))

