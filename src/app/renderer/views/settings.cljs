(ns app.renderer.views.settings
  (:require
   [app.renderer.components :as component]
   [app.shared.ipc-events :refer [s-ev]]
   [app.renderer.events :as events :refer [|>]]
   [reagent.core :as r]
   [clojure.string :as str]
   [app.renderer.subs :as subs :refer [<|]]
   [re-frame.core :as rf]
   [app.shared.util :as u]))

(def settings-tree
  {"General"            nil
   "Languages"          nil
   "Backup and Restore" nil
   "About"              nil
   "Donate"             nil})

(defn- update-settings
  [new]
  (|> [(s-ev :settings-update) new]))

(defn- save-changes
  [new-settings]
  [:div.flex.absolute.bottom-0.w-full.bg-white.p-4.left-0.items-center.border-t.border-gray-300.dark:border-t-gray-700.dark:bg-gray-800.dark:text-gray-50
   [component/button {:text "Save changes" :on-click #(update-settings @new-settings) :style "primary"}]
   [:div.ml-2.text-sm.italic "You have unsaved changes."]])

(defn general
  [settings]
  [:div
   [component/card {:header "Number of words per page" :key "gen"}
    (let [warning-col {:class "text-yellow-700 dark:text-yellow-400"}
          swap-key (fn [input settings-key]
                     (let [new-settings (assoc @settings settings-key input)]
                       (reset! settings new-settings)))]
      [:div.flex.flex-col.md:flex-row
       [:div {:class "text-sm w-full  md:mt-0"}
        [:div.pb-1
         [:span warning-col "Note: "]
         [:span "changing this value will"] [:span warning-col " reset the current page"] [:span " you are reading on all existing texts."]]
        [:div.pb-2 "Raising this value too high may decrease performance when reading a text."]

        [:div.w-72
         [component/input {:type          :number
                           :default-value (-> @settings :page-size)
                           :on-change     #(swap-key (-> % .-target .-value js/parseInt) :page-size)}]]]])]])

(defn about [settings]
  [:div {:class "sm:w-full md:w-4/5 lg:w-3/5 xl:1/2" :style {:min-height "50vh"}}
   [component/card {}
    [:div.p-2.text-sm
     [:div {:style {:width "200px" :margin "0 auto" :min-height "200px"}}
      [:img.w-full.text-center {:src "img/animations/speech-bubbles.gif"}]]
     [:div.py-4. "Trunk is a language learning application inpsired by "
      [component/ext-link {:link "https://learningwithtexts.com/" :text "learning with texts,"}]
      [:span " built by "] [:span [component/ext-link {:link "https://theiceshelf.com" :text "The Ice Shelf."}]]
      [:span " Trunk aims to help learners improve vocabulary and text comprehension while remaining simple and pleasant to use."]]
     [:div
      [:span "Trunk is " [component/ext-link {:link "https://github.com/theiceshelf/trunk" :text "open source software."}]]]
     [:div "You are currently using version " [:code.text-xs.px-1 (get @settings :trunk-version)] " of Trunk."]]]])

(defn donate []
  [:div {:class "sm:w-full md:w-4/5 lg:w-3/5 xl:1/2 text-sm"}
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
   [:div {:class "w-full"}
    [component/card {:header "Backup/Export your Trunk database" :toggleable? true}
     [:div.text-sm
      [:div.mb-4 "Creates a duplicate of the SQLite Trunk database, which you can save to your computer."]
      [component/button {:text "Backup" :on-click #(|> [(s-ev :settings-backup-db)])}]]]]
   [:div {:class "w-full mt-8"}
    [component/card {:header "Restore your Trunk database" :toggleable? true}
     [:div.text-sm
      [:div.mb-4 "Import a database from a previous backup." [:span.text-red-500.mb-4 " This will overwrite your existing Trunk database."]]
      [component/button {:text "Restore" :on-click #(|> [(s-ev :settings-restore-db)])}]]]]
   [:div {:class "w-full mt-8"}
    [component/card {:header "Wipe your Trunk database" :toggleable? true}
     [:div.text-sm
      [:div.mb-4 "Caution: this will erase all your data and relaunch the application."]
      [component/erase-db]]]]])

(defn- get-selected-lang
  [settings languages typ]
  (->> languages
       (filter #(= (% :iso_639_1) (@settings typ)))
       first :iso_639_1))

(defn- make-regex?
  [s]
  (try
    (re-pattern s)
    (catch js/Error e false)))

(defn language-change-current
  ""
  [settings]
  (let [languages             (rf/subscribe [::subs/languages])
        loading?              (rf/subscribe [::subs/loading?])]
    (fn []
      (let [selected-target     (get-selected-lang settings @languages :target-lang)
            selected-native     (get-selected-lang settings @languages :native-lang)]
        (when-not @loading?
          [:div
           [:div.mb-8
            [component/card {:header "Language Settings" :key "gls" :toggleable? true}
             (let [swap-key (fn [option settings-key]
                              (let [new-settings (assoc @settings settings-key  (.. option -target -value))]
                                (reset! settings new-settings)))]
               [:div.flex.flex-col.md:flex-row
                [:div {:class "text-sm w-1/2 md:mt-0"}
                 ;; target lang --
                 [component/select {:default-value selected-target
                                    :label         "Language to practice:"
                                    :on-change     #(swap-key % :target-lang)}
                  (for [lang @languages
                        :let [{:keys [name iso_639_1]} lang]]
                    ^{:key name}
                    [:option {:value iso_639_1} (str/capitalize name)])]]

                ;; native lang --
                [:div {:class "text-sm w-1/2"}
                 [component/select
                  {:default-value selected-native
                   :label         "Your native language:"
                   :on-change     #(swap-key % :native-lang)}
                  (for [lang @languages
                        :let [{:keys [name iso_639_1]} lang]]
                    ^{:key name}
                    [:option {:value iso_639_1}
                     (str/capitalize name)])]]])]]])))))

(defn language-edit-lang
  [curr-target-lang]
  (let [languages                (rf/subscribe [::subs/languages])
        loading?                 (rf/subscribe [::subs/loading?])
        rand-int-batch           (->> (range 0 999) (map (fn [_] (rand-int  5))) vec)
        language-to-edit         (r/atom (first @languages))
        language-to-edit-form    (r/atom {:text_splitting_regex (@language-to-edit :text_splitting_regex)
                                          :word_regex           (@language-to-edit :word_regex)
                                          :test-text-area       ""})
        update-lang-to-edit-form (fn [val key]
                                   (swap! language-to-edit-form assoc key val))]

    (fn []
      (let [change-lang-to-edit   (fn [selected-lang]
                                    (let [n (u/find-first #(= (% :iso_639_1) selected-lang) @languages)]
                                      (reset! language-to-edit n)
                                      (swap! language-to-edit-form assoc
                                             :text_splitting_regex (n :text_splitting_regex)
                                             :word_regex (n :word_regex))))
            text-splitting-regex? (make-regex? (@language-to-edit-form :text_splitting_regex))
            word-regex?           (make-regex? (@language-to-edit-form :word_regex))]
        (when-not @loading?
          [:div.mb-8
           [component/card {:header "Advanced: Edit A Language" :key "edit-a-lang" :toggleable? true }
            [:div.flex.flex-col.text-sm
             [:div.disclaimer.my-2
              [:div "Below you may alter the regexes used to split up a text into words and determine what constitutes a word in a language."]
              [:div.mt-2 "Making changes here will only affect future texts that you add to Trunk."]
              [:hr.mt-4.mb-2]]
             [:div.flex.justify-between
              [:div.flex.flex-1
               [component/select {:default-value (or curr-target-lang "en")
                                  :on-change     #(change-lang-to-edit (.. % -target -value))
                                  :label         "Language to edit:"}
                (for [lang @languages
                      :let [{:keys [name iso_639_1]} lang]]
                  ^{:key name}
                  [:option {:value iso_639_1}
                   (str/capitalize name)])]]
              [:div.flex-1.pl-4
               [component/input {:label         "Text splitting regex"
                                 :default-value (get @language-to-edit :text_splitting_regex)
                                 :value         (@language-to-edit-form :text_splitting_regex)
                                 :valid?        text-splitting-regex?
                                 :on-change     #(update-lang-to-edit-form (.. % -target -value) :text_splitting_regex)}]]
              [:div.flex-1.pl-4
               [component/input {:label         "Word regex"
                                 :default-value (get @language-to-edit :word_regex)
                                 :value         (@language-to-edit-form :word_regex)
                                 :valid?        word-regex?
                                 :on-change     #(update-lang-to-edit-form (.. % -target -value) :word_regex)}]]]

             [:div.my-4
              [component/textarea
               {:on-change   #(update-lang-to-edit-form (.. % -target -value) :test-text-area)
                :label       "Sample text"
                :max-length  300
                :rows        3
                :placeholder "Write some test text here and view how the regex will split it."}]

              [:div {:class (str "flex items-center border" (if (and word-regex? text-splitting-regex?) " border-green-500" " border-red-500")) :style {:min-height "4rem"}}
               (if (and text-splitting-regex? word-regex?)
                 (let [split-article   (u/split-article (@language-to-edit-form :test-text-area) text-splitting-regex?)
                       dummy-word-data (map-indexed (fn [idx t]
                                                      {:name          t
                                                       :comfort       (get rand-int-batch idx) ;; NOTE - not an accurate representation but whatever.
                                                       :is_not_a_word (if (re-matches word-regex? t) 0 1)
                                                       :translation   ""}) split-article)]
                   [:div.leading-8.my-2.flex.flex-wrap.max-w-5xl.px-2
                    (map-indexed (fn [index word]
                                   ^{:key (str word "-" index)}
                                   [component/article-word
                                    {:word                word
                                     :current-word        nil
                                     :on-click            #()
                                     :index               index
                                     :lang-word-regex     (@language-to-edit-form :word_regex)
                                     :current-phrase-idxs nil
                                     :current-word-idx    nil}]) dummy-word-data)])
                 [:div.pl-2 "Regex is invalid."])]]

             [:div.justify-between.flex
              [component/button {:text      "Update language"
                                 :style     "primary"
                                 :on-click  #(|> [(s-ev :language-update) @language-to-edit-form])
                                 :disabled? (not (and word-regex? text-splitting-regex?))}]
              [component/button {:text      "Delete this language"
                                 :style     "caution"
                                 :dbl-check "Are you sure?"
                                 :on-click  #(do (|> [(s-ev :language-delete) @language-to-edit])
                                                 (change-lang-to-edit (-> @languages second :iso_639_1)))}]]]]])))))

(defn language-new-lang
  [settings]
  (let [languages                (rf/subscribe [::subs/languages])
        loading?                 (rf/subscribe [::subs/loading?])
        rand-int-batch           (->> (range 0 999) (map (fn [_] (rand-int  5))) vec)
        language-to-edit         (r/atom (first @languages))
        language-to-edit-form    (r/atom {:text_splitting_regex ""
                                          :word_regex           ""
                                          :iso_639_1            ""
                                          :name                 ""
                                          :test-text-area       ""})
        update-lang-to-edit-form (fn [val key]
                                   (swap! language-to-edit-form assoc key val))]

    (fn []
      (let [text-splitting-regex? (make-regex? (@language-to-edit-form :text_splitting_regex))
            word-regex?           (make-regex? (@language-to-edit-form :word_regex))
            form-is-valid?        (let [ltef @language-to-edit-form]
                                    (and
                                     (> (count (ltef :name)) 0)
                                     (= (count (ltef :iso_639_1)) 2)))]
        (when-not @loading?
          [:div.mb-4
           [component/card {:header "Advanced: Add A Language" :key "add-a-lang" :toggleable? true }
            [:div.flex.flex-col.text-sm
             [:div.disclaimer.my-2
              [:div "You can add a language to Trunk below. All fields are required."]
              [:div.flex "Please ensure that the " [:pre.text-sm.mx-2 "iso-639-1"] " language code matches what Google Translate uses."]
              [:hr.mt-4.mb-2]]

             [:div.flex.justify-between
              [:div.flex-1
               [component/input {:label         "Language name"
                                 :default-value (@language-to-edit-form :name)
                                 :value         (@language-to-edit-form :name)
                                 :valid?        #(> (count %) 0)
                                 :on-change     #(update-lang-to-edit-form (.. % -target -value) :name)}]]
              [:div.flex-1.pl-4
               [component/input {:label         "Language iso-639-1 code "
                                 :default-value (@language-to-edit-form :iso_639_1) #_(get @language-to-edit :iso_639_1)
                                 :value         (@language-to-edit-form :iso_639_1)
                                 :valid?        #(= (count %) 2)
                                 :on-change     #(update-lang-to-edit-form (.. % -target -value) :iso_639_1)}]]]

             [:div.flex.justify-between.mt-4
              [:div.flex-1
               [component/input {:label         "Text splitting regex"
                                 :default-value (get @language-to-edit :text_splitting_regex)
                                 :value         (@language-to-edit-form :text_splitting_regex)
                                 :valid?        text-splitting-regex?
                                 :on-change     #(update-lang-to-edit-form (.. % -target -value) :text_splitting_regex)}]]
              [:div.flex-1.pl-4
               [component/input {:label         "Word regex"
                                 :default-value (get @language-to-edit :word_regex)
                                 :value         (@language-to-edit-form :word_regex)
                                 :valid?        word-regex?
                                 :on-change     #(update-lang-to-edit-form (.. % -target -value) :word_regex)}]]]

             [:div.my-4
              [component/textarea
               {:on-change   #(update-lang-to-edit-form (.. % -target -value) :test-text-area)
                :label       "Sample text"
                :max-length  300
                :rows        3
                :placeholder "Write some test text here and view how the regex will split it."}]

              [:div {:class (str "flex items-center border" (if (and word-regex? text-splitting-regex?) " border-green-500" " border-red-500")) :style {:min-height "4rem"}}
               (if (and text-splitting-regex? word-regex?)
                 (let [split-article   (u/split-article (@language-to-edit-form :test-text-area) text-splitting-regex?)
                       dummy-word-data (map-indexed (fn [idx t]
                                                      {:name          t
                                                       :comfort       (get rand-int-batch idx) ;; NOTE - not an accurate representation but whatever.
                                                       :is_not_a_word (if (re-matches word-regex? t) 0 1)
                                                       :translation   ""}) split-article)]
                   [:div.leading-8.my-2.flex.flex-wrap.max-w-5xl.px-2
                    (map-indexed (fn [index word]
                                   ^{:key (str word "-" index)}
                                   [component/article-word
                                    {:word                word
                                     :current-word        nil
                                     :on-click            #()
                                     :index               index
                                     :lang-word-regex     (@language-to-edit-form :word_regex)
                                     :current-phrase-idxs nil
                                     :current-word-idx    nil}]) dummy-word-data)])
                 [:div.pl-2 "Regex is invalid."])]]

             [component/button {:text      "Add a new language"
                                :style     "primary"
                                :on-click  #(|> [(s-ev :language-create) @language-to-edit-form])
                                :disabled? (not (and word-regex? text-splitting-regex? form-is-valid?))}]]]])))))

(defn languages
  ""
  [settings]
  [:div
   [language-change-current settings]
   [language-edit-lang (@settings :target-lang)]
   [language-new-lang settings]])

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
  (|> [(s-ev :languages-get)])
  (let [current-setting (r/atom "General")
        orig-settings   (rf/subscribe [::subs/settings])
        settings        (r/atom @orig-settings)]
    (fn []
      (when @settings
        [:div.flex.h-full.overflow-y-auto
         [sidebar {:current-setting current-setting}]
         [:div.flex.flex-1.flex-col.items-center.bg-gray-50.dark:bg-gray-900.overflow-y-auto
          [:div {:class "flex flex-col w-full xl:w-3/4 p-4 pt-8 max-w-screen-lg"}
           (case @current-setting
             "General"            [general settings]
             "Languages"          [languages settings]
             "Backup and Restore" [backup-restore settings]
             "About"              [:div.justify-center.flex.items-center.flex-1 [about settings]]
             "Donate"             [:div.justify-center.flex.items-center.flex-1 [donate]]
             [languages settings])]
          (when (not= @orig-settings @settings)
            [:div
             [save-changes settings]])]]))))
