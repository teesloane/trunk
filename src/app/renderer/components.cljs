(ns app.renderer.components
  (:require
   [app.renderer.events :as events :refer [|>]]
   [app.renderer.subs :as subs :refer [<|]]
   [app.shared.ipc-events :refer [s-ev]]
   [app.shared.util :as u]
   [reagent.core :as r]
   [re-frame.core :as rf]))

(defn input-label
  [label-text]
  [:label.flex.mb-2.text-xs.italic {:for label-text} label-text])

(defn input
  [props]
  (let [touched? (r/atom false)]
    (fn [{:keys [valid? value label default-value on-change] :as props}]
      (let [valid?      (if (fn? valid?) (valid? value) valid?)
            base-styles "w-full p-1.5 text-gray-700 dark:text-gray-50 border rounded-sm focus:outline-none text-sm dark:bg-gray-900 dark:border-gray-500 dark:text-white"
            input-stz   (if (nil? valid?)
                          base-styles
                          (str base-styles
                               (when @touched?
                                 (if valid? " border-green-500 dark:border-green-500" " border-red-500 dark:border-red-500"))))
            ;; patch on-change to alter the internal state to show the field has been touched
            props       (assoc props :on-change (fn [e]
                                                  (when-not @touched? (reset! touched? true))
                                                  (on-change e)))]
        (if label
          [:div
           [input-label label]
           [:input
            (merge {:class input-stz :id label} (dissoc props :label :valid?))]]
          [:input
           (merge {:class input-stz} (dissoc props props :label :valid?))])))))

(defn textarea
  [props]
  (let [input-stz "w-full p-2 text-gray-700 dark:text-gray-50 border focus:outline-none text-sm mb-4 dark:bg-gray-900 dark:border-gray-500 dark:text-white"
        label     (props :label)]
    (if label
      [:div [input-label label] [:textarea (merge {:class input-stz :id label} props)]]
      [:textarea (merge {:class input-stz} props)])))

(defn select
  [props options]
  (let [styles "flex border w-64 py-1.5 rounded-sm  dark:bg-gray-900 dark:text-white outline-none "
        label (props :label)]
    (if label
      [:div
       [input-label label]
       [:select (merge {:class styles :id label} props) options]]
      [:select (merge {:class styles} props) options])))

