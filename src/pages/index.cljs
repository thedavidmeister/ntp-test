(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  ntp.core))

(h/html
 (h/body
  (h/div
   "SNTP time:"
   (j/with-let [t (j/cell nil)]
    (h/with-interval
     0 (reset! t (ntp.core/server-now)))))
  (h/div
   "Local time:"
   (j/with-let [t (j/cell nil)]
    (h/with-interval
     0 (reset! t (.getTime (js/Date.))))))))
