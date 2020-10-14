## About the scripts and files

This is an overview over the files in this folder. The folder contains the timeline spec itself which you can read about in details [here](https://github.com/kuhumcst/infrastrukturalisme/blob/master/doc/timeline_spec.md).
It also contains the raw data used in the timeline and two scripts to turn that data into a suitable JSON file.

### Raw data files

#### Hjelmslev undervisning.docx
Original document containing details about Hjelmslev's teachings.
Document divided into *cph.txt* and *aarhus.txt*.
                             
#### Hjelmslevkronologi.csv
CVS file containing details about Hjemslev's life.
                        

### The scripts

#### reqex.py
<ins>Input</ins>: cph.txt and aarhus.txt  
<ins>Output</ins>: result.txt

This script uses a regular expression to subtract the information in the input files and output them in a JSON format to the output file.
          
#### datatransform.py
<ins>Input</ins>: result.txt and hjelmslevkronologi.csv  
<ins>Output</ins>: hjelmslev.json

This script transforms the data from the input files into one JSON file.
In the script we do some calculations and add a few columns. We also group the data from the result file.
In case the raw data changes or the requirements for the final data file change, we need to rewrite this script.
