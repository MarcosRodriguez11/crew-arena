// PokeLike - datos reales de PokeAPI, sprites + evolucion por nivel. HTML/CSS/JS puros.
// Generado: 34 lineas evolutivas de 1a gen.

const VENTAJA = {
  fuego:    { planta: 2, agua: 0.5, fuego: 1, normal: 1, electrico: 1 },
  agua:     { fuego: 2, planta: 0.5, agua: 1, normal: 1, electrico: 0.5 },
  planta:   { agua: 2, fuego: 0.5, planta: 1, normal: 1, electrico: 1 },
  electrico:{ agua: 2, planta: 0.5, electrico: 0.5, fuego: 1, normal: 1 },
  normal:   { fuego: 1, agua: 1, planta: 1, normal: 1, electrico: 1 },
};

// Cada forma de Pokemon (base y evolucionada): sprite real, tipo, hp base de juego.
const FORMAS = {
  "charmander": {
    "name": "Charmander",
    "id": 4,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    "type": "fuego",
    "hp": 31
  },
  "charmeleon": {
    "name": "Charmeleon",
    "id": 5,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    "type": "fuego",
    "hp": 43
  },
  "charizard": {
    "name": "Charizard",
    "id": 6,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    "type": "fuego",
    "hp": 55
  },
  "squirtle": {
    "name": "Squirtle",
    "id": 7,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    "type": "agua",
    "hp": 34
  },
  "wartortle": {
    "name": "Wartortle",
    "id": 8,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    "type": "agua",
    "hp": 43
  },
  "blastoise": {
    "name": "Blastoise",
    "id": 9,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    "type": "agua",
    "hp": 55
  },
  "bulbasaur": {
    "name": "Bulbasaur",
    "id": 1,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "type": "planta",
    "hp": 35
  },
  "ivysaur": {
    "name": "Ivysaur",
    "id": 2,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "type": "planta",
    "hp": 44
  },
  "venusaur": {
    "name": "Venusaur",
    "id": 3,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    "type": "planta",
    "hp": 56
  },
  "pikachu": {
    "name": "Pikachu",
    "id": 25,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    "type": "electrico",
    "hp": 29
  },
  "raichu": {
    "name": "Raichu",
    "id": 26,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    "type": "electrico",
    "hp": 44
  },
  "caterpie": {
    "name": "Caterpie",
    "id": 10,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    "type": "planta",
    "hp": 35
  },
  "metapod": {
    "name": "Metapod",
    "id": 11,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    "type": "planta",
    "hp": 38
  },
  "butterfree": {
    "name": "Butterfree",
    "id": 12,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    "type": "planta",
    "hp": 44
  },
  "weedle": {
    "name": "Weedle",
    "id": 13,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    "type": "planta",
    "hp": 32
  },
  "kakuna": {
    "name": "Kakuna",
    "id": 14,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    "type": "planta",
    "hp": 35
  },
  "beedrill": {
    "name": "Beedrill",
    "id": 15,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    "type": "planta",
    "hp": 47
  },
  "pidgey": {
    "name": "Pidgey",
    "id": 16,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    "type": "normal",
    "hp": 32
  },
  "pidgeotto": {
    "name": "Pidgeotto",
    "id": 17,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    "type": "normal",
    "hp": 46
  },
  "pidgeot": {
    "name": "Pidgeot",
    "id": 18,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    "type": "normal",
    "hp": 58
  },
  "rattata": {
    "name": "Rattata",
    "id": 19,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    "type": "normal",
    "hp": 26
  },
  "raticate": {
    "name": "Raticate",
    "id": 20,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    "type": "normal",
    "hp": 41
  },
  "spearow": {
    "name": "Spearow",
    "id": 21,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    "type": "normal",
    "hp": 32
  },
  "fearow": {
    "name": "Fearow",
    "id": 22,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    "type": "normal",
    "hp": 47
  },
  "ekans": {
    "name": "Ekans",
    "id": 23,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    "type": "planta",
    "hp": 29
  },
  "arbok": {
    "name": "Arbok",
    "id": 24,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    "type": "planta",
    "hp": 44
  },
  "sandshrew": {
    "name": "Sandshrew",
    "id": 27,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    "type": "normal",
    "hp": 38
  },
  "sandslash": {
    "name": "Sandslash",
    "id": 28,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    "type": "normal",
    "hp": 53
  },
  "vulpix": {
    "name": "Vulpix",
    "id": 37,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    "type": "fuego",
    "hp": 31
  },
  "ninetales": {
    "name": "Ninetales",
    "id": 38,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    "type": "fuego",
    "hp": 52
  },
  "zubat": {
    "name": "Zubat",
    "id": 41,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    "type": "planta",
    "hp": 32
  },
  "golbat": {
    "name": "Golbat",
    "id": 42,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    "type": "planta",
    "hp": 53
  },
  "crobat": {
    "name": "Crobat",
    "id": 169,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
    "type": "planta",
    "hp": 59
  },
  "oddish": {
    "name": "Oddish",
    "id": 43,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    "type": "planta",
    "hp": 35
  },
  "gloom": {
    "name": "Gloom",
    "id": 44,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    "type": "planta",
    "hp": 44
  },
  "vileplume": {
    "name": "Vileplume",
    "id": 45,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    "type": "planta",
    "hp": 53
  },
  "paras": {
    "name": "Paras",
    "id": 46,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    "type": "planta",
    "hp": 29
  },
  "parasect": {
    "name": "Parasect",
    "id": 47,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    "type": "planta",
    "hp": 44
  },
  "diglett": {
    "name": "Diglett",
    "id": 50,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    "type": "normal",
    "hp": 14
  },
  "dugtrio": {
    "name": "Dugtrio",
    "id": 51,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    "type": "normal",
    "hp": 29
  },
  "meowth": {
    "name": "Meowth",
    "id": 52,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    "type": "normal",
    "hp": 32
  },
  "persian": {
    "name": "Persian",
    "id": 53,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    "type": "normal",
    "hp": 47
  },
  "psyduck": {
    "name": "Psyduck",
    "id": 54,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    "type": "agua",
    "hp": 38
  },
  "golduck": {
    "name": "Golduck",
    "id": 55,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    "type": "agua",
    "hp": 56
  },
  "mankey": {
    "name": "Mankey",
    "id": 56,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    "type": "normal",
    "hp": 32
  },
  "primeape": {
    "name": "Primeape",
    "id": 57,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    "type": "normal",
    "hp": 47
  },
  "annihilape": {
    "name": "Annihilape",
    "id": 979,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/979.png",
    "type": "normal",
    "hp": 74
  },
  "growlithe": {
    "name": "Growlithe",
    "id": 58,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    "type": "fuego",
    "hp": 41
  },
  "arcanine": {
    "name": "Arcanine",
    "id": 59,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    "type": "fuego",
    "hp": 62
  },
  "poliwag": {
    "name": "Poliwag",
    "id": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    "type": "agua",
    "hp": 32
  },
  "poliwhirl": {
    "name": "Poliwhirl",
    "id": 61,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    "type": "agua",
    "hp": 47
  },
  "poliwrath": {
    "name": "Poliwrath",
    "id": 62,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    "type": "agua",
    "hp": 62
  },
  "abra": {
    "name": "Abra",
    "id": 63,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    "type": "electrico",
    "hp": 23
  },
  "kadabra": {
    "name": "Kadabra",
    "id": 64,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    "type": "electrico",
    "hp": 32
  },
  "alakazam": {
    "name": "Alakazam",
    "id": 65,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    "type": "electrico",
    "hp": 41
  },
  "machop": {
    "name": "Machop",
    "id": 66,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    "type": "normal",
    "hp": 50
  },
  "machoke": {
    "name": "Machoke",
    "id": 67,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    "type": "normal",
    "hp": 56
  },
  "machamp": {
    "name": "Machamp",
    "id": 68,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    "type": "normal",
    "hp": 62
  },
  "bellsprout": {
    "name": "Bellsprout",
    "id": 69,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    "type": "planta",
    "hp": 38
  },
  "weepinbell": {
    "name": "Weepinbell",
    "id": 70,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    "type": "planta",
    "hp": 47
  },
  "victreebel": {
    "name": "Victreebel",
    "id": 71,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    "type": "planta",
    "hp": 56
  },
  "tentacool": {
    "name": "Tentacool",
    "id": 72,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    "type": "agua",
    "hp": 32
  },
  "tentacruel": {
    "name": "Tentacruel",
    "id": 73,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    "type": "agua",
    "hp": 56
  },
  "geodude": {
    "name": "Geodude",
    "id": 74,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    "type": "normal",
    "hp": 32
  },
  "graveler": {
    "name": "Graveler",
    "id": 75,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    "type": "normal",
    "hp": 41
  },
  "golem": {
    "name": "Golem",
    "id": 76,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    "type": "normal",
    "hp": 56
  },
  "ponyta": {
    "name": "Ponyta",
    "id": 77,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    "type": "fuego",
    "hp": 38
  },
  "rapidash": {
    "name": "Rapidash",
    "id": 78,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    "type": "fuego",
    "hp": 47
  },
  "slowpoke": {
    "name": "Slowpoke",
    "id": 79,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    "type": "agua",
    "hp": 62
  },
  "slowbro": {
    "name": "Slowbro",
    "id": 80,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    "type": "agua",
    "hp": 65
  },
  "magnemite": {
    "name": "Magnemite",
    "id": 81,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    "type": "electrico",
    "hp": 23
  },
  "magneton": {
    "name": "Magneton",
    "id": 82,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    "type": "electrico",
    "hp": 38
  },
  "magnezone": {
    "name": "Magnezone",
    "id": 462,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png",
    "type": "electrico",
    "hp": 50
  },
  "gastly": {
    "name": "Gastly",
    "id": 92,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    "type": "electrico",
    "hp": 26
  },
  "haunter": {
    "name": "Haunter",
    "id": 93,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    "type": "electrico",
    "hp": 35
  },
  "gengar": {
    "name": "Gengar",
    "id": 94,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    "type": "electrico",
    "hp": 44
  },
  "onix": {
    "name": "Onix",
    "id": 95,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    "type": "normal",
    "hp": 29
  },
  "steelix": {
    "name": "Steelix",
    "id": 208,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
    "type": "normal",
    "hp": 53
  },
  "cubone": {
    "name": "Cubone",
    "id": 104,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    "type": "normal",
    "hp": 38
  },
  "marowak": {
    "name": "Marowak",
    "id": 105,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    "type": "normal",
    "hp": 44
  },
  "nidoran-f": {
    "name": "Nidoran-f",
    "id": 29,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    "type": "planta",
    "hp": 41
  },
  "nidorina": {
    "name": "Nidorina",
    "id": 30,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    "type": "planta",
    "hp": 50
  },
  "nidoqueen": {
    "name": "Nidoqueen",
    "id": 31,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    "type": "planta",
    "hp": 62
  },
  "nidoran-m": {
    "name": "Nidoran-m",
    "id": 32,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    "type": "planta",
    "hp": 36
  },
  "nidorino": {
    "name": "Nidorino",
    "id": 33,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    "type": "planta",
    "hp": 45
  },
  "nidoking": {
    "name": "Nidoking",
    "id": 34,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    "type": "planta",
    "hp": 57
  }
};

