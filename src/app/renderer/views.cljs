(ns app.renderer.views
  (:require
   [reagent.core :as r]
   [app.shared.ipc-events :refer [shared-events]]
   [clojure.pprint :refer [pprint]]
   [app.renderer.subs :as subs :refer [<|]]
   [app.renderer.events :as events :refer [ |> ]]))


(defn view-nav
  []
  (let [nav! (fn [route] (|> [::events/navigate route]))]
    [:nav.w-full.bg-gray-200.text-xs.dark:bg-black.dark:text-gray-50
     [:div.inline-flex.p-2
      [:button.bg-gray-700.hover:bg-gray-700.text-white.font-bold.py-1.px-2.rounded-l
       {:on-click #(nav! "article-list")} "Articles"]
      [:button.bg-gray-700.hover:bg-gray-700.text-white.font-bold.py-1.px-2.rounded-r
       {:on-click #(nav! "article-create")} " +"]]]))

(defn loading-wheel
  "Bottom right absolute position loading whee."
  []
  (let [loading? (<| [::subs/loading?])
        div-stz "transition duration-500 flex bg-gray-50 text-xs shadow fixed bottom-0 right-0 p-2 m-2 rounded-md align-center tems-center"
        div-stz (if-not loading? (str "-bottom-16 " div-stz) (str "bottom-0 " div-stz))]
    [:div {:class div-stz}
     [:svg {:class "animate-spin text-blue-600", :style {:width "24px" :height "24px"} :xmlns "http://www.w3.org/2000/svg", :fill "none", :viewBox "0 0 24 24"}
      [:circle {:class "opacity-25", :cx "12", :cy "12", :r "10", :stroke "currentColor", :stroke-width "4"}]
      [:path {:class "opacity-75", :fill "currentColor", :d "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}]]]))

(defn container
  "This needs to have it's react-keys resolved."
  [children]
  [:div {:class "mt-24 flex flex-col w-8/12 mx-auto"}
   children])

(defn page-heading
  [text]
  [:h2.text-2xl.mb-2 text])

(defn view-article-list
  []
  (|> [(shared-events :articles-fetch) nil])
  (fn []
    (let [stz      {:class "table-cell border-b border-gray-100 py-2"}
          articles (<| [::subs/articles]  )
          nav! (fn [_ article]
                 (|> [(shared-events :article-fetch) article]))]
      [container
       [:div {:key "view-article-list"} ;; keep react happy.
        [:div.text-center [page-heading "Your articles"]]
        [:div.table.w-full.pt-8
         [:div.table-row
          [:div.font-bold stz "Article title"]
          [:div.font-bold stz "Excerpt"]]
         (when articles
           (map-indexed (fn [idx article]
                          [:div.table-row.cursor-pointer {:key idx :on-click #(nav! "article" article)}
                           [:div stz (article :name)]
                           [:div.max-w-xs.truncate stz (article :original)]]) articles))]]])))

(defn view-article-create
  []
  (let [input-stz    "w-full p-2 text-gray-700 dark:text-gray-50 border rounded-lg focus:outline-none text-sm my-2 dark:bg-gray-700 dark:text-white"
        form         (r/atom {:article "" :title "" :source ""})
        update-form  (fn [event k] (swap! form assoc k (-> event .-target .-value)))]
    (fn []
      [container
       [:div.flex.flex-col {:key "view-article-list"}
        [:div.text-center.mb-8 [page-heading "Create a new article"]]
        [:input
         {:class       input-stz
          :placeholder "Article Title"
          :type        "text"
          :value       (@form :title)
          :on-change   #(update-form %1 :title)}]
        [:input
         {:class       input-stz
          :placeholder "Article source"
          :type        "text"
          :value       (@form :source)
          :on-change   #(update-form %1 :source)}]
        [:textarea
         {:name        ""
          :class       input-stz
          :on-change   #(update-form %1 :article)
          :rows        8
          :placeholder "Paste article here..."}]
        [:button {:class    "dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 self-start text-xs bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 mt-2 border border-gray-400 rounded shadow"
                  :on-click #(|> [(shared-events :article-create) @form])
                  } "Submit"]]])))

(defn view-article-word
  "how single words are styled based on their familiarity/comfort."
  [word]
  (let [{:keys [name comfort _translation ]} word
        comfort-col {0 "bg-gray-200" 1 "bg-yellow-200" 2 "bg-blue-200" 4 "bg-green-200"}
        stz (str (comfort-col comfort) " border rounded-sm pl-1 mr-1")
        ]
    (cond
      (re-matches #"[!,\/?\.:]" name) [:span (str "" (word :name) " ")]
      (= name "\n") [:br]
      (= name "\n\n") [:div [:br]]
      :else  [:span {:class stz} (str " " (word :name) " ")]
      ))
  )

(defn view-article
  []
  (let [current-article (<| [::subs/current-article])
        {:keys [name source original word-data]} current-article]
    [:div.flex.overflow-y-auto.flex-1
     [:article {:key "view-article" :class "flex w-2/3  overflow-auto flex-col pb-8 pr-8 border-r" }
      [:div.text-center.mt-10 [page-heading name]]
      [:div.leading-8.max-w-prose.mx-auto
       (map-indexed (fn [index word]
                      ^{:key (str word "-" index)}
                      [view-article-word  word]) word-data)]]
     [:div {:class "w-1/3"} "Translation area."]
     ]))

(defn debug
  []
  [:div.flex.bg-gray-800.bg-opacity-100.fixed.bottom-0.p-2.rounded-sm
   [:button.bg-white.border.rounded.py-1.px-2.text-xs.text-red-500.hover:bg-red-500.hover:text-white
    {:on-click #(|> [(shared-events :wipe-db!)])} "wipe sql-db!"]])

(defn main-panel []
  (let [current-view (<| [::subs/current-view])]
    [:div.dark:bg-gray-800.dark:text-white.flex.flex-col.h-screen
     ;; fixed pos things
     [debug]
     [loading-wheel]
     ;; normal stuff.
     [view-nav]
     (case current-view
       "article-list"   [view-article-list]
       "article-create" [view-article-create]
       "article"        [view-article]
       )]))
