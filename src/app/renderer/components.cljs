(ns app.renderer.components
  (:require
   [app.renderer.events :as events :refer [ |> ]])
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
      [nav-link {:on-click #(nav! "article-create") :text "Create Article"}]
      ]]))
