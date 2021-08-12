(ns app.shared.util
  (:require [clojure.string :as str]))


(defn print-deep-js
  [o]
  (js/console.log (js/JSON.stringify o nil 4)))


(defn seq->sql-placeholder
  [seq]
  (->> seq
       (map (fn [_] "(?)"))
       (apply array)
       (str/join ",")))



(defn split-article
  "Splits a string by whitespace and punctuation"
  [string]
  (let [re  #"(\s+|[.,!?:;\"])"
        res (str/split string re)
        res (filter (fn [s]
                      ;; (prn s)
                      (and (not= s " ")
                           (not= s ""))) res)]
    (vec res)))


(def x "Le ministre de l'Éducation du Québec, Jean-François Roberge, a fait savoir mercredi lors de la présentation du plan du gouvernement en vue de la rentrée scolaire 2021-2022 qu'en raison des risques que fait peser le variant Delta, le masque devra être porté par les élèves du primaire et du secondaire en certaines circonstances.

En fait, les élèves pourront évoluer sans masque pour la plus grande partie de leur présence à l'école, soit en classe, à l'extérieur et au service de garde. Celui-ci sera cependant requis dans les autobus scolaires, où des places seront assignées aux élèves, et dans les aires communes.

Les autobus et les aires communes sont des endroits où les jeunes se retrouvent souvent entassés et au coude-à-coude, a fait valoir le ministre Roberge, ce qui requiert plus de précautions, dit-il.

Quant aux enseignants, ils ne seront pas obligés de porter le masque en classe si une distance de deux mètres avec les élèves est respectée. Il n'est pas non plus question pour le moment d'obliger les enseignants à se faire vacciner.

Malgré la crainte d’une résurgence d’éclosions de COVID-19, le ministre Roberge a aussi fait savoir que les classes-bulles ne seront pas de mise cette année, ce qui permettra le retour des cours à option au secondaire, ainsi que les programmes de sport-études, d’arts-études et les activités parascolaires. ")

;; (split-article x)
