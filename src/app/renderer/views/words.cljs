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

(defn toggleable-words-input
  "Renders a div with text that turns to input when clicked
  Presumes that it is rendered in a list in which clicking an entry
  stores `current-item` etc."
  ;; TODO - reimplement the handling of fixing translations by clicking on an input.
  ;; LEAVING OFF - maybe reimplement the sidebar from article-read view in this view.
  [{:keys [is-on input-text handle-toggle-input handle-submit handle-input-text translation on-submit] :as props}]
  (if is-on
    [:div.flex.w-full.justify-between.items-center
     [:input.rounded-sm.p-1.bg-gray-100.flex.flex-1
      {:auto-focus true
       :value      input-text
       :on-change  handle-input-text}]
     [:div.mx-2 [component/button {:icon-name :check
                                   :icon-size 16
                                   :on-submit on-submit
                                   :on-click handle-submit}]]]
    [:div.p-1.cursor-pointer.flex.w-full
     {:on-click handle-toggle-input
      :style    {:min-height ""}} (props :translation)]))

(defn word-row
  [{:keys [name comfort translation idx sort-tuple] :as props}]
  (let [comfort-styles (str "inline-flex rounded-full ml-2 h-2 w-2 border "
                            (u/get-comfort-bg-col comfort))]
    [:tr.flex.w-full {:key idx :style {:font-size "13px"}}
     [cell [:div.p-1 name]]
     [cell [toggleable-words-input props]]
     [cell
      [:span.flex.items-center.p-1
       [:span (inc comfort)]
       [:span {:class comfort-styles}]
       [:span.text-xs.ml-2.text-gray-400.text-mono "(" (u/get-comfort-level-name comfort) ")"]]]]))

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
  ;; LEAVING OFF FIXME: the translation column does not re-render.
  ;; ;; possibly try making toggleable-words-input a form1 component.
  []
  (|> [(s-ev :words-get) nil])
  (let [sort-tuple          (r/atom ["ascending" :comfort])
        ;; not being used until I get inline editing working again.
        ;; handle-update-word  (fn [props new-translation]
        ;;                       (let [new-word (-> props
        ;;                                          specs/m->word
        ;;                                          (assoc :translation new-translation))]
        ;;                         (|> [(s-ev :word-update) new-word])))
        handle-changed-sort (fn [a b]
                              (reset! sort-tuple [a b]))]

    (fn []
      (let [loading? (<| [::subs/loading?])
            words    (<| [::subs/words])
            words    (sort-words-by @sort-tuple words)
            headers  [{:sort-key :name :header-text "Words"}
                      {:sort-key :translation :header-text "Translation"}
                      {:sort-key :comfort :header-text "Comfort"}]]
        (if loading?
          [:div ""]
          (if (empty? words)
            [component/empty-state-with-msg]
            [component/container
             [:div {:key "word-list"}
              [:div.text-center [component/page-heading "Your Words"]]
              (when-not loading?
                [:div
                 [:table.block.mt-8.table-auto.w-full.bg-white.border
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
                                                         :key       (str idx)
                                                         :word-idx  idx})]) words)]]])]]))))))