(defn erase-db
  "Button for erasing the database"
  []
  (let [sure-del? (r/atom 0)
        handle-wipe-db (fn []
                         (case @sure-del?
                           0 (reset! sure-del? 1)
                           1 (do (|> [(s-ev :wipe-db!)])
                                 (reset! sure-del? 0))))]
    (fn []
      [:div.flex.rounded-sm
       [:button.bg-white.border.rounded.py-1.px-2.text-xs.text-red-500.hover:bg-red-500.hover:text-white.shadow.dark:bg-gray-800.dark:text-white.dark:hover:bg-red-700
        {:on-click #(handle-wipe-db)}
        (case @sure-del?
          0 "Wipe Trunk database"
          1 "Are you sure you want to delete your data?")]])))

(defn loading-wheel
  "Bottom right absolute position loading wheel."
  []
  (let [loading? (rf/subscribe [::subs/loading?])
        div-stz "transition duration-500 flex bg-gray-50 dark:bg-gray-800 text-xs shadow fixed bottom-0 right-0 p-2 m-2 rounded-md align-center items-center"
        div-stz (if-not @loading? (str "-bottom-16 " div-stz) (str "bottom-0 " div-stz))]
    (when @loading?
      [:div {:class div-stz}
       [:svg {:class "animate-spin text-blue-600 dark:text-blue-400", :style {:width "24px" :height "24px"} :xmlns "http://www.w3.org/2000/svg", :fill "none", :viewBox "0 0 24 24"}
        [:circle {:class "opacity-25", :cx "12", :cy "12", :r "10", :stroke "currentColor", :stroke-width "4"}]
        [:path {:class "opacity-75", :fill "currentColor", :d "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}]]])))

(defn toast
  [{:keys [type msg]}]
  (let [classes (str "px-4 h-full flex items-center "
                     (case type :confirmation "text-green-600" :error "text-red-500" ""))]
    (when-not (empty? msg)
      [:div {:class (str classes)} msg])))

(defn container
  "This needs to have it's react-keys resolved."
  [children]
  [:div {:class "flex flex-col p-8 w-full md:w-10/12 lg:w-8/12  mx-auto max-w-screen-xl dark:bg-gray-900"}
   children])

(def icons
  {:chevron-up   "chevron-up.svg"
   :chevron-down "chevron-down.svg"
   :check        "check.svg"})

(defn icon
  ""
  [{:keys [size icon on-click]}]
  [:img {:class (if on-click "cursor-pointer" "")
         :src (str "img/icons/" (get icons icon))
         :on-click on-click
         :style    {:width  (or size 32)
                    :height (or size 32)}}])

(defn card
  [{:keys [header toggleable? starts-closed?]} body]
  (let [open? (r/atom (if starts-closed? false true))]
    (fn [{:keys [header toggleable? starts-closed?]} body]
      [:div.bg-white.border.shadow-sm
       {:class (u/twld "bg-white border" "bg-gray-800 border-gray-700")
        :key   header}
       (when header
         [:div.border-b.px-4.py-2.text-sm.font-bold.dark:border-gray-700
          {:class (when toggleable? " cursor-pointer")
           :on-click #(if toggleable?
                        (reset! open? (not @open?))
                        nil)}
          [:div.flex.flex-1.justify-between.items-center
           [:span header]
           (when toggleable?
             (if @open?
               [icon {:icon :chevron-down :size 12}]
               [icon {:icon :chevron-up :size 12}]))]])
       (if toggleable?
         (when @open?
           [:div.p-4 body])
         [:div.p-4 body])])))

(defn loading-intercept
  [msg]
  [:div.h-screen.w-100.flex.items-center.justify-center.text-sm.text-gray.600 msg])

(defn ext-link
  [{:keys [link text]}]
  (let [handle-click (fn [e]
                       (.preventDefault e)
                       (.openExternal (.-shell (js/require "electron")) link))]
    [:a.text-blue-600.dark:text-blue-400.cursor-pointer {:on-click handle-click} text]))

(defn button
  [props]
  (let [dbl-check-count (r/atom 0)]
    (fn [{:keys [on-click text icon-name icon-size disabled? style dbl-check]
          :or   {disabled? false style ""}}]
      (let [style        (if disabled? "disabled" style)
            style        (case style
                           "primary"  "bg-blue-500 hover:bg-blue-600 text-gray-50 border-none"
                           "disabled" "cursor-not-allowed text-gray-50 bg-gray-500 hover:bg-gray-500 dark:bg-gray-500"
                           "caution"  "bg-red-500 hover:bg-red-600 text-gray-50 border-none"
                           ""         "bg-white text-gray-800 hover:bg-gray-100 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-400 ")
            styles       (str style " self-start text-xs py-1 px-2 rounded shadow ")
            curr-text    (if dbl-check (if (> @dbl-check-count 0) dbl-check text) text)
            handle-click (if dbl-check
                           (if (> @dbl-check-count 0)
                             (do #(reset! dbl-check-count 0) on-click)
                             #(swap! dbl-check-count inc))
                           on-click)]
        [:button {:class styles :on-click handle-click :disabled disabled?}
         (if icon-name
           [:span [icon {:icon icon-name :size (or icon-size 18)}]
            [:span curr-text]]
           curr-text)]))))

(defn trunk-logo
  [{:keys [width]}]
  [:img {:src "img/temp_logo.png"
         :style {:width (or width 64) :height (or width 64)}}])

(defn empty-state
  [children]
  [:div.flex.flex-col.h-screen.justify-center.items-center
   [trunk-logo {:width 64}]
   [:div.mt-4 children]])

(defn empty-state-with-msg
  [{:keys [top-line bottom-line]
    :or   {top-line    "You haven't created any texts yet."
           bottom-line "Click \"Create Text\" above to get started."}}]
  [empty-state
   [:div.text-center.text-gray-400
    [:div top-line]
    [:div bottom-line]]])

(defn nav-link
  [{:keys [on-click text id current-view]}]
  (let [active? (= id current-view)]
    [:button.bg-transparent.border-b.border-opacity-0.hover:border-opacity-75.font-bold.pt-3.pb-2.px-3.mr-4
     {:class    (if active? "border-blue-400 border-opacity-100" "")
      :on-click on-click} text]))

(defn nav
  "Display the navigation bar in app."
  [{:keys [current-view]}]
  (let [nav!            (fn [route] (|> [::events/navigate route]))
        ;; current-article (<| [::subs/current-article])
        toast-msg       (<| [::subs/toast])
        links           [{:text "Read" :id "article-list"}
                         {:text "Create Text" :id "article-create"}
                         {:text "Words" :id "words"}
                         {:text "Settings" :id "settings"}
                         ;; NOTE: show the currently reading article in the nav:
                         ;; not sure I want this as part of the ux so I'm commenting out for now.
                         ;; {:text (u/trunc-ellipse (get current-article :name) 25) :id "article"}
                         ]]
    [:nav.bg-white.w-full.text-xs.dark:bg-gray-800.dark:text-gray-50.border-b.dark:border-b-gray-900
     [:div.flex.items-center {:style {:height "35px"}}
      [:div.flex.flex-1.items-center
       [:div.pl-4 [trunk-logo {:width 24}]]
       [:div.flex.ml-8
        (for [l links :when l]
          ^{:key (l :id)}
          [nav-link {:on-click     #(nav! (l :id))
                     :text         (l :text)
                     :current-view current-view
                     :id           (l :id)}])]]

      [toast toast-msg]]]))

(defn page-heading
  [text]
  [:div.text-center.mb-8 [:h2.text-2xl text]])

(defn article-word
  "how single words are styled based on their familiarity/comfort."
  [{:keys [word current-word index current-word-idx on-click current-phrase-idxs lang-word-regex]}]
  (let [{:keys [name comfort is_not_a_word _translation]} word
        base-styles                         "border-b border-transparent px-0.5 py-px mr-1 cursor-pointer bg-opacity-25 hover:bg-opacity-50
                                             dark:bg-opacity-50 dark:text-gray-300"
        stz                                 (str (u/get-comfort-bg-col comfort) " "
                                                 base-styles)
        is-in-current-phrase                (not (nil? (some #{index} current-phrase-idxs)))
        is-current-word                     (or (and (= (dissoc word :comfort) (dissoc current-word :comfort))
                                                     (= index current-word-idx))
                                                is-in-current-phrase)
        stz                                 (if is-current-word (str " border-black dark:border-b-gray-300 " stz) (str "  " stz))]
    (cond
      ;; newlines that are just from textarea...
      (= name "\n")
      [:div.w-full {:style {:height "0px"}}]

      (= name "\n\n")
      [:div.w-full [:br]]

      ;; if it's not a phrase...
      (and (word :id)
           (not (u/word? name lang-word-regex)))
      [:span.mr-1 (str "" (word :name) " ")]

      (= is_not_a_word 1) ; ie - it's punctuation.
      [:span.mr-1 (str "" (word :name) " ")]

      :else
      [:span.relative {:on-click on-click}
       [:span {:class stz} (str " " (word :name) " ")]])))

(defn google-translate-view
  [{:keys [t-win-open? word-or-phrase]}]

  (let [stz           "absolute bottom-0 left-0 p-2 w-full text-center italic text-xs bg-white
                       hover:bg-gray-100 text-gray-800 border-t border-gray-300
                       dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-white"
        button-height 48
        iframe-height 368
        window-width  js/window.innerWidth
        window-height js/window.innerHeight]

    ;; only enable rendering google translate view when there is enough room
    ;; TODO: checking of window heighto only happens on render,
    ;; so handle for user resize of window.
    (when (and (> window-width 1000)
               (> window-height (+ iframe-height button-height 128)))
      [:div
       (if t-win-open?
         [:div
          [:div.border-b.absolute.left-0.w-full {:style {:bottom (str (+ iframe-height button-height) "px")}}]
          [:button {:class    stz
                    :style    {:height (- button-height 1)}
                    :on-click #(|> [(s-ev :t-win-close)])}
           "Close Translations"]]
         [:button {:class    stz
                   :style {:height (- button-height 1)}
                   :on-click #(|> [(s-ev :t-win-open)
                                   {:width           window-width
                                    :word-or-phrase  word-or-phrase
                                    :height          window-height
                                    :button-height   button-height
                                    :containerHeight iframe-height
                                    :containerWidth  (- (* 0.4 js/window.innerWidth) 1)}])}
          "Open Translations"])])))

(defn view-current-word
  "Displays the currently clicked on word/phrase for user editing. "
  [{:keys [current-word form]}]
  (let [t-win-open?               (<| [::subs/t-win-open?])
        currently-selected-phrase (<| [::subs/current-phrase]) ; current phrase as in, the one being underlined and is yet to be made a word.
        word-or-phrase            (or currently-selected-phrase current-word)
        word-or-phrase-text       (or (get word-or-phrase :name) (<| [::subs/current-phrase-text]))
        is-phrase                 (or currently-selected-phrase
                                      (u/is-phrase word-or-phrase))
        handle-submit             (fn [e]
                                    (.preventDefault e)
                                    (if is-phrase
                                      (|> [(s-ev :phrase-update) @form])
                                      (|> [(s-ev :word-update) @form])))]
    [:div {:class "bg-gray-50 w-full border-t md:border-t-0 md:flex md:w-2/5 md:relative border-l dark:border-gray-900 dark:bg-gray-800 dark:border-gray-700"}
     (when word-or-phrase
       [:div {:class "dark:bg-gray-800 w-full p-8 flex flex-col mx-auto"}
        [:div.static
         ;; current word or title text:
         [:div.h-16.flex.items-center
          [:div {:class (str "mb-8 w-full" (when-not is-phrase " text-xl"))} word-or-phrase-text]]
         [:form {:class "w-full" :on-submit handle-submit}
          [input {:placeholder   "Add Translation..."
                  :default-value (get word-or-phrase :translation "")
                  :value         (@form :translation)
                  :on-change     (fn [e] (swap! form assoc :translation (-> e .-target .-value)))}]

          ;; radio button
          [:div.my-2.flex.md:flex-col.lg:flex-row.xl:justify-between.flex-wrap
           (doall ;; needed for deref (@) in lazy for loop.
            (for [[comfort-int comfort-data] u/comfort-text-and-col
                  :let                       [{:keys [name text-col help-text]} comfort-data]]
              [:span {:class "flex items-center lg:w-1/2 xl:w-1/3"
                      :key comfort-int}
               [:input {:id        name
                        :type      "radio"
                        :value     comfort-int
                        :name      "group-1"
                        :checked   (= (@form :comfort) comfort-int)
                        :on-change (fn [e] (swap! form assoc :comfort (-> e .-target .-value int)))}]
               [:label {:for name
                        :title help-text
                        :class (str "text-sm p-0.5 pl-1 pr-2 " text-col)} (str name "(" (+ 1 comfort-int) ")")]]))]

          ;; submit update
          [:div.mt-4 [button {:type "submit"
                              :text (if is-phrase
                                      (if currently-selected-phrase  "Add phrase" "Update phrase")
                                      "Update Word")}]]]]
        [google-translate-view
         {:t-win-open?    t-win-open?
          :word-or-phrase (word-or-phrase :name)}]])]))
