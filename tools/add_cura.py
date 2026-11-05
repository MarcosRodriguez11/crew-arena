# -*- coding: utf-8 -*-
# Anade un punto de cura { tipo: "cura" } al PASO 5 (indice 4) de cada mapa.
# Idempotente: si ese paso ya tiene una cura, no la duplica.
import os, re
base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(base, "mapas.js")
src = open(p, encoding="utf-8").read()
lines = src.splitlines()

CURA = '{ tipo: "cura" }'
paso_count = 0          # cuantas lineas de "paso" (filas [...]) llevamos dentro del mapa actual
added = 0
out = []
in_pasos = False

for ln in lines:
    stripped = ln.strip()
    if stripped.startswith("pasos: ["):
        in_pasos = True
        paso_count = 0
        out.append(ln)
        continue
    if in_pasos:
        # cada fila de paso es una linea que empieza por "[ {" y termina en "],"
        if stripped.startswith("[ {") or stripped.startswith("[{"):
            paso_count += 1
            if paso_count == 5 and '"cura"' not in ln:
                # inserta la cura antes del "]" de cierre de esa fila
                idx = ln.rstrip().rfind("]")
                prefijo = ln.rstrip()[:idx].rstrip()
                # quita una coma final si la hubiera para re-anadir limpio
                if prefijo.endswith(","):
                    prefijo = prefijo[:-1]
                nueva = f"{prefijo}, {CURA} ],"
                out.append(nueva)
                added += 1
                continue
        if stripped.startswith("],"):
            in_pasos = False
    out.append(ln)

open(p, "w", encoding="utf-8").write("\n".join(out) + "\n")
print(f"OK: cura anadida en el paso 5 de {added} mapas")
