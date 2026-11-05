# -*- coding: utf-8 -*-
# Deja el PASO 5 (indice 4) de cada mapa con SOLO 2 opciones:
#   1 hierba (elegida al azar entre las que habia) + el punto de cura.
import os, re, random
base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(base, "mapas.js")
lines = open(p, encoding="utf-8").read().splitlines()

out, in_pasos, paso_count, fixed = [], False, 0, 0
# patron para extraer cada spot {...} de una fila
spot_re = re.compile(r"\{[^{}]*\}")

for ln in lines:
    s = ln.strip()
    if s.startswith("pasos: ["):
        in_pasos = True; paso_count = 0; out.append(ln); continue
    if in_pasos:
        if s.startswith("[ {") or s.startswith("[{"):
            paso_count += 1
            if paso_count == 5:
                spots = spot_re.findall(ln)
                hierbas = [sp for sp in spots if '"pokemon"' in sp]
                cura = next((sp for sp in spots if '"cura"' in sp), '{ tipo: "cura" }')
                elegida = random.choice(hierbas) if hierbas else '{ tipo: "pokemon", especie: "pidgey" }'
                indent = ln[:len(ln) - len(ln.lstrip())]
                out.append(f"{indent}[ {elegida}, {cura} ],")
                fixed += 1
                continue
        if s.startswith("],"):
            in_pasos = False
    out.append(ln)

open(p, "w", encoding="utf-8").write("\n".join(out) + "\n")
print(f"OK: paso 5 recortado a 1 hierba + cura en {fixed} mapas")
