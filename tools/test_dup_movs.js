// Comprueba que no aparecen movimientos duplicados al subir de nivel y evolucionar.
const fs=require("fs"),vm=require("vm"),path=require("path");
const base=path.resolve(__dirname,"..");
function nodo(){const n={innerHTML:"",textContent:"",value:"",title:"",disabled:false,dataset:{},style:{setProperty(){},backgroundImage:""},classList:{add(){},remove(){},contains(){return false;}},addEventListener(){},appendChild(){},setAttribute(){},querySelector(){return nodo();},get offsetWidth(){return 0;}};return n;}
const ctx={console,Math,JSON,Date,setTimeout:(fn)=>{if(typeof fn==="function")fn();},localStorage:{_d:{},getItem(k){return this._d[k]??null;},setItem(k,v){this._d[k]=String(v);}},document:{getElementById:()=>nodo(),querySelector:()=>nodo(),createElement:()=>nodo()}};
ctx.window=ctx;vm.createContext(ctx);
for(const a of ["mapas.js","game.js"]){let c=fs.readFileSync(path.join(base,a),"utf8");if(a==="game.js")c+="\n;globalThis.__nuevo=nuevoLuchador;globalThis.__subirEquipo=subirEquipo;globalThis.__setEquipo=(arr,idx)=>{equipo=arr;activoIdx=idx;me=arr[idx];};globalThis.__get=()=>equipo;";vm.runInContext(c,ctx,{filename:a});}

let fallos=[];
// Charmander lvl 5 solo en el equipo; sube hasta pasar la evolucion (lvl 16) de golpe
const ch=ctx.__nuevo("charmander",5);
ctx.__setEquipo([ch],0);
// sube de a 3 (como lideres) varias veces hasta superar nivel 16
for(let i=0;i<5;i++) ctx.__subirEquipo(3); // 5 -> 20
const eq=ctx.__get()[0];
const nombres=eq.moves.map(m=>m.n);
const dup=nombres.filter((n,i)=>nombres.indexOf(n)!==i);
console.log("Especie final:",eq.name,"Nv",eq.level);
console.log("Movimientos:",nombres.join(", "));
if(dup.length) fallos.push("movimientos duplicados: "+[...new Set(dup)].join(", "));
if(eq.moves.length>4) fallos.push("tiene mas de 4 movimientos: "+eq.moves.length);

if(fallos.length){console.error("FALLOS:\n  "+fallos.join("\n  "));process.exit(1);}
console.log("OK: sin movimientos duplicados tras evolucionar y subir de golpe");
