(ns vega.app.core
  (:require [reagent.dom :as d]
            [shadow.resource :as resource]
            [clojure.spec.alpha :as s]
            [oz.core :as oz]))

;; the vega timeline spec read in as a string
(def
  timeline (resource/inline "spec/timeline.json"))

;; some testdata to test out change-dataset func, read in as a string
(def
  new-data (resource/inline "spec/testData.json"))

(defn string->json [string]
  "Turning a string into JS JSON format"
  (.parse js/JSON string))

(defn json->map
  [json keywordize-keys?]
  "Turning a JS JSON format into a map, keywordize keys true or false"
  (js->clj json :keywordize-keys keywordize-keys?))

;; turning the timeline into a clojure map with keys as keywords
(def spec
  (->
    (string->json timeline)
    (json->map true)))

;; turning the testdata into a clojure map with keys as keywords
(def data-set
  (->
    (string->json new-data)
    (json->map true)))

;; validating years in initRange to be between 1881-2019
(def year?
  (s/and number? #(> % 1880) #(< % 2020)))

;; validating the height of the timeline to be between 100-1200, smaller or heighter would nok look good.
(def height?
  (s/and number? #(>= % 100) #(<= % 1200)))

;; valid colors in vega doc
(def valid-colors #{"accent" "category10" "category20" "category20b" "category20c" "dark2" "paired" "pastel1" "pastel2" "set1" "set2" "set3" "tableau10" "tableau20"})

;; valid symbols in vega doc
(def valid-symbols #{"circle" "square" "cross" "diamond" "triangle-up" "triangle-down" "triangle-right" "triangle-left" "stroke" "arrow" "wedge" "triangle"})


(s/def ::Startdato string?) ; might be a good idea to do a reqex check here too: dddd-dd-dd
(s/def ::Slutdato string?) ; might be a good idea to do a reqex check here too: dddd-dd-dd
(s/def ::Kategori string?)

(s/def ::dataset (s/coll-of ::data))
(s/def ::data (s/keys :req-un [::Startdato ::Slutdato ::Kategori] ; these keys need to be in the data in order for the timeline to work
                      :opt-un [::Event ::Tooltip])) ; these keys should be in the data in order to show tooltips or text



(defn change-range
  [vega-spec start-year end-year]
  "Changing the range start and end year"
  (if (and (s/valid? year? start-year) (s/valid? year? end-year))
   (assoc-in vega-spec [:data 1 :values] [{:initRange (str start-year "-01-01")} {:initRange (str end-year "-01-01")}])))
  ;; (throw "some kind of error handling here")) ; for when start and end are not a valid year according to year?


(defn change-range-step
  [vega-spec step]
  "Changing the width of the range in years, starting from year 1930"
  (if (pos? step)
    (let [year (+ 1930 step)]
     (assoc-in vega-spec [:data 1 :values 1 :initRange] (str year "-01-01")))))
  ;; (throw "some kind of error handling here")))


(defn change-dataset
  [vega-spec dataset]
  "Changing the dataset as in-line data values"
  (if (s/valid? ::dataset dataset)
      (->
        (update-in vega-spec [:data 0] dissoc :url)
        (assoc-in [:data 0 :values] dataset))))
;; (throw "some kind of error handling here"))



(defn change-height
  [vega-spec height]
  "Changing the height"
  (if (s/valid? height? height)
    (assoc-in vega-spec [:height] height)))
    ;; (throw "some kind of error handling here")))


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



(defn spec-component
  [vega-spec]
  "Component for vega spec using Oz"
  (oz/vega vega-spec {:mode "vega"}))






(defn app []
  [spec-component spec])


(def root
  (js/document.getElementById "app"))

(defn ^:dev/after-load render []
  (d/render [app] root))


(defn init []
  (render))
