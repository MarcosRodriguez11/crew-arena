// Prueba el punto de cura: cura todo el equipo y avanza un paso.
// Ejecutar: node tools/test_cura.js
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
  console, Math, JSON, Date, setTimeout:(fn)=>{ if(typeof fn==="function") fn(); }, // ejecuta el callback ya
  localStorage:{_d:{},getItem(k){return this._d[k]??null;},setItem(k,v){this._d[k]=String(v);}},
  document:{ getElementById:()=>nodoFalso(), querySelector:()=>nodoFalso(), createElement:()=>nodoFalso() },
};
sandbox.window = sandbox;
const ctx = vm.createContext(sandbox);

for (const archivo of ["mapas.js","game.js"]) {
  let code = fs.readFileSync(path.join(base,archivo),"utf-8");
  if (archivo==="game.js") code += `
;globalThis.__nuevoLuchador=nuevoLuchador;
globalThis.__empezarSpot=empezarSpot;
globalThis.__setEquipo=(arr,idx)=>{ equipo=arr; activoIdx=idx; me=arr[idx]; };
globalThis.__setPaso=(m,p)=>{ mapaIdx=m; pasoIdx=p; pasosActivos=MAPAS[m].pasos.map(f=>f.map(s=>({...s}))); };
globalThis.__getPaso=()=>pasoIdx;
globalThis.__getEquipo=()=>equipo;`;
  vm.runInContext(code, ctx, {filename:archivo});
}

let fallos = [];
// equipo de 2, lastimado
const eq = [ ctx.__nuevoLuchador("charmander",10), ctx.__nuevoLuchador("pidgey",10) ];
eq[0].hp = 3; eq[1].hp = 1;
ctx.__setEquipo(eq, 0);
ctx.__setPaso(0, 2); // mapa 1, paso 3

ctx.__empezarSpot({ tipo: "cura" });

const curados = ctx.__getEquipo();
curados.forEach((p,i)=>{ if (p.hp !== p.maxHp) fallos.push(`pokemon ${i}: hp ${p.hp}/${p.maxHp}, no curado`); });
if (ctx.__getPaso() !== 3) fallos.push(`pasoIdx = ${ctx.__getPaso()}, esperaba 3 (avanzo)`);

console.log("hp tras cura:", curados.map(p=>`${p.hp}/${p.maxHp}`).join(", "), "| paso:", ctx.__getPaso());
if (fallos.length) { console.error("FALLOS:\n  "+fallos.join("\n  ")); process.exit(1); }
console.log("OK: la cura restaura todo el equipo y avanza el paso");