// Evolucion por nivel: forma -> { aNivel, siguiente }.
const EVO = {
  "charmander": {
    "aNivel": 16,
    "siguiente": "charmeleon"
  },
  "charmeleon": {
    "aNivel": 36,
    "siguiente": "charizard"
  },
  "squirtle": {
    "aNivel": 16,
    "siguiente": "wartortle"
  },
  "wartortle": {
    "aNivel": 36,
    "siguiente": "blastoise"
  },
  "bulbasaur": {
    "aNivel": 16,
    "siguiente": "ivysaur"
  },
  "ivysaur": {
    "aNivel": 32,
    "siguiente": "venusaur"
  },
  "pikachu": {
    "aNivel": 30,
    "siguiente": "raichu"
  },
  "caterpie": {
    "aNivel": 7,
    "siguiente": "metapod"
  },
  "metapod": {
    "aNivel": 10,
    "siguiente": "butterfree"
  },
  "weedle": {
    "aNivel": 7,
    "siguiente": "kakuna"
  },
  "kakuna": {
    "aNivel": 10,
    "siguiente": "beedrill"
  },
  "pidgey": {
    "aNivel": 18,
    "siguiente": "pidgeotto"
  },
  "pidgeotto": {
    "aNivel": 36,
    "siguiente": "pidgeot"
  },
  "rattata": {
    "aNivel": 20,
    "siguiente": "raticate"
  },
  "spearow": {
    "aNivel": 20,
    "siguiente": "fearow"
  },
  "ekans": {
    "aNivel": 22,
    "siguiente": "arbok"
  },
  "sandshrew": {
    "aNivel": 22,
    "siguiente": "sandslash"
  },
  "vulpix": {
    "aNivel": 30,
    "siguiente": "ninetales"
  },
  "zubat": {
    "aNivel": 22,
    "siguiente": "golbat"
  },
  "golbat": {
    "aNivel": 30,
    "siguiente": "crobat"
  },
  "oddish": {
    "aNivel": 21,
    "siguiente": "gloom"
  },
  "gloom": {
    "aNivel": 30,
    "siguiente": "vileplume"
  },
  "paras": {
    "aNivel": 24,
    "siguiente": "parasect"
  },
  "diglett": {
    "aNivel": 26,
    "siguiente": "dugtrio"
  },
  "meowth": {
    "aNivel": 28,
    "siguiente": "persian"
  },
  "psyduck": {
    "aNivel": 33,
    "siguiente": "golduck"
  },
  "mankey": {
    "aNivel": 28,
    "siguiente": "primeape"
  },
  "primeape": {
    "aNivel": 30,
    "siguiente": "annihilape"
  },
  "growlithe": {
    "aNivel": 30,
    "siguiente": "arcanine"
  },
  "poliwag": {
    "aNivel": 25,
    "siguiente": "poliwhirl"
  },
  "poliwhirl": {
    "aNivel": 30,
    "siguiente": "poliwrath"
  },
  "abra": {
    "aNivel": 16,
    "siguiente": "kadabra"
  },
  "kadabra": {
    "aNivel": 30,
    "siguiente": "alakazam"
  },
  "machop": {
    "aNivel": 28,
    "siguiente": "machoke"
  },
  "machoke": {
    "aNivel": 30,
    "siguiente": "machamp"
  },
  "bellsprout": {
    "aNivel": 21,
    "siguiente": "weepinbell"
  },
  "weepinbell": {
    "aNivel": 30,
    "siguiente": "victreebel"
  },
  "tentacool": {
    "aNivel": 30,
    "siguiente": "tentacruel"
  },
  "geodude": {
    "aNivel": 25,
    "siguiente": "graveler"
  },
  "graveler": {
    "aNivel": 30,
    "siguiente": "golem"
  },
  "ponyta": {
    "aNivel": 40,
    "siguiente": "rapidash"
  },
  "slowpoke": {
    "aNivel": 37,
    "siguiente": "slowbro"
  },
  "magnemite": {
    "aNivel": 30,
    "siguiente": "magneton"
  },
  "magneton": {
    "aNivel": 30,
    "siguiente": "magnezone"
  },
  "gastly": {
    "aNivel": 25,
    "siguiente": "haunter"
  },
  "haunter": {
    "aNivel": 30,
    "siguiente": "gengar"
  },
  "onix": {
    "aNivel": 30,
    "siguiente": "steelix"
  },
  "cubone": {
    "aNivel": 28,
    "siguiente": "marowak"
  },
  "nidoran-f": {
    "aNivel": 16,
    "siguiente": "nidorina"
  },
  "nidorina": {
    "aNivel": 30,
    "siguiente": "nidoqueen"
  },
  "nidoran-m": {
    "aNivel": 16,
    "siguiente": "nidorino"
  },
  "nidorino": {
    "aNivel": 30,
    "siguiente": "nidoking"
  }
};

