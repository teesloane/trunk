(ns app.renderer.core
  (:require
   [reagent.core :as r]
   [app.renderer.ipc :as ipc]
   [reagent.dom :as rd]))

(defonce app-db
  (r/atom {:current-view "article-list"
           :articles [{:title "Article 1" :content "Pretium varius nam diam urna est arcu"}
                      {:title "Article 2" :content "Posuere suspendisse phasellus sociosqu sed sollicitudin nam Sem purus vestibulum dignissim mattis convallis sociosqu Habitasse ac sollicitudin tempor et commodo nostra"}
                      ]}))

(defn navigate!
  [destination]
  (swap! app-db assoc :current-view destination))

(defn view-nav
  []
  [:nav.w-full.bg-gray-200.text-xs
   [:div.inline-flex.p-2
    [:button.bg-gray-700.hover:bg-gray-800.text-white.font-bold.py-1.px-2.rounded-l {:on-click #(navigate! "article-list")} "Articles"]
    [:button.bg-gray-700.hover:bg-gray-800.text-white.font-bold.py-1.px-2.rounded-r {:on-click #(navigate! "article-create")} " +"]]]
  )

(defn container
  [& children]
  [:div {:class "mt-8 flex flex-col w-9/12 mx-auto"}
   children])

(defn page-heading
  [text]
  [:h2.text-2xl.mb-2 text])

(defn view-article-list
  []
  (ipc/articles-get)
  (let [stz {:class "table-cell border-b border-gray-100 py-2"}]
    [container
     [:div.text-center [page-heading "Your articles"]]
     [:div.table.w-full.pt-8
      [:div.table-row
       [:div.font-bold stz "Article title"]
       [:div.font-bold stz "Excerpt"]]
      (map (fn [article]
             [:div.table-row
              [:div stz (article :title)]
              [:div.max-w-xs.truncate stz (article :content)]]) (@app-db :articles))]]))

(defn view-article-create
  []
  (let [article-text (r/atom "foo")
        handle-change #(reset! article-text (-> % .-target .-value))]
    (fn []
      [container
       [:div
        [:div.text-center [page-heading "Create a new article"]]
        [:textarea.w-full.p-3.text-gray-700.border.rounded-lg.focus:outline-none.text-sm.my-6
         {:name @article-text :on-change handle-change :rows 8 :placeholder "Paste article here..."}]
        [:button {:class "text-xs bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-400 rounded shadow"
                  :on-click #(ipc/article-create @article-text)} "Submit"]]])))

(defn views
  []
  (case (@app-db :current-view)
    "article-list"   [view-article-list]
    "article-create" [view-article-create]
    ))

(defn root-component []
  []
  [:main
   [view-nav]
   [:div.p-2
    [views]]])

(defn ^:dev/after-load start! []
  (ipc/init)
  (rd/render
   [root-component]
   (js/document.getElementById "app-container")))


