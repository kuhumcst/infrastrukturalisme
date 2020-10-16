import csv
import json
import datetime
import ast
import itertools
import operator

data = []

# Function for checking if the provided dates are formatted as real dates
def is_date(str):
    try:
        day, month, year = str.split('-')
    except ValueError:
        return False
    try:
        datetime.datetime(int(year), int(month), int(day))
        return True
    except ValueError:
        return False

# Working with the csv file
with open("Hjelmslevkronologi.csv", mode="r", encoding="utf-8-sig") as file:
    reader = csv.DictReader(file, delimiter=";")

# predefined categories and their abbreviation in the original dataset
    categories = {
        "L": "Liv",
        "U": "Undervisning",
        "F": "Foredrag",
        "N": "Netværk",
        "R": "Rejse",
        "P": "Publikationer"
    }

    for row in reader:
        # making a dict for each row in the original dataset to fill with modified and formatted data
        dict = {}
        
        if is_date(row["Startdato"]):
            dict["Startdato"] = row["Startdato"]
        else:
            pass
           # dict["Startdato"] = None we cannot have null values in date

        if is_date(row["Slutdato"]):
            dict["Slutdato"] = row["Slutdato"]
        elif not row["Slutdato"] and is_date(row["Startdato"]):
            # making a data object to add a day correctly, formatting it and adding it as a Slutdato if there is no Slutdato in the original dataset
            date = datetime.datetime.strptime(row["Startdato"], "%d-%m-%Y").date()
            date = date + datetime.timedelta(days=1)
            date = date.strftime("%d-%m-%Y")
            dict["Slutdato"] = date
        else:
            pass
          #  dict["Slutdato"] = None we cannot have null values in date

        if row["Land"]:
            dict["Land"] = row["Land"]
        else:
            dict["Land"] = None

        if row["Sted = By / Landområde"]:
            dict["Sted = By / Landområde"] = row["Sted = By / Landområde"]
        else:
            dict["Sted = By / Landområde"] = None

        if row["Institution"]:
            dict["Institution"] = row["Institution"]
        else:
            dict["Institution"] = None

        # mapping the abbreviation to the correct values if the abbreviation exists in the original dataset
        if row["Kategori"]:
            if row["Kategori"] in categories.keys():
                dict["Kategori"] = categories[row["Kategori"]]
            else:
                dict["Kategori"] = row["Kategori"]
        else:
            dict["Kategori"] = None

        # the event will be the same as the tooltip, since we would like to show the event as the tooltip
        if row["Event / Begivenhed"] and row["Event-beskrivelse"]:
            dict["Tooltip"] = row["Event / Begivenhed"] + ": " + row["Event-beskrivelse"]
            dict["Event"] = row["Event / Begivenhed"] + ": " + row["Event-beskrivelse"]

            if dict["Kategori"] == "Rejse":
                dict["Tooltip"] = row["Event / Begivenhed"] + ": " + row["Event-beskrivelse"]
                dict["Event"] = row["Land"]

        elif row["Event / Begivenhed"] or row["Event-beskrivelse"]:
            dict["Tooltip"] = row["Event / Begivenhed"] + row["Event-beskrivelse"]
            dict["Event"] = row["Event / Begivenhed"] + row["Event-beskrivelse"]

            if dict["Kategori"] == "Rejse":
                dict["Tooltip"] = row["Event / Begivenhed"] + row["Event-beskrivelse"]
                dict["Event"] = row["Land"]
        else:
            dict["Tooltip"] = None
            dict["Event"] = None

        if row["Personer"]:
            dict["Personer"] = row["Personer"]
        else:
            dict["Personer"] = None

        if row["Kilde"]:
            dict["Kilde"] = row["Kilde"]
        else:
            dict["Kilde"] = None

        # only append the dict to the data if we have both a Startdato and a Slutdato
        if "Startdato" and "Slutdato" in dict.keys():
            data.append(dict)

# working with the result file from regex.py
with open("result.txt", "r", encoding="utf-8") as result_file:
    # appending the dicts from the result file to a list, one by one
    init_list = []
    for line in result_file:
        dict = ast.literal_eval(line)
        init_list.append(dict)

    # a list for the current data that has not been grouped by the Startdato
    cur_data = []

    # count used for sorting the dict later in groupby
    count = 1

    for row in init_list:
        dict = {}

        if row["semester"] == "I":
            dict["Startdato"] = "01-02-" + str(row["year"])
            dict["Slutdato"] = "31-05-" + str(row["year"])
        else:
            dict["Startdato"] = "01-09-" + str(row["year"])
            dict["Slutdato"] = "31-12-" + str(row["year"])

        if row["place"] == "CPH":
            dict["Sted = By / Landområde"] = "København"
            dict["Institution"] = "Københavns Universitet"
        else:
            dict["Sted = By / Landområde"] = "Aarhus"
            dict["Institution"] = "Aarhus Universitet"

        dict["Event"] = row["description"]

        dict["Personer"] = None
        dict["Kilde"] = None

        dict["Sorting"] = count
        count += 1

        cur_data.append(dict)

    # sorting the current data
    cur_data.sort(key=operator.itemgetter("Sorting"))

    grouped_data = []

    # grouping the data by Startdato and appending to a new list
    for key, items in itertools.groupby(cur_data, operator.itemgetter("Startdato")):
        grouped_data.append(list(items))

    # making the actual dict to be appended to the new dataset
    for item in grouped_data:
        dict = {}

        # the number of dict in each group aka subjects, since 1 dict = 1 subject and 1 item = 1 semester
        subjects = len(item)

        dict["Startdato"] = item[0]["Startdato"]
        dict["Slutdato"] = item[0]["Slutdato"]
        dict["Land"] = "Danmark"
        dict["Sted = By / Landområde"] = item[0]["Sted = By / Landområde"]
        dict["Institution"] = item[0]["Institution"]
        dict["Kategori"] = "Undervisning"

        # for multiline text in the tooltip, each line has to be set up as an object
        desc_dict = {}

        for i in range(subjects):
            desc_dict[i + 1] = item[i]["Event"]

        dict["Tooltip"] = desc_dict

        description = str(subjects) + " fag"
        dict["Event"] = description

        dict["Personer"] = None
        dict["Kilde"] = None

        data.append(dict)

# writing the data list with the dicts to a json file
with open("hjelmslev.json", "a", encoding="utf-8") as json_file:
    json.dump(data, json_file, indent=2, ensure_ascii=False)