// Formas base elegibles como inicial y como rival.
const INICIALES = ["charmander","squirtle","bulbasaur","pikachu","caterpie","weedle","pidgey","rattata","spearow","ekans","sandshrew","vulpix","zubat","oddish","paras","diglett","meowth","psyduck","mankey","growlithe","poliwag","abra","machop","bellsprout","tentacool","geodude","ponyta","slowpoke","magnemite","gastly","onix","cubone","nidoran-f","nidoran-m"];

// Ataques que aprende por tipo (pool). El golpe inicial es flojo.
const MOVES_TIPO = {"fuego":[["Ascuas",12],["Giro Fuego",15],["Lanzallamas",20]],"agua":[["Pistola Agua",12],["Burbuja",15],["Hidrobomba",20]],"planta":[["Latigo Cepa",12],["Hoja Afilada",15],["Rayo Solar",20]],"electrico":[["Impactrueno",13],["Chispa",16],["Rayo",21]],"normal":[["Placaje",8],["Golpe Cuerpo",12],["Hiperrayo",18]]};
const GOLPE_INI = {"n":"Arañazo","t":"normal","d":6};

const KEY = "pokerogue_best";
const PS_POR_NIVEL = 8;
const CURA_POR_NIVEL = 4;

const COLOR_TIPO = {
  fuego: "#ff8a5c", agua: "#7cc3ff", planta: "#7fe39a",
  electrico: "#ffe066", normal: "#cfd3da",
};

