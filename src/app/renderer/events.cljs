(ns app.renderer.events
  (:require
   [app.renderer.db :as db]
   [app.shared.ipc-events :refer [s-ev]]
   [app.shared.util :as u]
   [re-frame.core :as rf]))

(def |> re-frame.core/dispatch)
(def r-db rf/reg-event-db)
(def r-fx rf/reg-event-fx)

(defn send!
  "This is how we send data to the ipc back end.
  Channels must be strings, so we convert keywords here."
  [channel data]
  (let [ipcRenderer (.. (js/require "electron") -ipcRenderer)
        _           (.send ipcRenderer (name channel) (clj->js data))]))

(r-db ::initialize-db
      (fn [_ _]
        db/default-db))

;; -- UI / UX Events (Loading, toast etc.) -------------------------------------

(r-db ::navigate
      (fn [db [_ new-route]]
        (assoc db :current-view new-route)))

(r-fx ::set-toast
      (fn [cofx [_ data]]
        {:db (assoc (cofx :db) :toast data)
         :dispatch-later [{:ms 4000 :dispatch [::remove-toast]}]}))

(r-fx ::remove-toast
      (fn [cofx _]
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

(r-fx :key-pressed-right
      (fn [{:keys [db]} [_ _]]
        (when (u/curr-word-view-open? db)
          {:db (move-word :right db)})))

(r-fx :key-pressed-left
      (fn [{:keys [db]} [_ _]]
        (when (u/curr-word-view-open? db)
          {:db (move-word :left db)})))

(r-fx :key-pressed-num
      (fn [{:keys [db]} event]
        (let [last-key              (-> event last last)
              key->comfort-val      {49 0 50 1 51 2 52 3 53 4}
              current-word          (-> db :current-word)
              new-word-with-comfort (assoc current-word :comfort (get key->comfort-val (last-key :keyCode)))]
          (when (u/curr-word-view-open? db)
            {:db (assoc db :current-word new-word-with-comfort)
             :fx [[:dispatch [(s-ev :word-update) new-word-with-comfort]]]}))))

;; -- Article(s) - fetching, updating, creating --------------------------------

(r-fx (s-ev :article-get)
      (fn [cofx event]
        {:db (assoc (cofx :db) :loading? true)
         ::ipc-send! event}))

(r-db (s-ev :article-received)
      (fn [db [_ data]]
        (-> db
            (assoc :current-article data)
            (assoc :current-view "article")
            (assoc :loading? false))))

(r-fx (s-ev :articles-get)
      (fn [{:keys [db]} event]
        {:db         (assoc db :loading? true)
         ::ipc-send! event}))

(r-fx (s-ev :article-create)
      (fn [_ event]
        {::ipc-send! event}))

;; Not being used yet.
;; (r-fx (s-ev :article-update)
;;       (fn [_ event]
;;         {::ipc-send! event}))

;; (r-fx (s-ev :article-updated)
;;       (fn [{:keys [db]} [_ data]]
;;         {:db (assoc db :current-article data)}))

(r-fx (s-ev :article-created)
      (fn [{:keys [db]} [_ data]]
        {:db (assoc db :current-article data)
         :fx [[:dispatch [::set-toast "Article created."]]
              [:dispatch [::navigate "article-list"]]]}))

(r-db (s-ev :articles-received)
      (fn [db [_ data]]
        (-> db
            (assoc :articles data)
            (assoc :loading?  false))))

;; -- Word(s) - CRUD -----------------------------------------------------------

(r-fx (s-ev :word-update)
      (fn [cofx event]
        {:db (assoc (cofx :db) :loading? true)
         ::ipc-send! event}))

(r-fx (s-ev :word-updated)
      (fn [cofx [event-name data]]
        (let [word-data (-> cofx :db :current-article :word-data)
              new-word-data (map (fn [curr-word]
                                   (cond
                                     (= (:word_id curr-word) (:word_id data))
                                     data

                                ;; if slug matches, update everything except the "name"
                                     (and (= (:slug curr-word) (:slug data))
                                          (not= (curr-word :word_id) (data :word_id)))
                                     (assoc data :name (curr-word :name) :word_id (curr-word :word_id))

                                     :else curr-word)) word-data)]
          {:db (-> (cofx :db)
                   (assoc :loading? false)
                   (assoc :current-word data)
                   (assoc-in [:current-article :word-data] (vec new-word-data)))
           :dispatch [::set-toast "Word updated."]})))

(r-db ::set-current-word
      (fn [db [_ data]]
        (let [{:keys [word index]} data]
          (-> db
              (assoc :current-word word)
              (assoc :current-word-idx index)))))

;; -- DEBUG THINGS -------------------------------------------------------------

(r-fx (s-ev :wipe-db!)
      (fn [_ event]
        {::ipc-send! event
         :dispatch [::initialize-db]}))

;; -- Registered Effects -------------------------------------------------------

(rf/reg-fx ::ipc-send!
           (fn [[event-key payload]]
             (println "[ipcRenderer <-]: " event-key)
             (send! event-key (clj->js payload))))

;; -- IPC Event registrations --------------------------------------------------

;; TODO - could refactor this to be built from a list/partial the first fn that
;; takes electron event/data
(defonce ipcHandlers
  {(s-ev :article-created)
   (fn [_ data]
     (|> [(s-ev :article-created) data]))

   (s-ev :articles-received)
   (fn [_ data] (|> [(s-ev :articles-received) data]))

   ;; Not in use yet.
   ;; (s-ev :article-updated)
   ;; (fn [_ data]
   ;;   (|> [(s-ev :article-updated) data]))

   (s-ev :article-received)
   (fn [_ data]
     (|> [(s-ev :article-received) data]))

   (s-ev :word-updated)
   (fn [_ data]
     (|> [(s-ev :word-updated) data]))})

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
