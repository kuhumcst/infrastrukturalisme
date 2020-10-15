## Introduction to the geoshape

Here I will document the map specs. The specs should be seen as mere dummy specs or work in progress and not at all finished! They are here as inspiration.
The dummy_map uses some dummy data and the hjelmslev_map uses hjelmslev data. It is difficult to see the map of Denmark in the second spec since the data has a lot more points marked.
You can see how Vega shows these points in their right places had we had data for other areas beside Denmark.

#### geoJSON
In order to make any map visible, we need geoJSON. It can be found from different sites. I found mine here: https://geojson-maps.ash.ms/  
The geoJSON is seen as a dataset over different areas. I am only using Denmark as an example here.

#### Coordinates
In order to show points on the map, we need a dataset with all the coordinates for the points we want to show divided in lat and lon if the main dataset itself doesn't contain lat and lon.

```json
"name": "coordinates",
      "url": "https://raw.githubusercontent.com/SofieVonge/infrastrukturalisme/master/data/map/coordinates.json",
      "format": {
        "type": "json",
        "parse": {
          "lat": "number",
          "lng": "number"
        }
      }
```

Remember to parse the lat and lng as numbers.

### Linking coordinates to the main dataset
The main dataset could look like this:
```json
"name": "cities",
      "values": [
        {
          "name": "Copenhagen",
          "categori": "foredrag",
          "date": 1940 
        }
         ]
```
To link the coordinates with out main dataset, we need a transform on the main dataset:
```json
 "type": "lookup",
          "from": "coordinates",
          "key": "city",
          "values": [ "lng", "lat" ],
          "fields": [ "name" ]
```
This transform look up the key from the coordinate dataset, take out the values of lng and lat and merge them with the main dataset if the key matches the field "name" from the main dataset.

#### Show points on the map
In order to show our points on the map, we need another transform on the main dataset:
```json
"type": "geopoint",
          "projection": "projection",
          "fields": [ "lng", "lat" ]
```
This type projects our lat and lng onto the map by calculating an x and an y which are automatically added as two new columns in the main dataset.  
We then need a mark called shape to make the shape of the map. It has its data from the geojson:
```json
"type": "shape",
      "from": {
        "data": "Denmark"
      },
      "transform": [
        {
          "type": "geoshape",
          "projection": "projection"
        }
      ]
```
Lastly we need another mark called symbol to show the actual points. This mark uses the x and y fields that the transform projection made:
```json
"x": { "field": "x" },
"y": { "field": "y" }
```
 
 
 ### Be aware when working with maps
 
* Names of places and cities are spelled differently  
Example: it is not possible to see Copenhagen on the hjelmslev map since Copenhagen is spelled København in the data but Copenhagen in the coordinates dataset.

* Nordic cities might be too small to be in coordinate lists  
Be sure that we don't lose any data by this!

* It is difficult to show time on a map  
Many of Hjelmslev's activities takes place in the same city but at different times! This will leed to symbols being placed on top of each other and I have not found a good solution to that.
It is however possible to make an input signal and only show points for a specific year with the filter transform:
```json
"type": "filter",
"expr": "year != 'all' ? datum.date == year : year"
```    


