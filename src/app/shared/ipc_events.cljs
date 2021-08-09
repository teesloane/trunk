(ns app.shared.ipc-events)


;; used to ipc knows what to listen and dispatch on and use in re-frame
(def shared-events
  {
   :fetch-articles ::fetch-articles
   :received-articles ::received-articles
   })
