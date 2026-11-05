# -*- coding: utf-8 -*-
# Reemplaza los bloques FORMAS/EVO/INICIALES de game.js por el bloque generado.
import io, os

base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
game = os.path.join(base, "game.js")
block = os.path.join(base, "tools", "dex_block.js")

src = open(game, encoding="utf-8").read().splitlines(keepends=True)
nuevo = open(block, encoding="utf-8").read().rstrip("\n") + "\n"

# localizar inicio (linea que empieza con 'const FORMAS') y fin (antes de 'const KEY')
ini = next(i for i, l in enumerate(src) if l.startswith("const FORMAS"))
fin = next(i for i, l in enumerate(src) if l.startswith("const KEY"))

out = "".join(src[:ini]) + nuevo + "\n" + "".join(src[fin:])
open(game, "w", encoding="utf-8").write(out)
print(f"OK: reemplazadas lineas {ini+1}..{fin} de game.js")
