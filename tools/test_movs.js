// Comprueba que al subir varios niveles de golpe no se saltan movimientos.
const fs=require("fs"),vm=require("vm"),path=require("path");
const base=path.resolve(__dirname,"..");
function nodo(){const n={innerHTML:"",textContent:"",value:"",title:"",disabled:false,dataset:{},style:{setProperty(){},backgroundImage:""},classList:{add(){},remove(){},contains(){return false;}},addEventListener(){},appendChild(){},setAttribute(){},querySelector(){return nodo();},get offsetWidth(){return 0;}};return n;}
const ctx={console,Math,JSON,Date,setTimeout:()=>{},localStorage:{_d:{},getItem(k){return this._d[k]??null;},setItem(k,v){this._d[k]=String(v);}},document:{getElementById:()=>nodo(),querySelector:()=>nodo(),createElement:()=>nodo()}};
ctx.window=ctx;vm.createContext(ctx);
for(const a of ["mapas.js","game.js"]){let c=fs.readFileSync(path.join(base,a),"utf8");if(a==="game.js")c+="\n;globalThis.__nuevo=nuevoLuchador;globalThis.__subir=subirNivel;globalThis.__movs=movsNuevos;";vm.runInContext(c,ctx,{filename:a});}

let fallos=[];
// Charmander empieza a nivel 5. Learnset real: ... Ascuas(7) ...
// Sube de golpe 3 niveles (5 -> 8), como un lider. No debe saltarse Ascuas (lvl 7).
const ch=ctx.__nuevo("charmander",5);
ctx.__subir(ch); ctx.__subir(ch); ctx.__subir(ch);
const nuevos=ctx.__movs(ch).map(m=>m.n);
console.log("Charmander Nv",ch.level,"- aprende de golpe:",nuevos.join(", ")||"(nada)");
if(!nuevos.includes("Ascuas")) fallos.push("no aprendio Ascuas (lvl 7) al subir 5->8");

// Caso un solo nivel: 6 -> 7 debe dar Ascuas
const ch2=ctx.__nuevo("charmander",6);
ctx.__subir(ch2);
const n2=ctx.__movs(ch2).map(m=>m.n);
if(!n2.includes("Ascuas")) fallos.push("no aprendio Ascuas al subir 6->7");

if(fallos.length){console.error("FALLOS:\n  "+fallos.join("\n  "));process.exit(1);}
console.log("OK: los movimientos de niveles intermedios se aprenden al subir de golpe");
