(ns app.renderer.views.index
  (:require
   [app.renderer.components :as component]
   [app.renderer.events :as events :refer [|>]]
   [app.renderer.subs :as subs :refer [<|]]
   [app.renderer.views.article :as article]
   [app.renderer.views.article-create :as article-create]
   [app.renderer.views.article-list :as article-list]
   [app.renderer.views.settings :as settings]
   [app.renderer.views.words :as words]
   [app.shared.util :as u]
   [app.shared.ipc-events :refer [s-ev]]))


(defn debug
  "Button for erasing the database"
  []
  [:div.flex.fixed.bottom-0.p-2.rounded-sm
   [:button.bg-white.border.rounded.py-1.px-2.text-xs.text-red-500.hover:bg-red-500.hover:text-white
    {:on-click #(|> [(s-ev :wipe-db!)])} "wipe sql-db!"]])

(defn main-panel []
  (let [current-view (<| [::subs/current-view])]
    [:div.dark:bg-gray-900.dark:text-white.flex.flex-col.h-screen.bg-gray-50
     ;; fixed pos things
     ;; (when u/debug? [debug])
     [component/loading-wheel]
     [component/nav {:current-view current-view}]
     ;; Navigate!
     (case current-view
       "article-list"   [article-list/view]
       "article-create" [article-create/view]
       "article"        [article/view]
       "words"          [words/view]
       "settings"       [settings/view]
       [article-list/view])]))
