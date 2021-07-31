(ns renderer.core
  (:require
   [reagent.core :as r]
   [clojure.string :as str]
   [renderer.ipc :as ipc]
   [reagent.dom :as rd]))


(defn article-submit
  []
  [:div
   [:textarea]
   [:button {:on-click #(ipc/send! "<-article-create" "payload")} "Submit"]])

(defn root-component []
  []
  [:main
   [:div "hi"]
   [article-submit]])

(defn ^:dev/after-load start! []
  (ipc/init)
  (rd/render
   [root-component]
   (js/document.getElementById "app-container")))


