(ns app.renderer.views.article
  (:require
   [app.renderer.components :as component]
   [app.renderer.events :as events :refer [|>]]
   [app.renderer.subs :as subs :refer [<|]]
   [app.shared.ipc-events :refer [s-ev]]
   [reagent.core :as r]
   [app.shared.util :as u]))

(defn pagination
  [{:keys [current_page total-pages]}]
  (let [curr-page (inc current_page)]
    [:div.text-sm.flex.items-center.justify-between.border-t.border-gray-300.dark:border-gray-700
     [:div.py-2.mx-4
      [component/button {:text "← Previous page"
                         :disabled? (= curr-page 1)
                         :on-click #(|> [(s-ev :article-change-page) :prev])}]]
     [:div.text-xs "Page " curr-page " / " total-pages]
     [:div.py-2.mx-4
      [component/button {:text "Next page →"
                         :disabled? (= curr-page total-pages)
                         :on-click #(|> [(s-ev :article-change-page) :next])}]]]))

(defn view
  "Displays a single article."
  []
  (let [sure-mark? (r/atom 0)
        loading?   (<| [::subs/loading?])]
    (fn []
      (when-not loading?
        (let [current-article     (<| [::subs/current-article])
              current-word        (<| [::subs/current-word])
              current-word-idx    (<| [::subs/current-word-idx])
              current-phrase-idxs (<| [::subs/current-phrase-idxs])
              current-phrase      (<| [::subs/current-phrase])
              lang-word-regex     (<| [::subs/current-language-word-regex])
              word-or-phrase      (or current-phrase current-word)
              shift-held?         (<| [::subs/shift-held?])
              form                (r/atom word-or-phrase)
              total-words         (count (get current-article :word-data))
              words-known         (count (filter (fn [word-data]
                                                   (or (not= 0 (word-data :comfort))
                                                       (not= nil (word-data :translation))))
                                                 (-> current-article :word-data)))
              ;; -- handlers -----

              handle-mark-all-known (fn []
                                      (case @sure-mark?
                                        0 (reset! sure-mark? 1)
                                        1 (do (|> [(s-ev :words-mark-all-known)])
                                              (reset! sure-mark? 0))))

              handle-word-click        (fn [word index]
                                  (if (and current-word shift-held?)
                                    (|> [::events/set-current-phrase index])
                                    (|> [::events/set-current-word {:word word :index index}])))
              {:keys [name word-data]} current-article]

          ;; -- Render ---
          [:div.flex.flex-col.md:flex-row.overflow-y-auto.flex-1
           [:div {:key "view-article" :class "flex flex-col flex-1 bg-white dark:bg-gray-800"}
            ;; metadata and actions
            [:div.flex.text-xs.px-4.border-b.border-gray-200.justify-between.px-8.py-2.dark:border-gray-900
             [:span (u/trunc-ellipse name 23)]
             [:span "Words recognized: " words-known " / " total-words]
             (if (= words-known total-words)
               [:span "All words known!"]
               [:span.cursor-pointer {:on-click handle-mark-all-known}
                (case @sure-mark? 0 "Mark all known?" 1 "You sure?")])]

            [:article {:key "view-article" :class "flex overflow-auto flex-col flex-1 bg-white dark:bg-gray-900"}
             [:div.leading-8.p-8.flex.flex-wrap.max-w-5xl.mx-auto
              {:style {:user-select (if shift-held? "none" "inherit")}}
              (map-indexed (fn [index word]
                             ^{:key (str word "-" index)}
                             [component/article-word
                              {:word                word
                               :current-word        current-word
                               :on-click            #(handle-word-click word index)
                               :index               index
                               :current-phrase-idxs current-phrase-idxs
                               :lang-word-regex     lang-word-regex
                               :current-word-idx    current-word-idx}]) word-data)]]
            [pagination current-article]]
           [component/view-current-word {:current-word current-word :form form}]])))))
