(ns app.renderer.views.article-list
(:require
 [app.renderer.components :as component]
 [app.renderer.events :as events :refer [|>]]
 [app.renderer.subs :as subs :refer [<|]]
 [app.shared.ipc-events :refer [s-ev]]))


(defn view
  []
  (|> [(s-ev :articles-get) nil])
  (fn []
    (let [articles (<| [::subs/articles])
          nav!     (fn [_ article]
                     (|> [(s-ev :article-get) article]))]
      (if (empty? articles)
        [component/empty-state
         [:div.text-center.text-gray-400
          [:div "You haven't made any articles yet."]
          [:div
           [:span "Click " [:span.font-bold.text-gray-700 "\"Create Article\""] [:span " above to get started."]]]]]
        [component/container
         [:div {:key "view-article-list"} ;; keep react happy.
          [:div.text-center.mb-16 [component/page-heading "Your articles"]]
          (when articles
            (map-indexed (fn [idx article]
                           [:div.cursor-pointer.mb-4 {:key idx :on-click #(nav! "article" article)}
                            [component/article article]]
                           ) articles))]]))))
