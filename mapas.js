// ===========================================================================
//  MAPAS DE PokeLike  -  edita este archivo para cambiar mapas, spots y lideres
// ===========================================================================
//
// Cada mapa se juega EN ORDEN: al vencer al lider se desbloquea el siguiente.
//
// Un "spot" es una parada del camino. Tipos:
//   { tipo: "entrenador", nombre: "...", equipo: ["key", ...] }  -> pelea
//   { tipo: "pokemon",    especie: "key" }                        -> pokemon salvaje
//   { tipo: "objeto",     item: "pocion" | "superpocion" | "revivir" }
//   { tipo: "cura" }                                              -> recupera PS al maximo
//
// El "lider" cierra el mapa:
//   lider: { nombre: "...", equipo: ["key", "key", ...] }
//
// Las "key" son nombres de Pokemon tal como estan en game.js (FORMAS), p.ej.:
//   charmander, squirtle, bulbasaur, pikachu, caterpie, pidgey, rattata, zubat,
//   geodude, onix, machop, abra, gastly, oddish, ekans, growlithe, poliwag...
//
// CAMBIA libremente los nombres de lider y los equipos: son solo ejemplos.
// ---------------------------------------------------------------------------

const MAPAS = [
  {
    id: 1,
    nombre: "Bosque Verde",
    spots: [
      { tipo: "entrenador", nombre: "Cazabichos Rick", equipo: ["caterpie", "weedle"] },
      { tipo: "pokemon",    especie: "pidgey" },
      { tipo: "objeto",     item: "pocion" },
      { tipo: "entrenador", nombre: "Explorador Ana", equipo: ["rattata", "spearow"] },
      { tipo: "cura" },
    ],
    lider: { nombre: "Lider Hoja", equipo: ["bulbasaur", "oddish"] },
  },
  {
    id: 2,
    nombre: "Cueva Roca",
    spots: [
      { tipo: "entrenador", nombre: "Montañero Leo", equipo: ["geodude", "machop"] },
      { tipo: "pokemon",    especie: "zubat" },
      { tipo: "cura" },
      { tipo: "objeto",     item: "pocion" },
      { tipo: "entrenador", nombre: "Minero Tom", equipo: ["sandshrew", "geodude"] },
    ],
    lider: { nombre: "Lider Roca", equipo: ["geodude", "onix"] },
  },
  {
    id: 3,
    nombre: "Ruta del Agua",
    spots: [
      { tipo: "entrenador", nombre: "Nadador Pol", equipo: ["poliwag", "tentacool"] },
      { tipo: "pokemon",    especie: "psyduck" },
      { tipo: "objeto",     item: "superpocion" },
      { tipo: "cura" },
      { tipo: "entrenador", nombre: "Pescador Sam", equipo: ["squirtle", "poliwhirl"] },
    ],
    lider: { nombre: "Lider Ola", equipo: ["squirtle", "poliwrath"] },
  },
  {
    id: 4,
    nombre: "Tunel Oscuro",
    spots: [
      { tipo: "entrenador", nombre: "Medium Noa", equipo: ["gastly", "abra"] },
      { tipo: "pokemon",    especie: "zubat" },
      { tipo: "cura" },
      { tipo: "objeto",     item: "revivir" },
      { tipo: "entrenador", nombre: "Fantasma Vic", equipo: ["haunter", "gastly"] },
    ],
    lider: { nombre: "Lider Sombra", equipo: ["gastly", "gengar"] },
  },
  {
    id: 5,
    nombre: "Volcan Ardiente",
    spots: [
      { tipo: "entrenador", nombre: "Domador Rai", equipo: ["growlithe", "vulpix"] },
      { tipo: "pokemon",    especie: "ponyta" },
      { tipo: "objeto",     item: "superpocion" },
      { tipo: "cura" },
      { tipo: "entrenador", nombre: "Pirokinetica Mar", equipo: ["charmander", "growlithe"] },
    ],
    lider: { nombre: "Lider Llama", equipo: ["charmeleon", "arcanine"] },
  },
  {
    id: 6,
    nombre: "Pradera Electrica",
    spots: [
      { tipo: "entrenador", nombre: "Tecnico Edi", equipo: ["magnemite", "pikachu"] },
      { tipo: "pokemon",    especie: "pikachu" },
      { tipo: "cura" },
      { tipo: "objeto",     item: "pocion" },
      { tipo: "entrenador", nombre: "Chispa Lia", equipo: ["magneton", "pikachu"] },
    ],
    lider: { nombre: "Lider Voltio", equipo: ["raichu", "magnezone"] },
  },
  {
    id: 7,
    nombre: "Pantano Veneno",
    spots: [
      { tipo: "entrenador", nombre: "Toxica Dra", equipo: ["ekans", "nidoran-m"] },
      { tipo: "pokemon",    especie: "oddish" },
      { tipo: "objeto",     item: "superpocion" },
      { tipo: "cura" },
      { tipo: "entrenador", nombre: "Boticario Rus", equipo: ["arbok", "nidorino"] },
    ],
    lider: { nombre: "Lider Toxico", equipo: ["arbok", "nidoking"] },
  },
  {
    id: 8,
    nombre: "Liga Final",
    spots: [
      { tipo: "entrenador", nombre: "Elite Uno", equipo: ["machoke", "golbat"] },
      { tipo: "cura" },
      { tipo: "entrenador", nombre: "Elite Dos", equipo: ["alakazam", "vileplume"] },
      { tipo: "objeto",     item: "revivir" },
      { tipo: "entrenador", nombre: "Elite Tres", equipo: ["golem", "rapidash"] },
    ],
    lider: { nombre: "Campeon", equipo: ["charizard", "blastoise", "venusaur"] },
  },
];
