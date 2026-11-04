// ===========================================================================
//  MAPAS DE PokeLike  -  edita este archivo para cambiar mapas, spots y lideres
// ===========================================================================
//
// Cada mapa se juega EN ORDEN: al vencer al lider se desbloquea el siguiente.
//
// Un "spot" es una parada del camino. POR AHORA todos son "pokemon" (un combate
// contra un pokemon salvaje). La estructura esta lista para que MAS ADELANTE
// cambies cualquier spot a otro tipo solo editando su objeto:
//
//   { tipo: "pokemon",    especie: "key" }                        <- (actual)
//   { tipo: "entrenador", nombre: "...", equipo: ["key", ...] }   <- pelea de equipo
//   { tipo: "objeto",     item: "pocion" | "superpocion" | "revivir" }
//   { tipo: "cura" }                                              <- recupera PS
//
// El "lider" cierra el mapa:  lider: { nombre: "...", equipo: ["key", ...] }
//
// Las "key" son nombres de Pokemon tal como estan en game.js (FORMAS), p.ej.:
//   charmander, squirtle, bulbasaur, pikachu, caterpie, pidgey, rattata, zubat,
//   geodude, onix, machop, abra, gastly, oddish, ekans, growlithe, poliwag...
//
// Los nombres de lider (Lider 1..8) y los equipos son provisionales: editalos.
// ---------------------------------------------------------------------------

const MAPAS = [
  {
    id: 1,
    nombre: "Bosque Verde",
    spots: [
      { tipo: "pokemon", especie: "caterpie" },
      { tipo: "pokemon", especie: "weedle" },
      { tipo: "pokemon", especie: "pidgey" },
      { tipo: "pokemon", especie: "rattata" },
      { tipo: "pokemon", especie: "oddish" },
    ],
    lider: { nombre: "Lider 1", equipo: ["bulbasaur", "oddish"] },
  },
  {
    id: 2,
    nombre: "Cueva Roca",
    spots: [
      { tipo: "pokemon", especie: "geodude" },
      { tipo: "pokemon", especie: "zubat" },
      { tipo: "pokemon", especie: "sandshrew" },
      { tipo: "pokemon", especie: "machop" },
      { tipo: "pokemon", especie: "geodude" },
    ],
    lider: { nombre: "Lider 2", equipo: ["geodude", "onix"] },
  },
  {
    id: 3,
    nombre: "Ruta del Agua",
    spots: [
      { tipo: "pokemon", especie: "poliwag" },
      { tipo: "pokemon", especie: "tentacool" },
      { tipo: "pokemon", especie: "psyduck" },
      { tipo: "pokemon", especie: "squirtle" },
      { tipo: "pokemon", especie: "poliwhirl" },
    ],
    lider: { nombre: "Lider 3", equipo: ["squirtle", "poliwrath"] },
  },
  {
    id: 4,
    nombre: "Tunel Oscuro",
    spots: [
      { tipo: "pokemon", especie: "gastly" },
      { tipo: "pokemon", especie: "zubat" },
      { tipo: "pokemon", especie: "abra" },
      { tipo: "pokemon", especie: "haunter" },
      { tipo: "pokemon", especie: "gastly" },
    ],
    lider: { nombre: "Lider 4", equipo: ["gastly", "gengar"] },
  },
  {
    id: 5,
    nombre: "Volcan Ardiente",
    spots: [
      { tipo: "pokemon", especie: "growlithe" },
      { tipo: "pokemon", especie: "vulpix" },
      { tipo: "pokemon", especie: "ponyta" },
      { tipo: "pokemon", especie: "charmander" },
      { tipo: "pokemon", especie: "growlithe" },
    ],
    lider: { nombre: "Lider 5", equipo: ["charmeleon", "arcanine"] },
  },
  {
    id: 6,
    nombre: "Pradera Electrica",
    spots: [
      { tipo: "pokemon", especie: "magnemite" },
      { tipo: "pokemon", especie: "pikachu" },
      { tipo: "pokemon", especie: "magneton" },
      { tipo: "pokemon", especie: "pikachu" },
      { tipo: "pokemon", especie: "magnemite" },
    ],
    lider: { nombre: "Lider 6", equipo: ["raichu", "magnezone"] },
  },
  {
    id: 7,
    nombre: "Pantano Veneno",
    spots: [
      { tipo: "pokemon", especie: "ekans" },
      { tipo: "pokemon", especie: "nidoran-m" },
      { tipo: "pokemon", especie: "oddish" },
      { tipo: "pokemon", especie: "arbok" },
      { tipo: "pokemon", especie: "nidorino" },
    ],
    lider: { nombre: "Lider 7", equipo: ["arbok", "nidoking"] },
  },
  {
    id: 8,
    nombre: "Liga Final",
    spots: [
      { tipo: "pokemon", especie: "machoke" },
      { tipo: "pokemon", especie: "golbat" },
      { tipo: "pokemon", especie: "alakazam" },
      { tipo: "pokemon", especie: "golem" },
      { tipo: "pokemon", especie: "rapidash" },
    ],
    lider: { nombre: "Lider 8", equipo: ["charizard", "blastoise", "venusaur"] },
  },
];
