(ns app.renderer.views
  (:require
   [app.renderer.components :as component]
   [app.renderer.events :as events :refer [|>]]
   [app.renderer.subs :as subs :refer [<|]]
   [app.shared.ipc-events :refer [s-ev]]
   [reagent.core :as r]))

(defn loading-wheel
  "Bottom right absolute position loading whee."
  []
  (let [loading? (<| [::subs/loading?])
        div-stz "transition duration-500 flex bg-gray-50 text-xs shadow fixed bottom-0 right-0 p-2 m-2 rounded-md align-center tems-center"
        div-stz (if-not loading? (str "-bottom-16 " div-stz) (str "bottom-0 " div-stz))]
    [:div {:class div-stz}
     [:svg {:class "animate-spin text-blue-600", :style {:width "24px" :height "24px"} :xmlns "http://www.w3.org/2000/svg", :fill "none", :viewBox "0 0 24 24"}
      [:circle {:class "opacity-25", :cx "12", :cy "12", :r "10", :stroke "currentColor", :stroke-width "4"}]
      [:path {:class "opacity-75", :fill "currentColor", :d "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}]]]))

(defn page-heading
  [text]
  [:h2.text-2xl.mb-2 text])

(defn view-article-list
  []
  (|> [(s-ev :articles-get) nil])
  (fn []
    (let [table-stz      {:class "table-cell border-b border-gray-100 py-2 w-1/2"}
          articles (<| [::subs/articles])
          nav!     (fn [_ article]
                     (|> [(s-ev :article-fetch) article]))]
      (if (empty? articles)
        [component/empty-state
         [:div.text-center.text-gray-400
          [:div "You haven't made any articles yet."]
          [:div
           [:span "Click " [:span.font-bold.text-gray-700 "\"Create Article\""] [:span " above to get started."]]]]]
        [component/container
         [:div {:key "view-article-list"} ;; keep react happy.
          [:div.text-center.mb-16 [page-heading "Your articles"]]
          (when articles
            (map-indexed (fn [idx article]
                           [:div.cursor-pointer.mb-4 {:key idx :on-click #(nav! "article" article)}
                            [component/article article]]
                           ) articles))]]))))

(defn view-article-create
  []
  (let [input-stz    "w-full p-2 text-gray-700 dark:text-gray-50 border rounded-lg focus:outline-none text-sm my-2 dark:bg-gray-700 dark:text-white"
        form         (r/atom {:article "" :title "" :source ""})
        update-form  (fn [event k]
                       (swap! form assoc k (-> event .-target .-value)))]
    (fn []
      [component/container
       [:div.flex.flex-col {:key "view-article-list"}
        [:div.text-center.mb-8 [page-heading "Create a new article"]]
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

(defn view-current-word
  "Displays the currently mousedover / clicked on word."
  [{:keys [current-word form]}]
  (let [input-stz             "w-full p-1 text-gray-700 dark:text-gray-50 border rounded-xs focus:outline-none text-md md:p-2 md:my-4 dark:bg-gray-700 dark:text-white"
        radio-btns            {0 ["New" "text-gray-500"]
                               1 ["Hard" "text-red-500"]
                               2 ["Medium" "text-yellow-500"]
                               3 ["Easy" "text-green-500"]
                               4 ["Ignore" "text-black"]}]
    [:div {:class "w-full p-8 flex flex-col mx-auto"}
     [:div {:class "text-2xl mb-2 w-full"} (current-word :name)]
     [:div {:class "w-full"}
      [:input {:class       input-stz
               :placeholder "Add Translation..."
               :default-value (current-word :translation)
               :value (@form :translation)
               :on-change (fn [e] (swap! form assoc :translation (-> e .-target .-value)))}]

      ;; radio button
      [:div.my-2.flex.md:flex-col.xl:flex-row.xl:justify-between
       (for [[btn-int btn-data] radio-btns
             :let               [[btn-name btn-bg] btn-data]]
         [:span.flex.xl:justify-between.items-center.mr-2 {:key btn-int}
          [:input {:id        btn-name
                   :type      "radio"
                   :value     btn-int
                   :name      "group-1"
                   :checked   (= (@form :comfort) btn-int)
                   :on-change (fn [e] (swap! form assoc :comfort (-> e .-target .-value int)))}]
          [:label {:for btn-name :class (str "p-0.5 pl-1 " btn-bg)} (str btn-name "(" (+ 1 btn-int) ")")]])]

      ;; submit update
      [component/button {:on-click #(|> [(s-ev :word-update) @form]) :text "Update Word"}]]]))

(defn view-article
  "Displays a single article."
  []
  (let [current-article          (<| [::subs/current-article])
        current-word             (<| [::subs/current-word])
        current-word-idx         (<| [::subs/current-word-idx])
        form                     (r/atom current-word)
        {:keys [name word-data]} current-article]
    [:div.flex.flex-col.md:flex-row.overflow-y-auto.flex-1
     [:article {:key "view-article" :class "flex md:w-3/5 overflow-auto flex-col flex-1 p-8 md:border-r bg-white"}
      [:div.text-center.mb-10 [page-heading name]]
      [:div.leading-8.px-4.flex.flex-wrap.max-w-5xl.mx-auto
       (map-indexed (fn [index word]
                      ^{:key (str word "-" index)}
                      [component/article-word
                       {:word             word
                        :current-word     current-word
                        :on-click         #(|> [::events/set-current-word {:word word :index index}])
                        :index            index
                        :current-word-idx current-word-idx}]) word-data)]]
     [:div {:class "bg-gray-50 w-full border-t md:border-t-0 md:flex md:w-2/5 md:relative "}
      (when current-word [view-current-word {:current-word current-word :form form}])]]))

(defn debug
  []
  [:div.flex.fixed.bottom-0.p-2.rounded-sm
   [:button.bg-white.border.rounded.py-1.px-2.text-xs.text-red-500.hover:bg-red-500.bg-opacity-25.hover:text-white
    {:on-click #(|> [(s-ev :wipe-db!)])} "wipe sql-db!"]])

(defn main-panel []
  (let [current-view (<| [::subs/current-view])
        toast-msg    (<| [::subs/toast])]
    [:div.dark:bg-gray-800.dark:text-white.flex.flex-col.h-screen.bg-gray-50
     ;; fixed pos things
     [debug]
     [loading-wheel]
     [component/toast toast-msg]
     ;; normal stuff.
     [component/nav {:current-view current-view}]
     (case current-view
       "article-list"   [view-article-list]
       "article-create" [view-article-create]
       "article"        [view-article]
       nil              [view-article-list])]))
