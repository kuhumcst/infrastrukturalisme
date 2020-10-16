## Ideas for visualizing TEI files

#### Timeline
The data in the TEI files is somewhat different than the Hjelmslev data and cannot just be used in the timeline without some modifications.  
It should still be possible to filter based on legend and to pan the timeline.

##### Scales
I suggest to use the names of the senders on the yscale and the receivers' names as the legend. The xscale can be reused as it is, but the range should probably be set low, to a year or half a year.

##### Marks
I suggest to remove the rect and text marks. The rect is only used as an extend of time. The circle symbol would represent one letter from the yscale person to the legend person.

##### Inputs
Outside the vega spec itself could be made an input binding. It could be a checkbox to only show letters containing information about specific topics.

##### Tooltips and/or clicks
Hovering the mouse over a cirle symbol could show a tooltip with an overview over the content of the letter.  
Clicking on a circle symbol could bring up the letter text in a widget box.

### Other ideas beside timeline

The TEI files contain a lot of quantitative data that we can get from the tags and that we can represent in different views.  

It could be something like:  
* A word cloud over for example languages discussed or publications mentioned.  
* Barcharts or donut charts over for example how many letters X has sent or what is being discussed in them.

Other less likely ideas could be a map to see the location of the senders and receivers. I am not that familiar with the data to see if that would make sense to have or if their locations can tell us anything interesting.
There is also a thing like a network diagram to show the relation between senders and recievers. Again, this might not be interesting for us or we simple have too few relations to show anything interesting.
