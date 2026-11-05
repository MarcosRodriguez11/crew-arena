// Recompone los pasos 4, 5 y 6 de cada mapa:
//   paso 4 -> 2 hierbas + cura
//   paso 5 -> 2 hierbas (SIN cura)
//   paso 6 -> 2 hierbas + cura
// Las hierbas se toman de las especies que YA aparecen en ese mapa.
const fs = require("fs"), vm = require("vm"), path = require("path");
const p = path.resolve(__dirname, "..", "mapas.js");
let src = fs.readFileSync(p, "utf8");

// cargar MAPAS para conocer las especies de cada mapa
const ctx = {}; vm.createContext(ctx);
vm.runInContext(src + "\n;globalThis.__M=MAPAS;", ctx);
const M = ctx.__M;

function sp(especie) { return `{ tipo: "pokemon", especie: "${especie}" }`; }
const CURA = `{ tipo: "cura" }`;

M.forEach((mapa) => {
  // especies de hierba del mapa (sin duplicados)
  const especies = [];
  mapa.pasos.forEach((f) => f.forEach((s) => { if (s.tipo === "pokemon" && !especies.includes(s.especie)) especies.push(s.especie); }));
  const pick = (i) => especies[i % especies.length] || "pidgey";

  // construye las 3 filas nuevas (texto JS, con la misma indentacion que el archivo: 6 espacios)
  const ind = "      ";
  const filaP4 = `${ind}[ ${sp(pick(0))}, ${sp(pick(1))}, ${CURA} ],`;
  const filaP5 = `${ind}[ ${sp(pick(2))}, ${sp(pick(3))} ],`;
  const filaP6 = `${ind}[ ${sp(pick(4))}, ${sp(pick(5))}, ${CURA} ],`;

  // localizar el bloque "pasos: [ ... ]," de ESTE mapa y reemplazar filas 4,5,6
  const idTag = `id: ${mapa.id},`;
  const start = src.indexOf(idTag);
  const pasosStart = src.indexOf("pasos: [", start);
  const pasosEnd = src.indexOf("\n    ],", pasosStart); // cierre del array pasos
  const head = src.slice(0, pasosStart);
  const tail = src.slice(pasosEnd);
  // filas actuales del bloque pasos (lineas que empiezan por 6 espacios + "[")
  const bloque = src.slice(pasosStart, pasosEnd);
  const lineas = bloque.split("\n");
  // la linea 0 es "pasos: ["; las filas de paso son las que empiezan con "      ["
  let fila = 0;
  const nuevasLineas = lineas.map((ln) => {
    if (/^\s{6}\[/.test(ln)) {
      fila++;
      if (fila === 4) return filaP4;
      if (fila === 5) return filaP5;
      if (fila === 6) return filaP6;
    }
    return ln;
  });
  src = head + nuevasLineas.join("\n") + tail;
});

fs.writeFileSync(p, src);
console.log("OK: pasos 4/5/6 recompuestos en", M.length, "mapas (cura en 4 y 6, no en 5)");
