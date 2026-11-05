// Prueba que cada mapa coloca 5 entrenadores + 3 objetos en huecos de hierba.
const fs=require("fs"),vm=require("vm"),path=require("path");
const base=path.resolve(__dirname,"..");
function nodo(){const n={innerHTML:"",textContent:"",value:"",title:"",disabled:false,dataset:{},style:{setProperty(){},backgroundImage:""},classList:{add(){},remove(){},contains(){return false;}},addEventListener(){},appendChild(){},setAttribute(){},querySelector(){return nodo();},get offsetWidth(){return 0;}};return n;}
const ctx={console,Math,JSON,Date,setTimeout:()=>{},localStorage:{_d:{},getItem(k){return this._d[k]??null;},setItem(k,v){this._d[k]=String(v);}},document:{getElementById:()=>nodo(),querySelector:()=>nodo(),createElement:()=>nodo()}};
ctx.window=ctx;vm.createContext(ctx);
for(const a of ["mapas.js","game.js"]){let c=fs.readFileSync(path.join(base,a),"utf8");if(a==="game.js")c+="\n;globalThis.__colocar=colocarEntrenadores;globalThis.__get=()=>pasosActivos;globalThis.__set=(m)=>{mapaIdx=m;};globalThis.__M=MAPAS;";vm.runInContext(c,ctx,{filename:a});}
let fallos=[];
for(let m=0;m<ctx.__M.length;m++){
  ctx.__set(m);
  for(let r=0;r<300;r++){
    ctx.__colocar();
    const ps=ctx.__get();
    let ent=0,obj=0;
    ps.forEach(f=>f.forEach(s=>{if(s.tipo==="entrenador")ent++;if(s.tipo==="objeto")obj++;}));
    if(ent!==5)fallos.push(`mapa ${m+1}: ${ent} entrenadores (esperaba 5)`);
    if(obj!==1)fallos.push(`mapa ${m+1}: ${obj} objetos (esperaba 1)`);
  }
}
if(fallos.length){console.error("FALLOS:\n  "+[...new Set(fallos)].join("\n  "));process.exit(1);}
console.log("OK: cada mapa coloca 5 entrenadores + 1 objeto en todas las partidas");
