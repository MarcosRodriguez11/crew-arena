# -*- coding: utf-8 -*-
# Sustituye especies que NO son de 1a generacion por su equivalente gen 1.
import os
base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(base, "mapas.js")
t = open(p, encoding="utf-8").read()
cambios = {'"crobat"': '"golbat"', '"magnezone"': '"magneton"', '"steelix"': '"onix"'}
n = 0
for a, b in cambios.items():
    n += t.count(a)
    t = t.replace(a, b)
open(p, "w", encoding="utf-8").write(t)
print(f"OK: {n} reemplazos")
