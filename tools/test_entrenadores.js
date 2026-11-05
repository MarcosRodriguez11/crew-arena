// Prueba la colocacion aleatoria de entrenadores (colocarEntrenadores) sin DOM real.
// Ejecutar: node tools/test_entrenadores.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const base = path.resolve(__dirname, "..");

function nodoFalso() {
  const n = { innerHTML:"", textContent:"", value:"", title:"", disabled:false, dataset:{},
    style:{setProperty(){},backgroundImage:""},
    classList:{add(){},remove(){},contains(){return false;}},
    addEventListener(){}, appendChild(){}, setAttribute(){}, querySelector(){return nodoFalso();},
    get offsetWidth(){return 0;} };
  return n;
}
const sandbox = {
  console, Math, JSON, Date, setTimeout:()=>{},
  localStorage:{_d:{},getItem(k){return this._d[k]??null;},setItem(k,v){this._d[k]=String(v);}},
  document:{ getElementById:()=>nodoFalso(), querySelector:()=>nodoFalso(), createElement:()=>nodoFalso() },
};
sandbox.window = sandbox;
const ctx = vm.createContext(sandbox);

for (const archivo of ["mapas.js","game.js"]) {
  let code = fs.readFileSync(path.join(base,archivo),"utf-8");
  if (archivo==="game.js") code += "\n;globalThis.__colocar=colocarEntrenadores; globalThis.__get=()=>pasosActivos; globalThis.__set=(m)=>{mapaIdx=m;};";
  if (archivo==="mapas.js") code += "\n;globalThis.__M=MAPAS;";
  vm.runInContext(code, ctx, {filename:archivo});
}

const M = ctx.__M;
let fallos = [];
let distribucionN = {};

for (let mapa = 0; mapa < M.length; mapa++) {
  ctx.__set(mapa);
  const totalEntren = (M[mapa].entrenadores||[]).length;
  for (let run = 0; run < 500; run++) {
    ctx.__colocar();
    const pasos = ctx.__get();
    // contar entrenadores colocados y comprobar que son huecos validos
    let colocados = [];
    pasos.forEach((fila,p)=> fila.forEach((spot,i)=>{ if(spot.tipo==="entrenador") colocados.push(spot.nombre); }));
    const n = colocados.length;
    distribucionN[n] = (distribucionN[n]||0)+1;
    // ahora se colocan TODOS los entrenadores del mapa (5)
    if (n !== totalEntren) fallos.push(`mapa ${mapa+1}: N=${n}, esperaba ${totalEntren}`);
    // sin entrenador repetido
    if (new Set(colocados).size !== colocados.length) fallos.push(`mapa ${mapa+1}: entrenador repetido`);
    // cada entrenador colocado existe en la lista del mapa
    const nombres = new Set((M[mapa].entrenadores||[]).map(e=>e.nombre));
    colocados.forEach(nm=>{ if(!nombres.has(nm)) fallos.push(`mapa ${mapa+1}: "${nm}" no es del mapa`); });
  }
}

console.log("Distribucion de N (entrenadores colocados):", distribucionN);
if (fallos.length) { console.error("FALLOS:\n  "+[...new Set(fallos)].join("\n  ")); process.exit(1); }
console.log("OK: en todos los mapas N esta en rango, sin repetidos, nombres validos");
