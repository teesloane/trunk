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
  {0 {:name      "Unknown"
      :text-col  "text-gray-800 dark:text-gray-200"
      :bg-col    "bg-gray-300 dark:bg-gray-800"
      :help-text "A word with no comfort or translation assigned."}
   1 {:name      "Hard"
      :text-col  "text-red-500"
      :bg-col    "bg-red-300"
      :help-text "A difficult word you are in the process of learning."}
   2 {:name      "Medium"
      :text-col  "text-yellow-500"
      :bg-col    "bg-yellow-300"
      :help-text "A word you know fairly well."}
   3 {:name      "Easy"
      :text-col  "text-green-600"
      :bg-col    "bg-green-300"
      :help-text "A word that you almost always remember."}
   4 {:name      "Known"
      :text-col  "text-black dark:text-gray-200"
      :bg-col    "bg-white dark:bg-gray-900"
      :help-text "A well known word that you don't need to study."}
   5 {:name      "Ignore"
      :text-col  "text-gray-500 dark:text-gray-400"
      :bg-col    "bg-gray-50 dark:bg-gray-900"
      :help-text "Ignore this word (ex: proper nouns, untranslateable words etc.)"}})

(defn get-comfort-level-name [idx]
  (-> idx comfort-text-and-col :name))

(defn get-comfort-bg-col [idx]
  (-> idx comfort-text-and-col :bg-col))

(defn split-article
  "Splits a string by whitespace and punctuation"
  [string regex]
  (let [re  (re-pattern regex)
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

;; TODO should probably be in a try catch.
(defn word?
  [w rx-str]
  (let [w (str/trim w)
        regex (re-pattern rx-str)]

    (re-matches regex w)))


(defn is-phrase
  "Phrases have the key `:first_word_slug`, so check if it's present on the map."
  [m]
  (-> m :first_word_slug nil? not))

(defn not-word?
  [w rx-str]
  (let [regex (re-pattern rx-str)]
    (not (word? w rx-str))))

;; -- db functionality selector things?

(defn curr-word-view-open?
  [{:keys [current-word current-view]}]
  (and current-word (= current-view "article")))

(defn slug-word
  "Makes a word slug-ready for the db."
  [s]
  (str/lower-case s))

(defn find-first
  [pred l]
  (->> l (filter pred) first))

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
  (let [with-dark (->> (str/split b " ")
                       (map (fn [s] (str "dark:" s)))
                       (str/join " "))]
    (str a " " with-dark)))

(defn paginate-vector
  "Simulated sql pagination with a vector"
  [v limit curr-page]
  (prn (type limit) (type curr-page))
  (let [subvec-start (* curr-page limit) ; offset
        subvec-end   (+ subvec-start limit)
        total-size   (count v)]
    (cond
      ;; handle out-of-bounds on both start/end (this shouldn't happen).
      (and
       (> subvec-start total-size)
       (> subvec-end total-size))
      ;; TODO this is breaking things.
      v ; just return the vector and give up because software is too hard.

      (> subvec-end total-size)
      (subvec v subvec-start total-size)

      :else
      (subvec v subvec-start (+ subvec-start limit)))))

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
                            (assoc :capture-buffer []))))))
                {:out [] :capture-buffer []} word-data)]
    (res :out)))
