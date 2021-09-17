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

(defn t-win-init
  "Used for mini google translate window."
  [{:keys [width height containerHeight button-height containerWidth current-word] :as data} ]
  (prn data)
  (let [pos {:x      (- width containerWidth)
             :y      (- height button-height containerHeight )
             :width  (int containerWidth)
             :height (int containerHeight)}]
  (reset! t-win (BrowserView.))
  (.setBrowserView ^BrowserWindow @main-window @t-win)
  (.setBounds ^BrowserView @t-win (clj->js pos))
  (.loadURL ^js (.-webContents ^BrowserView @t-win )
            (if current-word
              ;; TODO: make language selectable / dynamic
              (str "https://translate.google.com" "?sl=fr&tl=en&text=" current-word "&op=translate")
              "https://translate.google.com"))))

(defn t-win-close
  []
  (.removeBrowserView ^BrowserWindow @main-window @t-win)
  (reset! t-win nil)
  )
