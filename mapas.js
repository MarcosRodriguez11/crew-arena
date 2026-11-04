// ===========================================================================
//  MAPAS DE PokeLike  -  edita este archivo para cambiar mapas, spots y lideres
// ===========================================================================
//
//  ESTRUCTURA DE UN MAPA
//  ---------------------
//  - El mapa se abre tras elegir el Pokemon inicial.
//  - Es un camino de 7 pasos:
//      * Pasos 1..6  -> "pasos[i]" es una LISTA de 2 o 3 spots; eliges UNO.
//      * Paso 7      -> el "lider" (fijo, no se elige). Cierra el mapa.
//  - Vencer al lider desbloquea el mapa siguiente (se juegan EN ORDEN).
//
//  La mezcla de opciones por paso es: 2, 3, 2, 3, 2, 3.
//
//  TIPOS DE SPOT (por ahora todos son "pokemon"; la estructura ya admite el resto)
//      { tipo: "pokemon",    especie: "key" }                        <- (actual)
//      { tipo: "entrenador", nombre: "...", equipo: ["key", ...] }
//      { tipo: "objeto",     item: "pocion" | "superpocion" | "revivir" }
//      { tipo: "cura" }
//
//  LIDER:  lider: { nombre: "...", equipo: ["key", "key", ...] }
//
//  "key" = nombre de Pokemon en game.js (FORMAS): charmander, squirtle, bulbasaur,
//  pikachu, caterpie, pidgey, rattata, zubat, geodude, onix, machop, abra, gastly,
//  oddish, ekans, growlithe, poliwag, magnemite, ponyta, vulpix...
//
//  Los nombres de lider (Lider 1..8) y los equipos son provisionales: editalos.
// ---------------------------------------------------------------------------

