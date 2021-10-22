;; lib from: https://github.com/gadfly361/re-pressed
(ns app.renderer.re-pressed
  (:require
   [re-frame.core :as rf]
   [goog.events :as ev]
   )
  )

;; -- implementation

;; Vars ------------------------------------------------------------------------

(def ns-root "app.renderer.re-pressed/")
;; (def ns-root "re-pressed.core/")
(def max-record 5)
(def modifier-keys #{16 ;; shift
                     17 ;; ctrl
                     18 ;; alt
                     91 ;; windows (i.e. meta) ...
                     })

;; Util ------------------------------------------------------------------------

(defn ->ns-keyword [event-type]
  (fn ns-keyword
    ([]
     (ns-keyword nil))
    ([suffix]
     (keyword
      (str ns-root
           event-type
           suffix)))))

(defn is-key?
  [recent-key key-map]
  (every? (fn [[k v]]
            (= (get recent-key k)
               v))
          key-map))



;; Subs ------------------------------------------------------------------------

(defn register-subs [event-type]
  (let [ns-keyword (->ns-keyword event-type)]
    (rf/reg-sub
     (ns-keyword "-keys")
     (fn [db _]
       (get-in db [(ns-keyword) :keys])))

    (rf/reg-sub
     (ns-keyword "-event-keys")
     (fn [db _]
       (get-in db [(ns-keyword) :event-keys])))

    (rf/reg-sub
     (ns-keyword "-clear-keys")
     (fn [db _]
       (get-in db [(ns-keyword) :clear-keys])))

    (rf/reg-sub
     (ns-keyword "-always-listen-keys")
     (fn [db _]
       (get-in db [(ns-keyword) :always-listen-keys])))

    (when (= "keydown" event-type)
      (rf/reg-sub
       (ns-keyword "-prevent-default-keys")
       (fn [db _]
         (get-in db [(ns-keyword) :prevent-default-keys]))))
    ))



;; Events ------------------------------------------------------------------------

(defn- ->set-key! [event-type]
  (let [ns-keyword (->ns-keyword event-type)]
    (fn set-key!
      [{:keys [db]} [_ key-map]]
      {:db (update-in db [(ns-keyword) :keys]
                      (fn [key-maps]
                        (let [keys (if key-map
                                     (conj (or key-maps
                                               [])
                                           key-map)
                                     key-maps)]
                          keys
                          (into []
                                (take-last max-record keys)))))})))

(defn- ->clear-keys! [event-type]
  (let [ns-keyword (->ns-keyword event-type)]
    (fn clear-keys!
      [{:keys [db]} [_ _]]
      {:db (assoc-in db [(ns-keyword)
                         :keys] [])})))


(defn prevent-default-keys!
  [_ [_ e]]
  (let [k (keyword
           (str ns-root "prevent-default"))]
    {k e}))


(defn register-events [event-type]
  (let [ns-keyword (->ns-keyword event-type)]

    (rf/reg-event-fx  (ns-keyword "-set-key")
                      (->set-key! event-type))

    (rf/reg-event-fx (ns-keyword "-clear-keys")
                     (->clear-keys! event-type))

    (when (= "keydown" event-type)
      (rf/reg-event-fx (ns-keyword "-prevent-default-keys")
                       prevent-default-keys!))))



;; Effects ------------------------------------------------------------------------

(defn register-effects [event-type]
  (when (= "keydown" event-type)
    (rf/reg-fx
     (keyword
      (str ns-root "prevent-default"))
     (fn [e]
       (.preventDefault e)))))


