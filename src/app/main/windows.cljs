(ns app.main.windows
  (:require
   ["electron" :refer [BrowserWindow BrowserView app dialog]]))


(def main-window (atom nil))
(def t-win (atom nil))

(defn init-browser
  []
  (reset! main-window
          (BrowserWindow.
           (clj->js {:width  1300
                     :height 800
                     :minWidth 600
                     :webPreferences
                     {:nodeIntegration  true
                      :contextIsolation false ;; come back and figure out preload.js someday.
                      }})))

  ;; (init-browser-view)
  (.loadURL ^js/electron.BrowserWindow @main-window (str "file://" js/__dirname "/public/index.html"))
  (.on ^js/electron.BrowserWindow @main-window "closed" #(reset! main-window nil)))

(defn go-to-url
  [{:keys [current-word target-lang native-lang]}]
  (.loadURL ^js (.-webContents ^BrowserView @t-win )
            (if (and current-word target-lang native-lang)
              (str "https://translate.google.com"
                   "?sl=" target-lang "&tl=" native-lang
                   "&text=" current-word "&op=translate")
              "https://translate.google.com")))

(defn t-win-init
  "Used for mini google translate window."
  [{:keys [width height containerHeight button-height containerWidth current-word] :as data} ]
  (let [pos {:x      (- width (int containerWidth))
             :y      (- height button-height (int containerHeight) )
             :width  (int containerWidth)
             :height (int containerHeight)}]
  (reset! t-win (BrowserView.))
  (.setBrowserView ^js/electron.BrowserWindow @main-window @t-win)
  (.setBounds ^js/electron.BrowserView @t-win (clj->js pos))
  (go-to-url (select-keys data [:current-word :target-lang :native-lang]))))

(defn t-win-update-word
  [data]
  (go-to-url (select-keys data [:current-word :target-lang :native-lang])))

(defn t-win-close
  []
  (.removeBrowserView ^js/electron.BrowserWindow @main-window @t-win)
  (reset! t-win nil))


(defn bkup-db-window?
  [backup-name]
  (let [path (.getPath app "desktop")
        opts (clj->js {:title       "Select save location for Trunk backup"
                       :defaultPath (str path "/" backup-name)})]
    (.showSaveDialog dialog opts)))
