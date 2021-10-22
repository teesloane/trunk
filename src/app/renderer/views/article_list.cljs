(ns app.renderer.views.article-list
  (:require
   [app.renderer.components :as component]
   [app.renderer.events :as events :refer [|>]]
   [app.renderer.subs :as subs :refer [<|]]
   [app.shared.ipc-events :refer [s-ev]]
   [app.shared.util :as u]
   [reagent.core :as r]
   [re-frame.core :as rf]
   [clojure.string :as str]))

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
      [:div {:class "mb-4 text-gray-900 bg-white p-4 border-gray-100 border shadow-sm hover:shadow dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-50" }
       [:div.text-md.py-1 (u/trunc-ellipse name 50)]
       [:div.text-sm
        [:div.flex.justify-between
         [:div.flex
          (when-let [x (u/date-unix->readable last_opened)]
            [:div.text-xs "Last opened: " x [:span.mx-2 "|"]])
          [:div.text-xs " Date created: " (u/date-unix->readable date_created)]]
         [:div.text-xs.opacity-50.hover:opacity-100.text-red-800.hover:text-red-500.dark:text-red-400
          {:on-click handle-delete}
          (case @sure? 0 "Delete" 1 "Sure?")]]
        [:div.pt-2.italic (u/trunc-ellipse original 100)]]])))

(defn view
  []
  (let [search-query (r/atom "")
        loading?     (rf/subscribe [::subs/loading?])]
    (when-not @loading? (|> [(s-ev :articles-get) nil]))
    (fn []
      (let [articles (<| [::subs/articles])
            articles (if-not (empty? @search-query)
                       (filter (fn [article] (str/includes? (article :name) @search-query)) articles)
                       articles)
            nav!     (fn [_ article] (|> [(s-ev :article-get) article]))]
        (when-not @loading?
          (if (and (empty? articles)
                   (empty? @search-query))
            [component/empty-state-with-msg]
            [component/container
             [:div {:key "view-article-list"} ;; keep react happy.
              [component/page-heading "Your articles"]
              [component/input
               {:placeholder "Search articles..."
                :value @search-query :on-change #(reset! search-query (-> % .-target .-value))}]
              (when articles
                (map-indexed (fn [_ item]
                               [:div.cursor-pointer.mb-4
                                {:key (item :article_id) :on-click #(nav! "article" item)}
                                [article item]]) articles))]]))))))
