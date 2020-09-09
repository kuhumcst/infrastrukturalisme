import csv
import json
import datetime
import ast
import itertools
import operator

data = []


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


with open("Hjelmslevkronologi.csv", mode="r", encoding="utf-8-sig") as file:
    reader = csv.DictReader(file, delimiter=";")

    categories = {
        "L": "Liv",
        "U": "Undervisning",
        "F": "Foredrag",
        "N": "Netværk",
        "R": "Rejse",
        "P": "Publikationer"
    }

    for row in reader:
        dict = {}
        
        if is_date(row["Startdato"]):
            dict["Startdato"] = row["Startdato"]
        else:
            pass
           # dict["Startdato"] = None we cannot have null values in date

        if is_date(row["Slutdato"]):
            dict["Slutdato"] = row["Slutdato"]
        elif not row["Slutdato"] and is_date(row["Startdato"]):
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

        if row["Kategori"]:
            if row["Kategori"] in categories.keys():
                dict["Kategori"] = categories[row["Kategori"]]
            else:
                dict["Kategori"] = row["Kategori"]
        else:
            dict["Kategori"] = None

        if row["Event / Begivenhed"] and row["Event-beskrivelse"]:
            dict["Tooltip"] = row["Event / Begivenhed"] + ": " + row["Event-beskrivelse"]
            dict["Event"] = row["Event / Begivenhed"] + ": " + row["Event-beskrivelse"]
        elif row["Event / Begivenhed"] or row["Event-beskrivelse"]:
            dict["Tooltip"] = row["Event / Begivenhed"] + row["Event-beskrivelse"]
            dict["Event"] = row["Event / Begivenhed"] + row["Event-beskrivelse"]
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

        if "Startdato" and "Slutdato" in dict.keys():
            data.append(dict)

with open("result.txt", "r", encoding="utf-8") as result_file:
    init_list = []
    for line in result_file:
        dict = ast.literal_eval(line)
        init_list.append(dict)

    cur_data = []
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

    cur_data.sort(key=operator.itemgetter("Sorting"))

    grouped_data = []

    for key, items in itertools.groupby(cur_data, operator.itemgetter("Startdato")):
        grouped_data.append(list(items))

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

        description = str(subjects) + " fag"
        desc_dict = {}

        for i in range(subjects):
            desc_dict[i + 1] = item[i]["Event"]

        dict["Tooltip"] = desc_dict
        dict["Event"] = description

        dict["Personer"] = None
        dict["Kilde"] = None

        data.append(dict)


with open("hjelmslev.json", "a", encoding="utf-8") as json_file:
    json.dump(data, json_file, indent=2, ensure_ascii=False)
