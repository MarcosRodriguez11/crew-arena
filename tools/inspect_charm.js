const fs=require("fs"),vm=require("vm"),path=require("path");
const base=path.resolve(__dirname,"..");
function nodo(){const n={innerHTML:"",textContent:"",value:"",title:"",disabled:false,dataset:{},style:{setProperty(){},backgroundImage:""},classList:{add(){},remove(){},contains(){return false;}},addEventListener(){},appendChild(){},setAttribute(){},querySelector(){return nodo();},get offsetWidth(){return 0;}};return n;}
const ctx={console,Math,JSON,Date,setTimeout:()=>{},localStorage:{_d:{},getItem(k){return this._d[k]??null;},setItem(k,v){this._d[k]=String(v);}},document:{getElementById:()=>nodo(),querySelector:()=>nodo(),createElement:()=>nodo()}};
ctx.window=ctx;vm.createContext(ctx);
for(const a of ["mapas.js","game.js"]){let c=fs.readFileSync(path.join(base,a),"utf8");if(a==="game.js")c+="\n;globalThis.__F=FORMAS;globalThis.__nuevo=nuevoLuchador;";vm.runInContext(c,ctx,{filename:a});}
console.log("Learnset FORMAS.charmander:");
console.log(JSON.stringify(ctx.__F.charmander.learnset, null, 1));
const ch=ctx.__nuevo("charmander",3);
console.log("\nTras nuevoLuchador(charmander,3):");
console.log("moves:", ch.moves.map(m=>m.n));
console.log("learn _dado:", ch.learn.map(m=>`${m.n}(lvl${m.lvl},dado=${!!m._dado})`));
