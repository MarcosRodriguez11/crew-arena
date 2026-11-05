// Comprueba que mapas.js y game.js cargan sin error de sintaxis ni de ejecucion,
// simulando el minimo de DOM/localStorage que usan. Ejecutar: node tools/check.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const base = path.resolve(__dirname, "..");

// Stub de DOM: cada getElementById devuelve un nodo falso con lo que usa el juego.
function nodoFalso() {
  const n = {
    _cls: new Set(),
    innerHTML: "", textContent: "", value: "", title: "", disabled: false,
    dataset: {},
    style: { setProperty() {}, backgroundImage: "" },
    classList: { add(c){n._cls.add(c);}, remove(c){n._cls.delete(c);}, contains(c){return n._cls.has(c);} },
    addEventListener() {}, appendChild() {}, setAttribute() {},
    querySelector() { return nodoFalso(); },
    get offsetWidth() { return 0; },
  };
  return n;
}

const sandbox = {
  console,
  localStorage: { _d: {}, getItem(k){return this._d[k] ?? null;}, setItem(k,v){this._d[k]=String(v);} },
  Math, JSON, Date, setTimeout: () => {},
  document: {
    getElementById: () => nodoFalso(),
    querySelector: () => nodoFalso(),
    createElement: () => nodoFalso(),
  },
};
sandbox.window = sandbox;

const ctx = vm.createContext(sandbox);

for (const archivo of ["mapas.js", "game.js"]) {
  let code = fs.readFileSync(path.join(base, archivo), "utf-8");
  // exponer las globales declaradas con const al sandbox para poder inspeccionarlas
  if (archivo === "mapas.js") {
    code += "\n;globalThis.__M=MAPAS;";
  }
  if (archivo === "game.js") {
    code += "\n;globalThis.__F=FORMAS;globalThis.__E=EVO;globalThis.__I=INICIALES;";
  }
  try {
    new vm.Script(code, { filename: archivo }); // 1) sintaxis
    vm.runInContext(code, ctx, { filename: archivo }); // 2) ejecucion de carga
    console.log(`OK sintaxis+carga: ${archivo}`);
  } catch (e) {
    console.error(`FALLO en ${archivo}: ${e.message}`);
    process.exit(1);
  }
}

// Comprobaciones de datos
const F = ctx.__F, E = ctx.__E, I = ctx.__I;
console.log("FORMAS:", Object.keys(F).length);
console.log("EVO:", Object.keys(E).length);
console.log("INICIALES:", I.length);

// Integridad: cada 'siguiente' de EVO y cada INICIAL existe en FORMAS
const faltan = [];
for (const [k, v] of Object.entries(E)) {
  if (!F[k]) faltan.push("EVO origen " + k);
  if (!F[v.siguiente]) faltan.push("EVO destino " + v.siguiente);
}
for (const k of I) if (!F[k]) faltan.push("INICIAL " + k);
// los 4 iniciales elegibles del menu estan fijos en game.js:
for (const k of ["charmander","squirtle","bulbasaur","pikachu"]) if (!F[k]) faltan.push("menu " + k);

if (faltan.length) { console.error("REFERENCIAS ROTAS:", faltan.join(", ")); process.exit(1); }
console.log("OK integridad: todas las referencias existen");

// --- Validacion de MAPAS ---
const M = ctx.__M;
if (!Array.isArray(M)) { console.error("MAPAS no es un array"); process.exit(1); }
console.log("MAPAS:", M.length);
const malMapa = [];
M.forEach((mapa) => {
  // especies de los huecos de hierba
  (mapa.pasos || []).forEach((fila, pi) => {
    fila.forEach((spot) => {
      if (spot.tipo === "pokemon" && !F[spot.especie]) malMapa.push(`mapa ${mapa.id} paso ${pi+1}: ${spot.especie}`);
      if (spot.tipo === "entrenador") (spot.equipo||[]).forEach((k)=>{ if(!F[k]) malMapa.push(`mapa ${mapa.id} entrenador-hueco: ${k}`); });
    });
  });
  // entrenadores definidos (5 por mapa)
  if (!Array.isArray(mapa.entrenadores) || mapa.entrenadores.length !== 5)
    malMapa.push(`mapa ${mapa.id}: debe tener 5 entrenadores`);
  (mapa.entrenadores || []).forEach((e) => {
    (e.equipo || []).forEach((k) => { if (!F[k]) malMapa.push(`mapa ${mapa.id} entrenador "${e.nombre}": ${k}`); });
  });
  // lider
  (mapa.lider?.equipo || []).forEach((k) => { if (!F[k]) malMapa.push(`mapa ${mapa.id} lider: ${k}`); });
});
if (M.length !== 9) malMapa.push(`se esperaban 9 mapas, hay ${M.length}`);
if (malMapa.length) { console.error("MAPAS - REFERENCIAS ROTAS:\n  " + malMapa.join("\n  ")); process.exit(1); }
console.log("OK MAPAS: 9 mapas, 5 entrenadores cada uno, todas las especies existen");
