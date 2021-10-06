(ns app.renderer.views.index
  (:require
   [app.renderer.components :as component]
   [app.renderer.events :as events :refer [|>]]
   [app.renderer.subs :as subs :refer [<|]]
   [app.renderer.views.article :as article]
   [app.renderer.views.article-create :as article-create]
   [app.renderer.views.article-list :as article-list]
   [app.renderer.views.words :as words]
   [app.shared.util :as u]
   [app.shared.ipc-events :refer [s-ev]]))

(defn loading-wheel
  "Bottom right absolute position loading wheel."
  []
  (let [loading? (<| [::subs/loading?])
        div-stz "transition duration-500 flex bg-gray-50 text-xs shadow fixed bottom-0 right-0 p-2 m-2 rounded-md align-center tems-center"
        div-stz (if-not loading? (str "-bottom-16 " div-stz) (str "bottom-0 " div-stz))]
    [:div {:class div-stz}
     [:svg {:class "animate-spin text-blue-600", :style {:width "24px" :height "24px"} :xmlns "http://www.w3.org/2000/svg", :fill "none", :viewBox "0 0 24 24"}
      [:circle {:class "opacity-25", :cx "12", :cy "12", :r "10", :stroke "currentColor", :stroke-width "4"}]
      [:path {:class "opacity-75", :fill "currentColor", :d "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}]]]))

(defn debug
  "Button for erasing the database"
  []
  [:div.flex.fixed.bottom-0.p-2.rounded-sm
   [:button.bg-white.border.rounded.py-1.px-2.text-xs.text-red-500.hover:bg-red-500.bg-opacity-25.hover:text-white
    {:on-click #(|> [(s-ev :wipe-db!)])} "wipe sql-db!"]])

(defn main-panel []
  (let [current-view (<| [::subs/current-view])]
    [:div.dark:bg-gray-800.dark:text-white.flex.flex-col.h-screen.bg-gray-50
     ;; fixed pos things
     (when u/debug? [debug])
     [loading-wheel]
     [component/nav {:current-view current-view}]
     ;; Navigate!
     (case current-view
       "article-list"   [article-list/view]
       "article-create" [article-create/view]
       "article"        [article/view]
       "words"          [words/view]
       nil              [article-list/view])]))
