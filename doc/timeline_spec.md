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
We only have two entries in this dataset. It is the min and max values of the xscale. Be sure to format it like this: YYYY-MM-DD. If formatted otherwise, Vega might alter the values the next time someone loads the spec causing Vega not to recognize the values as dates. 
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

We use two axes, one for the xscale and one for the yscale. Here we can change the look and formatting of the labels.
This piece of code color the label text on the yscale based on the legend's color:
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
The symbol type for the legend is stroke and that stroke is set to be the scale named `color`. We encode both the symbol and the labels in order to make them interactive. We do that with a test:
```json
"opacity": [
              {
                "test": "!length(data('selected')) || indata('selected', 'value', datum.value)",
                "value": 1
              },
              {
                "value": 0.25
              }
            ]
```
We set the opacity to 1 if nothing is selected or for the selected values. All else will be set to 0.25, which makes the text and symbols transparent.


### Marks

We have four marks. Marks are the symbols and text inside the scales. Beside the helper mark `path`, they all use tooltip and set the opacity based on the same logic as the legend. Be aware to change the datum value for the tooltip and opacity if the dataset changes.
Some of the marks uses offset to help place the mark nicely on the grid.

##### Path
This mark is a helper mark used with the `path` signal.
```json
"path": { "signal": "null" }
```
We can set the mark to be visible by setting the signal value to `path`. It helps us determine where the clipping lines of the text mark go.

##### Text
The text mark is the event text that surpasses the yscale. Because of this, its clipping needs to be sat to a SVG path for it to be hid when panning:
```json
"clip": { "path": "M0 -50 H 800 V 200 H0" }
```
The SVG path will maybe need to be changed if the dataset changes. Here we can use the `path` mark and signal to help us determine where the line goes. 
Be aware that the text mark uses four fields: one for the yscale, one for the xscale, one for the text itself and one for the tooltip text. These would need to be changed in case of a dataset change.  
The text also has a limit for how many letters to show. It it also possible to adjust the color, font, size and so on if needed.  
Be aware that the tooltip for this mark for the category "Rejse" does not extend the text like the tooltip does for other categories! It might likely be possible to correct in a test in the tooltip.

##### Symbol
This mark makes a filled circle on every entry in the dataset. It uses four fields: one for the yscale, one for the xscale, one for the fill color and one for the tooltip text.
```json
"clip": true,
"zindex": 80
```
The clipping is set to true in order for the mark to disappear when panning, and the zindex needs to be set higher than the `rect` mark's zindex in order for it to be in the foreground.

##### Rect
This mark is the rectangle and shows time spent. It has five fields: one for the yscale, two for the xscale to denotate start and end time, one for the fill color and one for the tooltip text.
The clipping is set to true in order for the mark to disappear when panning.

### Config
Lastly we have a config setting. This can be used to set common configurations for fx all marks or axes.
