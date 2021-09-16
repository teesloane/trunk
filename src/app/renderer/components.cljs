(ns app.renderer.components
  (:require
   [app.renderer.events :as events :refer [|>]]
   [app.renderer.subs :as subs :refer [<|]]
   [app.shared.ipc-events :refer [s-ev]]
   [app.shared.util :as u]))

(defn button
  [{:keys [on-click text]}]
  (let [styles "dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 self-start text-xs bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 mt-2 border border-gray-400 rounded shadow"]
    [:button {:class styles :on-click on-click} text]))

(defn toast
  [msg]
  (let [styles "fixed bottom-0 right-0 mr-4 mb-4 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 self-start text-xs bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 mt-2 border border-gray-400 rounded-sm shadow"]
    (when-not (= msg "")
      [:div {:class styles} msg])))

(defn container
  "This needs to have it's react-keys resolved."
  [children]
  [:div {:class "mt-8 flex flex-col p-8 w-full md:w-10/12 lg:w-8/12  mx-auto"}
   children])

(defn empty-state
  [children]
  [:div.flex.flex-col.h-screen.justify-center.items-center
   [:div.my-4 "Trunk logo"]
   [:div children]])

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
                         {:text (get current-article :name) :id "article"}]]
    [:nav.bg-white.w-full.text-xs.dark:bg-black.dark:text-gray-50.border-b.px-4
     [:div.inline-flex
      (for [l links :when l]
        [nav-link {:on-click     #(nav! (l :id))
                   :text         (l :text)
                   :current-view current-view
                   :id           (l :id)}])]]))

(defn page-heading
  [text]
  [:h2.text-2xl.mb-2 text])

(defn article
  "Display a single article in the article list view."
  [{:keys [name source original last_opened date_created]}]
  (let [metadata {"Last opened: "  (u/date-unix->readable last_opened)
                  "Date created: " (u/date-unix->readable date_created)}]
    [:div.mb-8.bg-white.p-4.border.shadow-sm.hover:shadow.text-gray-400.hover:text-gray-900
     [:div.text-xl.py-1.text-black name]
     [:div.text-sm
      [:div.flex
       (map-indexed (fn [idx [k v]]
                      [:div.text-xs
                       [:span k v]
                       (when-not (= (count metadata) (inc idx))
                         [:span.mx-2 "|"])]) metadata)]
      [:div.pt-4.italic (u/trunc-ellipse original 200)]]]))

(defn article-word
  "how single words are styled based on their familiarity/comfort."
  [{:keys [word current-word index current-word-idx on-click]}]
  (let [{:keys [name comfort _translation]} word
        comfort-col                          {0 "bg-gray-300" 1 "bg-red-300" 2 "bg-yellow-300" 3 "bg-green-300" 4 "bg-opacity-0 border-0"}
        stz                                  (str (comfort-col comfort) " border-b border-transparent pl-1 p-0.5 mr-1 cursor-pointer bg-opacity-25 hover:bg-opacity-50")
        is-current-word                      (and (= (dissoc word :comfort) (dissoc current-word :comfort))
                                                  (= index current-word-idx))
        ;; this is not working for some reason...
        stz                                  (if is-current-word
                                               (str " border-black " stz)
                                               (str "  " stz))]
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
