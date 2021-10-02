(ns app.renderer.components
  (:require
   [app.renderer.events :as events :refer [|>]]
   [app.renderer.subs :as subs :refer [<|]]
   [app.shared.ipc-events :refer [s-ev]]
   [app.shared.util :as u]))



(defn toast
  [msg]
  (let [styles "fixed bottom-0 right-0 mr-4 mb-4 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 self-start text-xs bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 mt-2 border border-gray-400 rounded-sm shadow"]
    (when-not (= msg "")
      [:div {:class styles} msg])))

(defn container
  "This needs to have it's react-keys resolved."
  [children]
  [:div {:class "mt-8 flex flex-col p-8 w-full md:w-10/12 lg:w-8/12  mx-auto max-w-screen-xl"}
   children])

(def icons
  {:chevron-up   "chevron-up.svg"
   :chevron-down "chevron-down.svg"
   :check        "check.svg"
   })

(defn icon
  ""
  [{:keys [size icon on-click]}]
  [:img {:class (if on-click "cursor-pointer" "")
         :src (str "img/icons/" (get icons icon))
         :on-click on-click
         :style    {:width  (or size 32)
                    :height (or size 32)}}])

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
        links           [{:text "Read" :id "article-list"}
                         {:text "Create Article" :id "article-create"}
                         {:text "Words" :id "words"}
                         {:text (get current-article :name) :id "article"}]]
    [:nav.bg-white.w-full.text-xs.dark:bg-black.dark:text-gray-50.border-b.px-4
     [:div.flex.items-center
      [trunk-logo {:width 24}]
      [:div.flex.ml-8
       (for [l links :when l]
         ^{:key (l :id)}
          [nav-link {:on-click     #(nav! (l :id))
                     :text         (l :text)
                     :current-view current-view
                     :id           (l :id)}])]]]))

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
      (u/is-punctuation? name)
      [:span.mr-1 (str "" (word :name) " ")] ; punctuation

      ;; newlines that are just from textarea...
      (= name "\n")
      [:br]

      (= name "\n\n")
      [:div.w-full [:br]]

      :else
      [:span.relative {:on-click on-click}
       [:span {:class stz} (str " " (word :name) " ")]])))


(defn google-translate-view
  [{:keys [t-win-open? current-word]}]

  (let [stz           "absolute bottom-0 left-0 p-2 w-full text-center italic text-xs bg-white hover:bg-gray-100 text-gray-800 border-t border-gray-300 "
        button-height 33
        iframe-height 448
        window-width  js/window.innerWidth
        window-height js/window.innerHeight
        ]

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
                                    :containerWidth  (* 0.4 js/window.innerWidth)}])}
          "Open Translations"])])))
