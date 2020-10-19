import csv
import json

with open("worldcities.csv", mode="r", encoding="utf-8-sig") as file:
    reader = csv.DictReader(file, delimiter=",")

    data = []

    for row in reader:
        dict = {}
        dict["city"] = row["city"]
        dict["lat"] = row["lat"]
        dict["lng"] = row["lng"]

        data.append(dict)

    with open("coordinates.json", "a", encoding="utf-8") as json_file:
        json.dump(data, json_file, indent=2, ensure_ascii=False)