(ns app.renderer.events
  (:require
   [app.renderer.db :as db]
   [day8.re-frame.async-flow-fx :as async-flow-fx] ;; this registers the fx; leave in.
   [app.shared.ipc-events :refer [s-ev]]
   [app.renderer.re-pressed :as rp]
   [app.shared.specs :as specs]
   [app.shared.util :as u]
   [re-frame.core :as rf]))

;; Shorten some names for easier typing
(def |> re-frame.core/dispatch)
(def r-db rf/reg-event-db)
(def r-fx rf/reg-event-fx)

(defn send!
  "This is how we send data to the ipc back end.
  Channels must be strings, so we convert keywords here."
  [channel data]
  (let [ipcRenderer (.. (js/require "electron") -ipcRenderer)
        _           (.send ipcRenderer (name channel) (clj->js data))]))

(defn with-lang
  "Takes an event and wraps it's payload with the db's current languages.
  Assumes event-data is a map!"
  [db [event-name event-data]]
  [event-name (assoc event-data :language (-> db :settings :target-lang))])

(defn boot-flow
  "Set up re-frame's async boot of events.
  see use of: https://github.com/day8/re-frame-async-flow-fx."
  []
  {:first-dispatch [(s-ev :settings-get)]              ;; what event kicks things off ?
   :rules [{:when :seen? :events (s-ev :settings-got) :dispatch [(s-ev :articles-get)]}
           {:when :seen? :events (s-ev :articles-got) :halt? true}]})

(r-fx :boot
      (fn [_ _]
        {:db db/default-db
         :async-flow (boot-flow)})) ;; kick off the async process

;; -- UI / UX Events (Loading, toast etc.) -------------------------------------

