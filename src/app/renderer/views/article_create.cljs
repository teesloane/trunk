(ns app.renderer.views.article-create
  (:require
   [app.renderer.components :as component]
   [app.renderer.events :as events :refer [|>]]
   [app.shared.ipc-events :refer [s-ev]]
   [reagent.core :as r]))


(defn view
  []
  (let [input-stz    "w-full p-2 text-gray-700 dark:text-gray-50 border focus:outline-none text-sm mb-4 dark:bg-gray-700 dark:text-white"
        form         (r/atom {:article "" :title "" :source ""})
        update-form  (fn [event k]
                       (swap! form assoc k (-> event .-target .-value)))]
    (fn []
      [component/container
       [:div.flex.flex-col {:key "view-article-list"}
        [component/page-heading "Create a new article"]
        [:input
         {:class       input-stz
          :placeholder "Article Title"
          :type        "text"
          :value       (@form :title)
          :on-change   #(update-form %1 :title)}]
        [:input
         {:class       input-stz
          :placeholder "Article source"
          :type        "text"
          :value       (@form :source)
          :on-change   #(update-form %1 :source)}]
        [:textarea
         {:name        ""
          :class       input-stz
          :on-change   #(update-form %1 :article)
          :rows        8
          :placeholder "Paste article here..."}]
        [component/button {:on-click #(|> [(s-ev :article-create) @form])
                           :text "Submit"}]]])))
