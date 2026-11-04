// Mini PokeRogue - 1a generacion, con niveles. HTML/CSS/JS puros.

// Ventaja de tipos: multiplicador de dano atacante -> defensor.
const VENTAJA = {
  fuego:    { planta: 2, agua: 0.5, fuego: 1, normal: 1, electrico: 1 },
  agua:     { fuego: 2, planta: 0.5, agua: 1, normal: 1, electrico: 0.5 },
  planta:   { agua: 2, fuego: 0.5, planta: 1, normal: 1, electrico: 1 },
  electrico:{ agua: 2, planta: 0.5, electrico: 0.5, fuego: 1, normal: 1 },
  normal:   { fuego: 1, agua: 1, planta: 1, normal: 1, electrico: 1 },
};

// Pokemon jugables. moves = ataque inicial. pool = ataques que puede aprender al subir.
const DEX = {
  charmander: { name: "Charmander", emoji: "\u{1F98E}", type: "fuego", hp: 20,
    moves: [{ n: "Arañazo", t: "normal", d: 6 }],
    pool: [{ n: "Ascuas", t: "fuego", d: 12 }, { n: "Giro Fuego", t: "fuego", d: 15 }, { n: "Lanzallamas", t: "fuego", d: 20 }] },
  squirtle:   { name: "Squirtle", emoji: "\u{1F422}", type: "agua", hp: 22,
    moves: [{ n: "Placaje", t: "normal", d: 6 }],
    pool: [{ n: "Pistola Agua", t: "agua", d: 12 }, { n: "Burbuja", t: "agua", d: 15 }, { n: "Hidrobomba", t: "agua", d: 20 }] },
  bulbasaur:  { name: "Bulbasaur", emoji: "\u{1F43E}", type: "planta", hp: 23,
    moves: [{ n: "Placaje", t: "normal", d: 6 }],
    pool: [{ n: "Latigo Cepa", t: "planta", d: 12 }, { n: "Hoja Afilada", t: "planta", d: 15 }, { n: "Rayo Solar", t: "planta", d: 20 }] },
  pikachu:    { name: "Pikachu", emoji: "\u26A1", type: "electrico", hp: 19,
    moves: [{ n: "Ataque Rapido", t: "normal", d: 6 }],
    pool: [{ n: "Impactrueno", t: "electrico", d: 13 }, { n: "Chispa", t: "electrico", d: 16 }, { n: "Rayo", t: "electrico", d: 21 }] },
};

// Rivales (pueden salir tambien iniciales).
const RIVALES = {
  pidgey:  { name: "Pidgey", emoji: "\u{1F426}", type: "normal", hp: 20, moves: [{ n: "Tornado", t: "normal", d: 8 }] },
  geodude: { name: "Geodude", emoji: "\u{1FAA8}", type: "normal", hp: 26, moves: [{ n: "Lanzarrocas", t: "normal", d: 9 }] },
  rattata: { name: "Rattata", emoji: "\u{1F400}", type: "normal", hp: 18, moves: [{ n: "Mordisco", t: "normal", d: 8 }] },
};

const KEY = "pokerogue_best";
const PS_POR_NIVEL = 8;      // PS max que ganas por nivel
const CURA_POR_NIVEL = 4;    // dano extra del rival por ronda

// Color por tipo, para el destello al golpear.
const COLOR_TIPO = {
  fuego: "#ff8a5c", agua: "#7cc3ff", planta: "#7fe39a",
  electrico: "#ffe066", normal: "#cfd3da",
};

// Destello del color del tipo sobre el que recibe el golpe.
function flash(lado, tipo) {
  const el = document.querySelector(".fighter." + lado);
  if (!el) return;
  el.style.setProperty("--flash", COLOR_TIPO[tipo] || "#fff");
  el.classList.remove("hit");
  void el.offsetWidth; // reinicia la animacion
  el.classList.add("hit");
}

// Pinta el nombre del ataque con el color de su tipo, en el log.
function mov_html(nombre, tipo) {
  return `<span class="t-${tipo}">${nombre}</span>`;
}

let me = null;
let foe = null;
let round = 1;
let streak = 0;
let nuevosAprendidos = 0;    // cuantos de la pool ya aprendio tu pokemon

const $ = (id) => document.getElementById(id);
const startPanel = $("start");
const arena = $("arena");
const overPanel = $("over");

function init() {
  $("best").textContent = localStorage.getItem(KEY) || 0;
  const box = $("starters");
  box.innerHTML = "";
  Object.keys(DEX).forEach((id) => {
    const p = DEX[id];
    const el = document.createElement("div");
    el.className = "card";
    el.innerHTML =
      `<div class="emoji">${p.emoji}</div>` +
      `<div class="name">${p.name}</div>` +
      `<div class="type t-${p.type}">${p.type}</div>`;
    el.addEventListener("click", () => empezar(id));
    box.appendChild(el);
  });
}

function empezar(id) {
  const p = DEX[id];
  me = {
    name: p.name, emoji: p.emoji, type: p.type,
    hp: p.hp, maxHp: p.hp, level: 1,
    moves: p.moves.map((m) => ({ ...m })),
    pool: p.pool.map((m) => ({ ...m })),
  };
  nuevosAprendidos = 0;
  round = 1;
  streak = 0;
  startPanel.classList.add("hidden");
  overPanel.classList.add("hidden");
  arena.classList.remove("hidden");
  nuevaRonda();
}

