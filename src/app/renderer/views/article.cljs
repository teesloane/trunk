(ns app.renderer.views.article
  (:require
   [app.renderer.components :as component]
   [app.renderer.events :as events :refer [|>]]
   [app.renderer.subs :as subs :refer [<|]]
   [app.shared.ipc-events :refer [s-ev]]
   [reagent.core :as r]))

(defn- view-current-word
  "Displays the currently mousedover / clicked on word."
  [{:keys [current-word form]}]
  (let [t-win-open? (<| [::subs/t-win-open?]) ;; TODO: leaving off.
        _           (prn)
        input-stz   "w-full p-1 text-gray-700 dark:text-gray-50 border rounded-xs focus:outline-none text-md md:p-2 md:my-4 dark:bg-gray-700 dark:text-white"
        radio-btns  {0 ["New" "text-gray-500"]
                     1 ["Hard" "text-red-500"]
                     2 ["Medium" "text-yellow-500"]
                     3 ["Easy" "text-green-500"]
                     4 ["Ignore" "text-black"]}]
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
       [component/button
        {:on-click #(|> [(s-ev :word-update) @form])
         :text "Update Word"}]]]
     [component/google-translate-view
      {:t-win-open? t-win-open?
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
      [:div.text-center.mb-10 [component/page-heading name]]
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
