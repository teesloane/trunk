(ns app.main.ipc
  (:require
   [app.main.db :as db]
   [app.shared.ipc-events :refer [s-ev]]
   [cljs.core.async :refer [<! go]]
   ["electron" :refer [ipcMain]]))

(defn reply!
  "Sends data back to renderer from IPC back end.
  Data going over ipc MUST be in JS, so it is converted here.
  "
  [electron-event event-name data]
  (js/electron-event.reply (name event-name) (clj->js data)))

;; TODO, could loop through a list to create this, or make a partial "handle" func?
(def ipcHandlers
  {(s-ev :article-create)
   (fn [event data]
     (go (let [_                (<! (db/<insert-words (data :article)))
               word-ids-str     (<! (db/<get-word-ids (data :article)))
               inserted-article (<! (db/<article-insert (merge data {:word_ids word-ids-str})))]
           (reply! event (s-ev :article-created) inserted-article))))

   (s-ev :articles-get)
   (fn [event data]
     (go (reply! event (s-ev :articles-received) (<! (db/<articles-get)))))

   (s-ev :article-get)
   (fn [event data]
     (go
       (let [id              (data :article_id)
             updated-article (db/<article-update-last-opened id)
             article-whole   (<! (db/<article-get-by-id id))
             final-res       (<! (db/<article-attach-words article-whole))]
         (reply! event (s-ev :article-received) final-res))))

   ;; (s-ev :article-update)
   ;; (fn [event data]
   ;;   (db/article-update data (fn [data]
   ;;                             (reply! event (s-ev :article-updated) data))))

   (s-ev :word-update)
   (fn [event data]
     (go
       (let [_   (<! (db/<word-update data))
             res (<! (db/<word-get (data :word_id)))]
         (reply! event (s-ev :word-updated) res))))

   (s-ev :wipe-db!)
   (fn [event data] (db/wipe!))})

;; dev mode:
;; Hot-reloading with shadow-cljs seems to re-run event `on` handlers
;; can't seem to use ipcMain.eventNames() to check what exists
;; (like in ipcRenderer.eventNames) so I'm storing them in an atom to check if
;; they exist before running the on.
(def existing-events (atom []))
(defn init
  []
  (doseq [[key handler] ipcHandlers]

    ;; check if the event handler exists before adding it.
    (when-not (some #{key} @existing-events)
      (swap! existing-events conj key)
      (.on ipcMain (name key)
           (fn [event args] (handler event (js->clj args :keywordize-keys true)))))))
