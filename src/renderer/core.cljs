(ns renderer.core
  (:require
   [reagent.core :as r]
   [renderer.ipc :as ipc]
   [reagent.dom :as rd]))

(defonce app-db
  (r/atom {:current-view "article-list"
           :articles [{:title "Article 1" :content "Pretium varius nam diam urna est arcu"}
                      {:title "Article 2" :content "Posuere suspendisse phasellus sociosqu sed sollicitudin nam"}
                      ]}))

(defn navigate!
  [destination]
  (swap! app-db assoc :current-view destination))

(defn view-nav
  []
  [:nav.inline-flex
   [:button.bg-gray-300.hover:bg-gray-400.text-gray-800.font-bold.py-2.px-4.rounded-l {:on-click #(navigate! "article-list")} "Articles"]
   [:button.bg-gray-300.hover:bg-gray-400.text-gray-800.font-bold.py-2.px-4.rounded-r {:on-click #(navigate! "article-create")} " +"]]
)

(defn view-article-list
  []
  [:div
   (map (fn [article]
          [:div
           [:div (article :title)]
           [:div (article :content)]]) (@app-db :articles))])

(defn view-article-create
  []
  (let [article-text (r/atom "foo")
        handle-change #(reset! article-text (-> % .-target .-value))]
    (fn []
      [:div
       [:textarea {:name @article-text :on-change handle-change}]
       [:div "hi there ->" @article-text]
       [:button {:class "text-xs bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-400 rounded shadow"
                 :on-click #(ipc/send! "<-article-create" @article-text)} "Submit"]])))

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
   [views]])

(defn ^:dev/after-load start! []
  (ipc/init)
  (rd/render
   [root-component]
   (js/document.getElementById "app-container")))