function poolDe(tipo) {
  return MOVES_TIPO[tipo].map(([n, d]) => ({ n, t: tipo, d }));
}

function flash(lado, tipo) {
  const el = document.querySelector(".fighter." + lado);
  if (!el) return;
  el.style.setProperty("--flash", COLOR_TIPO[tipo] || "#fff");
  el.classList.remove("hit");
  void el.offsetWidth;
  el.classList.add("hit");
}

function mov_html(nombre, tipo) {
  return `<span class="t-${tipo}">${nombre}</span>`;
}

let me = null, foe = null, round = 1, streak = 0, nuevosAprendidos = 0;

const $ = (id) => document.getElementById(id);
const startPanel = $("start");
const arena = $("arena");
const overPanel = $("over");

function init() {
  $("best").textContent = localStorage.getItem(KEY) || 0;
  const box = $("starters");
  box.innerHTML = "";
  // Muestra los 4 iniciales clasicos primero como destacados, pero deja elegir entre todos.
  const clasicos = ["charmander", "squirtle", "bulbasaur", "pikachu"];
  clasicos.forEach((k) => box.appendChild(tarjeta(k)));
}

function tarjeta(key) {
  const p = FORMAS[key];
  const el = document.createElement("div");
  el.className = "card";
  el.innerHTML =
    `<img class="sprite" src="${p.sprite}" alt="${p.name}" loading="lazy" />` +
    `<div class="name">${p.name}</div>` +
    `<div class="type t-${p.type}">${p.type}</div>`;
  el.addEventListener("click", () => empezar(key));
  return el;
}

