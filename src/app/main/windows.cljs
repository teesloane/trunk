(ns app.main.windows
  (:require
   ["electron" :refer [BrowserWindow BrowserView app]]))


(def main-window (atom nil))
(def t-win (atom nil))

(defn init-browser
  []
  (reset! main-window
          (BrowserWindow.
           (clj->js {:width  800
                     :height 600
                     :webPreferences
                     {:nodeIntegration  true
                      :contextIsolation false ;; come back and figure out preload.js someday.
                      }})))

  ;; (init-browser-view)
  (.loadURL ^js/electron.BrowserWindow @main-window (str "file://" js/__dirname "/public/index.html"))
  (.on ^js/electron.BrowserWindow @main-window "closed" #(reset! main-window nil)))

(defn go-to-url
  [current-word]
  (.loadURL ^js (.-webContents ^BrowserView @t-win )
            (if current-word
              ;; TODO: make language selectable / dynamic
              (str "https://translate.google.com" "?sl=fr&tl=en&text=" current-word "&op=translate")
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
  (go-to-url current-word)))

(defn t-win-update-word
  [data]
  (go-to-url (data :name)))

(defn t-win-close
  []
  (.removeBrowserView ^js/electron.BrowserWindow @main-window @t-win)
  (reset! t-win nil))
