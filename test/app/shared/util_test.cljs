(ns app.shared.util-test
  (:require [app.shared.util :as sut]
            [cljs.test :as t :include-macros true]))

(t/deftest split-article
  (let [res1 (sut/split-article "I am an english article")
        res2 (sut/split-article "«Range à carguer les voiles de hune, le foc et la brigantine! cria le jeune marin; faites penaud!»")]
    (t/is (= res1 ["I" "am" "an" "english" "article"]))
    (t/is (= res2 ["«" "Range" "à" "carguer" "les" "voiles" "de" "hune" "," "le" "foc" "et" "la" "brigantine" "!" "cria" "le" "jeune" "marin" ";" "faites" "penaud" "!" "»"]))))

(t/deftest split-delimited-article
  (let [res (sut/split-delimited-article "1$2$3$4$5$6$7$8$9$8$6$10$11$12")]
    (t/is (= res  ["1" "2" "3" "4" "5" "6" "7" "8" "9" "8" "6" "10" "11" "12"]))))
