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
          th-stz   {:class "text-left p-2 text-blue-400 border"}]
      [component/container
       [:div
        [:div.text-center [component/page-heading "Your Words"]]
        (when-not loading?
          [:table.mt-8.table-auto.w-full.bg-white.border
           [:thead
            [:tr.border-b (map #(vec [:th th-stz %]) headers)]]
           [:tbody
            (for [word words
                  :let [comfort-labels {0 "Unknown" 1 "Hard" 2 "Medium" 3 "Easy" 4 "Known"}
                        {:keys [name translation comfort]} word]]
              [:tr {:min-height "40px"}
               [:td.border-r.border-b.p-2 name]
               [:td.border-r.border-b.p-2 translation]
               [:td.border-r.border-b.p-2
                [:span.flex.items-center
                 [:span (inc comfort)]
                 [:span {:class (str "inline-flex rounded-full ml-2 h-2 w-2 border " (u/comfort-col comfort))}]
                 [:span.text-xs.ml-2.text-gray-400.text-mono "(" (get comfort-labels comfort) ")"]
                 ]]])]])]])))