(rf/reg-fx
 (keyword
  (str ns-root "keyboard-event"))

 (fn [{:keys [event-type]}]
   (register-subs event-type)
   (register-events event-type)
   (register-effects event-type)

   (ev/listen
      js/document
      event-type
      (fn [e]
        (let [ns-keyword (->ns-keyword event-type)

              ;; e-key         (.-keyCode e)
              modifier-key? (modifier-keys -key)

              ;; --
              ;; thanks re-frame-10x for this snippet
              tag-name        (.-tagName (.-target e))
              entering-input? (contains?
                               #{"INPUT"
                                 "SELECT"
                                 "TEXTAREA"} tag-name)
              ;; --

              hit-key {:altKey   (.-altKey e)
                       :ctrlKey  (.-ctrlKey e)
                       :metaKey  (.-metaKey e)
                       :shiftKey (.-shiftKey e)
                       :keyCode  (.-keyCode e)}

              always-listen-keys @(rf/subscribe [(ns-keyword "-always-listen-keys")])
              always-listen?     (some #(is-key? hit-key %) always-listen-keys)]

          (when (or (and (not modifier-key?)
                         (not entering-input?))
                    always-listen?)
            (rf/dispatch-sync [(ns-keyword "-set-key") hit-key])
            (let [recent-keys @(rf/subscribe [(ns-keyword "-keys")])
                  event-keys  @(rf/subscribe [(ns-keyword "-event-keys")])
                  clear-keys  @(rf/subscribe [(ns-keyword "-clear-keys")])

                  recent-key (last recent-keys)

                  is-key-sequence? (fn [key-maps]
                                     (every? true?
                                             (mapv
                                              #(is-key? %1 %2)
                                              (concat (reverse recent-keys)
                                                      (repeat max-record {}))
                                              (reverse key-maps))))

                  check-events (doall
                                (for [[trigger-event
                                       & ks] event-keys]
                                  (let [triggered? (some is-key-sequence? ks)]
                                    (vector trigger-event triggered?))))

                  [triggered-event
                   event?] (some->> check-events
                                    (filter #(true? (second %)))
                                    first)

                  clear? (some is-key-sequence? clear-keys)]
              (when (= "keydown" event-type)
                (let [prevent-default-keys @(rf/subscribe [(ns-keyword "-prevent-default-keys")])
                      prevent-default?     (some #(is-key? recent-key %) prevent-default-keys)]
                  (when prevent-default?
                    (rf/dispatch-sync [(ns-keyword "-prevent-default-keys")
                                       e]))))

              (cond
                clear?
                (rf/dispatch-sync [(ns-keyword "-clear-keys")])

                event?
                (rf/dispatch-sync (conj triggered-event
                                        e
                                        recent-keys))

                :else nil))))))))




;;; Register the implementation ------------------------------------------------

(rf/reg-event-fx
 ::add-keyboard-event-listener
 ;; event-type can be:
 ;; "keydown",
 ;; "keypress", or
 ;; "keyup"
 (fn [_ [_ event-type]]
   {::keyboard-event {:event-type event-type}}))


(rf/reg-event-fx
 ::set-keydown-rules
 (fn [{:keys [db]}
      [_ {:keys [event-keys
                 clear-keys
                 always-listen-keys
                 prevent-default-keys]}]]
   {:db (-> db
            (assoc-in [::keydown :keys] nil)
            (assoc-in [::keydown :event-keys] event-keys)
            (assoc-in [::keydown :clear-keys] clear-keys)
            (assoc-in [::keydown :always-listen-keys] always-listen-keys)
            (assoc-in [::keydown :prevent-default-keys] prevent-default-keys)
            )}))


(rf/reg-event-fx
 ::set-keypress-rules
 (fn [{:keys [db]}
      [_ {:keys [event-keys
                 clear-keys
                 always-listen-keys]
          :as   opts}]]
   {:db (-> db
            (assoc-in [::keypress :keys] nil)
            (assoc-in [::keypress :event-keys] event-keys)
            (assoc-in [::keypress :clear-keys] clear-keys)
            (assoc-in [::keypress :always-listen-keys] always-listen-keys)
            )}))


(rf/reg-event-fx
 ::set-keyup-rules
 (fn [{:keys [db]}
      [_ {:keys [event-keys
                 clear-keys
                 always-listen-keys]}]]
   {:db (-> db
            (assoc-in [::keyup :keys] nil)
            (assoc-in [::keyup :event-keys] event-keys)
            (assoc-in [::keyup :clear-keys] clear-keys)
            (assoc-in [::keyup :always-listen-keys] always-listen-keys)
            )}))



;; My rules for re-pressed ------------------------------------------------------------------------

(rf/dispatch
 [::set-keydown-rules
  {;; takes a collection of events followed by key combos that can trigger the event
   ;; example event - will be triggered if tab (keycode 9) is pressed 2x. [[:some-event-id2] [{:keyCode 9} {:keyCode 9}]]]
   :event-keys [[[:key-pressed-right] [{:keyCode 39}]] ;; right arrow pressed once.
                [[:key-pressed-left]  [{:keyCode 37}]] ;; left arrow pressed
                [[:key-pressed-shift]     [{:keyCode 16}]]
                [[:key-pressed-num] [{:keyCode 49}]  [{:keyCode 50}]  [{:keyCode 51}]  [{:keyCode 52}] [{:keyCode 53}]]
                ]
   :clear-keys           [] ;; takes a collection of key combos that, if pressed, will clear the recorded keys  [{:keycode 27}]
   :always-listen-keys   [] ;; takes a collection of keys that will always be recorded (regardless if the user is typing in an input, select, or textarea)
   :prevent-default-keys [] ;; prevent default action with specific key.
   }])


(rf/dispatch
 [::set-keyup-rules
  {:event-keys [[[:key-up-shift]     [{:keyCode 16}]]]
   :clear-keys           [] ;; takes a collection of key combos that, if pressed, will clear the recorded keys  [{:keycode 27}]
   :always-listen-keys   [] ;; takes a collection of keys that will always be recorded (regardless if the user is typing in an input, select, or textarea)
   :prevent-default-keys [] ;; prevent default action with specific key.
   }])
