(ns app.renderer.views.words
  (:require
   [app.renderer.components :as component]
   [app.renderer.events :as events :refer [|>]]
   [app.renderer.subs :as subs :refer [<|]]
   [app.shared.ipc-events :refer [s-ev]]
   [app.shared.specs :as specs]
   [app.shared.util :as u]
   [reagent.core :as r]
   [clojure.string :as str]))

(defn cell
  ([child]
   [cell {} child])
  ([props child]
   [:td.flex.w-full.border-r.border-b.items-center.p-1.dark:border-gray-700 props child]))

(defn- set-current-word
  [props idx]
  (|> [::events/set-current-word {:word (specs/m->word props) :index idx}]))

(defn word-row
  [{:keys [name comfort translation word-idx count current-row] :as props}]
  (let [comfort-styles (str "inline-flex rounded-full ml-2 h-2 w-2 border dark:border-gray-700 "
                            (u/get-comfort-bg-col comfort))
        handle-click   (fn [props word-idx]
                         (set-current-word props word-idx)
                         (reset! current-row word-idx))]
    [:tr
     {:key      word-idx :style {:font-size "13px"}
      :class    (str "flex w-full cursor-pointer" (when (= word-idx @current-row) " bg-gray-50 dark:bg-gray-700 "))
      :on-click #(handle-click props word-idx)}
     [cell {:class "w-4/12"} [:div.p-1 (str/lower-case name)]]
     [cell {:class "w-4/12"} [:div.p-1 translation]]
     [cell {:class "w-2/12"}
      [:span.flex.items-center.p-1
       [:span (inc comfort)]
       [:span {:class comfort-styles}]
       #_[:span.text-xs.ml-2.text-gray-400.text-mono
        "(" (u/get-comfort-level-name comfort) ")"]]]
     [cell  {:class "w-2/12"}[:div.p-1 count]]]))

(defn table-header-cell
  [{:keys [text sort-key size sort-tuple handle-changed-sort]}]
  (let [[sort-direction -sort-key] @sort-tuple]
    [:th.flex.w-full.text-sm.text-left.p-2.text-gray-700.border.dark:border-gray-700.dark:text-gray-300
     {:class size}
     [:span.flex.items-center
      [:span.text-sm.font-medium text]
      [:span.flex.flex-col.ml-2
       (if (and
            (= sort-key -sort-key)
            (= sort-direction "ascending"))
         [component/icon {:icon     :chevron-down :size 12
                          :on-click #(handle-changed-sort "descending" sort-key)}]
         [component/icon {:icon     :chevron-up :size 12
                          :on-click #(handle-changed-sort "ascending" sort-key)}])]]]))

(defn- sort-words-by
  "Depending on the sort-tuple, we sort the list of words"
  [sort-tuple word-list]
  (let [[direction key] sort-tuple]
    (if (= "ascending" direction)
      (sort-by key #(compare %2 %1) word-list)
      (sort-by key #(compare %1 %2) word-list))))

(defn view
  "Render a list of the user's words.
  The list is sortable, and translations are inline-editable
  In order to sort by column, we have a `sort-tuple` which identifies
  a) the sort order - `ascending` | `descending`
  b) the column to sort by: `:name` | `:comfort` | `:translation`."
  []
  (|> [(s-ev :words-get) nil])
  (let [sort-tuple          (r/atom ["ascending" :count])
        current-row         (r/atom nil)
        handle-changed-sort (fn [a b]
                              (reset! sort-tuple [a b]))]

    (fn []
      (let [loading?     (<| [::subs/loading?])
            words        (<| [::subs/words])
            current-word (<| [::subs/current-word])
            form         (r/atom current-word)
            words        (sort-words-by @sort-tuple words)
            headers      [{:sort-key    :slug
                           :size        "w-4/12"
                           :header-text "Words"}
                          {:sort-key    :translation
                           :size        "w-4/12"
                           :header-text "Translation"}
                          {:sort-key    :comfort
                           :size        "w-2/12"
                           :header-text "Comfort"}
                          {:sort-key    :count
                           :size        "w-2/12"
                           :header-text "Count"}
                          ]]
        (if loading?
          [component/loading-intercept "Loading all words. This might take a second."]
          ;; we don't check (db :words) because we force it to empty on navigation to avoid flicker
          (if (empty? words)
            [component/empty-state-with-msg]
            [:div.flex.flex-col.md:flex-row.overflow-y-auto.flex-1.dark:text-gray-200
             [:article {:key "view-article" :class "flex md:w-3/5 overflow-auto p-8 flex-col flex-1 bg-white dark:bg-gray-900"}
              [component/page-heading "Words"]
              [:div
               [:table.block.table-auto.w-full.bg-white.border.dark:bg-gray-800.dark:border-gray-700
                [:thead.flex.w-full
                 [:tr.border-b.flex.w-full.dark:border-gray-700.dark:text-gray-300
                  ;; table header ---
                  (map-indexed (fn [idx header-data]
                                 [table-header-cell {:handle-changed-sort handle-changed-sort
                                                     :key                 idx
                                                     :size                (:size header-data)
                                                     :sort-tuple          sort-tuple
                                                     :sort-key            (:sort-key header-data)
                                                     :text                (:header-text header-data)}])  headers)]]
                ;; table body ----
                [:tbody.overflow-auto.w-full.block {:style {:height "72vh"}}
                 (map-indexed (fn [idx word]
                                [word-row (merge word {:sort-tuple  sort-tuple
                                                       :current-row current-row
                                                       :key         (str idx)
                                                       :word-idx    idx})]) words)]]]]

             [component/view-current-word {:current-word current-word :form form}]]))))))
