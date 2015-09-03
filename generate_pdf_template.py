import re

with open('index.html', 'r') as index:
    with open('pdf_version.html', 'w') as pdf:
        for line in index:
            match = re.search(r'<link', line)
            if match is None:
                outline = re.sub(r'href="(.+?)"', '', line)
                if len(outline) != len(line):
                    match = re.search(r'PDF resume', outline)
                    if match is not None:
                        continue
                pdf.write(outline)
            else:
                pdf.write(line)
