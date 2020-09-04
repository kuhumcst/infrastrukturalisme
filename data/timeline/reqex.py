import re

with open("result.txt", "a", encoding="utf8") as wf:
    pattern = re.compile(r"(\d{4}),\s+(II?):\s+(.+)")

    with open("aarhus.txt", "r", encoding="utf8") as file:
        line = file.readline()

        while line:
            result = pattern.sub(r'{"place": "Aarhus", "year": \1, "semester": ”\2”, "description": "\3"}', line)

            line = file.readline()
            output = result.strip()
            if output != "":
                wf.write(output + "\n")

    with open("cph.txt", "r", encoding="utf8") as file:
        line = file.readline()

        while line:
            result = pattern.sub(r'{"place": "CPH", "year": \1, "semester": "\2", "description": "\3"}', line)

            line = file.readline()
            output = result.strip()
            if output != "":

                wf.write(output + "\n")
