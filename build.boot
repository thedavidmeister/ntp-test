(def project 'thedavidmeister/ntp-test)
(def version "0.1.0-SNAPSHOT")

(set-env!
 :source-paths #{"src"}
 :resource-paths #{"assets"}
 :dependencies
 '[; scaffolding...
   [org.clojure/clojure "1.9.0"]
   [org.clojure/clojurescript "1.9.946"]
   [hoplon "7.3.0-SNAPSHOT"]
   [pandeiro/boot-http "0.8.3"]
   [adzerk/boot-reload "0.5.1"]
   [adzerk/boot-cljs "2.1.4"]
   [tailrecursion/boot-jetty  "0.1.3"]
   [thedavidmeister/boot-github-pages "0.1.0-SNAPSHOT"]

   ; ; util
   ; [thedavidmeister/wheel "0.2.0-SNAPSHOT"]
   ;
   ; ; logging
   ; [com.taoensso/timbre "4.10.0"]
   ;
   ; networking
   [cljs-ajax "0.7.3"]])
   ;
   ; ; data
   ; [funcool/cuerdas "2.0.3"]
   ; [datascript "0.16.1"]])

(require
 '[adzerk.boot-cljs :refer [cljs]]
 '[hoplon.boot-hoplon :refer [hoplon prerender]]
 '[tailrecursion.boot-jetty :refer [serve]]
 '[thedavidmeister.boot-github-pages :refer [github-pages]])

(def compiler-options
 {})

(deftask front-dev
 "Build for local development."
 []
 (comp
  (watch)
  (speak)
  (hoplon)
  (cljs :compiler-options compiler-options)
  (serve :port 8000)))

(deftask build
 []
 (comp
  (hoplon)
  (cljs
   :optimizations :advanced
   :compiler-options compiler-options)))

(deftask deploy
 []
 (comp
  (build)
  (target
   :dir #{"gh-pages"})
  (github-pages)))
