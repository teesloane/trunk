(ns app.renderer.components
  (:require
   [app.renderer.events :as events :refer [ |> ]]
   [app.shared.util :as u])
  )

(defn button
  [{:keys [on-click text]}]
  (let [styles "dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 self-start text-xs bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 mt-2 border border-gray-400 rounded shadow"]
    [:button {:class styles :on-click on-click} text]))

(defn toast
  [msg]
  (let [styles "fixed bottom-0 right-0 mr-4 mb-4 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 self-start text-xs bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 mt-2 border border-gray-400 rounded-sm shadow"]
    (when-not (= msg "")
      [:div {:class styles } msg])))


(defn container
  "This needs to have it's react-keys resolved."
  [children]
  [:div {:class "mt-8 flex flex-col p-8 w-full md:w-10/12 lg:w-8/12  mx-auto"}
   children])

(defn empty-state
  [children]
  [:div.flex.flex-col.h-screen.justify-center.items-center
   [:div.my-4 "Trunk logo"]
   [:div children]])

(defn nav-link
  [{:keys [on-click text]}]
  [:button.bg-gray-700.hover:bg-gray-500.text-white.font-bold.py-1.px-2.mr-4
   {:on-click on-click} text])

(defn nav
  []
  (let [nav! (fn [route] (|> [::events/navigate route]))]
    [:nav.w-full.bg-gray-900.text-xs.dark:bg-black.dark:text-gray-50
     [:div.inline-flex.p-2
      [nav-link {:on-click #(nav! "article-list") :text "Read"}]
      [nav-link {:on-click #(nav! "article-create") :text "Create Article"}]]]))

(defn article-word
  "how single words are styled based on their familiarity/comfort."
  [{:keys [word current-word index current-word-idx on-click]}]
  (let [{:keys [name comfort _translation ]} word
        comfort-col                          {0 "bg-gray-300" 1 "bg-red-300" 2 "bg-yellow-300" 3 "bg-green-300" 4 "bg-opacity-0 border-0"}
        stz                                  (str (comfort-col comfort) " border-b border-transparent pl-1 p-0.5 mr-1 cursor-pointer bg-opacity-25 hover:bg-opacity-50")
        is-current-word                      (and (= (dissoc word :comfort) (dissoc current-word :comfort))
                                                  (= index current-word-idx))
        ;; this is not working for some reason...
        stz                                  (if is-current-word
                                               (str " border-black " stz)
                                               (str "  " stz))]
    (cond
      (u/is-punctuation? name )
      [:span.mr-1 (str "" (word :name) " ")] ; punctuation

      ;; newlines that are just from textarea...
      (= name "\n")
      [:br]

      (= name "\n\n")
      [:div.w-full [:br]]

      :else
      [:span.relative {:on-click on-click}
       [:span {:class stz} (str " " (word :name) " ")]])))
