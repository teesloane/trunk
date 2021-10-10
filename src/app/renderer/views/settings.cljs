(ns app.renderer.views.settings
  (:require
   [app.renderer.components :as component]
   [app.shared.ipc-events :refer [s-ev]]
   [app.renderer.events :as events :refer [|>]]
   [reagent.core :as r]
   [app.shared.specs :as specs]
   [clojure.string :as str]
   [app.renderer.subs :as subs :refer [<|]]
   [re-frame.core :as rf]))

(def settings-tree
  {
   ;; "General"            nil
   "Languages"          nil
   ;; "Backup and Restore" nil
   })

(defn update-settings
  [new]
  (|> [(s-ev :settings-update) new]))

(defn languages
  [settings]
  [component/card {:header "General Language Settings" :key "foo"}
   (let [select-classes "mt-1 mb-2 flex border w-64 py-2"
         swap-key       (fn [option settings-key]
                          (let [new-settings (assoc @settings settings-key  (.. option -target -value))]
                      (update-settings new-settings)))]
     [:div.flex.flex-col.md:flex-row
      [:div.text-sm.md:mr-8
       [:div "Set your native language:"]
       [:select {:class     select-classes
                 :default-value (@settings :native-lang)
                 :on-change #(swap-key % :native-lang)}
        (for [[lang-name lang-code] specs/langs]
          ^{:key lang-name}
          [:option {:value    lang-code}
           (str/capitalize lang-name)])]]

      [:div.text-sm.mt-8.md:mt-0
       [:div "Set your target language:"]
       [:select {:class     select-classes
                 :default-value (@settings :target-lang)
                 :on-change #(swap-key % :target-lang)}
        (for [[lang-name lang-code] specs/langs]
          ^{:key lang-name}
          [:option {:value lang-code} (str/capitalize lang-name)])]]])])

(defn sidebar
  [{:keys [current-setting]}]
  [:div {:class "flex border-r bg-white flex-col h-full pt-8 text-sm w-48"}
   [:div.font-bold.mb-4.text-lg.px-4 "Settings"]
   (for [[name val] settings-tree]
     ^{:key name}
     [:div
      {:class (str "my-1 cursor-pointer border-r-2 border-blue-500 px-4 py-2"
                   (if (= @current-setting name) " bg-gray-100 border-opacity-100" " border-opacity-0"))
       :on-click #(reset! current-setting name)}
      name])])

(defn view
  []
  (|> [(s-ev :settings-get)])
  (let [current-setting   (r/atom "Languages")
        original-settings (<| [::subs/settings])
        settings          (rf/subscribe [::subs/settings])]
    (fn []
      (let []
        (when @settings
          [:div.flex.h-full
           [sidebar {:current-setting current-setting}]
           [:div {:class "flex flex-col pt-4 w-4/5 p-4 pt-8"}
            (case @current-setting
              "Languages" [languages settings]

              [languages settings]
              )]])))))
