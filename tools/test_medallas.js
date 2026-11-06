// Prueba aislada de pintarMedallasMapa con un DOM simulado minimo.
const fs = require('fs');
const path = require('path');

// --- DOM falso ---
function makeEl() {
  return {
    _html: '',
    children: [],
    set innerHTML(v){ this._html = v; this.children = []; },
    get innerHTML(){ return this._html; },
    className: '', title: '', textContent: '',
    style: {}, dataset: {},
    classList: { add(){}, remove(){}, toggle(){}, contains(){ return false; } },
    addEventListener(){}, removeEventListener(){},
    appendChild(c){ this.children.push(c); },
    querySelectorAll(){ return []; },
    querySelector(sel){
      if (!this._q) this._q = makeEl();
      return this._q;
    },
  };
}
const medallasEl = makeEl();
global.document = {
  getElementById(id){ return id === 'medallasMapa' ? medallasEl : makeEl(); },
  createElement(){ return makeEl(); },
  addEventListener(){}, querySelector(){ return makeEl(); }, querySelectorAll(){ return []; },
  body: makeEl(),
};
global.window = {};

// --- Carga game.js extrayendo solo lo necesario ---
const code = fs.readFileSync(path.join(__dirname, '..', 'game.js'), 'utf8');

// Ejecutamos en un contexto que expone lo que toca.
const vm = require('vm');
const ctx = { document: global.document, window: global.window, setTimeout(){}, setInterval(){}, console, localStorage: { getItem(){return null;}, setItem(){} } };
vm.createContext(ctx);
try {
  vm.runInContext(code + '\n;globalThis.__pm = (typeof pintarMedallasMapa!=="undefined")?pintarMedallasMapa:null;'
    + 'globalThis.__orden = (typeof ORDEN_MEDALLAS!=="undefined")?ORDEN_MEDALLAS:null;'
    + 'globalThis.__med = (typeof MEDALLAS!=="undefined")?MEDALLAS:null;'
    + 'globalThis.__gan = (typeof medallasGanadas!=="undefined")?medallasGanadas:null;', ctx);
} catch (e) {
  console.log('ERROR al cargar game.js:', e.message);
  process.exit(1);
}

console.log('ORDEN_MEDALLAS:', ctx.__orden ? ctx.__orden.length : 'NO EXISTE');
console.log('MEDALLAS keys:', ctx.__med ? Object.keys(ctx.__med).length : 'NO EXISTE');
console.log('medallasGanadas:', ctx.__gan ? JSON.stringify(ctx.__gan) : 'NO EXISTE');

if (ctx.__pm) {
  ctx.__pm();
  console.log('innerHTML tras pintar:', medallasEl._html.slice(0,120));
  console.log('huecos creados:', medallasEl._q ? medallasEl._q.children.length : 0);
} else {
  console.log('pintarMedallasMapa NO EXISTE');
}