function rivalAleatorio() {
  const todos = { ...RIVALES, ...DEX };
  const ids = Object.keys(todos);
  const p = todos[ids[Math.floor(Math.random() * ids.length)]];
  // El rival escala con la ronda.
  const extra = Math.floor((round - 1) * CURA_POR_NIVEL);
  return {
    name: p.name, emoji: p.emoji, type: p.type,
    hp: p.hp + extra, maxHp: p.hp + extra,
    moves: p.moves.map((m) => ({ ...m, d: m.d + Math.floor((round - 1) * 1.5) })),
  };
}

function nuevaRonda() {
  foe = rivalAleatorio();
  me.hp = me.maxHp; // te curas entre rondas
  $("round").textContent = round;
  $("streak").textContent = streak;
  log(`\u00a1Un ${foe.name} salvaje aparece!`);
  pintar();
  pintarMoves(true);
}

function pintar() {
  $("meEmoji").textContent = me.emoji;
  $("meName").textContent = me.name;
  $("meType").textContent = me.type;
  $("meType").className = "type t-" + me.type;
  $("meLvl").textContent = "Nivel " + me.level;
  $("foeEmoji").textContent = foe.emoji;
  $("foeName").textContent = foe.name;
  $("foeType").textContent = foe.type;
  $("foeType").className = "type t-" + foe.type;
  barra("me", me);
  barra("foe", foe);
}

function barra(lado, p) {
  const pct = Math.max(0, (p.hp / p.maxHp) * 100);
  const fill = $(lado + "Hp");
  fill.style.width = pct + "%";
  fill.style.background = pct > 50 ? "#4ade80" : pct > 20 ? "#facc15" : "#ef4444";
  $(lado + "HpText").textContent = Math.max(0, Math.round(p.hp)) + " / " + p.maxHp + " PS";
}

function pintarMoves(activo) {
  const box = $("moves");
  box.innerHTML = "";
  me.moves.forEach((m) => {
    const b = document.createElement("button");
    b.textContent = `${m.n}`;
    b.className = "m-" + m.t;
    b.disabled = !activo;
    b.addEventListener("click", () => turno(m));
    box.appendChild(b);
  });
}

function dano(mov, defensor) {
  const mult = (VENTAJA[mov.t] && VENTAJA[mov.t][defensor.type]) || 1;
  const varia = 0.85 + Math.random() * 0.3;
  return { valor: Math.round(mov.d * mult * varia), mult };
}

function subirNivel() {
  me.level++;
  me.maxHp += PS_POR_NIVEL;
  let txt = `\u00a1${me.name} sube al nivel ${me.level}! +${PS_POR_NIVEL} PS max.`;
  // Aprende un ataque nuevo (si queda en la pool y tiene menos de 4).
  if (me.moves.length < 4 && nuevosAprendidos < me.pool.length) {
    const nuevo = me.pool[nuevosAprendidos];
    me.moves.push({ ...nuevo });
    nuevosAprendidos++;
    txt += ` Aprende ${nuevo.n}.`;
  }
  return txt;
}

function turno(mov) {
  pintarMoves(false);

  const a = dano(mov, foe);
  foe.hp -= a.valor;
  flash("foe", mov.t);
  let txt = `${me.name} usa ${mov_html(mov.n, mov.t)}. ${efecto(a.mult)} ${a.valor} de dano.`;
  pintar();

  if (foe.hp <= 0) {
    streak++;
    round++;
    const subida = subirNivel();
    txt += ` \u00a1${foe.name} cae! ${subida}`;
    log(txt);
    pintar();
    setTimeout(nuevaRonda, 1300);
    return;
  }

  const fm = foe.moves[Math.floor(Math.random() * foe.moves.length)];
  const b = dano(fm, me);
  me.hp -= b.valor;
  flash("me", fm.t);
  txt += ` ${foe.name} responde con ${mov_html(fm.n, fm.t)}: ${b.valor} de dano.`;
  log(txt);
  pintar();

  if (me.hp <= 0) return fin();
  pintarMoves(true);
}

function efecto(mult) {
  if (mult > 1) return "\u00a1Es muy eficaz!";
  if (mult < 1) return "No es muy eficaz...";
  return "";
}

function fin() {
  arena.classList.add("hidden");
  overPanel.classList.remove("hidden");
  const best = Number(localStorage.getItem(KEY) || 0);
  if (streak > best) {
    localStorage.setItem(KEY, streak);
    $("overTitle").textContent = "\u00a1Nuevo record!";
  } else {
    $("overTitle").textContent = "Has caido";
  }
  $("overText").textContent =
    `${me.name} llego al nivel ${me.level} con ${streak} victoria(s). Mejor racha: ${localStorage.getItem(KEY)}.`;
}

function log(t) { $("log").innerHTML = t; }

$("again").addEventListener("click", () => {
  overPanel.classList.add("hidden");
  startPanel.classList.remove("hidden");
  init();
});

init();
