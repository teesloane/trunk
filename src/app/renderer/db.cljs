(ns app.renderer.db
  (:require [clojure.string :as str]))

(def default-db
  {:current-view         "article-list"
   :articles             nil
   :words                []
   :current-article      nil
   :current-word-idx     0
   :current-word         nil ;; TODO: rename to :current-word-or-phrase
   :current-phrase       nil
   :current-phrase-words nil ; sub-vec of word-maps (from current-article :word-data)
   :current-phrase-idxs  nil ; list of indexes of the current selected phrase
   :languages            []
   :loading?             true
   :toast                ""
   :settings             nil
   :shift-held?          false
   :t-win                {:open?    false
                          :loading? false}})

;; helpers --

;; TODO - this could be moved to specs?
(def views
  {:words          "words"
   :article        "article"
   :article-create "article-create"
   :article-list   "article-list"})

(defn get-curr-word-or-phrase
  "Gets the currently selected word (or phrase) from the rf/db."
  [db]
  (or (-> db :current-word :name)
      (str/join " " (->> (db :current-phrase-words)
                         (map :name)))))

;; view checkers:

(defn view-words? [db]
  (= (-> db :current-view) (views :words)))

(defn view-article? [db]
  (= (-> db :current-view) (views :article)))

(defn get-current-language
  [db]
  (let [target-lang (-> db :settings :target-lang)
        langs       (-> db :languages)]
    (->> langs
         (filter #(= target-lang (% :iso_639_1)))
         first)))

(defn get-word-regex-for-target-lang
  [db]
  ((get-current-language db) :word_regex))
