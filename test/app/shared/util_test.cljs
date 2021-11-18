(ns app.shared.util-test
  (:require [app.shared.util :as sut]
            [app.shared.specs :as specs]
            [cljs.test :as t :include-macros true]))

(t/deftest split-article
  (let [res1 (sut/split-article "I am an english article" (specs/get-lang-split-regex "english"))
        res2 (sut/split-article "«Range à carguer les voiles de hune, le foc et la brigantine! cria le jeune marin; faites penaud!»" (specs/get-lang-split-regex "french"))]
    (t/is (= res1 ["I" "am" "an" "english" "article"]))
    (t/is (= res2 ["«" "Range" "à" "carguer" "les" "voiles" "de" "hune" "," "le" "foc" "et" "la" "brigantine" "!" "cria" "le" "jeune" "marin" ";" "faites" "penaud" "!" "»"]))))

(t/deftest split-delimited-article
  (let [res (sut/split-delimited-article "1$2$3$4$5$6$7$8$9$8$6$10$11$12")]
    (t/is (= res  ["1" "2" "3" "4" "5" "6" "7" "8" "9" "8" "6" "10" "11" "12"]))))

(t/deftest paginate-vector
  (let [res1 (sut/paginate-vector (vec (range 1 100)) 10 0)
        res2 (sut/paginate-vector (vec (range 1 100)) 10 1)
        oob  (sut/paginate-vector (vec (range 1 100)) 10 50)
        ]
    (t/is (= res1 [1 2 3 4 5 6 7 8 9 10] ))
    (t/is (= res2 [11 12 13 14 15 16 17 18 19 20]))
    (t/is (= oob  (vec (range 1 100))))))
