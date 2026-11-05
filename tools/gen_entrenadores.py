# -*- coding: utf-8 -*-
# Regenera "entrenadores" de cada mapa con 5 entrenadores, usando especies que
# aparecen en los huecos de ese mapa. Equipos de 1-2 pokemon (el mapa 1 queda facil: 1).
import os, re, json, random

base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
mp = os.path.join(base, "mapas.js")
src = open(mp, encoding="utf-8").read()

# nombres de entrenador de sabor (se asignan en orden, 5 por mapa)
NOMBRES = [
    "Cazabichos Rubén", "Exploradora Nuria", "Montañero Bruno", "Nadador Diego",
    "Médium Carla", "Domador Marco", "Técnico Olga", "Herpetóloga Ruth",
    "Veterano Raúl", "As Elena", "Pescador Leo", " Occultista Iván",
    "Aventurera Sol", "Biologo Omar", "Entrenadora Vera",
]

# Extrae las especies de hierba de cada mapa leyendo el bloque "pasos"
mapa_bloques = re.split(r"(\n  \{\n    id: )", src)
# mas robusto: parsear con regex por mapa
mapas = re.findall(r"\{\s*id:\s*(\d+),.*?pasos:\s*\[(.*?)\],\s*entrenadores:\s*\[(.*?)\],\s*lider:", src, re.S)

def especies_de(pasos_txt):
    return re.findall(r'especie:\s*"([^"]+)"', pasos_txt)

nuevo_src = src
for id_str, pasos_txt, entren_txt in mapas:
    especies = especies_de(pasos_txt)
    if not especies:
        especies = ["pidgey"]
    uniq = list(dict.fromkeys(especies))  # sin duplicados, en orden
    random.seed(int(id_str) * 7)          # determinista por mapa
    entrenadores = []
    n_nombres = random.sample(NOMBRES, 5)
    for k in range(5):
        if id_str == "1":
            equipo = [random.choice(uniq)]           # mapa 1 facil: 1 pokemon
        else:
            tam = random.choice([1, 2])
            equipo = [random.choice(uniq) for _ in range(tam)]
        eq_js = ", ".join(f'"{e}"' for e in equipo)
        entrenadores.append(f'      {{ tipo: "entrenador", nombre: "{n_nombres[k]}", equipo: [{eq_js}] }},')
    bloque_nuevo = "\n" + "\n".join(entrenadores) + "\n    "
    # reemplaza el contenido entre los corchetes de "entrenadores: [ ... ]" de ESE mapa
    viejo = f"entrenadores: [{entren_txt}],"
    nuevo = f"entrenadores: [{bloque_nuevo}],"
    nuevo_src = nuevo_src.replace(viejo, nuevo, 1)

open(mp, "w", encoding="utf-8").write(nuevo_src)
print(f"OK: 5 entrenadores por mapa en {len(mapas)} mapas")
