(ns app.renderer.views
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]
   [app.shared.ipc-events :refer [shared-events]]
   [app.renderer.subs :as subs :refer [<|]]
   [app.renderer.events :as events :refer [ |> ]]))


(defn view-nav
  []
  (let [nav! (fn [route] (|> [::events/navigate route]))]
    [:nav.w-full.bg-gray-200.text-xs
     [:div.inline-flex.p-2
      [:button.bg-gray-700.hover:bg-gray-800.text-white.font-bold.py-1.px-2.rounded-l
       {:on-click #(nav! "article-list")} "Articles"]
      [:button.bg-gray-700.hover:bg-gray-800.text-white.font-bold.py-1.px-2.rounded-r
       {:on-click #(nav! "article-create")} " +"]]]))

(defn loading
  []
  [:div "Loading..."]
  )

(defn container
  "This needs to have it's react-keys resolved."
  [children]
  [:div {:class "mt-8 flex flex-col w-9/12 mx-auto"}
   children])

(defn page-heading
  [text]
  [:h2.text-2xl.mb-2 text])

(defn view-article-list
  []
  (|> [(shared-events :articles-fetch) nil])
  (fn []
    (let [stz      {:class "table-cell border-b border-gray-100 py-2"}
          loading? (<| [::subs/articles-loading?])
          articles (<| [::subs/articles]  )
          ]
      [container
       [:div {:key "view-article-list"} ;; keep react happy.
        [:div.text-center [page-heading "Your articles"]]
        [:div.table.w-full.pt-8
         [:div.table-row
          [:div.font-bold stz "Article title"]
          [:div.font-bold stz "Excerpt"]]
         (if loading?
           [loading]
           (map-indexed (fn [idx article]
                  [:div.table-row {:key idx}
                   [:div stz (article :name)]
                   [:div.max-w-xs.truncate stz (article :original)]]) articles))]] ])))

(defn view-article-create
  []
  (let [article-text (r/atom "")
        handle-change #(reset! article-text (-> % .-target .-value))]
    (fn []
      [container
       [:div {:key "view-article-list"}
        [:div.text-center [page-heading "Create a new article"]]
        [:textarea.w-full.p-3.text-gray-700.border.rounded-lg.focus:outline-none.text-sm.my-6
         {:name @article-text :on-change handle-change :rows 8 :placeholder "Paste article here..."}]
        [:button {:class "text-xs bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-400 rounded shadow"
                  :on-click #(|> [(shared-events :article-create) @article-text]) #_(ipc/article-create @article-text)
                  } "Submit"]]])))


(defn debug
  []
  [:div.flex.w-full.bg-gray-800.bg-opacity-100.fixed.bottom-0.p-2
   [:button.bg-white.border.rounded.py-1.px-2.text-xs.text-red-500.hover:bg-red-500.hover:text-white
    {:on-click #(|> [(shared-events :wipe-db!)])} "wipe sql-db!"]
   ])

(defn main-panel []
  (let [current-view (<| [::subs/current-view])]
    [:div
     [view-nav]
     [debug]
     (case current-view
       "article-list"   [view-article-list]
       "article-create" [view-article-create]
       )]))