const MAPAS = [
  {
    id: 1,
    nombre: "Bosque Verde",
    pasos: [
      [ { tipo: "pokemon", especie: "caterpie" }, { tipo: "pokemon", especie: "weedle" } ],
      [ { tipo: "pokemon", especie: "pidgey" }, { tipo: "pokemon", especie: "rattata" }, { tipo: "pokemon", especie: "spearow" } ],
      [ { tipo: "pokemon", especie: "oddish" }, { tipo: "pokemon", especie: "bellsprout" } ],
      [ { tipo: "pokemon", especie: "metapod" }, { tipo: "pokemon", especie: "kakuna" }, { tipo: "pokemon", especie: "pidgey" } ],
      [ { tipo: "pokemon", especie: "rattata" }, { tipo: "pokemon", especie: "caterpie" } ],
      [ { tipo: "pokemon", especie: "butterfree" }, { tipo: "pokemon", especie: "beedrill" }, { tipo: "pokemon", especie: "pidgeotto" } ],
    ],
    lider: { nombre: "Lider 1", equipo: ["bulbasaur", "oddish"] },
  },
  {
    id: 2,
    nombre: "Cueva Roca",
    pasos: [
      [ { tipo: "pokemon", especie: "geodude" }, { tipo: "pokemon", especie: "zubat" } ],
      [ { tipo: "pokemon", especie: "sandshrew" }, { tipo: "pokemon", especie: "machop" }, { tipo: "pokemon", especie: "geodude" } ],
      [ { tipo: "pokemon", especie: "zubat" }, { tipo: "pokemon", especie: "diglett" } ],
      [ { tipo: "pokemon", especie: "graveler" }, { tipo: "pokemon", especie: "machoke" }, { tipo: "pokemon", especie: "golbat" } ],
      [ { tipo: "pokemon", especie: "sandslash" }, { tipo: "pokemon", especie: "dugtrio" } ],
      [ { tipo: "pokemon", especie: "golem" }, { tipo: "pokemon", especie: "onix" }, { tipo: "pokemon", especie: "machamp" } ],
    ],
    lider: { nombre: "Lider 2", equipo: ["geodude", "onix"] },
  },
  {
    id: 3,
    nombre: "Ruta del Agua",
    pasos: [
      [ { tipo: "pokemon", especie: "poliwag" }, { tipo: "pokemon", especie: "tentacool" } ],
      [ { tipo: "pokemon", especie: "psyduck" }, { tipo: "pokemon", especie: "squirtle" }, { tipo: "pokemon", especie: "poliwag" } ],
      [ { tipo: "pokemon", especie: "poliwhirl" }, { tipo: "pokemon", especie: "slowpoke" } ],
      [ { tipo: "pokemon", especie: "wartortle" }, { tipo: "pokemon", especie: "tentacruel" }, { tipo: "pokemon", especie: "golduck" } ],
      [ { tipo: "pokemon", especie: "slowbro" }, { tipo: "pokemon", especie: "poliwhirl" } ],
      [ { tipo: "pokemon", especie: "blastoise" }, { tipo: "pokemon", especie: "poliwrath" }, { tipo: "pokemon", especie: "golduck" } ],
    ],
    lider: { nombre: "Lider 3", equipo: ["squirtle", "poliwrath"] },
  },
  {
    id: 4,
    nombre: "Tunel Oscuro",
    pasos: [
      [ { tipo: "pokemon", especie: "gastly" }, { tipo: "pokemon", especie: "zubat" } ],
      [ { tipo: "pokemon", especie: "abra" }, { tipo: "pokemon", especie: "gastly" }, { tipo: "pokemon", especie: "golbat" } ],
      [ { tipo: "pokemon", especie: "haunter" }, { tipo: "pokemon", especie: "kadabra" } ],
      [ { tipo: "pokemon", especie: "crobat" }, { tipo: "pokemon", especie: "haunter" }, { tipo: "pokemon", especie: "abra" } ],
      [ { tipo: "pokemon", especie: "kadabra" }, { tipo: "pokemon", especie: "gastly" } ],
      [ { tipo: "pokemon", especie: "gengar" }, { tipo: "pokemon", especie: "alakazam" }, { tipo: "pokemon", especie: "crobat" } ],
    ],
    lider: { nombre: "Lider 4", equipo: ["gastly", "gengar"] },
  },
  {
    id: 5,
    nombre: "Volcan Ardiente",
    pasos: [
      [ { tipo: "pokemon", especie: "growlithe" }, { tipo: "pokemon", especie: "vulpix" } ],
      [ { tipo: "pokemon", especie: "ponyta" }, { tipo: "pokemon", especie: "charmander" }, { tipo: "pokemon", especie: "growlithe" } ],
      [ { tipo: "pokemon", especie: "charmeleon" }, { tipo: "pokemon", especie: "ninetales" } ],
      [ { tipo: "pokemon", especie: "rapidash" }, { tipo: "pokemon", especie: "arcanine" }, { tipo: "pokemon", especie: "charmeleon" } ],
      [ { tipo: "pokemon", especie: "ninetales" }, { tipo: "pokemon", especie: "ponyta" } ],
      [ { tipo: "pokemon", especie: "charizard" }, { tipo: "pokemon", especie: "arcanine" }, { tipo: "pokemon", especie: "rapidash" } ],
    ],
    lider: { nombre: "Lider 5", equipo: ["charmeleon", "arcanine"] },
  },
  {
    id: 6,
    nombre: "Pradera Electrica",
    pasos: [
      [ { tipo: "pokemon", especie: "magnemite" }, { tipo: "pokemon", especie: "pikachu" } ],
      [ { tipo: "pokemon", especie: "pikachu" }, { tipo: "pokemon", especie: "magnemite" }, { tipo: "pokemon", especie: "pidgey" } ],
      [ { tipo: "pokemon", especie: "magneton" }, { tipo: "pokemon", especie: "raichu" } ],
      [ { tipo: "pokemon", especie: "raichu" }, { tipo: "pokemon", especie: "magneton" }, { tipo: "pokemon", especie: "pikachu" } ],
      [ { tipo: "pokemon", especie: "magnemite" }, { tipo: "pokemon", especie: "pikachu" } ],
      [ { tipo: "pokemon", especie: "magnezone" }, { tipo: "pokemon", especie: "raichu" }, { tipo: "pokemon", especie: "magneton" } ],
    ],
    lider: { nombre: "Lider 6", equipo: ["raichu", "magnezone"] },
  },
  {
    id: 7,
    nombre: "Pantano Veneno",
    pasos: [
      [ { tipo: "pokemon", especie: "ekans" }, { tipo: "pokemon", especie: "nidoran-m" } ],
      [ { tipo: "pokemon", especie: "oddish" }, { tipo: "pokemon", especie: "nidoran-f" }, { tipo: "pokemon", especie: "ekans" } ],
      [ { tipo: "pokemon", especie: "arbok" }, { tipo: "pokemon", especie: "nidorino" } ],
      [ { tipo: "pokemon", especie: "nidorina" }, { tipo: "pokemon", especie: "gloom" }, { tipo: "pokemon", especie: "arbok" } ],
      [ { tipo: "pokemon", especie: "nidorino" }, { tipo: "pokemon", especie: "nidorina" } ],
      [ { tipo: "pokemon", especie: "nidoking" }, { tipo: "pokemon", especie: "nidoqueen" }, { tipo: "pokemon", especie: "vileplume" } ],
    ],
    lider: { nombre: "Lider 7", equipo: ["arbok", "nidoking"] },
  },
  {
    id: 8,
    nombre: "Liga Final",
    pasos: [
      [ { tipo: "pokemon", especie: "machoke" }, { tipo: "pokemon", especie: "golbat" } ],
      [ { tipo: "pokemon", especie: "alakazam" }, { tipo: "pokemon", especie: "vileplume" }, { tipo: "pokemon", especie: "arcanine" } ],
      [ { tipo: "pokemon", especie: "golem" }, { tipo: "pokemon", especie: "rapidash" } ],
      [ { tipo: "pokemon", especie: "gengar" }, { tipo: "pokemon", especie: "machamp" }, { tipo: "pokemon", especie: "nidoking" } ],
      [ { tipo: "pokemon", especie: "crobat" }, { tipo: "pokemon", especie: "steelix" } ],
      [ { tipo: "pokemon", especie: "charizard" }, { tipo: "pokemon", especie: "blastoise" }, { tipo: "pokemon", especie: "venusaur" } ],
    ],
    lider: { nombre: "Lider 8", equipo: ["charizard", "blastoise", "venusaur"] },
  },
];
