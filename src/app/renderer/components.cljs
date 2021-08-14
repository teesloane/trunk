(ns app.renderer.components)

(defn button
  [{:keys [on-click text]}]
  (let [styles "dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 self-start text-xs bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 mt-2 border border-gray-400 rounded shadow"]
    [:button {:class styles :on-click on-click} text]))
