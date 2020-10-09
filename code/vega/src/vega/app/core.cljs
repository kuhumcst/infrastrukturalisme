(ns vega.app.core
  (:require [reagent.dom :as d]
            [reagent.core :as r]
            [shadow.resource :as resource]
            [clojure.spec.alpha :as s]
            [oz.core :as oz]))


(def
  timeline (resource/inline "spec/timeline.json"))

(defn string->json [string]
  "Turning a string into JS JSON format"
  (.parse js/JSON string))

(defn json->spec
  [json keywordize-keys?]
  "Turning a JS JSON format into a map, keywordize keys true or false"
  (js->clj json :keywordize-keys keywordize-keys?))

(def spec
  (->
    (string->json timeline)
    (json->spec true)))

(def year?
  (s/and number? #(> % 1880) #(< % 2020)))

(def valid-colors #{"accent" "category10" "category20" "category20b" "category20c" "dark2" "paired" "pastel1" "pastel2" "set1" "set2" "set3" "tableau10" "tableau20"})

(def valid-symbols #{"circle" "square" "cross" "diamond" "triangle-up" "triangle-down" "triangle-right" "triangle-left" "stroke" "arrow" "wedge" "triangle"})

(defn change-range
  [vega-spec start-year end-year]
  "Changing the range start and end year"
  (if (and (s/valid? year? start-year) (s/valid? year? end-year))
   (assoc-in vega-spec [:data 1 :values] [{:initRange (str start-year "-01-01")} {:initRange (str end-year "-01-01")}])))
  ;; (throw "some kind of error handling here")) ; for when start and end are not a valid year according to year?


(defn change-range-step
  [vega-spec step]
  "Changing the step of range"
  (if (pos? step)
    (let [year (+ 1930 step)]
     (assoc-in vega-spec [:data 1 :values 1 :initRange] (str year "-01-01")))))
  ;; (throw "some kind of error handling here")))


#_(defn filter-data
    [vega-spec column-name & values]
    "Filter the data to only show the values"
    (let [expr {:type "filter" :expr (str "datum." column-name " === '" (first values) "'")}]
      (map values
           (apply str "|| datum." column-name " === '" (next values) "'"))
     ((assoc-in vega-spec [:data 0 :transform 1] expr))))


(defn change-dataset
  [])
;; skal skrive noget om hvad et dataset SKAL indeholde for at virke, måske clojurespec til hjælp?

(defn change-height
  [])

(defn change-color
  [vega-spec scheme]
  "Changing the color of the legend based on a vega scheme"
  (if (contains? valid-colors scheme)
    (assoc-in vega-spec [:scales 2 :range] {:scheme scheme})))
    ;; (throw "some kind of error handling here")))


(defn change-symbol
  [vega-spec symbol]
  "Changing the shape of the symbol"
  (if (contains? valid-symbols symbol)
    (assoc-in vega-spec [:marks 2 :encode :update :shape] {:value symbol})))
;; (throw "some kind of error handling here")))



(def new-spec
  (change-range-step spec 2))


(defn app []
  (js/console.log "Spec: " new-spec)
  [oz/vega new-spec {:mode "vega"}])


(def root
  (js/document.getElementById "app"))

(defn ^:dev/after-load render []
  (d/render [app] root))


(defn init []
  (render))
