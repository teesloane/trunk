(ns app.renderer.views.article-list
(:require
 [app.renderer.components :as component]
 [app.renderer.events :as events :refer [|>]]
 [app.renderer.subs :as subs :refer [<|]]
 [app.shared.util :as u]
 [app.shared.ipc-events :refer [s-ev]]))


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
            (map-indexed (fn [idx item]
                           [:div.cursor-pointer.mb-4 {:key idx :on-click #(nav! "article" item)}
                            [article item]]) articles))]]))))
