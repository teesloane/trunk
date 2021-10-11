(ns app.renderer.views.article-list
  (:require
   [app.renderer.components :as component]
   [app.renderer.events :as events :refer [|>]]
   [app.renderer.subs :as subs :refer [<|]]
   [app.shared.ipc-events :refer [s-ev]]
   [app.shared.util :as u]
   [reagent.core :as r]
   [re-frame.core :as rf]))

(defn article
  "Display a single article in the article list view."
  [{:keys [article_id]}]
  (let [sure?    (r/atom 0)
        handle-delete (fn [event]
                        (.stopPropagation event)
                        (cond
                          (= 0 @sure?) (reset! sure? 1)
                          (= 1 @sure?) (|> [(s-ev :article-delete) article_id])))]
    (fn
      [{:keys [name original last_opened date_created]}]
      [:div.mb-8.bg-white.p-4.border.shadow-sm.hover:shadow.text-gray-400.hover:text-gray-900
       [:div.text-md.py-1.text-black (u/trunc-ellipse name 50)]
       [:div.text-sm
        [:div.flex.justify-between
         [:div.flex
          (when-let [x (u/date-unix->readable last_opened)]
            [:div.text-xs "Last opened: " x [:span.mx-2 "|"]])
          [:div.text-xs " Date created: " (u/date-unix->readable date_created)]]
         [:div.text-xs.opacity-50.hover:opacity-100.text-red-800.hover:text-red-500
          {:on-click handle-delete}
          (case @sure? 0 "Delete" 1 "Sure?")]]
        [:div.pt-2.italic (u/trunc-ellipse original 100)]]])))

(defn view
  []
  (let [search-query (r/atom "")
        loading?     (rf/subscribe [::subs/loading?])]
    (fn []
      (let [articles (<| [::subs/articles])
            nav!     (fn [_ article] (|> [(s-ev :article-get) article]))]
        (when-not @loading?
          (if (empty? articles)
            [component/empty-state-with-msg]
            [component/container
             [:div {:key "view-article-list"} ;; keep react happy.
              [component/page-heading "Your articles"]
              [:div "search query: " @search-query]
              [:input {:value @search-query :on-change #(reset! search-query (-> % .-target .-value))}]
              (when articles
                (map-indexed (fn [idx item]
                               [:div.cursor-pointer.mb-4
                                {:key (item :article_id) :on-click #(nav! "article" item)}
                                [article item]]) articles))]]))))))
