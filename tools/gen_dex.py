# -*- coding: utf-8 -*-
# Baja los 151 Pokemon de 1a generacion de PokeAPI y genera el bloque de datos
# (FORMAS, EVO, INICIALES) que consume game.js. Ejecutar: python tools/gen_dex.py
import urllib.request, json, time, sys, os

UA = {"User-Agent": "crew-arena/1.0 (gen-dex generator)"}
BASE = "https://pokeapi.co/api/v2"
CACHE = os.path.join(os.path.dirname(__file__), ".cache")
os.makedirs(CACHE, exist_ok=True)

# Tipos de PokeAPI (ingles) -> etiquetas en espanol que usa el juego.
TIPO_ES = {
    "normal": "normal", "fire": "fuego", "water": "agua", "grass": "planta",
    "electric": "electrico", "ice": "hielo", "fighting": "lucha", "poison": "veneno",
    "ground": "tierra", "flying": "volador", "psychic": "psiquico", "bug": "bicho",
    "rock": "roca", "ghost": "fantasma", "dragon": "dragon", "dark": "siniestro",
    "steel": "acero", "fairy": "hada",
}

def get(url):
    key = os.path.join(CACHE, url.replace("https://", "").replace("/", "_") + ".json")
    if os.path.exists(key):
        with open(key, "r", encoding="utf-8") as f:
            return json.load(f)
    for intento in range(4):
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=30) as r:
                data = json.load(r)
            with open(key, "w", encoding="utf-8") as f:
                json.dump(data, f)
            time.sleep(0.15)
            return data
        except Exception as e:
            print(f"  reintento {intento+1} en {url}: {e}", file=sys.stderr)
            time.sleep(1.5 * (intento + 1))
    raise RuntimeError("fallo al bajar " + url)

def nombre_es(entries, campos=("name",)):
    # Devuelve el texto en espanol de una lista de *_names, si existe.
    for e in entries:
        lang = e.get("language", {}).get("name")
        if lang == "es":
            for c in campos:
                if e.get(c):
                    return e[c]
    for e in entries:
        if e.get("language", {}).get("name") == "en":
            for c in campos:
                if e.get(c):
                    return e[c]
    return None

def titulo(s):
    return s[0].upper() + s[1:] if s else s

# Cache de nombres de movimiento (es) y su tipo, para no re-pedir el mismo move.
mov_cache = {}
def datos_move(url):
    if url in mov_cache:
        return mov_cache[url]
    m = get(url)
    nombre = nombre_es(m.get("names", [])) or titulo(m["name"].replace("-", " "))
    tipo = TIPO_ES.get(m["type"]["name"], "normal")
    power = m.get("power")
    # fuerza para el juego: usa el power real si lo hay, acotado a un rango jugable
    if power is None:
        d = 9
    else:
        d = max(8, min(40, round(power * 0.4)))
    out = {"n": nombre, "t": tipo, "d": d}
    mov_cache[url] = out
    return out

GEN1 = list(range(1, 152))

def construir():
    formas = {}
    especie_cache = {}

    for idx, nid in enumerate(GEN1, 1):
        p = get(f"{BASE}/pokemon/{nid}")
        slug = p["name"]  # p.ej. "nidoran-f"
        print(f"[{idx}/151] {slug}")

        especie = get(p["species"]["url"])
        especie_cache[slug] = especie

        # nombre bonito en espanol
        disp = nombre_es(especie.get("names", [])) or titulo(slug.replace("-", " "))

        tipos = [t["type"]["name"] for t in sorted(p["types"], key=lambda x: x["slot"])]
        tipos_es = [TIPO_ES.get(t, "normal") for t in tipos]
        tipo_primario = tipos_es[0]
        type_real = " \u00b7 ".join(tipos_es)

        # vida base
        hp = next((s["base_stat"] for s in p["stats"] if s["stat"]["name"] == "hp"), 40)

        # learnset: movimientos aprendidos por nivel en rojo-fuego/verde-hoja o red/blue
        prefer = ("firered-leafgreen", "red-blue", "yellow")
        aprendidos = {}  # nivel -> lista de (orden_api, url)
        for mv in p["moves"]:
            mejor_nivel = None
            for d in mv["version_group_details"]:
                if d["move_learn_method"]["name"] != "level-up":
                    continue
                vg = d["version_group"]["name"]
                lvl = d["level_learned_at"]
                if lvl <= 0:
                    continue
                # prioriza las versiones de gen 1; si no, cualquiera
                peso = prefer.index(vg) if vg in prefer else len(prefer)
                if mejor_nivel is None or (peso, lvl) < mejor_nivel[0]:
                    mejor_nivel = ((peso, lvl), lvl)
            if mejor_nivel is not None:
                lvl = mejor_nivel[1]
                aprendidos.setdefault(lvl, []).append(mv["move"]["url"])

        # ordena por nivel y arma el learnset (max 8 por forma, suficiente para el juego)
        learnset = []
        for lvl in sorted(aprendidos):
            for url in aprendidos[lvl]:
                dm = datos_move(url)
                learnset.append({"n": dm["n"], "t": dm["t"], "d": dm["d"], "lvl": lvl})
                if len(learnset) >= 8:
                    break
            if len(learnset) >= 8:
                break
        if not learnset:
            learnset = [{"n": "Placaje", "t": "normal", "d": 11, "lvl": 1}]

        formas[slug] = {
            "name": disp,
            "id": nid,
            "sprite": f"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{nid}.png",
            "type": tipo_primario,
            "typeReal": type_real,
            "hp": hp,
            "learnset": learnset,
        }

    # --- Evoluciones (solo las que ocurren por NIVEL y entre especies gen 1) ---
    evo = {}
    vistas = set()
    for slug, especie in especie_cache.items():
        chain_url = especie["evolution_chain"]["url"]
        if chain_url in vistas:
            continue
        vistas.add(chain_url)
        chain = get(chain_url)

        def recorre(node):
            de = node["species"]["name"]
            for nxt in node["evolves_to"]:
                a = nxt["species"]["name"]
                for det in nxt["evolution_details"]:
                    if det.get("trigger", {}).get("name") == "level-up" and det.get("min_level"):
                        if de in formas and a in formas:
                            evo[de] = {"aNivel": det["min_level"], "siguiente": a}
                recorre(nxt)
        recorre(chain["chain"])

    # --- Iniciales: toda especie BASE (nadie evoluciona en ella) presente en formas ---
    es_evolucion = set(v["siguiente"] for v in evo.values())
    iniciales = [s for s in formas if s not in es_evolucion]

    return formas, evo, iniciales

def js(formas, evo, iniciales):
    def dump(obj):
        return json.dumps(obj, ensure_ascii=False, indent=1)
    out = []
    out.append("// PokeLike - datos reales de PokeAPI: 151 Pokemon de 1a generacion.")
    out.append(f"// Generado por tools/gen_dex.py: {len(formas)} formas, {len(evo)} evoluciones.\n")
    out.append("const FORMAS = " + dump(formas) + ";")
    out.append("const EVO = " + dump(evo) + ";")
    out.append("const INICIALES = " + dump(iniciales) + ";")
    return "\n".join(out)

if __name__ == "__main__":
    formas, evo, iniciales = construir()
    bloque = js(formas, evo, iniciales)
    salida = os.path.join(os.path.dirname(__file__), "dex_block.js")
    with open(salida, "w", encoding="utf-8") as f:
        f.write(bloque)
    print(f"\nOK: {len(formas)} formas, {len(evo)} evoluciones, {len(iniciales)} iniciales")
    print("Escrito en", salida)
