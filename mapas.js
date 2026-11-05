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
//  - Hay 9 mapas: los 8 primeros dan MEDALLA; el 9 es el ALTO MANDO.
//
//  La mezcla de opciones por paso es: 2, 3, 2, 3, 2, 3.
//
//  TIPOS DE SPOT (por ahora los huecos son "pokemon"; la estructura admite el resto)
//      { tipo: "pokemon",    especie: "key" }                        <- (actual)
//      { tipo: "entrenador", nombre: "...", equipo: ["key", ...] }
//      { tipo: "objeto",     item: "pocion" | "superpocion" | "revivir" }
//      { tipo: "cura" }
//
//  ENTRENADORES DEL MAPA
//  ---------------------
//  Cada mapa trae "entrenadores": una lista de 2 entrenadores (nombre + equipo).
//  Estan DEFINIDOS pero NO colocados todavia: mas adelante se pondra un numero
//  AL AZAR de ellos en los huecos de hierba. Para colocar uno a mano, copia el
//  objeto a un hueco con la forma:
//      { tipo: "entrenador", nombre: "...", equipo: ["key", ...] }
//
//  LIDER:  lider: { nombre: "...", medalla: "...", equipo: ["key", "key", ...] }
//
//  "key" = nombre de Pokemon en game.js (FORMAS).
// ---------------------------------------------------------------------------

