(ns app.renderer.views.settings
  (:require
   [app.renderer.components :as component]
   [app.shared.ipc-events :refer [s-ev]]
   [app.renderer.events :as events :refer [|>]]
   [reagent.core :as r]
   [app.shared.specs :as specs]
   [clojure.string :as str]
   [app.renderer.subs :as subs]
   [re-frame.core :as rf]))

(def settings-tree
  {;; "General"            nil
   "Languages"          nil
   "Backup and Restore" nil
   "About"              nil
   "Donate"             nil})

(defn update-settings
  [new]
  (|> [(s-ev :settings-update) new]))

(defn about [settings]
  [:div {:class "p-4 sm:w-full md:w-4/5 lg:w-3/5 xl:1/2" :style {:min-height "50vh"}}
   [component/card {}
    [:div.p-2.text-sm
     [:div {:style {:width "200px" :margin "0 auto" :min-height "200px"}}
      [:img.w-full.text-center {:src "img/animations/speech-bubbles.gif"}]]
     [:div.py-4. "Trunk is a language learning application inpsired by "
      [component/ext-link {:link "https://learningwithtexts.com/" :text "learning with texts,"}]
      [:span " built by "] [:span [component/ext-link {:link "https://theiceshelf.com" :text "The Ice Shelf."}]]
      [:span " Trunk aims to help learners improve vocabulary and text comprehension while remaining simple and pleasant to use."]]
     [:div
      [:span "Trunk is open source software. Go to " [component/ext-link {:link "https://github.com/theiceshelf/trunk" :text "GitHub"}] " to contribute or file a bug."]]
     [:div "You are currently using version " [:code.text-xs.px-1 (get @settings :trunk-version)] " of Trunk."]]]])

(defn donate []
  [:div {:class "p-4 sm:w-full md:w-4/5 lg:w-3/5 xl:1/2 text-sm"}
   [component/card {}
    [:div.p-2
     [:div.flex.justify-center {:style {:width "200px" :margin "0 auto" :min-height "200px"}}
      [:div.tis-logo]]
     [:div.py-4.text-sm. "Trunk is free software. If you enjoy using it and it is
    helping you improve in your language learning journey please consider
    showing your support by "
      [component/ext-link {:link "https://patreon.com/theiceshelf" :text "donating to fund its continued development. "}]]
     [:div "If now is not a convenient time to donate consider visiting our website to find other ways to reach out and say hello!"]]]])

(defn backup-restore
  [_]
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
      [component/button {:text "Restore" :on-click #(|> [(s-ev :settings-restore-db)])}]]]]
   [:div {:class "w-full mt-4"}
    [component/card {:header "Wipe your Trunk database"}
     [:div.text-sm
      [:div.mb-4 "Caution: this will erase all your data and relaunch the application."]
      [component/erase-db]]]]])

(defn languages
  [settings]
  [component/card {:header "General Language Settings" :key "gls"}
   (let [swap-key       (fn [option settings-key]
                          (let [new-settings (assoc @settings settings-key  (.. option -target -value))]
                            (update-settings new-settings)))]
     [:div.flex.flex-col.md:flex-row
      [:div {:class "text-sm w-1/2 md:mt-0"}
       [:div "What language do you want to practice?"]
       [component/select {:default-value (@settings :target-lang) :on-change #(swap-key % :target-lang)}
        (for [[lang-name lang-code] specs/langs]
          ^{:key lang-name}
          [:option {:value lang-code} (str/capitalize lang-name)])]]
      [:div {:class "text-sm w-1/2"}
       [:div "What is your native language?"]
       [component/select
        {:default-value (@settings :native-lang)
         :on-change     #(swap-key % :native-lang)}
        (for [[lang-name lang-code] specs/langs]
          ^{:key lang-name}
          [:option {:value lang-code}
           (str/capitalize lang-name)])]]])])

(defn sidebar
  "Render the sidebar items; clickable to change current setting branch."
  [{:keys [current-setting]}]
  [:div {:class "flex border-r bg-white flex-col h-full pt-8 text-sm w-64 min-w-max dark:bg-gray-800 dark:border-gray-700"}
   [:div.font-bold.mb-4.text-lg.px-4 "Settings"]
   (doall (for [[name _] settings-tree]
            ^{:key name}
            [:div
             {:class (str "my-1 cursor-pointer border-r-2 border-blue-500 px-4 py-2"
                          (if (= @current-setting name) " bg-gray-100 border-opacity-100 dark:bg-gray-700" " border-opacity-0 dark:bg-gray-800"))
              :on-click #(reset! current-setting name)}
             name]))])

(defn view
  []
  (|> [(s-ev :settings-get)])
  (let [current-setting (r/atom "Languages")
        settings        (rf/subscribe [::subs/settings])]
    (fn []
      (when @settings
        [:div.flex.h-full
         [sidebar {:current-setting current-setting}]
         [:div {:class "flex flex-col pt-4 w-full p-4 pt-8 max-w-screen-lg"}
          (case @current-setting
            "Languages"          [languages settings]
            "Backup and Restore" [backup-restore settings]
            "About"              [:div.justify-center.flex.items-center.flex-1 [about settings]]
            "Donate"             [:div.justify-center.flex.items-center.flex-1 [donate]]
            [languages settings])]]))))
