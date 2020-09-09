# How to read and alter the Vega timeline spec


I will here go over the important parts of the Vega timeline spec in order for others to be able to understand it and make changes to it in case the dataset changes.
Be aware that every reference to a field or datum needs to be changed accordingly

### The view

The view is the where we define all the basics like width and height. It is also possible to set background colors and padding.
Be sure to adjust the width and height to the dataset.
The schema tells us if we use Vega or Vega-lite
```json
"$schema": "https://vega.github.io/schema/vega/v5.json",
"description": "A timeline for Hjelmslev's activities.",
"width": 800,
"height": 200,
"padding": 10,
"autosize": "pad"
```

### The data

We have three datasets in the spec:
* The actual data, here called `hjelmslev`.
* Data for setting the xscale's domain called `initValues`.
* A data storage for the interactive legend called `selected` for holding the selected values.

##### The hjelmslev data
This data uses a url as source. The data contains time units and therefor we need to parse it.
```json
"format": {
        "type": "json",
        "parse": {
          "Startdato": "date:'%d-%m-%Y'",
          "Slutdato": "date:'%d-%m-%Y'"
        }
      }
```
We specify that the fields `Startdato`and `Slutdato` are dates and use the [d3-time-format](https://github.com/d3/d3-time-format/#locale_format) to ensure that the fields are formatted correctly.

If we need to sort the yscale after our own order, we need to do a transform. This basically adds a field called `sorting` to the dataset.
```json
"transform": [
        {
          "type": "formula",
          "expr": "datum.Kategori === 'Rejse' ? 0 : 1",
          "as": "sorting"
        }
      ]
```
The expression is a simple condition saying that if the field `Kategori` has the value of `Rejse` then the field `sorting` will have the value `0`, else `1`. 
We use the sorting field in the scales to sort the yscale from min to max. It is possible to chain more conditions like this:
`"datum.Kategori === 'Rejse' ? 0 : datum.Kategori === 'Foredrag' : ? 1 : datum.Kategori === 'Liv' ? 2 : 3 "`

##### The initValues
We have only two entries in this dataset. It is the min and max values of the xscale. Be sure to format it like this: YYYY-MM-DD. If formatted otherwise, Vega might alter the values for the next time, someone loads the spec causing Vega not to recognize the values as dates. 
Here we also need a transform:
```json
 "transform": [
        {
          "type": "extent",
          "field": "initRange",
          "signal": "xext"
        }
      ]
```
`extent` will take the min and max of the all the field's values and put it in an array \[min, max]. This array will be put into a signal named `xext` 
that will be used in order to set the xscale's initial domain and in order to change that domain dynamically as we pan over the xscale.

##### The selected storage
This is initially an empty data storage for the selected legend values. It uses signals to add and remove values based on what categories have been clicked.
Different marks use this storage to know what to hide and show based on what categories have been clicked.

### Signals

Signals are what makes the timeline interactive. We can divide them into three groups:
* One helper signal: `path`
* three legend signals: `clear`, `shift` and `clicked`
* four signals for panning the xscale: `down`, `xcur`, `delta` and `xdom`

The `path` is used with the path mark, and it is meant to be disabled. Its only use is to make a SVG path visible when adjusting the text mark's clipping.

### Scales

We have three scales:
* The yscale
* The xscale
* The legend called `color`

Be aware that both the yscale and the legend scale use `Kategori` as the domain:
```json
"domain": {
        "data": "hjelmslev",
        "field": "Kategori"
      }
```
If we want to use another dataset, the data and the field values need to change accordingly.
The legend scale uses a color scheme for range called `category20`. It should be possible to make our own [color scheme](https://vega.github.io/vega/docs/schemes/).

### Axes

We use two axes, one for the xscale and one for the yscale. Here we can change the look of the labels.
This piece of code will color the label text on the yscale based on the legend's color:
```json
"encode": {
        "labels": {
          "enter": {
            "fill": {
              "signal": "scale('color', datum.value)"
            }
          }
        }
      }
```

### Legend

We only have one legend. It uses the color scale:
```json
"stroke": "color",
"symbolType": "stroke"
```
The symbol type for the legend is stroke and that stroke is set to be the scale named `color`. We encode both the symbol and the labels in order to make the non-clicked symbol and label texts transperant.
