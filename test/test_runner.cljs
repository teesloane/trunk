(ns app.test-runner
  (:require  [cljs.test :as t :include-macros true]
             [app.shared.util-test]))


(t/run-all-tests #"app.*")
