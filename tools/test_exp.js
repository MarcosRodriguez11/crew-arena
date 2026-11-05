// Prueba subirEquipo(niveles): TODO el equipo sube la cantidad correcta.
// Ejecutar: node tools/test_exp.js
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
  if (archivo==="game.js") code += `
;globalThis.__nuevoLuchador=nuevoLuchador;
globalThis.__subirEquipo=subirEquipo;
globalThis.__setEquipo=(arr,idx)=>{ equipo=arr; activoIdx=idx; me=arr[idx]; };
globalThis.__getEquipo=()=>equipo;`;
  vm.runInContext(code, ctx, {filename:archivo});
}

let fallos = [];
// caso: equipo de 3 (charmander, pidgey, rattata), ganar un combate que da +N
function prueba(niveles, etiqueta) {
  const eq = [
    ctx.__nuevoLuchador("charmander", 5),
    ctx.__nuevoLuchador("pidgey", 5),
    ctx.__nuevoLuchador("rattata", 5),
  ];
  const antes = eq.map(p => p.level);
  ctx.__setEquipo(eq, 0);
  ctx.__subirEquipo(niveles);
  const despues = ctx.__getEquipo().map(p => p.level);
  despues.forEach((lvl, i) => {
    // puede evolucionar y cambiar key, pero el nivel debe subir exactamente 'niveles'
    if (lvl !== antes[i] + niveles) fallos.push(`${etiqueta}: pokemon ${i} subio ${lvl-antes[i]}, esperaba ${niveles}`);
  });
  console.log(`${etiqueta}: niveles ${antes.join(",")} -> ${despues.join(",")}`);
}

prueba(1, "salvaje (+1)");
prueba(2, "entrenador (+2)");
prueba(3, "lider (+3)");

if (fallos.length) { console.error("FALLOS:\n  "+fallos.join("\n  ")); process.exit(1); }
console.log("OK: todo el equipo sube la cantidad correcta en cada tipo de combate");
