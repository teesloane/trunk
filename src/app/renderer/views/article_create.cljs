(ns app.renderer.views.article-create
  (:require
   [app.renderer.components :as component]
   [app.renderer.events :as events :refer [|>]]
   [app.shared.ipc-events :refer [s-ev]]
   [reagent.core :as r]))


(defn view
  []
  (let [
        form         (r/atom {:article "" :title "" :source ""})
        handle-submit (fn [e]
                        (.preventDefault e)
                        (|> [(s-ev :article-create) @form]))
        update-form  (fn [event k]
                       (swap! form assoc k (-> event .-target .-value)))]
    (fn []
      [component/container
       [:div
        [component/page-heading "Create a new text"]
        [:form.flex.flex-col {:key "view-article-list" :on-submit handle-submit }

         [component/input {:placeholder "Text Title"
                           :type        "text"
                           :value       (@form :title)
                           :on-change   #(update-form %1 :title)}]

         [component/input {:placeholder "Text source"
                           :type        "text"
                           :value       (@form :source)
                           :on-change   #(update-form %1 :source)}]
         [component/textarea
          {:name        ""
           :on-change   #(update-form %1 :article)
           :rows        8
           :placeholder "Paste text here..."}]
         [component/button {:type "submit"
                            :text "Submit"}]]]])))
