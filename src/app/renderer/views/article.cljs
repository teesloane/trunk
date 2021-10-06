(ns app.renderer.views.article
  (:require
   [app.renderer.components :as component]
   [app.renderer.events :as events :refer [|>]]
   [app.renderer.subs :as subs :refer [<|]]
   [app.shared.ipc-events :refer [s-ev]]
   [reagent.core :as r]
   [app.shared.util :as u]))

(defn view
  "Displays a single article."
  []
  (let [current-article          (<| [::subs/current-article])
        current-word             (<| [::subs/current-word])
        current-word-idx         (<| [::subs/current-word-idx])
        form                     (r/atom current-word)
        total-words              (-> current-article :word-data count)
        words-known              (count (filter (fn [word-data]
                                                  (or (not= 0 (word-data :comfort))
                                                      (not= nil (word-data :translation))))
                                                (-> current-article :word-data)))
        {:keys [name word-data]} current-article]
    [:div.flex.flex-col.md:flex-row.overflow-y-auto.flex-1
     [:article {:key "view-article" :class "flex md:w-3/5 overflow-auto flex-col flex-1 p-8 bg-white"}
      [component/page-heading (u/trunc-ellipse name 50)]

      ;; metadata and actions
      [:div.flex.text-xs.px-4.border-b.border-gray-200.pb-4.mb-8.justify-between
       [:span "Words recognized: " words-known " / " total-words]
       ;; TODO: leaving off...
       ;; [:span "Mark all known?"]
       ]

      [:div.leading-8.px-4.flex.flex-wrap.max-w-5xl.mx-auto
       (map-indexed (fn [index word]
                      ^{:key (str word "-" index)}
                      [component/article-word
                       {:word             word
                        :current-word     current-word
                        :on-click         #(|> [::events/set-current-word {:word word :index index}])
                        :index            index
                        :current-word-idx current-word-idx}]) word-data)]]
     [component/view-current-word {:current-word current-word :form form}]]))
