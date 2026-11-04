// Mini PokeRogue - 1a generacion. HTML/CSS/JS puros, sin librerias.

// Tabla de tipos: multiplicador de dano de atacante -> defensor.
const VENTAJA = {
  fuego:    { planta: 2, agua: 0.5, fuego: 1, normal: 1, electrico: 1 },
  agua:     { fuego: 2, planta: 0.5, agua: 1, normal: 1, electrico: 0.5 },
  planta:   { agua: 2, fuego: 0.5, planta: 1, normal: 1, electrico: 1 },
  electrico:{ agua: 2, planta: 0.5, electrico: 0.5, fuego: 1, normal: 1 },
  normal:   { fuego: 1, agua: 1, planta: 1, normal: 1, electrico: 1 },
};

// Pokemon de 1a gen disponibles.
const DEX = {
  charmander: { name: "Charmander", emoji: "\u{1F98E}", type: "fuego", hp: 45,
    moves: [{ n: "Ascuas", t: "fuego", d: 12 }, { n: "Arañazo", t: "normal", d: 9 }] },
  squirtle:   { name: "Squirtle", emoji: "\u{1F422}", type: "agua", hp: 48,
    moves: [{ n: "Pistola Agua", t: "agua", d: 12 }, { n: "Placaje", t: "normal", d: 9 }] },
  bulbasaur:  { name: "Bulbasaur", emoji: "\u{1F43E}", type: "planta", hp: 50,
    moves: [{ n: "Latigo Cepa", t: "planta", d: 12 }, { n: "Placaje", t: "normal", d: 9 }] },
  pikachu:    { name: "Pikachu", emoji: "\u26A1", type: "electrico", hp: 42,
    moves: [{ n: "Impactrueno", t: "electrico", d: 13 }, { n: "Ataque Rapido", t: "normal", d: 9 }] },
  pidgey:     { name: "Pidgey", emoji: "\u{1F426}", type: "normal", hp: 44,
    moves: [{ n: "Tornado", t: "normal", d: 11 }, { n: "Picotazo", t: "normal", d: 9 }] },
  geodude:    { name: "Geodude", emoji: "\u{1FAA8}", type: "normal", hp: 52,
    moves: [{ n: "Lanzarrocas", t: "normal", d: 12 }, { n: "Placaje", t: "normal", d: 8 }] },
  rattata:    { name: "Rattata", emoji: "\u{1F400}", type: "normal", hp: 40,
    moves: [{ n: "Mordisco", t: "normal", d: 11 }, { n: "Ataque Rapido", t: "normal", d: 9 }] },
};

const STARTERS = ["charmander", "squirtle", "bulbasaur", "pikachu"];
const KEY = "pokerogue_best";

// --- Estado ---
let me = null;      // {name, emoji, type, hp, maxHp, moves}
let foe = null;
let round = 1;
let streak = 0;

// --- Refs ---
const $ = (id) => document.getElementById(id);
const startPanel = $("start");
const arena = $("arena");
const overPanel = $("over");

// --- Inicio ---
function init() {
  $("best").textContent = localStorage.getItem(KEY) || 0;
  const box = $("starters");
  box.innerHTML = "";
  STARTERS.forEach((id) => {
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

function nuevo(id) {
  const p = DEX[id];
  return { name: p.name, emoji: p.emoji, type: p.type, hp: p.hp, maxHp: p.hp,
    moves: p.moves.map((m) => ({ ...m })) };
}

function empezar(id) {
  me = nuevo(id);
  round = 1;
  streak = 0;
  startPanel.classList.add("hidden");
  overPanel.classList.add("hidden");
  arena.classList.remove("hidden");
  nuevaRonda();
}

function pokeAleatorio() {
  const ids = Object.keys(DEX);
  return nuevo(ids[Math.floor(Math.random() * ids.length)]);
}

function nuevaRonda() {
  foe = pokeAleatorio();
  // El rival se hace mas fuerte con las rondas.
  const extra = Math.floor((round - 1) * 6);
  foe.hp += extra;
  foe.maxHp += extra;
  me.hp = me.maxHp; // curacion entre rondas
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
    b.textContent = `${m.n} (${m.t})`;
    b.disabled = !activo;
    b.addEventListener("click", () => turno(m));
    box.appendChild(b);
  });
}

function dano(atacante, mov, defensor) {
  const mult = (VENTAJA[mov.t] && VENTAJA[mov.t][defensor.type]) || 1;
  const varia = 0.85 + Math.random() * 0.3; // 0.85 - 1.15
  return { valor: Math.round(mov.d * mult * varia), mult };
}

function turno(mov) {
  pintarMoves(false);

  // Tu ataque
  const a = dano(me, mov, foe);
  foe.hp -= a.valor;
  let txt = `${me.name} usa ${mov.n}. ${efecto(a.mult)} ${a.valor} de dano.`;
  pintar();

  if (foe.hp <= 0) {
    streak++;
    round++;
    txt += ` \u00a1${foe.name} cae!`;
    log(txt);
    setTimeout(nuevaRonda, 900);
    return;
  }

  // Ataque rival
  const fm = foe.moves[Math.floor(Math.random() * foe.moves.length)];
  const b = dano(foe, fm, me);
  me.hp -= b.valor;
  txt += ` ${foe.name} responde con ${fm.n}: ${b.valor} de dano.`;
  log(txt);
  pintar();

  if (me.hp <= 0) {
    return fin();
  }
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
  $("overText").textContent = `Aguantaste ${streak} victoria(s). Mejor racha: ${localStorage.getItem(KEY)}.`;
}

function log(t) { $("log").textContent = t; }

$("again").addEventListener("click", () => {
  overPanel.classList.add("hidden");
  startPanel.classList.remove("hidden");
  init();
});

init();
