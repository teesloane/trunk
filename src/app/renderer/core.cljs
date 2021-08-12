(ns app.renderer.core
  (:require
   [reagent.dom :as rdom]
   [re-frame.core :as rf]
   [app.renderer.events :as events]
   [app.renderer.views :as views]

   [clojure.string :as str]))


(defn ^:dev/after-load start! []
  (rf/dispatch-sync [::events/initialize-db])
  (rf/clear-subscription-cache!)
  (events/ipc-init)
  (let [root-el (.getElementById js/document "app-container")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [views/main-panel] root-el)))


(def x "L’entreprise pharmaceutique américaine Moderna s'installera au Canada pour fabriquer des vaccins à ARN messager et la ville de Montréal est pressentie pour accueillir le centre de recherche et l'usine de production.

Une entente de principe a été conclue avec le gouvernement fédéral et une annonce est prévue ce matin à 10 h.

Le PDG de Moderna, Stéphane Bancel, sera présent pour l'annonce de même que le ministre de l’Innovation, des Sciences et de l’Industrie du Canada, François-Philippe Champagne.

La société Moderna a développé un vaccin contre la COVID-19 notamment reconnu par Santé Canada et l'Agence américaine des médicaments (FDA).

On ignore pour l'instant combien d'argent sera investi pour la construction des installations. On ignore également où elles seraient situées si Montréal remportait la mise.

Or, selon La Presse, qui a d’abord révélé cette nouvelle, Moderna envisage d’investir « des centaines de millions de dollars au pays au cours des prochaines années ».

Au cabinet du ministre Champagne, on indique que le Québec – et à plus forte raison Montréal – part avec une longueur d'avance, car il se démarque déjà dans le domaine. ")


