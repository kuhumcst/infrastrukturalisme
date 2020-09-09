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
* Data for setting the x-axes' domain called `initValues`.
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
