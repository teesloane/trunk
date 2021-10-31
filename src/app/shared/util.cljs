(ns app.shared.util
  (:require
   [clojure.string :as str]))

(def log (.-log js/console))

(def debug? ^boolean goog.DEBUG)

(defn log-dev [& args]
  (when debug?
    (apply (.-log js/console) args)))

(defn print-dev [& args]
  (when debug?
    (apply prn args)))

(def comfort-text-and-col
  {0 {:name "Unknown" :text-col "text-gray-800 dark:text-gray-200"   :bg-col "bg-gray-300 dark:bg-gray-800"}
   1 {:name "Hard"    :text-col "text-red-500"    :bg-col "bg-red-300"}
   2 {:name "Medium"  :text-col "text-yellow-500" :bg-col "bg-yellow-300"}
   3 {:name "Easy"    :text-col "text-green-600"  :bg-col "bg-green-300"}
   4 {:name "Known"   :text-col "text-black dark:text-gray-500"      :bg-col "bg-white dark:bg-gray-900"}})

(defn get-comfort-level-name [idx]
  (-> idx comfort-text-and-col :name))

(defn get-comfort-bg-col [idx]
  (-> idx comfort-text-and-col :bg-col))


(defn split-article
  "Splits a string by whitespace and punctuation"
  [string]
  (let [re  #"(\s+|[.,!?«»:;—\"])" ; TODO: determine this based on language preferences.
        res (str/split string re)
        res (filter (fn [s]
                      (and (not= s " ")
                           (not= s ""))) res)]
    (vec res)))

(defn split-delimited-article
  [word-ids]
  (str/split word-ids "$"))

(defn delimit-article
  "Turns a string of ids into a delimited$by$dollar$sign"
  [vec-str-ids]
  (str/join "$" vec-str-ids))

(defn is-punctuation?
  "NOTE: Eventually punctuation will vary by language...
  Example, french, usually words will not split on apostraphe
  J'ai !== J | ai.
  Eventually each language will need a user configure regex.
  "
  [s]
  (if (nil? s)
    false
    (re-matches #"[!,\/?\.»«—:;\"()]" s)))

(defn is-punctuation-or-newline?
  "Check's if a string is a punctuation item(s) or newline(s)."
  [s]
  (if (nil? s)
    false
    (or
     (not (nil? (is-punctuation? s)))
     (not (nil? (re-matches  #"[\n]*" s))))))

(defn word?
  "Checks if is punctuation or starts with a digit before confirming that it is a
  word We may at some point need to dynamically define this based on user
  preferences"
  [w]
  (let [w (str/trim w)]
    (not
     (or
      (is-punctuation-or-newline? w)
      (re-matches #".*[0-9].*" w)))))

(defn is-phrase
  "Phrases have the key `:first_word_slug`, so check if it's present on the map."
  [m]
  (-> m :first_word_slug nil? not))

(defn not-word?
  [w]
  (not (word? w)))

;; -- db functionality selector things?

(defn curr-word-view-open?
  [{:keys [current-word current-view]}]
  (and current-word (= current-view "article")))

(defn slug-word
  "Makes a word slug-ready for the db."
  [s]
  (str/lower-case s))

(defn trunc
  [s n]
  (subs s 0 (min (count s) n)))

(defn trunc-ellipse
  "Truncate a string if it is longer than n, adding `...`"
  [s n]
  (if (< (count s) n) s
      (str (str/trim (trunc s n)) "...")))

(defn date-unix->readable
  [ts]
  (when ts
    (-> ts js/Date. (.toLocaleDateString))))


;; class light + dark
(defn twld
  "Takes two strings, and adds dark mode to the end class"
  [a b]
  (let [
        with-dark (->> (str/split b " ")
                       (map (fn [s] (str "dark:" s)))
                       (str/join " "))]
    (str a " " with-dark)))

(defn update-word-list-with-phrases
  [phrase word-data]
  (let [phrase-length             (-> phrase :word_ids split-delimited-article count)
        {:keys [first_word_slug]} phrase
        res
        (reduce (fn [{:keys [capture-buffer] :as acc} {:keys [slug] :as curr}]
                  (if (and                              ; now it's time to see if...
                       (empty? (acc :capture-buffer))   ; our buffer is empty (we haven't captured anything)
                       (not= slug first_word_slug))     ; and the curr word isn't the start of a phrase
                    (update acc :out conj curr)         ; so we can just continue on and push the word into the out vec.

                    ;; it's time to capture words into the buffer until it's as long as the num of words in the curr phrase
                    (if (not= phrase-length (count capture-buffer))
                      (update acc :capture-buffer conj curr) ; buffer hasn't reached length of phrase yet, so keep capturing words.
                      (if (= (str/join "$" (map :id capture-buffer))
                             (phrase :word_ids))
                        (-> acc                    ; add the phrase, and empty the buffer
                            (update :out conj phrase)
                            (update :out conj curr)
                            (assoc :capture-buffer []))
                        (-> acc
                            (assoc :out (into [] (concat (acc :out) (acc :capture-buffer) [curr])))
                            (assoc :capture-buffer [])))
                      )))
                {:out [] :capture-buffer [] } word-data)]
    (res :out)))
