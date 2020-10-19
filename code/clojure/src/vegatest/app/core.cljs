(ns vegatest.app.core
  (:require [reagent.dom :as d]
            [reagent.core :as r]
            [oz.core :as oz]))


(def json "{\n  \"$schema\": \"https://vega.github.io/schema/vega/v5.json\",\n  \"description\": \"A timeline for Hjelmslev's activities.\",\n  \"width\": 800,\n  \"height\": 200,\n  \"padding\": 10,\n  \"autosize\": \"pad\",\n  \"data\": [\n    {\n      \"name\": \"hjelmslev\",\n      \"url\": \"https://raw.githubusercontent.com/SofieVonge/infrastrukturalisme/master/data/timeline/hjelmslev.json\",\n      \"format\": {\n        \"type\": \"json\",\n        \"parse\": {\n          \"Startdato\": \"date:'%d-%m-%Y'\",\n          \"Slutdato\": \"date:'%d-%m-%Y'\"\n        }\n      },\n      \"transform\": [\n        {\n          \"type\": \"formula\",\n          \"expr\": \"datum.Kategori === 'Rejse' ? 0 : 1\",\n          \"as\": \"sorting\"\n        }\n      ]\n    },\n    {\n      \"name\": \"initValues\",\n      \"format\": {\n        \"type\": \"json\",\n        \"parse\": {\n          \"initRange\": \"date\"\n        }\n      },\n      \"values\": [\n        {\n          \"initRange\": -1262304000000\n        },\n        {\n          \"initRange\": -1136073600000\n        }\n      ],\n      \"transform\": [\n        {\n          \"type\": \"extent\",\n          \"field\": \"initRange\",\n          \"signal\": \"xext\"\n        }\n      ]\n    },\n    {\n      \"name\": \"selected\",\n      \"on\": [\n        {\n          \"trigger\": \"clear\",\n          \"remove\": true\n        },\n        {\n          \"trigger\": \"!shift\",\n          \"remove\": true\n        },\n        {\n          \"trigger\": \"!shift && clicked\",\n          \"insert\": \"clicked\"\n        },\n        {\n          \"trigger\": \"shift && clicked\",\n          \"toggle\": \"clicked\"\n        }\n      ]\n    }\n  ],\n  \"signals\": [\n    {\n      \"name\": \"path\",\n      \"value\": \"M0 -50 H 800 V 200 H0\"\n    },\n    {\n      \"name\": \"clear\",\n      \"value\": true,\n      \"on\": [\n        {\n          \"events\": \"dblclick[!event.item]\",\n          \"update\": \"true\",\n          \"force\": true\n        }\n      ]\n    },\n    {\n      \"name\": \"shift\",\n      \"value\": false,\n      \"on\": [\n        {\n          \"events\": \"@legendSymbol:click, @legendLabel:click\",\n          \"update\": \"event.shiftKey\",\n          \"force\": true\n        }\n      ]\n    },\n    {\n      \"name\": \"clicked\",\n      \"value\": null,\n      \"on\": [\n        {\n          \"events\": \"@legendSymbol:click, @legendLabel:click\",\n          \"update\": \"{value: datum.value}\",\n          \"force\": true\n        }\n      ]\n    },\n    {\n      \"name\": \"down\",\n      \"value\": null,\n      \"on\": [\n        {\n          \"events\": \"mousedown\",\n          \"update\": \"xy()\"\n        }\n      ]\n    },\n    {\n      \"name\": \"xcur\",\n      \"value\": null,\n      \"on\": [\n        {\n          \"events\": \"mousedown\",\n          \"update\": \"slice(xdom)\"\n        }\n      ]\n    },\n    {\n      \"name\": \"delta\",\n      \"value\": [\n        0,\n        0\n      ],\n      \"on\": [\n        {\n          \"events\": [\n            {\n              \"source\": \"window\",\n              \"type\": \"mousemove\",\n              \"filter\": \"!event.shiftKey\",\n              \"consume\": true,\n              \"between\": [\n                {\n                  \"type\": \"mousedown\",\n                  \"filter\": \"!event.shiftKey\"\n                },\n                {\n                  \"source\": \"window\",\n                  \"type\": \"mouseup\"\n                }\n              ]\n            }\n          ],\n          \"update\": \"down ? [down[0]-x(), y()-down[1]] : [0,0]\"\n        }\n      ]\n    },\n    {\n      \"name\": \"xdom\",\n      \"update\": \"slice(xext)\",\n      \"on\": [\n        {\n          \"events\": \"dblclick\",\n          \"update\": \"slice(xext)\"\n        },\n        {\n          \"events\": {\n            \"signal\": \"delta\"\n          },\n          \"update\": \"[xcur[0] + span(xcur) * delta[0] / width, xcur[1] + span(xcur) * delta[0] / width]\"\n        }\n      ]\n    }\n  ],\n  \"scales\": [\n    {\n      \"name\": \"yscale\",\n      \"type\": \"band\",\n      \"range\": \"height\",\n      \"domain\": {\n        \"data\": \"hjelmslev\",\n        \"field\": \"Kategori\",\n        \"sort\": {\n          \"op\": \"min\",\n          \"field\": \"sorting\"\n        }\n      }\n    },\n    {\n      \"name\": \"xscale\",\n      \"type\": \"time\",\n      \"padding\": 0.5,\n      \"domain\": {\n        \"signal\": \"xdom\"\n      },\n      \"range\": \"width\"\n    },\n    {\n      \"name\": \"color\",\n      \"type\": \"ordinal\",\n      \"range\": {\n        \"scheme\": \"category20\"\n      },\n      \"domain\": {\n        \"data\": \"hjelmslev\",\n        \"field\": \"Kategori\"\n      }\n    }\n  ],\n  \"axes\": [\n    {\n      \"orient\": \"bottom\",\n      \"scale\": \"xscale\",\n      \"format\": \"%m.%Y\",\n      \"labelAngle\": -40,\n      \"labelPadding\": 9\n    },\n    {\n      \"orient\": \"left\",\n      \"scale\": \"yscale\",\n      \"grid\": true,\n      \"encode\": {\n        \"labels\": {\n          \"enter\": {\n            \"fill\": {\n              \"signal\": \"scale('color', datum.value)\"\n            }\n          }\n        }\n      }\n    }\n  ],\n  \"legends\": [\n    {\n      \"stroke\": \"color\",\n      \"symbolType\": \"stroke\",\n      \"direction\": \"horizontal\",\n      \"orient\": \"top\",\n      \"offset\": 80,\n      \"encode\": {\n        \"symbols\": {\n          \"name\": \"legendSymbol\",\n          \"interactive\": true,\n          \"update\": {\n            \"opacity\": [\n              {\n                \"test\": \"!length(data('selected')) || indata('selected', 'value', datum.value)\",\n                \"value\": 1\n              },\n              {\n                \"value\": 0.25\n              }\n            ]\n          }\n        },\n        \"labels\": {\n          \"name\": \"legendLabel\",\n          \"interactive\": true,\n          \"update\": {\n            \"opacity\": [\n              {\n                \"test\": \"!length(data('selected')) || indata('selected', 'value', datum.value)\",\n                \"value\": 1\n              },\n              {\n                \"value\": 0.25\n              }\n            ]\n          }\n        }\n      }\n    }\n  ],\n  \"marks\": [\n    {\n      \"type\": \"path\",\n      \"encode\": {\n        \"update\": {\n          \"fill\": {\n            \"value\": \"purple\"\n          },\n          \"path\": {\n            \"signal\": \"null\"\n          }\n        }\n      }\n    },\n    {\n      \"type\": \"text\",\n      \"from\": {\n        \"data\": \"hjelmslev\"\n      },\n      \"zindex\": 99,\n      \"clip\": {\n        \"path\": \"M0 -50 H 800 V 200 H0\"\n      },\n      \"encode\": {\n        \"update\": {\n          \"x\": {\n            \"scale\": \"xscale\",\n            \"field\": \"Startdato\",\n            \"offset\": 5.5\n          },\n          \"y\": {\n            \"field\": \"Kategori\",\n            \"scale\": \"yscale\",\n            \"offset\": 3\n          },\n          \"angle\": {\n            \"value\": -60\n          },\n          \"text\": {\n            \"field\": \"Event\"\n          },\n          \"limit\": {\n            \"value\": 50\n          },\n          \"tooltip\": [\n            {\n              \"test\": \"(!length(data('selected')) || indata('selected', 'value', datum.Kategori))\",\n              \"signal\": \"datum.Tooltip\"\n            }\n          ],\n          \"opacity\": [\n            {\n              \"test\": \"(!length(data('selected')) || indata('selected', 'value', datum.Kategori))\",\n              \"value\": 1\n            },\n            {\n              \"value\": 0\n            }\n          ]\n        }\n      }\n    },\n    {\n      \"type\": \"symbol\",\n      \"from\": {\n        \"data\": \"hjelmslev\"\n      },\n      \"clip\": true,\n      \"zindex\": 80,\n      \"encode\": {\n        \"update\": {\n          \"x\": {\n            \"scale\": \"xscale\",\n            \"field\": \"Startdato\"\n          },\n          \"y\": {\n            \"scale\": \"yscale\",\n            \"field\": \"Kategori\",\n            \"offset\": 6\n          },\n          \"fill\": {\n            \"scale\": \"color\",\n            \"field\": \"Kategori\"\n          },\n          \"tooltip\": [\n            {\n              \"test\": \"(!length(data('selected')) || indata('selected', 'value', datum.Kategori))\",\n              \"signal\": \"'Land: ' + datum.Land\"\n            }\n          ],\n          \"opacity\": [\n            {\n              \"test\": \"(!length(data('selected')) || indata('selected', 'value', datum.Kategori))\",\n              \"value\": 1\n            },\n            {\n              \"value\": 0\n            }\n          ]\n        }\n      }\n    },\n    {\n      \"type\": \"rect\",\n      \"from\": {\n        \"data\": \"hjelmslev\"\n      },\n      \"zindex\": 1,\n      \"clip\": true,\n      \"encode\": {\n        \"enter\": {\n          \"y\": {\n            \"scale\": \"yscale\",\n            \"field\": \"Kategori\",\n            \"offset\": 4\n          },\n          \"height\": {\n            \"value\": 4\n          },\n          \"fill\": {\n            \"scale\": \"color\",\n            \"field\": \"Kategori\"\n          }\n        },\n        \"update\": {\n          \"x\": {\n            \"scale\": \"xscale\",\n            \"field\": \"Startdato\"\n          },\n          \"x2\": {\n            \"scale\": \"xscale\",\n            \"field\": \"Slutdato\"\n          },\n          \"tooltip\": [\n            {\n              \"test\": \"(!length(data('selected')) || indata('selected', 'value', datum.Kategori))\",\n              \"signal\": \"'Land: ' + datum.Land\"\n            }\n          ],\n          \"opacity\": [\n            {\n              \"test\": \"(!length(data('selected')) || indata('selected', 'value', datum.Kategori))\",\n              \"value\": 1\n            },\n            {\n              \"value\": 0\n            }\n          ]\n        }\n      }\n    }\n  ],\n  \"config\": {}\n}")
(def a (.parse js/JSON json))

