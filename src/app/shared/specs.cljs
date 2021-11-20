(ns app.shared.specs
  "This file has several maps that describe the shape of common data throughout Trunk.
  These are not clojure/spec shapes (yet)."
  (:require [app.shared.util :as u]
            [clojure.string :as str]))

;; -- Words / Phrases

;; the word comfort integers as they are reflected in the db.
(def word-comfort
  {:unknown 0
   :hard    1
   :medium  2
   :easy    3
   :known   4
   :ignore  5})

(def word
  {:id          nil
   :name        nil
   :slug        nil ; lowercased version of the word
   :comfort     0
   :count       0
   :translation nil})

(defn m->word
  [m]
  (select-keys m (vec (keys word))))

(def phrase
  {:id       nil ; auto set by sqlite
   :word_ids        ""  ; $ delimited string of ints.
   :slug            ""
   :name            ""
   :translation     nil
   :comfort         0
   :first_word_slug ""
   :last_word_slug  ""
   :language        ""})

(defn make-phrase
  [list-words]
  (let [words (->> list-words (map :name))]
    (-> phrase
        (assoc :word_ids (str/join "$" (map :id list-words))
               :name  (str/join " " words)
               :slug     (str/join " " (map u/slug-word words))
               :first_word_slug (-> list-words first :slug)
               :last_word_slug (-> list-words last :slug)
               :language (-> list-words first :language)))))

;; -- Langs:

(def lang
  {:id                nil
   :name              "" ; ex: "french"
   :iso_639_1         "" ; two letter code; ex: "fr"
   :text_splitting_regex "" ; determines what constitutes punctuation
   :word_regex        "" ; what constitutes a word - used to split articles up.
   })

;; common lang regexes.
(def lang-regexes
  {:latin-split "(\\s+|[.,!?«»:;—\"])"
   :latin-word  "^[a-zA-ZÀ-ÖØ-öø-ȳ-']+$"
   })

(def langs-db
  {"french"  {:name                 "french"
              :iso_639_1            "fr"
              :text_splitting_regex (lang-regexes :latin-split)
              :word_regex           (lang-regexes :latin-word)}
   "english" {:name                 "english"
              :iso_639_1            "en"
              :text_splitting_regex (lang-regexes :latin-split)
              :word_regex           (lang-regexes :latin-word)}
   "spanish" {:name                 "spanish"
              :iso_639_1            "es"
              :text_splitting_regex (lang-regexes :latin-split)
              :word_regex           (lang-regexes :latin-word)}
   "polish"  {:name                 "polish"
              :iso_639_1            "pl"
              :text_splitting_regex (lang-regexes :latin-split)
              :word_regex           (lang-regexes :latin-word)}
   "german"  {:name                 "german"
              :iso_639_1            "de"
              :text_splitting_regex (lang-regexes :latin-split)
              :word_regex           (lang-regexes :latin-word)}
   "swedish" {:name                 "swedish"
              :iso_639_1            "sv"
              :text_splitting_regex (lang-regexes :latin-split)
              :word_regex           (lang-regexes :latin-word)}
   "dutch"   {:name                 "dutch"
              :iso_639_1            "nl"
              :text_splitting_regex (lang-regexes :latin-split)
              :word_regex           (lang-regexes :latin-word)}
   "italian" {:name                 "italian"
              :iso_639_1            "it"
              :text_splitting_regex (lang-regexes :latin-split)
              :word_regex           (lang-regexes :latin-word)}})

(defn get-lang-by-shortcode
  "Get English by passing `en`, for example"
  [sc]
  (some (fn [[k v]] (when (= (v :iso_639_1) sc) k)) langs-db))

(defn get-lang-split-regex
  [lang-name]
  (-> (get langs-db lang-name)
      :text_splitting_regex))

(defn get-word-regex
  [lang-name]
  (-> (get langs-db lang-name)
      :word_regex))

;; -- Settings

(defn make-default-settings
  [trunk-version]
  {:native-lang   ((get langs-db "english") :iso_639_1)
   :target-lang   ((get langs-db "french") :iso_639_1)
   :trunk-version trunk-version
   :page-size     500})
