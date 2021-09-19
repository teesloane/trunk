(ns app.renderer.views.article
  (:require
   [app.renderer.components :as component]
   [app.renderer.events :as events :refer [|>]]
   [app.renderer.subs :as subs :refer [<|]]
   [app.shared.ipc-events :refer [s-ev]]
   [reagent.core :as r]
   [app.shared.util :as u]))

(defn- view-current-word
  "Displays the currently mousedover / clicked on word."
  [{:keys [current-word form]}]
  (let [t-win-open? (<| [::subs/t-win-open?]) ;; TODO: leaving off.
        input-stz   "w-full p-1 text-gray-700 dark:text-gray-50 border rounded-xs focus:outline-none text-md md:p-2 md:my-4 dark:bg-gray-700 dark:text-white"]
    [:div {:class "w-full p-8 flex flex-col mx-auto"}
     [:div.static
      [:div {:class "text-2xl mb-2 w-full"} (current-word :name)]
      [:div {:class "w-full"}
       [:input {:class         input-stz
                :placeholder   "Add Translation..."
                :default-value (current-word :translation)
                :value         (@form :translation)
                :on-change     (fn [e] (swap! form assoc :translation (-> e .-target .-value)))}]

       ;; radio button
       [:div.my-2.flex.md:flex-col.xl:flex-row.xl:justify-between
        (for [[comfort-int comfort-data] u/comfort-text-and-col
              :let                       [{:keys [name text-col]} comfort-data]]
          [:span.flex.xl:justify-between.items-center.mr-2 {:key comfort-int}
           [:input {:id        name
                    :type      "radio"
                    :value     comfort-int
                    :name      "group-1"
                    :checked   (= (@form :comfort) comfort-int)
                    :on-change (fn [e] (swap! form assoc :comfort (-> e .-target .-value int)))}]
           [:label {:for name :class (str "p-0.5 pl-1 " text-col)} (str name "(" (+ 1 comfort-int) ")")]])]

       ;; submit update
       [component/button
        {:on-click #(|> [(s-ev :word-update) @form])
         :text     "Update Word"}]]]
     [component/google-translate-view
      {:t-win-open?  t-win-open?
       :current-word (current-word :name)}]]))

(defn view
  "Displays a single article."
  []
  (let [current-article          (<| [::subs/current-article])
        current-word             (<| [::subs/current-word])
        current-word-idx         (<| [::subs/current-word-idx])
        form                     (r/atom current-word)
        {:keys [name word-data]} current-article]
    [:div.flex.flex-col.md:flex-row.overflow-y-auto.flex-1
     [:article {:key "view-article" :class "flex md:w-3/5 overflow-auto flex-col flex-1 p-8 md:border-r bg-white"}
      [component/page-heading name]
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
