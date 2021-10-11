(ns app.renderer.components
  (:require
   [app.renderer.events :as events :refer [|>]]
   [app.renderer.subs :as subs :refer [<|]]
   [app.shared.ipc-events :refer [s-ev]]
   [app.shared.util :as u]))

(defn toast
  [msg]
  (let [classes "px-4 h-full flex items-center"]
    (if (= msg "")
      [:div {:class (str classes) } msg]
      [:div {:class (str classes " fade-in-fade-out") } msg])))

(defn container
  "This needs to have it's react-keys resolved."
  [children]
  [:div {:class "flex flex-col p-8 w-full md:w-10/12 lg:w-8/12  mx-auto max-w-screen-xl"}
   children])

(def icons
  {:chevron-up   "chevron-up.svg"
   :chevron-down "chevron-down.svg"
   :check        "check.svg"})


(defn card
  [{:keys [header]} body]
  [:div.bg-white.border {:key header}
   [:div.border-b.px-4.py-2.text-sm.font-bold [:span header]]
   [:div.p-4 body]])

(defn icon
  ""
  [{:keys [size icon on-click]}]
  [:img {:class (if on-click "cursor-pointer" "")
         :src (str "img/icons/" (get icons icon))
         :on-click on-click
         :style    {:width  (or size 32)
                    :height (or size 32)}}])

(defn loading-intercept
  [msg]
  [:div.h-screen.w-100.flex.items-center.justify-center.text-sm.text-gray.600 msg])

(defn button
  [{:keys [on-click text icon-name icon-size]}]
  (let [styles "dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 self-start text-xs bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-400 rounded shadow"]
    [:button
     {:class styles :on-click on-click}
     (if icon-name
       [:span [icon {:icon icon-name :size (or icon-size 18)}] [:span text]]
       text)]))

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
    :or   {top-line    "You haven't created any articles yet."
           bottom-line "Click \"Create Article\" above to get started."}}]
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
        current-article (<| [::subs/current-article])
        toast-msg       (<| [::subs/toast])
        links           [{:text "Read" :id "article-list"}
                         {:text "Create Article" :id "article-create"}
                         {:text "Words" :id "words"}
                         {:text "Settings" :id "settings"}
                         {:text (u/trunc-ellipse (get current-article :name) 25)
                          :id "article"}]]
    [:nav.bg-white.w-full.text-xs.dark:bg-black.dark:text-gray-50.border-b
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
  [{:keys [word current-word index current-word-idx on-click]}]
  (let [{:keys [name comfort _translation]} word
        stz                                  (str (u/get-comfort-bg-col comfort) " border-b border-transparent pl-1 p-0.5 mr-1 cursor-pointer bg-opacity-25 hover:bg-opacity-50")
        is-current-word                      (and (= (dissoc word :comfort) (dissoc current-word :comfort))
                                                  (= index current-word-idx))
        stz                                  (if is-current-word (str " border-black " stz) (str "  " stz))]
    (cond
      ;; newlines that are just from textarea...
      (= name "\n")
      [:div.w-full {:style {:height "0px"}}]

      (= name "\n\n")
      [:div.w-full [:br]]

      (not (u/word? name)) ;; anything that's not a word (punctuation, numbers...)
      [:span.mr-1 (str "" (word :name) " ")]

      :else
      [:span.relative {:on-click on-click}
       [:span {:class stz} (str " " (word :name) " ")]])))

(defn google-translate-view
  [{:keys [t-win-open? current-word]}]

  (let [stz           "absolute bottom-0 left-0 p-2 w-full text-center italic text-xs bg-white hover:bg-gray-100 text-gray-800 border-t border-gray-300 "
        button-height 33
        iframe-height 428
        window-width  js/window.innerWidth
        window-height js/window.innerHeight]

    ;; only enable rendering google translate view when there is enough room
    ;; TODO: checking of window heighto only happens on render,
    ;; so handle for user resize of window.
    (when (and (> window-width 1000)
               (> window-height (+ iframe-height button-height 64)))
      [:div
       (if t-win-open?
         [:div
          [:div.border-b.absolute.left-0.w-full {:style {:bottom (str (+ iframe-height button-height) "px")}}]
          [:button {:class    stz
                    :style    {:height (- button-height 1)}
                    :on-click #(|> [(s-ev :t-win-close)])}
           "Close Translations"]]
         [:button {:class    stz
                   :on-click #(|> [(s-ev :t-win-open)
                                   {:width           window-width
                                    :current-word    current-word
                                    :height          window-height
                                    :button-height   button-height
                                    :containerHeight iframe-height
                                    :containerWidth  (- (* 0.4 js/window.innerWidth) 1)}])}
          "Open Translations"])])))

(defn view-current-word
  "Displays the currently mousedover / clicked on word for user editing."
  [{:keys [current-word form]}]
  (let [t-win-open?   (<| [::subs/t-win-open?])
        handle-submit (fn [e]
                        (.preventDefault e)
                        (|> [(s-ev :word-update) @form]))
        input-stz     "w-full text-gray-700 dark:text-gray-50 border rounded-xs focus:outline-none text-md md:p-2 md:mb-4 dark:bg-gray-700 dark:text-white"]
    [:div {:class "bg-gray-50 w-full border-t md:border-t-0 md:flex md:w-2/5 md:relative border-l"}

     (when current-word
       [:div {:class "w-full p-8 flex flex-col mx-auto"}
        [:div.static
         [:div {:class "text-2xl mb-8 w-full"} (current-word :name)]
         [:form {:class "w-full" :on-submit handle-submit}
          [:input {:class         input-stz
                   :placeholder   "Add Translation..."
                   :default-value (current-word :translation)
                   :value         (@form :translation)
                   :on-change     (fn [e] (swap! form assoc :translation (-> e .-target .-value)))}]

         ;; radio button
          [:div.my-2.flex.md:flex-col.xl:flex-row.xl:justify-between
           (doall ;; needed for deref (@) in lazy for loop.
            (for [[comfort-int comfort-data] u/comfort-text-and-col
                  :let                       [{:keys [name text-col]} comfort-data]]
              [:span.flex.xl:justify-between.items-center.mr-2 {:key comfort-int}
               [:input {:id        name
                        :type      "radio"
                        :value     comfort-int
                        :name      "group-1"
                        :checked   (= (@form :comfort) comfort-int)
                        :on-change (fn [e] (swap! form assoc :comfort (-> e .-target .-value int)))}]
               [:label {:for name :class (str "text-sm p-0.5 pl-1 " text-col)} (str name "(" (+ 1 comfort-int) ")")]]))]

         ;; submit update
          [:div.mt-4 [button {:type "submit" :text "Update Word"}]]]]
        [google-translate-view
         {:t-win-open?  t-win-open?
          :current-word (current-word :name)}]])]))