function nuevoLuchador(key, nivel) {
  const f = FORMAS[key];
  const maxHp = f.hp + (nivel - 1) * PS_POR_NIVEL;
  return {
    key, name: f.name, sprite: f.sprite, type: f.type,
    hp: maxHp, maxHp, level: nivel,
    moves: [{ ...GOLPE_INI }],
    pool: poolDe(f.type),
  };
}

function empezar(key) {
  me = nuevoLuchador(key, 5);
  nuevosAprendidos = 0;
  round = 1;
  streak = 0;
  startPanel.classList.add("hidden");
  overPanel.classList.add("hidden");
  arena.classList.remove("hidden");
  nuevaRonda();
}

function rivalAleatorio() {
  const key = INICIALES[Math.floor(Math.random() * INICIALES.length)];
  const f = FORMAS[key];
  const extra = Math.floor((round - 1) * CURA_POR_NIVEL);
  const base = poolDe(f.type)[0];
  return {
    name: f.name, sprite: f.sprite, type: f.type,
    hp: f.hp + extra, maxHp: f.hp + extra,
    moves: [{ n: base.n, t: f.type, d: Math.floor(8 + (round - 1) * 1.5) }],
  };
}

function nuevaRonda() {
  foe = rivalAleatorio();
  me.hp = me.maxHp;
  $("round").textContent = round;
  $("streak").textContent = streak;
  log(`\u00a1Un ${foe.name} salvaje aparece!`);
  pintar();
  pintarMoves(true);
}

function pintar() {
  $("meEmoji").innerHTML = `<img class="sprite" src="${me.sprite}" alt="${me.name}" />`;
  $("meName").textContent = me.name;
  $("meType").textContent = me.type;
  $("meType").className = "type t-" + me.type;
  $("meLvl").textContent = "Nivel " + me.level;
  $("foeEmoji").innerHTML = `<img class="sprite" src="${foe.sprite}" alt="${foe.name}" />`;
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
    b.textContent = m.n;
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
  // Aprende ataque nuevo si queda pool y tiene menos de 4.
  if (me.moves.length < 4 && nuevosAprendidos < me.pool.length) {
    const nuevo = me.pool[nuevosAprendidos];
    me.moves.push({ ...nuevo });
    nuevosAprendidos++;
    txt += ` Aprende ${nuevo.n}.`;
  }
  // Evolucion por nivel.
  const evo = EVO[me.key];
  if (evo && me.level >= evo.aNivel) {
    const antes = me.name;
    const f = FORMAS[evo.siguiente];
    me.key = evo.siguiente;
    me.name = f.name;
    me.sprite = f.sprite;
    me.type = f.type;
    me.maxHp += 14; // salto de PS al evolucionar
    txt += ` \u00a1${antes} evoluciona a ${f.name}!`;
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