(r-fx ::navigate
      (fn [{:keys [db]} [_ new-route]]
        ;; if we're not in `article` or `words` view, hide the translation window
        (let [should-close-t-window? (not (some #{new-route} '("article words")))]
          {:db
           (cond-> db
             (= new-route "words") (assoc :words nil) ; empty the words vec. if we are navigating to it.
             true                  (assoc :current-view new-route))
           :dispatch (if should-close-t-window?
                       [(s-ev :t-win-close)]
                       [::noop])})))

(r-db ::noop (fn [db [_ _]] db))

(r-fx ::set-toast
      (fn [cofx [_ data]]
        {:db (assoc (cofx :db) :toast data)
         :dispatch-later [{:ms 5000 :dispatch [::remove-toast]}]}))

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
  (let [{:keys [current-word current-word-idx]} db]
    (loop [db                      db]
      (let [idx-dir-fn              (case dir :right inc :left dec)
            next-word-idx           (-> db :current-word-idx idx-dir-fn)
            next-word               (-> db (get-in [:current-article :word-data next-word-idx]))
            ;; this `if` is messy, but basically, look at the next word ,if it's
            ;; not nil, or is not a word, keep current-word + index, otherwise, advance.
            last-known-word-and-idx (when next-word (if (or (nil? next-word) ; if the next word doesn't exist
                                                            (if (u/is-phrase next-word)
                                                              false
                                                              (u/not-word? (get next-word :name))))
                                                      [current-word current-word-idx]
                                                      [next-word next-word-idx]))
            next-db                 (-> db
                                        (assoc :current-word next-word)
                                        (assoc :current-word-idx next-word-idx))
            ;; recur when we are on punctuation; ie, skip punctuation.
            continue-recur          (when next-word (and
                                                     (if (u/is-phrase next-word)
                                                       false
                                                       (u/not-word? (get next-word :name)))
                                                     (not (nil? next-word))))]
        (if continue-recur
          (recur next-db)
          (let [[lkw lki] last-known-word-and-idx]
            (if last-known-word-and-idx
              (-> db
                  (assoc :current-word lkw)
                  (assoc :current-word-idx lki))
              db)))))))

(defn- when-t-win-open
  "If the translation window is open..."
  [new-db]
  (if (-> new-db :t-win :open?)
      [(s-ev :t-win-update-word)
       {:word-or-phrase (db/get-curr-word-or-phrase new-db)
        :target-lang    (-> new-db :settings :target-lang)
        :native-lang    (-> new-db :settings :native-lang)}]
    [::noop]))

(r-fx :key-pressed-right
      (fn [{:keys [db]} [_ _]]
        (when (u/curr-word-view-open? db)
          (let [new-db (move-word :right db)]
            {:db new-db
             :dispatch (when-t-win-open new-db)}))))

(r-fx :key-pressed-shift
      (fn [{:keys [db]} [_ _]]
        {:db (assoc db :shift-held? true)}))

(r-fx :key-up-shift
      (fn [{:keys [db]} [_ _]]
        {:db (assoc db :shift-held? false)}))

(r-fx :key-pressed-left
      (fn [{:keys [db]} [_ _]]
        (when (u/curr-word-view-open? db)
          (let [new-db (move-word :left db)]
            {:db new-db
             :dispatch (when-t-win-open new-db)}))))

(r-fx :key-pressed-num
      (fn [{:keys [db]} event]
        (let [last-key              (-> event last last)
              key->comfort-val      {49 0 50 1 51 2 52 3 53 4}
              current-word          (-> db :current-word)
              new-word-with-comfort (assoc current-word :comfort (get key->comfort-val (last-key :keyCode)))]
          (when (u/curr-word-view-open? db)
            {:db (assoc db :current-word new-word-with-comfort)
             :fx [[:dispatch
                   (if (u/is-phrase new-word-with-comfort)
                       [(s-ev :phrase-update) new-word-with-comfort]
                       [(s-ev :word-update) new-word-with-comfort])]]}))))

;; -- Article(s) - fetching, updating, creating --------------------------------

(r-fx (s-ev :article-get)
      (fn [{:keys [db]} event]
        {:db (assoc db :loading? true)
         ::ipc-send! (with-lang db event)}))

(r-fx (s-ev :article-delete)
      (fn [{:keys [db]} event]
        {:db         (-> db (assoc :loading? true))
         :dispatch   [::set-toast {:type :confirmation :msg "Article deleted."}]
         ::ipc-send! event}))

(r-fx (s-ev :article-deleted)
      (fn [{:keys [db]} [_ id]]
        (let [new-articles (filter #(not= (% :article_id) id) (db :articles))
              ;; remove the current article if it was just deleted.
              current-article (if (= (-> db :current-article :article_id) id)
                                nil
                                (db :current-article))]
          {:db (-> db (assoc :loading? false
                             :current-article current-article
                             :articles new-articles))})))

(r-db (s-ev :article-received)
      (fn [db [_ data]]
        (-> db
            (assoc :current-article data
                   :current-view "article"
                   :current-word (-> data :word-data first)
                   :loading? false))))

(r-fx (s-ev :articles-get)
      (fn [{:keys [db]} event]
        {:db         (assoc db :loading? true)
         ::ipc-send! (with-lang db event)}))

(r-fx (s-ev :article-create)
      (fn [{:keys [db]} event]
        {::ipc-send! (with-lang db event)}))

(r-fx (s-ev :article-created)
      (fn [{:keys [db]} [_ _]]
        {:db db
         :fx [[:dispatch [::set-toast {:type :confirmation :msg "Article created."}]]
              [:dispatch [::navigate "article-list"]]]}))

(r-db (s-ev :articles-got)
      (fn [db [_ data]]
        (-> db
            (assoc :articles data)
            (assoc :loading?  false))))

;; -- Word(s) - CRUD -----------------------------------------------------------

(r-fx (s-ev :word-update)
      (fn [{:keys [db]} event]
        {:db db
         ::ipc-send! (with-lang db event)}))

(r-fx (s-ev :words-get)
      (fn [{:keys [db]} event]
        {:db (assoc db :loading? true)
         ::ipc-send! (with-lang db event)}))

(r-fx (s-ev :words-got)
      (fn [cofx [_ data]]
        {:db
         (-> (cofx :db)
             (assoc :loading? false)
             (assoc :words data))}))

(r-fx (s-ev :words-mark-all-known)
      (fn [{:keys [db]} [event _]]
        {:db (-> db
                 (assoc :loading true))
         ::ipc-send! [event (-> db :current-article :word-data)]}))

(r-db (s-ev :words-marked-as-known)
      (fn [db [_ _]]
        (let [update-words #(->> %
                                 (map (fn [word] (assoc word :comfort (specs/word-comfort :known))))
                                 (into []))]
          (-> db
              (assoc :loading? false)
              (update-in [:current-article :word-data] update-words)))))

(defn update-word-helper
  "Finds a word or phrase in the re-frame db's list of words and updates it with
  new data from the backend"
  [event-data word-data]
  (vec
   (map
    (fn [w-or-p] ;; w-or-p = word-or-phrase
      (cond
        ;; two phrases encounter each other...
        ;; if their ids are the same, update.
        (and (u/is-phrase event-data)
             (u/is-phrase w-or-p)
             (= (:id w-or-p) (:id event-data)))
        event-data


        ;; we're updating a `word` and it's the original one clicked on and updated.
        (and (not (u/is-phrase event-data))
             (not (u/is-phrase w-or-p))
             (= (w-or-p :id) (event-data :id)))
        event-data

        ;; here slugs match, but id's don't: good for matching updates to
        ;; words with different capitlizations - we basically patch the old data into the new
        ;; event data and use that instead to return to the `map` call.
        (and (not (u/is-phrase event-data))
             (= (:slug w-or-p) (:slug event-data)) ;
             (not= (w-or-p :id) (event-data :id)))
        (assoc event-data :name (w-or-p :name) :id (w-or-p :id))

        ;; just return and carry on.
        :else w-or-p)

      ) word-data)))

(r-fx (s-ev :word-updated)
      (fn [{:keys [db]} [_ data]]
        (let [current-article-words (-> db :current-article :word-data)
              words-view-words      (-> db :words)]
          {:dispatch [::set-toast {:type :confirmation :msg "Word updated."}]
           :db       (cond-> db
                       true                  (assoc :loading? false)
                       true                  (assoc :current-word data)

                       (db/view-article? db)
                       (assoc-in [:current-article :word-data] (update-word-helper data current-article-words))

                       (db/view-words? db)
                       (assoc :words (update-word-helper data words-view-words)))})))

(r-fx ::set-current-word
      (fn [{:keys [db]} [_ data]]
        (let [{:keys [word index]} data
              new-db (-> db (assoc :current-word word
                                   :current-word-idx index
                                   :current-phrase nil
                                   :current-phrase-idxs nil))]
            {:db       new-db
             :dispatch (when-t-win-open new-db)})))

;; current phrase events -------------------------------------------------------

(r-fx ::set-current-phrase
      (fn [{:keys [db]} [_ index]]
        (let [current-word-idx (-> db :current-word-idx)
              lesser-index     (min index current-word-idx)
              greater-index    (inc (max index current-word-idx))
              phrase-words     (subvec (-> db :current-article :word-data) lesser-index greater-index)
              new-db           (-> db (assoc :current-word nil
                                             :current-phrase (specs/make-phrase phrase-words)
                                             :current-phrase-words phrase-words
                                             :current-phrase-idxs (range lesser-index greater-index)
                                             :current-word-idx nil))]
          {:db new-db
           :dispatch (when-t-win-open new-db)})))

(r-fx (s-ev :phrase-update)
      (fn [{:keys [db]} event]
        {:db db
         ::ipc-send! (with-lang db event)}))



;; FIXME: LEAVING OFF - this ain't working

(r-fx (s-ev :phrase-updated)
      (fn [{:keys [db]} [_ data]]
        (let [current-article-words (-> db :current-article :word-data)
              words-view-words      (-> db :words)]
          {:dispatch [::set-toast {:type :confirmation :msg "Word updated."}]
           :db       (cond-> db
                       true                  (assoc :loading? false)
                       true                  (assoc :current-word data)

                       (db/view-article? db)
                       (assoc-in [:current-article :word-data] (update-word-helper data current-article-words))

                       (db/view-words? db)
                       (assoc :words (update-word-helper data words-view-words)))})))


(r-fx (s-ev :phrase-inserted)
      (fn [{:keys [db]} [_ phrase-from-db]]
        (let [word-data        (-> db :current-article :word-data)
              words-view-words (-> db :words)]
          {:dispatch [::set-toast {:type :confirmation :msg "Phrase updated."}]
           :db       (cond-> db
                       true (assoc :loading? false)
                       true (assoc :current-word phrase-from-db)
                       true (assoc :current-phrase-idxs nil
                                   :current-phrase nil)

                       (db/view-article? db)
                       (assoc-in [:current-article :word-data]
                                 (u/update-word-list-with-phrases phrase-from-db word-data))

                       ;; TODO handle this.
                       (db/view-words? db)
                       (assoc :words (update-word-helper phrase-from-db words-view-words)))})))

;; -- Settings -----------------------------------------------------------------

(r-fx (s-ev :settings-get)
      (fn [cofx event]
        {:db (-> (cofx :db) (assoc :loading? true))
         ::ipc-send! event}))

(r-fx (s-ev :settings-got)
      (fn [cofx [_ data]]
        {:db (-> (cofx :db)
                 (assoc :loading? false)
                 (assoc :settings data))}))

;; we just patch the whole settings object in
;; because drilling into it is too annoying with re-frame.
;;
(r-fx (s-ev :settings-update)
      (fn [cofx [event data]]
        {:db (-> (cofx :db)
                 (assoc :settings data))
         ::ipc-send! [event data]}))

(r-fx (s-ev :settings-updated)
      (fn [{:keys [db]} [_ data]]
        {:db (-> db
                 (assoc :settings data)
                 (assoc :current-article nil)
                 (assoc :loading? false))
         :dispatch   [::set-toast {:type :confirmation :msg "Settings updated."}]}))

(r-fx (s-ev :settings-backup-db)  (fn [_ event] {::ipc-send! event}))
(r-fx (s-ev :settings-restore-db) (fn [_ event] {::ipc-send! event}))

;; -- Translation Window -------------------------------------------------------

(r-fx (s-ev :t-win-open)
      (fn [{:keys [db]} [event window-data]]
        {:db         (assoc-in db [:t-win :loading?] true)
         ::ipc-send! [event (assoc window-data
                                   :word-or-phrase (db/get-curr-word-or-phrase db)
                                   :target-lang (-> db :settings :target-lang)
                                   :native-lang (-> db :settings :native-lang))]}))

(r-fx (s-ev :t-win-opened)
      (fn [{:keys [db]} _]
        {:db (-> db
                 (assoc-in [:t-win :open?] true)
                 (assoc-in [:t-win :loading?] false))}))

(r-fx (s-ev :t-win-update-word)
      (fn [{:keys [db]} event]
        {:db db
         ::ipc-send! event}))

(r-fx (s-ev :t-win-close)
      (fn [{:keys [db]} event]
        {:db         (assoc-in db [:t-win :open?] false)
         ::ipc-send! event}))

;; -- DEBUG THINGS -------------------------------------------------------------

(r-fx (s-ev :wipe-db!)
      (fn [_ event]
        {::ipc-send! event
         :dispatch [::initialize-db]}))

(r-fx (s-ev :ipc-success)
      (fn [{:keys [db]} msg]
        {:db db
         :dispatch [::set-toast {:type :confirmation :msg msg}]}))

(r-fx (s-ev :ipc-error)
      (fn [{:keys [db]} [_ error-data]]
        (u/log "Error! " error-data)
        {:db
         (-> db (assoc :loading? false))
         :dispatch [::set-toast {:type :error :msg (error-data :msg)}]}))

;; -- Registered Effects -------------------------------------------------------

(rf/reg-fx ::ipc-send!
           (fn [[event-key payload]]
             (println "[ipcRenderer <-]: " event-key)
             (send! event-key (clj->js payload))))

;; -- IPC Event registrations --------------------------------------------------

(def incoming-handlers
  [:article-created :articles-got      :article-received       :article-deleted
   :words-got       :word-updated      :words-marked-as-known  :phrase-updated :phrase-inserted
   :settings-got    :settings-updated
   :ipc-error       :ipc-success       :t-win-opened])
;; Loop over the incoming handlers and set them up to dispatch a re-frame events whenever they get triggered by ipcMain.
(defonce ipcHandlers
  (into {}
        (map (fn [key]
               ;; TODO get can fail if the key is not present on s-ev.
               (let [ev-name (get s-ev key)]
                 [ev-name (fn [_ data] (|> [ev-name data]))])) incoming-handlers)))

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
