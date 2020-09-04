import csv
import json
import datetime
import ast

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
        "R": "Rejser",
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
            dict["Event"] = row["Event / Begivenhed"] + ": " + row["Event-beskrivelse"]
        elif row["Event / Begivenhed"] or row["Event-beskrivelse"]:
            dict["Event"] = row["Event / Begivenhed"] + row["Event-beskrivelse"]
        else:
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
    list = []
    for line in result_file:
        dict = ast.literal_eval(line)
        list.append(dict)

    for row in list:
        dict = {}

        if row["semester"] == "I":
            dict["Startdato"] = "01-02-" + str(row["year"])
            dict["Slutdato"] = "31-05-" + str(row["year"])
        else:
            dict["Startdato"] = "01-09-" + str(row["year"])
            dict["Slutdato"] = "31-12-" + str(row["year"])

        dict["Land"] = "Danmark"

        if row["place"] == "CPH":
            dict["Sted = By / Landområde"] = "København"
            dict["Institution"] = "Københavns Universitet"
        else:
            dict["Sted = By / Landområde"] = "Aarhus"
            dict["Institution"] = "Aarhus Universitet"

        dict["Kategori"] = "Undervisning"

        dict["Event"] = row["description"]

        dict["Personer"] = None
        dict["Kilde"] = None

        data.append(dict)

with open("hjelmslev.json", "a", encoding="utf-8") as json_file:
    json.dump(data, json_file, indent=2, ensure_ascii=False)
