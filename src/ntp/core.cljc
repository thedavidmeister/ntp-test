(ns ntp.core
 (:require
  #?(:cljs ntp.state)
  [clojure.test :refer [deftest is]]))

(defn now-millis
 []
 #?(:cljs (.getTime (js/Date.))
    :clj (System/currentTimeMillis)))

; This is only a poor-man's NTP, based on our own server time and some JS.
; http://stackoverflow.com/questions/1638337/the-best-way-to-synchronize-client-side-javascript-clock-with-server-date
#?(:cljs
   (defn server-now
    []
    (-> (.getTime (js/Date.))
     (+ @ntp.state/offset)
     ; Avoid fractions of ms produced by the ntp-offset calculation.
     Math/floor))

   :clj
   (def server-now now-millis))

; TESTS

(deftest ??server-now
 (is (pos-int? (server-now))))
