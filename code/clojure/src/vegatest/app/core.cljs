(ns vegatest.app.core
  (:require [reagent.dom :as d]
            [reagent.core :as r]
            [oz.core :as oz]
            [reagent.ratom :as ratom]))

(defonce state
  (ratom/atom 0))


(defn on-click-handler
  [e]
  (js/console.log e)
  (swap! state + 6))
 ;; (js/alert (str "state: " @state)))

(defn komponent []

  [:button {:on-click on-click-handler}
   "Knap"])


(def app-state
  (ratom/atom
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


(def timeline (oz/load "https://raw.githubusercontent.com/SofieVonge/infrastrukturalisme/master/data/timeline/timeline.vg.json"))


(defn app []
  [:<>
   [:pre @state]
   [:p "Hej verden"]
   [items-list (:items @app-state) (:active-item @app-state)]
   [:h1  (:msg @app-state)]
   [:oz.core/vega timeline]
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
