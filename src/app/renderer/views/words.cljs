(ns app.renderer.views.words
  (:require
   [app.renderer.components :as component]
   [app.renderer.events :as events :refer [|>]]
   [app.renderer.subs :as subs :refer [<|]]
   [app.shared.ipc-events :refer [s-ev]]
   [app.shared.util :as u]))

(defn view
  []
  (|> [(s-ev :words-get) nil])
  (fn []
    (let [loading? (<| [::subs/loading?])
          words    (<| [::subs/words])
          headers  ["Words" "Translation" "Comfort"]
          th-stz   "text-left p-2 text-blue-400 border"]
      (if loading?
        [:div ""]
        (if (empty? words)
          [component/empty-state-with-msg]
          [component/container
           [:div {:key "word-list"}
            [:div.text-center [component/page-heading "Your Words"]]
            (when-not loading?
              [:table.block.mt-8.table-auto.w-full.bg-white.border
               [:thead.flex.w-full
                [:tr.border-b.flex.w-full (map #(vec [:th.flex.w-full {:key % :class th-stz} %]) headers)]]
               [:tbody.overflow-auto.w-full.block {:style {:height "75vh"}}
                (for [word words
                      :let [{:keys [name translation comfort]} word]]
                  [:tr.flex.w-full {:key name}
                   [:td.flex.w-full.border-r.border-b.p-2 name]
                   [:td.flex.w-full.border-r.border-b.p-2 translation]
                   [:td.flex.w-full.border-r.border-b.p-2
                    [:span.flex.items-center
                     [:span (inc comfort)]
                     [:span {:class (str "inline-flex rounded-full ml-2 h-2 w-2 border " (u/get-comfort-bg-col comfort))}]
                     [:span.text-xs.ml-2.text-gray-400.text-mono "(" (u/get-comfort-level-name comfort) ")"]]]])]])]])))))
