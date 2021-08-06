(ns renderer.core
  (:require
   [reagent.core :as r]
   [clojure.string :as str]
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
  [:nav
   [:button {:on-click #(navigate! "article-list")} "Articles"]
   [:button {:on-click #(navigate! "article-create")} "New +"]])

(defn view-article-list
  []
  [:div
   (map (fn [article]
          [:div
           [:div (article :title)]
           [:div (article :content)]]) (@app-db :articles))])

(defn view-article-create
  []
  [:div
   [:textarea]
   [:button {:on-click #(ipc/send! "<-article-create" "payload")} "Submit"]]
  )

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


