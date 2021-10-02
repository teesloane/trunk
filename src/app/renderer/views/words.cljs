(ns app.renderer.views.words
  (:require
   [app.renderer.components :as component]
   [app.renderer.events :as events :refer [|>]]
   [app.renderer.subs :as subs :refer [<|]]
   [app.shared.ipc-events :refer [s-ev]]
   [app.shared.specs :as specs]
   [app.shared.util :as u]
   [clojure.string :as str]
   [reagent.core :as r]))

(defn cell
  [child]
  [:td.flex.w-full.border-r.border-b.items-center.p-1 child])

(defn- set-current-word
  [props idx]
  (|> [::events/set-current-word {:word (specs/m->word props) :index idx}]))

(defn word-row
  [{:keys [name comfort translation idx sort-tuple] :as props}]
  (let [comfort-styles (str "inline-flex rounded-full ml-2 h-2 w-2 border "
                            (u/get-comfort-bg-col comfort))]
    [:tr.flex.w-full.cursor-pointer
     {:key      idx :style {:font-size "13px"}
      :on-click #(set-current-word props idx)}
     [cell [:div.p-1 name]]
     [cell [:div.p-1 translation]]
     [cell
      [:span.flex.items-center.p-1
       [:span (inc comfort)]
       [:span {:class comfort-styles}]
       [:span.text-xs.ml-2.text-gray-400.text-mono
        "(" (u/get-comfort-level-name comfort) ")"]]]]))

(defn table-header-cell
  [{:keys [text sort-key sort-tuple handle-changed-sort]}]
  (let [[sort-direction -sort-key] @sort-tuple]
    [:th.flex.w-full {:class "text-left p-2 text-blue-400 border"}
     [:span.flex.items-center
      [:span text]
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
  (let [sort-tuple          (r/atom ["ascending" :comfort])
        handle-changed-sort (fn [a b]
                              (reset! sort-tuple [a b]))]

    (fn []
      (let [loading?     (<| [::subs/loading?])
            words        (<| [::subs/words])
            current-word (<| [::subs/current-word])
            form         (r/atom current-word)
            words        (sort-words-by @sort-tuple words)
            headers      [{:sort-key :name :header-text "Words"}
                          {:sort-key :translation :header-text "Translation"}
                          {:sort-key :comfort :header-text "Comfort"}]]
        [:div.flex.flex-col.md:flex-row.overflow-y-auto.flex-1
         [:article {:key "view-article" :class "flex md:w-3/5 overflow-auto p-8 flex-col flex-1  bg-white"}
          [component/page-heading "Words read"]
          [:div
           [:table.block.table-auto.w-full.bg-white.border
            [:thead.flex.w-full
             [:tr.border-b.flex.w-full
              ;; table header ---
              (map-indexed (fn [idx header-data]
                             [table-header-cell {:handle-changed-sort handle-changed-sort
                                                 :key                 idx
                                                 :sort-tuple          sort-tuple
                                                 :sort-key            (:sort-key header-data)
                                                 :text                (:header-text header-data)}])  headers)]]
            ;; table body ----
            [:tbody.overflow-auto.w-full.block {:style {:height "70vh"}}
             (map-indexed (fn [idx word]
                            [word-row (merge word {; :on-submit handle-update-word
                                                   :sort-tuple sort-tuple
                                                   :key        (str idx)
                                                   :word-idx   idx})]) words)]]]]

            [component/view-current-word {:current-word current-word :form form}]]))))