(defonce state
  (r/atom 0))


(defn on-click-handler
  [e]
  (js/console.log e)
  (swap! state + 6))
 ;; (js/alert (str "state: " @state)))

(defn komponent []
  [:button {:on-click on-click-handler}
   "Knap"])


(def app-state
  (r/atom
    {:msg "Hello from app-state"
     :items [{:display "Item 1"}
             {:display "Item 2"}
             {:display "Item 3"}
             {:display "Item 4"}
             {:display "Item 5"}]
     :active-item {}}))

(defn items-list [items active-item]
  [:div {:class "items-list"}
   (for [item items]
     ^{:key (:display item)}
     [:div {:class (if (= active-item item) "item active" "item")}
      [:p
       {:on-click (fn [e] (swap! app-state assoc-in [:active-item] item))}
       (:display item)]])])


(def timeline-url
  "https://raw.githubusercontent.com/SofieVonge/infrastrukturalisme/master/data/timeline/timeline.vg.json")


(defn alter-height [v]
  [{:op "replace" :path "/height" :value v}])

(defonce height
         (r/atom 200))

(defn form []
  [:<>
   [:input#hjd {:placeholder 200}]
   [:button#knap {:on-click (fn [e] (reset! height (.-value (js/document.getElementById "hjd"))))} "Change height"]])


(def spec
  (js->clj a :keywordize-keys true))

(def new-spec
  (assoc spec :height 500))

(defn app []
  (js/console.log "spec: " new-spec)
  (js/console.log (map? new-spec))
  [:<>
   [:pre @state]
   [:p "Hej verden"]
   [items-list (:items @app-state) (:active-item @app-state)]
   [:h1 (:msg @app-state)]
   [form]
   [oz/vega new-spec {:mode "vega"}]
   [komponent]])

(js/setTimeout
  (fn [] (swap! app-state assoc-in [:msg] "new message"))
  2000)












(def root
  (js/document.getElementById "app"))

(defn ^:dev/after-load render []
    (d/render [app] root))


(defn init []
 (js/console.log "Hello world")
 (render))
