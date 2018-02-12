(ns ntp.state
 (:require
  ntp.math
  ajax.core
  ntp.data
  [hoplon.core :as h]
  [javelin.core :as j]))

; Client's timestamp of request.
(defonce t0 (j/cell nil))
; Server's timestamp of request.
(defonce t1 (j/cell nil))
; Server's timestamp of response.
(defonce t2 (j/cell nil))
; Client's timestamp of response.
(defonce t3 (j/cell nil))

(defn set-times!
 [t0' t1' t2' t3']
 (j/dosync
  (reset! t0 t0')
  (reset! t1 t1')
  (reset! t2 t2')
  (reset! t3 t3')))

(def ready? (j/cell= (and t0 t1 t2 t3)))
(def round-trip (j/cell= (when ready? (ntp.math/round-trip t0 t1 t2 t3))))
(def offset (j/cell= (if ready? (ntp.math/offset t0 t1 t2 t3) 0)))

(defn sync-times
 []
 (let [t0 (.getTime (js/Date.))]
  (ajax.core/GET
   "http://rest.ably.io/time"
   {:handler
    (fn [[r]]
     (set-times!
      t0 r r (.getTime (js/Date.))))
    :finally #(h/with-timeout ntp.data/poll-interval (sync-times))})))
(sync-times)
