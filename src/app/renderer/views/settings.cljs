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
  {;; "General"            nil
   "Languages"          nil
   "Backup and Restore" nil
   })

(defn update-settings
  [new]
  (|> [(s-ev :settings-update) new]))

(defn backup-restore
  [settings]
  [:div
   [:div {:class "w-full mr-2"}
    [component/card {:header "Backup/Export your Trunk database"}
     [:div.text-sm
      [:div.mb-4 "Creates a duplicate of the SQLite Trunk database, which you can save to your computer."]
      [component/button {:text "Backup" :on-click #(|> [(s-ev :settings-backup-db)])}]]]]
   [:div {:class "w-full mt-4"}
    [component/card {:header "Restore your Trunk database"}
     [:div.text-sm
      [:div.mb-4 "Import a database from a previous backup." [:span.text-red-500.mb-4 " This will overwrite your existing Trunk database."]]
      [component/button {:text "Restore" :on-click #(|> [(s-ev :settings-restore-db)])}]]]]])

(defn languages
  [settings]
  [component/card {:header "General Language Settings" :key "gls"}
   (let [select-classes "mt-1 mb-2 flex border w-64 py-2"
         swap-key       (fn [option settings-key]
                          (let [new-settings (assoc @settings settings-key  (.. option -target -value))]
                            (update-settings new-settings)))]
     [:div.flex.flex-col.md:flex-row
      [:div {:class "text-sm w-1/2 md:mt-0"}
       [:div "What language do you want to practice?"]
       [:select {:class     select-classes
                 :default-value (@settings :target-lang)
                 :on-change #(swap-key % :target-lang)}
        (for [[lang-name lang-code] specs/langs]
          ^{:key lang-name}
          [:option {:value lang-code} (str/capitalize lang-name)])]]
      [:div {:class "text-sm w-1/2"}
       [:div "What is your native language?"]
       [:select {:class     select-classes
                 :default-value (@settings :native-lang)
                 :on-change #(swap-key % :native-lang)}
        (for [[lang-name lang-code] specs/langs]
          ^{:key lang-name}
          [:option {:value    lang-code}
           (str/capitalize lang-name)])]]
      ])])

(defn sidebar
  "Render the sidebar items; clickable to change current setting branch."
  [{:keys [current-setting]}]
  [:div {:class "flex border-r bg-white flex-col h-full pt-8 text-sm w-64 min-w-max"}
   [:div.font-bold.mb-4.text-lg.px-4 "Settings"]
   (doall (for [[name _] settings-tree]
           ^{:key name}
             [:div
              {:class (str "my-1 cursor-pointer border-r-2 border-blue-500 px-4 py-2"
                           (if (= @current-setting name) " bg-gray-100 border-opacity-100" " border-opacity-0"))
               :on-click #(reset! current-setting name)}
              name]))])

(defn view
  []
  (|> [(s-ev :settings-get)])
  (let [current-setting (r/atom "Backup and Restore")
        settings        (rf/subscribe [::subs/settings])]
    (fn []
      (when @settings
        [:div.flex.h-full
         [sidebar {:current-setting current-setting}]
         [:div {:class "flex flex-col pt-4 w-full p-4 pt-8 max-w-screen-lg"}
          (case @current-setting
            "Languages"          [languages settings]
            "Backup and Restore" [backup-restore settings]
            [languages settings])]]))))