const MAPAS = [
  {
    id: 1,
    nombre: "Bosque Verde",
    fondo: "mapa-fondo.svg",
    pasos: [
      [ { tipo: "pokemon", especie: "caterpie" }, { tipo: "pokemon", especie: "weedle" } ],
      [ { tipo: "pokemon", especie: "pidgey" }, { tipo: "pokemon", especie: "rattata" }, { tipo: "pokemon", especie: "spearow" } ],
      [ { tipo: "pokemon", especie: "oddish" }, { tipo: "pokemon", especie: "bellsprout" } ],
      [ { tipo: "pokemon", especie: "caterpie" }, { tipo: "pokemon", especie: "weedle" }, { tipo: "cura" } ],
      [ { tipo: "pokemon", especie: "pidgey" }, { tipo: "pokemon", especie: "rattata" } ],
      [ { tipo: "pokemon", especie: "spearow" }, { tipo: "pokemon", especie: "oddish" }, { tipo: "cura" } ],
    ],
    entrenadores: [
      { tipo: "entrenador", nombre: "Domador Marco", equipo: ["weedle"] },
      { tipo: "entrenador", nombre: "Montañero Bruno", equipo: ["kakuna"] },
      { tipo: "entrenador", nombre: "Técnico Olga", equipo: ["weedle"] },
      { tipo: "entrenador", nombre: "Pescador Leo", equipo: ["oddish"] },
      { tipo: "entrenador", nombre: "Cazabichos Rubén", equipo: ["butterfree"] },
    ],
    lider: { nombre: "Líder Erika", medalla: "Medalla Hoja", equipo: ["bulbasaur", "oddish"] },
  },
  {
    id: 2,
    nombre: "Cueva Roca",
    fondo: "mapa-fondo.svg",
    pasos: [
      [ { tipo: "pokemon", especie: "geodude" }, { tipo: "pokemon", especie: "zubat" } ],
      [ { tipo: "pokemon", especie: "sandshrew" }, { tipo: "pokemon", especie: "machop" }, { tipo: "pokemon", especie: "geodude" } ],
      [ { tipo: "pokemon", especie: "zubat" }, { tipo: "pokemon", especie: "diglett" } ],
      [ { tipo: "pokemon", especie: "geodude" }, { tipo: "pokemon", especie: "zubat" }, { tipo: "cura" } ],
      [ { tipo: "pokemon", especie: "sandshrew" }, { tipo: "pokemon", especie: "machop" } ],
      [ { tipo: "pokemon", especie: "diglett" }, { tipo: "pokemon", especie: "graveler" }, { tipo: "cura" } ],
    ],
    entrenadores: [
      { tipo: "entrenador", nombre: "Exploradora Nuria", equipo: ["diglett"] },
      { tipo: "entrenador", nombre: "As Elena", equipo: ["diglett", "machamp"] },
      { tipo: "entrenador", nombre: " Occultista Iván", equipo: ["onix"] },
      { tipo: "entrenador", nombre: "Pescador Leo", equipo: ["diglett", "golbat"] },
      { tipo: "entrenador", nombre: "Veterano Raúl", equipo: ["machoke", "zubat"] },
    ],
    lider: { nombre: "Líder Brock", medalla: "Medalla Roca", equipo: ["geodude", "onix"] },
  },
  {
    id: 3,
    nombre: "Ruta del Agua",
    fondo: "mapa-fondo.svg",
    pasos: [
      [ { tipo: "pokemon", especie: "poliwag" }, { tipo: "pokemon", especie: "tentacool" } ],
      [ { tipo: "pokemon", especie: "psyduck" }, { tipo: "pokemon", especie: "squirtle" }, { tipo: "pokemon", especie: "poliwag" } ],
      [ { tipo: "pokemon", especie: "poliwhirl" }, { tipo: "pokemon", especie: "slowpoke" } ],
      [ { tipo: "pokemon", especie: "poliwag" }, { tipo: "pokemon", especie: "tentacool" }, { tipo: "cura" } ],
      [ { tipo: "pokemon", especie: "psyduck" }, { tipo: "pokemon", especie: "squirtle" } ],
      [ { tipo: "pokemon", especie: "poliwhirl" }, { tipo: "pokemon", especie: "slowpoke" }, { tipo: "cura" } ],
    ],
    entrenadores: [
      { tipo: "entrenador", nombre: "Montañero Bruno", equipo: ["tentacruel", "squirtle"] },
      { tipo: "entrenador", nombre: "Técnico Olga", equipo: ["golduck", "psyduck"] },
      { tipo: "entrenador", nombre: " Occultista Iván", equipo: ["poliwag"] },
      { tipo: "entrenador", nombre: "Biologo Omar", equipo: ["slowpoke"] },
      { tipo: "entrenador", nombre: "Pescador Leo", equipo: ["tentacool", "psyduck"] },
    ],
    lider: { nombre: "Líder Misty", medalla: "Medalla Cascada", equipo: ["squirtle", "poliwrath"] },
  },
  {
    id: 4,
    nombre: "Túnel Oscuro",
    fondo: "mapa-fondo.svg",
    pasos: [
      [ { tipo: "pokemon", especie: "gastly" }, { tipo: "pokemon", especie: "zubat" } ],
      [ { tipo: "pokemon", especie: "abra" }, { tipo: "pokemon", especie: "gastly" }, { tipo: "pokemon", especie: "golbat" } ],
      [ { tipo: "pokemon", especie: "haunter" }, { tipo: "pokemon", especie: "kadabra" } ],
      [ { tipo: "pokemon", especie: "gastly" }, { tipo: "pokemon", especie: "zubat" }, { tipo: "cura" } ],
      [ { tipo: "pokemon", especie: "abra" }, { tipo: "pokemon", especie: "golbat" } ],
      [ { tipo: "pokemon", especie: "haunter" }, { tipo: "pokemon", especie: "kadabra" }, { tipo: "cura" } ],
    ],
    entrenadores: [
      { tipo: "entrenador", nombre: "Exploradora Nuria", equipo: ["golbat"] },
      { tipo: "entrenador", nombre: " Occultista Iván", equipo: ["alakazam"] },
      { tipo: "entrenador", nombre: "Montañero Bruno", equipo: ["golbat", "golbat"] },
      { tipo: "entrenador", nombre: "Veterano Raúl", equipo: ["gengar"] },
      { tipo: "entrenador", nombre: "As Elena", equipo: ["abra"] },
    ],
    lider: { nombre: "Líder Morti", medalla: "Medalla Alma", equipo: ["gastly", "gengar"] },
  },
  {
    id: 5,
    nombre: "Volcán Ardiente",
    fondo: "mapa-fondo.svg",
    pasos: [
      [ { tipo: "pokemon", especie: "growlithe" }, { tipo: "pokemon", especie: "vulpix" } ],
      [ { tipo: "pokemon", especie: "ponyta" }, { tipo: "pokemon", especie: "charmander" }, { tipo: "pokemon", especie: "growlithe" } ],
      [ { tipo: "pokemon", especie: "charmeleon" }, { tipo: "pokemon", especie: "ninetales" } ],
      [ { tipo: "pokemon", especie: "growlithe" }, { tipo: "pokemon", especie: "vulpix" }, { tipo: "cura" } ],
      [ { tipo: "pokemon", especie: "ponyta" }, { tipo: "pokemon", especie: "charmander" } ],
      [ { tipo: "pokemon", especie: "charmeleon" }, { tipo: "pokemon", especie: "ninetales" }, { tipo: "cura" } ],
    ],
    entrenadores: [
      { tipo: "entrenador", nombre: "Veterano Raúl", equipo: ["charmeleon"] },
      { tipo: "entrenador", nombre: "Domador Marco", equipo: ["charmeleon", "growlithe"] },
      { tipo: "entrenador", nombre: "Aventurera Sol", equipo: ["ninetales", "vulpix"] },
      { tipo: "entrenador", nombre: "Montañero Bruno", equipo: ["growlithe", "charizard"] },
      { tipo: "entrenador", nombre: "Biologo Omar", equipo: ["vulpix"] },
    ],
    lider: { nombre: "Líder Blaine", medalla: "Medalla Volcán", equipo: ["charmeleon", "arcanine"] },
  },
  {
    id: 6,
    nombre: "Pradera Eléctrica",
    fondo: "mapa-fondo.svg",
    pasos: [
      [ { tipo: "pokemon", especie: "magnemite" }, { tipo: "pokemon", especie: "pikachu" } ],
      [ { tipo: "pokemon", especie: "pikachu" }, { tipo: "pokemon", especie: "magnemite" }, { tipo: "pokemon", especie: "pidgey" } ],
      [ { tipo: "pokemon", especie: "magneton" }, { tipo: "pokemon", especie: "raichu" } ],
      [ { tipo: "pokemon", especie: "magnemite" }, { tipo: "pokemon", especie: "pikachu" }, { tipo: "cura" } ],
      [ { tipo: "pokemon", especie: "pidgey" }, { tipo: "pokemon", especie: "magneton" } ],
      [ { tipo: "pokemon", especie: "raichu" }, { tipo: "pokemon", especie: "magnemite" }, { tipo: "cura" } ],
    ],
    entrenadores: [
      { tipo: "entrenador", nombre: "Pescador Leo", equipo: ["pikachu"] },
      { tipo: "entrenador", nombre: "Exploradora Nuria", equipo: ["magnemite"] },
      { tipo: "entrenador", nombre: "Cazabichos Rubén", equipo: ["raichu"] },
      { tipo: "entrenador", nombre: " Occultista Iván", equipo: ["magnemite", "magnemite"] },
      { tipo: "entrenador", nombre: "Médium Carla", equipo: ["pikachu"] },
    ],
    lider: { nombre: "Líder Surge", medalla: "Medalla Trueno", equipo: ["raichu", "magneton"] },
  },
  {
    id: 7,
    nombre: "Pantano Veneno",
    fondo: "mapa-fondo.svg",
    pasos: [
      [ { tipo: "pokemon", especie: "ekans" }, { tipo: "pokemon", especie: "nidoran-m" } ],
      [ { tipo: "pokemon", especie: "oddish" }, { tipo: "pokemon", especie: "nidoran-f" }, { tipo: "pokemon", especie: "ekans" } ],
      [ { tipo: "pokemon", especie: "arbok" }, { tipo: "pokemon", especie: "nidorino" } ],
      [ { tipo: "pokemon", especie: "ekans" }, { tipo: "pokemon", especie: "nidoran-m" }, { tipo: "cura" } ],
      [ { tipo: "pokemon", especie: "oddish" }, { tipo: "pokemon", especie: "nidoran-f" } ],
      [ { tipo: "pokemon", especie: "arbok" }, { tipo: "pokemon", especie: "nidorino" }, { tipo: "cura" } ],
    ],
    entrenadores: [
      { tipo: "entrenador", nombre: "Exploradora Nuria", equipo: ["vileplume"] },
      { tipo: "entrenador", nombre: "Domador Marco", equipo: ["arbok"] },
      { tipo: "entrenador", nombre: "Técnico Olga", equipo: ["gloom"] },
      { tipo: "entrenador", nombre: "Entrenadora Vera", equipo: ["vileplume"] },
      { tipo: "entrenador", nombre: "Biologo Omar", equipo: ["nidoqueen"] },
    ],
    lider: { nombre: "Líder Koga", medalla: "Medalla Alma Oscura", equipo: ["arbok", "nidoking"] },
  },
  {
    id: 8,
    nombre: "Ciudad Capital",
    fondo: "mapa-fondo.svg",
    pasos: [
      [ { tipo: "pokemon", especie: "machoke" }, { tipo: "pokemon", especie: "golbat" } ],
      [ { tipo: "pokemon", especie: "alakazam" }, { tipo: "pokemon", especie: "vileplume" }, { tipo: "pokemon", especie: "arcanine" } ],
      [ { tipo: "pokemon", especie: "golem" }, { tipo: "pokemon", especie: "rapidash" } ],
      [ { tipo: "pokemon", especie: "machoke" }, { tipo: "pokemon", especie: "golbat" }, { tipo: "cura" } ],
      [ { tipo: "pokemon", especie: "alakazam" }, { tipo: "pokemon", especie: "vileplume" } ],
      [ { tipo: "pokemon", especie: "arcanine" }, { tipo: "pokemon", especie: "golem" }, { tipo: "cura" } ],
    ],
    entrenadores: [
      { tipo: "entrenador", nombre: "Biologo Omar", equipo: ["blastoise", "machamp"] },
      { tipo: "entrenador", nombre: "Veterano Raúl", equipo: ["charizard", "vileplume"] },
      { tipo: "entrenador", nombre: "Cazabichos Rubén", equipo: ["golem"] },
      { tipo: "entrenador", nombre: "Herpetóloga Ruth", equipo: ["golem"] },
      { tipo: "entrenador", nombre: "Pescador Leo", equipo: ["nidoking", "vileplume"] },
    ],
    lider: { nombre: "Líder Giovanni", medalla: "Medalla Tierra", equipo: ["nidoking", "onix", "rhydon"] },
  },
  {
    id: 9,
    nombre: "Alto Mando",
    fondo: "mapa-fondo.svg",
    pasos: [
      [ { tipo: "pokemon", especie: "dewgong" }, { tipo: "pokemon", especie: "lapras" } ],
      [ { tipo: "pokemon", especie: "machamp" }, { tipo: "pokemon", especie: "hitmonlee" }, { tipo: "pokemon", especie: "hitmonchan" } ],
      [ { tipo: "pokemon", especie: "gengar" }, { tipo: "pokemon", especie: "golbat" } ],
      [ { tipo: "pokemon", especie: "dewgong" }, { tipo: "pokemon", especie: "lapras" }, { tipo: "cura" } ],
      [ { tipo: "pokemon", especie: "machamp" }, { tipo: "pokemon", especie: "hitmonlee" } ],
      [ { tipo: "pokemon", especie: "hitmonchan" }, { tipo: "pokemon", especie: "gengar" }, { tipo: "cura" } ],
    ],
    entrenadores: [
      { tipo: "entrenador", nombre: "Herpetóloga Ruth", equipo: ["golbat"] },
      { tipo: "entrenador", nombre: "Entrenadora Vera", equipo: ["lapras"] },
      { tipo: "entrenador", nombre: "Médium Carla", equipo: ["hitmonchan"] },
      { tipo: "entrenador", nombre: "Aventurera Sol", equipo: ["arcanine"] },
      { tipo: "entrenador", nombre: "Biologo Omar", equipo: ["arcanine", "dragonite"] },
    ],
    lider: { nombre: "Campeón Azul", medalla: "Campeón de la Liga", equipo: ["alakazam", "gyarados", "charizard"] },
  },
];
