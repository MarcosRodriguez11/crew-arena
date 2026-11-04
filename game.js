// PokeLike - datos reales de PokeAPI: sprites, evolucion por nivel y movimientos por nivel.
// Generado: 34 lineas evolutivas, 86 formas.

const VENTAJA = {"normal":{"normal":1,"fuego":1,"agua":1,"planta":1,"electrico":1,"hielo":1,"lucha":1,"veneno":1,"tierra":1,"volador":1,"psiquico":1,"bicho":1,"roca":0.5,"fantasma":0,"dragon":1,"siniestro":1,"acero":0.5,"hada":1},"fuego":{"normal":1,"fuego":0.5,"agua":0.5,"planta":2,"electrico":1,"hielo":2,"lucha":1,"veneno":1,"tierra":1,"volador":1,"psiquico":1,"bicho":2,"roca":0.5,"fantasma":1,"dragon":0.5,"siniestro":1,"acero":2,"hada":1},"agua":{"normal":1,"fuego":2,"agua":0.5,"planta":0.5,"electrico":1,"hielo":1,"lucha":1,"veneno":1,"tierra":2,"volador":1,"psiquico":1,"bicho":1,"roca":2,"fantasma":1,"dragon":0.5,"siniestro":1,"acero":1,"hada":1},"planta":{"normal":1,"fuego":0.5,"agua":2,"planta":0.5,"electrico":1,"hielo":1,"lucha":1,"veneno":0.5,"tierra":2,"volador":0.5,"psiquico":1,"bicho":0.5,"roca":2,"fantasma":1,"dragon":0.5,"siniestro":1,"acero":0.5,"hada":1},"electrico":{"normal":1,"fuego":1,"agua":2,"planta":0.5,"electrico":0.5,"hielo":1,"lucha":1,"veneno":1,"tierra":0,"volador":2,"psiquico":1,"bicho":1,"roca":1,"fantasma":1,"dragon":0.5,"siniestro":1,"acero":1,"hada":1},"hielo":{"normal":1,"fuego":0.5,"agua":0.5,"planta":2,"electrico":1,"hielo":0.5,"lucha":1,"veneno":1,"tierra":2,"volador":2,"psiquico":1,"bicho":1,"roca":1,"fantasma":1,"dragon":2,"siniestro":1,"acero":0.5,"hada":1},"lucha":{"normal":2,"fuego":1,"agua":1,"planta":1,"electrico":1,"hielo":2,"lucha":1,"veneno":0.5,"tierra":1,"volador":0.5,"psiquico":0.5,"bicho":0.5,"roca":2,"fantasma":0,"dragon":1,"siniestro":2,"acero":2,"hada":0.5},"veneno":{"normal":1,"fuego":1,"agua":1,"planta":2,"electrico":1,"hielo":1,"lucha":1,"veneno":0.5,"tierra":0.5,"volador":1,"psiquico":1,"bicho":1,"roca":0.5,"fantasma":0.5,"dragon":1,"siniestro":1,"acero":0,"hada":2},"tierra":{"normal":1,"fuego":2,"agua":1,"planta":0.5,"electrico":2,"hielo":1,"lucha":1,"veneno":2,"tierra":1,"volador":0,"psiquico":1,"bicho":0.5,"roca":2,"fantasma":1,"dragon":1,"siniestro":1,"acero":2,"hada":1},"volador":{"normal":1,"fuego":1,"agua":1,"planta":2,"electrico":0.5,"hielo":1,"lucha":2,"veneno":1,"tierra":1,"volador":1,"psiquico":1,"bicho":2,"roca":0.5,"fantasma":1,"dragon":1,"siniestro":1,"acero":0.5,"hada":1},"psiquico":{"normal":1,"fuego":1,"agua":1,"planta":1,"electrico":1,"hielo":1,"lucha":2,"veneno":2,"tierra":1,"volador":1,"psiquico":0.5,"bicho":1,"roca":1,"fantasma":1,"dragon":1,"siniestro":0,"acero":0.5,"hada":1},"bicho":{"normal":1,"fuego":0.5,"agua":1,"planta":2,"electrico":1,"hielo":1,"lucha":0.5,"veneno":0.5,"tierra":1,"volador":0.5,"psiquico":2,"bicho":1,"roca":1,"fantasma":0.5,"dragon":1,"siniestro":2,"acero":0.5,"hada":0.5},"roca":{"normal":1,"fuego":2,"agua":1,"planta":1,"electrico":1,"hielo":2,"lucha":0.5,"veneno":1,"tierra":0.5,"volador":2,"psiquico":1,"bicho":2,"roca":1,"fantasma":1,"dragon":1,"siniestro":1,"acero":0.5,"hada":1},"fantasma":{"normal":0,"fuego":1,"agua":1,"planta":1,"electrico":1,"hielo":1,"lucha":1,"veneno":1,"tierra":1,"volador":1,"psiquico":2,"bicho":1,"roca":1,"fantasma":2,"dragon":1,"siniestro":0.5,"acero":1,"hada":1},"dragon":{"normal":1,"fuego":1,"agua":1,"planta":1,"electrico":1,"hielo":1,"lucha":1,"veneno":1,"tierra":1,"volador":1,"psiquico":1,"bicho":1,"roca":1,"fantasma":1,"dragon":2,"siniestro":1,"acero":0.5,"hada":0},"siniestro":{"normal":1,"fuego":1,"agua":1,"planta":1,"electrico":1,"hielo":1,"lucha":0.5,"veneno":1,"tierra":1,"volador":1,"psiquico":2,"bicho":1,"roca":1,"fantasma":2,"dragon":1,"siniestro":0.5,"acero":1,"hada":0.5},"acero":{"normal":1,"fuego":0.5,"agua":0.5,"planta":1,"electrico":0.5,"hielo":2,"lucha":1,"veneno":1,"tierra":1,"volador":1,"psiquico":1,"bicho":1,"roca":2,"fantasma":1,"dragon":1,"siniestro":1,"acero":0.5,"hada":2},"hada":{"normal":1,"fuego":0.5,"agua":1,"planta":1,"electrico":1,"hielo":1,"lucha":2,"veneno":0.5,"tierra":1,"volador":1,"psiquico":1,"bicho":1,"roca":1,"fantasma":1,"dragon":2,"siniestro":2,"acero":0.5,"hada":1}};

// Cada forma: sprite real, tipo, hp y learnset (movimientos por nivel, reales de PokeAPI).
const FORMAS = {
 "charmander": {
  "name": "Charmander",
  "id": 4,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  "type": "fuego",
  "typeReal": "fuego",
  "hp": 31,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Ascuas",
    "t": "fuego",
    "d": 11,
    "lvl": 4
   },
   {
    "n": "Dragoaliento",
    "t": "dragon",
    "d": 17,
    "lvl": 12
   },
   {
    "n": "Garra Metal",
    "t": "acero",
    "d": 14,
    "lvl": 13
   }
  ]
 },
 "charmeleon": {
  "name": "Charmeleon",
  "id": 5,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  "type": "fuego",
  "typeReal": "fuego",
  "hp": 43,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Ascuas",
    "t": "fuego",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Dragoaliento",
    "t": "dragon",
    "d": 17,
    "lvl": 12
   },
   {
    "n": "Garra Metal",
    "t": "acero",
    "d": 14,
    "lvl": 13
   }
  ]
 },
 "charizard": {
  "name": "Charizard",
  "id": 6,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  "type": "fuego",
  "typeReal": "fuego · volador",
  "hp": 55,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Ataque Ala",
    "t": "volador",
    "d": 17,
    "lvl": 1
   },
   {
    "n": "Ascuas",
    "t": "fuego",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Garra Metal",
    "t": "acero",
    "d": 14,
    "lvl": 1
   }
  ]
 },
 "squirtle": {
  "name": "Squirtle",
  "id": 7,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  "type": "agua",
  "typeReal": "agua",
  "hp": 34,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 11,
    "lvl": 3
   },
   {
    "n": "Burbuja",
    "t": "agua",
    "d": 11,
    "lvl": 7
   },
   {
    "n": "Giro Rapido",
    "t": "agua",
    "d": 14,
    "lvl": 9
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 17,
    "lvl": 12
   },
   {
    "n": "Hidropulso",
    "t": "agua",
    "d": 17,
    "lvl": 15
   }
  ]
 },
 "wartortle": {
  "name": "Wartortle",
  "id": 8,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  "type": "agua",
  "typeReal": "agua",
  "hp": 43,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Burbuja",
    "t": "agua",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Giro Rapido",
    "t": "agua",
    "d": 14,
    "lvl": 9
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 17,
    "lvl": 12
   },
   {
    "n": "Hidropulso",
    "t": "agua",
    "d": 17,
    "lvl": 15
   }
  ]
 },
 "blastoise": {
  "name": "Blastoise",
  "id": 9,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
  "type": "agua",
  "typeReal": "agua",
  "hp": 55,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Burbuja",
    "t": "agua",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Fake Out",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Foco Resplandor",
    "t": "acero",
    "d": 23,
    "lvl": 1
   },
   {
    "n": "Acua Jet",
    "t": "agua",
    "d": 11,
    "lvl": 1
   }
  ]
 },
 "bulbasaur": {
  "name": "Bulbasaur",
  "id": 1,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  "type": "planta",
  "typeReal": "planta · veneno",
  "hp": 35,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Latigo Cepa",
    "t": "planta",
    "d": 13,
    "lvl": 3
   },
   {
    "n": "Hoja Afilada",
    "t": "planta",
    "d": 16,
    "lvl": 12
   }
  ]
 },
 "ivysaur": {
  "name": "Ivysaur",
  "id": 2,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  "type": "planta",
  "typeReal": "planta · veneno",
  "hp": 44,
  "learnset": [
   {
    "n": "Latigo Cepa",
    "t": "planta",
    "d": 13,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Hoja Afilada",
    "t": "planta",
    "d": 16,
    "lvl": 12
   }
  ]
 },
 "venusaur": {
  "name": "Venusaur",
  "id": 3,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  "type": "planta",
  "typeReal": "planta · veneno",
  "hp": 56,
  "learnset": [
   {
    "n": "Latigo Cepa",
    "t": "planta",
    "d": 13,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Danza Petalo",
    "t": "planta",
    "d": 34,
    "lvl": 1
   },
   {
    "n": "Latigo Ígneo",
    "t": "fuego",
    "d": 34,
    "lvl": 1
   }
  ]
 },
 "pikachu": {
  "name": "Pikachu",
  "id": 25,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  "type": "electrico",
  "typeReal": "electrico",
  "hp": 29,
  "learnset": [
   {
    "n": "Impactrueno",
    "t": "electrico",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Ataque Rapido",
    "t": "normal",
    "d": 11,
    "lvl": 1
   }
  ]
 },
 "raichu": {
  "name": "Raichu",
  "id": 26,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
  "type": "electrico",
  "typeReal": "electrico",
  "hp": 44,
  "learnset": [
   {
    "n": "Puño Trueno",
    "t": "electrico",
    "d": 21,
    "lvl": 1
   },
   {
    "n": "Atizar",
    "t": "normal",
    "d": 23,
    "lvl": 1
   },
   {
    "n": "Impactrueno",
    "t": "electrico",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Rayo",
    "t": "electrico",
    "d": 26,
    "lvl": 1
   },
   {
    "n": "Trueno",
    "t": "electrico",
    "d": 31,
    "lvl": 1
   }
  ]
 },
 "caterpie": {
  "name": "Caterpie",
  "id": 10,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
  "type": "bicho",
  "typeReal": "bicho",
  "hp": 35,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Picadura",
    "t": "bicho",
    "d": 17,
    "lvl": 9
   }
  ]
 },
 "metapod": {
  "name": "Metapod",
  "id": 11,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
  "type": "bicho",
  "typeReal": "bicho",
  "hp": 38,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 10,
    "lvl": 1
   }
  ]
 },
 "butterfree": {
  "name": "Butterfree",
  "id": 12,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
  "type": "bicho",
  "typeReal": "bicho · volador",
  "hp": 44,
  "learnset": [
   {
    "n": "Tornado",
    "t": "volador",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Confusion",
    "t": "psiquico",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Picadura",
    "t": "bicho",
    "d": 17,
    "lvl": 1
   }
  ]
 },
 "weedle": {
  "name": "Weedle",
  "id": 13,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
  "type": "bicho",
  "typeReal": "bicho · veneno",
  "hp": 32,
  "learnset": [
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Picadura",
    "t": "bicho",
    "d": 17,
    "lvl": 9
   }
  ]
 },
 "kakuna": {
  "name": "Kakuna",
  "id": 14,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
  "type": "bicho",
  "typeReal": "bicho · veneno",
  "hp": 35,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 10,
    "lvl": 1
   }
  ]
 },
 "beedrill": {
  "name": "Beedrill",
  "id": 15,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
  "type": "bicho",
  "typeReal": "bicho · veneno",
  "hp": 47,
  "learnset": [
   {
    "n": "Ataque Furia",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Doble Ataque",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Picotazo",
    "t": "volador",
    "d": 10,
    "lvl": 1
   },
   {
    "n": "Picadura",
    "t": "bicho",
    "d": 17,
    "lvl": 1
   },
   {
    "n": "Fury Cutter",
    "t": "bicho",
    "d": 11,
    "lvl": 11
   }
  ]
 },
 "pidgey": {
  "name": "Pidgey",
  "id": 16,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
  "type": "normal",
  "typeReal": "normal · volador",
  "hp": 32,
  "learnset": [
   {
    "n": "Tornado",
    "t": "volador",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Ataque Rapido",
    "t": "normal",
    "d": 11,
    "lvl": 11
   },
   {
    "n": "Ataque Ala",
    "t": "volador",
    "d": 17,
    "lvl": 15
   }
  ]
 },
 "pidgeotto": {
  "name": "Pidgeotto",
  "id": 17,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
  "type": "normal",
  "typeReal": "normal · volador",
  "hp": 46,
  "learnset": [
   {
    "n": "Tornado",
    "t": "volador",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Ataque Rapido",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Ataque Ala",
    "t": "volador",
    "d": 17,
    "lvl": 15
   }
  ]
 },
 "pidgeot": {
  "name": "Pidgeot",
  "id": 18,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
  "type": "normal",
  "typeReal": "normal · volador",
  "hp": 58,
  "learnset": [
   {
    "n": "Tornado",
    "t": "volador",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Ataque Rapido",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Ataque Aereo",
    "t": "volador",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Onda Igníea",
    "t": "fuego",
    "d": 27,
    "lvl": 1
   },
   {
    "n": "Vendaval",
    "t": "volador",
    "d": 31,
    "lvl": 1
   }
  ]
 },
 "rattata": {
  "name": "Rattata",
  "id": 19,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
  "type": "normal",
  "typeReal": "normal",
  "hp": 26,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Ataque Rapido",
    "t": "normal",
    "d": 11,
    "lvl": 4
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 17,
    "lvl": 10
   },
   {
    "n": "Hipercolmillo",
    "t": "normal",
    "d": 23,
    "lvl": 13
   },
   {
    "n": "Pursuit",
    "t": "siniestro",
    "d": 11,
    "lvl": 13
   }
  ]
 },
 "raticate": {
  "name": "Raticate",
  "id": 20,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
  "type": "normal",
  "typeReal": "normal",
  "hp": 41,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Ataque Rapido",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Garra Furia",
    "t": "normal",
    "d": 8,
    "lvl": 1
   }
  ]
 },
 "spearow": {
  "name": "Spearow",
  "id": 21,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
  "type": "normal",
  "typeReal": "normal · volador",
  "hp": 32,
  "learnset": [
   {
    "n": "Picotazo",
    "t": "volador",
    "d": 10,
    "lvl": 1
   },
   {
    "n": "Pursuit",
    "t": "siniestro",
    "d": 11,
    "lvl": 8
   },
   {
    "n": "Assurance",
    "t": "siniestro",
    "d": 17,
    "lvl": 8
   },
   {
    "n": "Ataque Furia",
    "t": "normal",
    "d": 8,
    "lvl": 9
   },
   {
    "n": "Golpe Aereo",
    "t": "volador",
    "d": 17,
    "lvl": 15
   }
  ]
 },
 "fearow": {
  "name": "Fearow",
  "id": 22,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
  "type": "normal",
  "typeReal": "normal · volador",
  "hp": 47,
  "learnset": [
   {
    "n": "Ataque Furia",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Picotazo",
    "t": "volador",
    "d": 10,
    "lvl": 1
   },
   {
    "n": "Ataque Rapido",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Ataque Aereo",
    "t": "volador",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Pursuit",
    "t": "siniestro",
    "d": 11,
    "lvl": 1
   }
  ]
 },
 "ekans": {
  "name": "Ekans",
  "id": 23,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
  "type": "veneno",
  "typeReal": "veneno",
  "hp": 29,
  "learnset": [
   {
    "n": "Constriccion",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Acido",
    "t": "veneno",
    "d": 11,
    "lvl": 8
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 17,
    "lvl": 9
   }
  ]
 },
 "arbok": {
  "name": "Arbok",
  "id": 24,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
  "type": "veneno",
  "typeReal": "veneno",
  "hp": 44,
  "learnset": [
   {
    "n": "Constriccion",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 17,
    "lvl": 1
   },
   {
    "n": "Acido",
    "t": "veneno",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Triturar",
    "t": "siniestro",
    "d": 23,
    "lvl": 1
   },
   {
    "n": "Sucker Punch",
    "t": "siniestro",
    "d": 20,
    "lvl": 1
   }
  ]
 },
 "sandshrew": {
  "name": "Sandshrew",
  "id": 27,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
  "type": "tierra",
  "typeReal": "tierra",
  "hp": 38,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 3
   },
   {
    "n": "Rodar",
    "t": "roca",
    "d": 9,
    "lvl": 7
   },
   {
    "n": "Giro Rapido",
    "t": "tierra",
    "d": 14,
    "lvl": 9
   },
   {
    "n": "Ataque Rapido",
    "t": "normal",
    "d": 17,
    "lvl": 11
   },
   {
    "n": "Fury Cutter",
    "t": "bicho",
    "d": 11,
    "lvl": 11
   }
  ]
 },
 "sandslash": {
  "name": "Sandslash",
  "id": 28,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
  "type": "tierra",
  "typeReal": "tierra",
  "hp": 53,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Garra Brutal",
    "t": "normal",
    "d": 21,
    "lvl": 1
   },
   {
    "n": "Rodar",
    "t": "roca",
    "d": 9,
    "lvl": 7
   }
  ]
 },
 "vulpix": {
  "name": "Vulpix",
  "id": 37,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
  "type": "fuego",
  "typeReal": "fuego",
  "hp": 31,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Ascuas",
    "t": "fuego",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Ataque Rapido",
    "t": "normal",
    "d": 11,
    "lvl": 5
   }
  ]
 },
 "ninetales": {
  "name": "Ninetales",
  "id": 38,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
  "type": "fuego",
  "typeReal": "fuego",
  "hp": 52,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Ascuas",
    "t": "fuego",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Lanzallamas",
    "t": "fuego",
    "d": 26,
    "lvl": 1
   },
   {
    "n": "Giro Fuego",
    "t": "fuego",
    "d": 10,
    "lvl": 1
   }
  ]
 },
 "zubat": {
  "name": "Zubat",
  "id": 41,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
  "type": "veneno",
  "typeReal": "veneno · volador",
  "hp": 32,
  "learnset": [
   {
    "n": "Tornado",
    "t": "volador",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Absorber",
    "t": "planta",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Chupavidas",
    "t": "bicho",
    "d": 23,
    "lvl": 1
   },
   {
    "n": "Ataque Ala",
    "t": "volador",
    "d": 17,
    "lvl": 4
   },
   {
    "n": "Astonish",
    "t": "fantasma",
    "d": 9,
    "lvl": 5
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 17,
    "lvl": 9
   }
  ]
 },
 "golbat": {
  "name": "Golbat",
  "id": 42,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
  "type": "veneno",
  "typeReal": "veneno · volador",
  "hp": 53,
  "learnset": [
   {
    "n": "Tornado",
    "t": "volador",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Ataque Ala",
    "t": "volador",
    "d": 17,
    "lvl": 1
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 17,
    "lvl": 1
   },
   {
    "n": "Absorber",
    "t": "planta",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Ataque Rapido",
    "t": "normal",
    "d": 11,
    "lvl": 1
   }
  ]
 },
 "crobat": {
  "name": "Crobat",
  "id": 169,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
  "type": "veneno",
  "typeReal": "veneno · volador",
  "hp": 59,
  "learnset": [
   {
    "n": "Tornado",
    "t": "volador",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 17,
    "lvl": 1
   },
   {
    "n": "Absorber",
    "t": "planta",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Chupavidas",
    "t": "bicho",
    "d": 23,
    "lvl": 1
   }
  ]
 },
 "oddish": {
  "name": "Oddish",
  "id": 43,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
  "type": "planta",
  "typeReal": "planta · veneno",
  "hp": 35,
  "learnset": [
   {
    "n": "Absorber",
    "t": "planta",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Acido",
    "t": "veneno",
    "d": 11,
    "lvl": 4
   },
   {
    "n": "Megaagotar",
    "t": "planta",
    "d": 11,
    "lvl": 12
   }
  ]
 },
 "gloom": {
  "name": "Gloom",
  "id": 44,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
  "type": "planta",
  "typeReal": "planta · veneno",
  "hp": 44,
  "learnset": [
   {
    "n": "Acido",
    "t": "veneno",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Absorber",
    "t": "planta",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Megaagotar",
    "t": "planta",
    "d": 11,
    "lvl": 12
   }
  ]
 },
 "vileplume": {
  "name": "Vileplume",
  "id": 45,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
  "type": "planta",
  "typeReal": "planta · veneno",
  "hp": 53,
  "learnset": [
   {
    "n": "Acido",
    "t": "veneno",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Absorber",
    "t": "planta",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Megaagotar",
    "t": "planta",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Rayo Solar",
    "t": "planta",
    "d": 34,
    "lvl": 1
   }
  ]
 },
 "paras": {
  "name": "Paras",
  "id": 46,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
  "type": "bicho",
  "typeReal": "bicho · planta",
  "hp": 29,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Absorber",
    "t": "planta",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Chupavidas",
    "t": "bicho",
    "d": 23,
    "lvl": 11
   },
   {
    "n": "Garra Furia",
    "t": "normal",
    "d": 8,
    "lvl": 15
   }
  ]
 },
 "parasect": {
  "name": "Parasect",
  "id": 47,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
  "type": "bicho",
  "typeReal": "bicho · planta",
  "hp": 44,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Absorber",
    "t": "planta",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Chupavidas",
    "t": "bicho",
    "d": 23,
    "lvl": 1
   }
  ]
 },
 "diglett": {
  "name": "Diglett",
  "id": 50,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
  "type": "tierra",
  "typeReal": "tierra",
  "hp": 14,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Astonish",
    "t": "fantasma",
    "d": 9,
    "lvl": 7
   },
   {
    "n": "Mud Slap",
    "t": "tierra",
    "d": 8,
    "lvl": 10
   },
   {
    "n": "Garra Furia",
    "t": "normal",
    "d": 8,
    "lvl": 15
   }
  ]
 },
 "dugtrio": {
  "name": "Dugtrio",
  "id": 51,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
  "type": "tierra",
  "typeReal": "tierra",
  "hp": 29,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Excavar",
    "t": "tierra",
    "d": 23,
    "lvl": 1
   },
   {
    "n": "Tri Attack",
    "t": "normal",
    "d": 23,
    "lvl": 1
   }
  ]
 },
 "meowth": {
  "name": "Meowth",
  "id": 52,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
  "type": "normal",
  "typeReal": "normal",
  "hp": 32,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 17,
    "lvl": 1
   },
   {
    "n": "Fake Out",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Feint",
    "t": "normal",
    "d": 9,
    "lvl": 4
   },
   {
    "n": "Pay Day",
    "t": "normal",
    "d": 11,
    "lvl": 12
   },
   {
    "n": "Garra Furia",
    "t": "normal",
    "d": 8,
    "lvl": 14
   }
  ]
 },
 "persian": {
  "name": "Persian",
  "id": 53,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
  "type": "normal",
  "typeReal": "normal",
  "hp": 47,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 17,
    "lvl": 1
   },
   {
    "n": "Ataque Rapido",
    "t": "normal",
    "d": 17,
    "lvl": 1
   },
   {
    "n": "Fake Out",
    "t": "normal",
    "d": 11,
    "lvl": 1
   }
  ]
 },
 "psyduck": {
  "name": "Psyduck",
  "id": 54,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
  "type": "agua",
  "typeReal": "agua",
  "hp": 38,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Burbuja",
    "t": "agua",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 11,
    "lvl": 3
   },
   {
    "n": "Confusion",
    "t": "psiquico",
    "d": 14,
    "lvl": 6
   },
   {
    "n": "Garra Furia",
    "t": "normal",
    "d": 8,
    "lvl": 9
   }
  ]
 },
 "golduck": {
  "name": "Golduck",
  "id": 55,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
  "type": "agua",
  "typeReal": "agua",
  "hp": 56,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Confusion",
    "t": "psiquico",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Burbuja",
    "t": "agua",
    "d": 11,
    "lvl": 1
   }
  ]
 },
 "mankey": {
  "name": "Mankey",
  "id": 56,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
  "type": "lucha",
  "typeReal": "lucha",
  "hp": 32,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Covet",
    "t": "normal",
    "d": 17,
    "lvl": 1
   },
   {
    "n": "Garra Furia",
    "t": "normal",
    "d": 8,
    "lvl": 5
   },
   {
    "n": "Golpe Karate",
    "t": "lucha",
    "d": 14,
    "lvl": 8
   },
   {
    "n": "Mud Slap",
    "t": "tierra",
    "d": 8,
    "lvl": 8
   }
  ]
 },
 "primeape": {
  "name": "Primeape",
  "id": 57,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
  "type": "lucha",
  "typeReal": "lucha",
  "hp": 47,
  "learnset": [
   {
    "n": "Golpe Karate",
    "t": "lucha",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Rage",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Garra Furia",
    "t": "normal",
    "d": 8,
    "lvl": 1
   }
  ]
 },
 "annihilape": {
  "name": "Annihilape",
  "id": 979,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/979.png",
  "type": "lucha",
  "typeReal": "lucha · fantasma",
  "hp": 74,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Garra Furia",
    "t": "normal",
    "d": 8,
    "lvl": 5
   }
  ]
 },
 "growlithe": {
  "name": "Growlithe",
  "id": 58,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
  "type": "fuego",
  "typeReal": "fuego",
  "hp": 41,
  "learnset": [
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 17,
    "lvl": 1
   },
   {
    "n": "Ascuas",
    "t": "fuego",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Rueda Fuego",
    "t": "fuego",
    "d": 17,
    "lvl": 12
   }
  ]
 },
 "arcanine": {
  "name": "Arcanine",
  "id": 59,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
  "type": "fuego",
  "typeReal": "fuego",
  "hp": 62,
  "learnset": [
   {
    "n": "Derribo",
    "t": "normal",
    "d": 26,
    "lvl": 1
   },
   {
    "n": "Doble Filo",
    "t": "normal",
    "d": 34,
    "lvl": 1
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 17,
    "lvl": 1
   },
   {
    "n": "Ascuas",
    "t": "fuego",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Lanzallamas",
    "t": "fuego",
    "d": 26,
    "lvl": 1
   }
  ]
 },
 "poliwag": {
  "name": "Poliwag",
  "id": 60,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
  "type": "agua",
  "typeReal": "agua",
  "hp": 32,
  "learnset": [
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Burbuja",
    "t": "agua",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Destructor",
    "t": "normal",
    "d": 11,
    "lvl": 4
   },
   {
    "n": "Disparo Lodo",
    "t": "tierra",
    "d": 16,
    "lvl": 12
   },
   {
    "n": "Double Slap",
    "t": "normal",
    "d": 8,
    "lvl": 15
   },
   {
    "n": "Rayo Burbuja",
    "t": "agua",
    "d": 19,
    "lvl": 18
   }
  ]
 },
 "poliwhirl": {
  "name": "Poliwhirl",
  "id": 61,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
  "type": "agua",
  "typeReal": "agua",
  "hp": 47,
  "learnset": [
   {
    "n": "Destructor",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Burbuja",
    "t": "agua",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Disparo Lodo",
    "t": "tierra",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Double Slap",
    "t": "normal",
    "d": 8,
    "lvl": 15
   },
   {
    "n": "Rayo Burbuja",
    "t": "agua",
    "d": 19,
    "lvl": 18
   }
  ]
 },
 "poliwrath": {
  "name": "Poliwrath",
  "id": 62,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
  "type": "agua",
  "typeReal": "agua · lucha",
  "hp": 62,
  "learnset": [
   {
    "n": "Destructor",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Double Slap",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Golpe Cuerpo",
    "t": "normal",
    "d": 24,
    "lvl": 1
   },
   {
    "n": "Doble Filo",
    "t": "normal",
    "d": 34,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Hidrobomba",
    "t": "agua",
    "d": 31,
    "lvl": 1
   }
  ]
 },
 "abra": {
  "name": "Abra",
  "id": 63,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
  "type": "psiquico",
  "typeReal": "psiquico",
  "hp": 23,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 10,
    "lvl": 1
   }
  ]
 },
 "kadabra": {
  "name": "Kadabra",
  "id": 64,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
  "type": "psiquico",
  "typeReal": "psiquico",
  "hp": 32,
  "learnset": [
   {
    "n": "Psicorrayo",
    "t": "psiquico",
    "d": 19,
    "lvl": 1
   },
   {
    "n": "Confusion",
    "t": "psiquico",
    "d": 14,
    "lvl": 1
   }
  ]
 },
 "alakazam": {
  "name": "Alakazam",
  "id": 65,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
  "type": "psiquico",
  "typeReal": "psiquico",
  "hp": 41,
  "learnset": [
   {
    "n": "Psicorrayo",
    "t": "psiquico",
    "d": 19,
    "lvl": 1
   },
   {
    "n": "Confusion",
    "t": "psiquico",
    "d": 14,
    "lvl": 1
   }
  ]
 },
 "machop": {
  "name": "Machop",
  "id": 66,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
  "type": "lucha",
  "typeReal": "lucha",
  "hp": 50,
  "learnset": [
   {
    "n": "Golpe Karate",
    "t": "lucha",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Golpe Roca",
    "t": "lucha",
    "d": 11,
    "lvl": 6
   },
   {
    "n": "Revenge",
    "t": "lucha",
    "d": 17,
    "lvl": 8
   }
  ]
 },
 "machoke": {
  "name": "Machoke",
  "id": 67,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
  "type": "lucha",
  "typeReal": "lucha",
  "hp": 56,
  "learnset": [
   {
    "n": "Golpe Karate",
    "t": "lucha",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Revenge",
    "t": "lucha",
    "d": 17,
    "lvl": 1
   },
   {
    "n": "Golpe Roca",
    "t": "lucha",
    "d": 11,
    "lvl": 6
   }
  ]
 },
 "machamp": {
  "name": "Machamp",
  "id": 68,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
  "type": "lucha",
  "typeReal": "lucha",
  "hp": 62,
  "learnset": [
   {
    "n": "Golpe Karate",
    "t": "lucha",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Fuerza",
    "t": "normal",
    "d": 23,
    "lvl": 1
   }
  ]
 },
 "bellsprout": {
  "name": "Bellsprout",
  "id": 69,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
  "type": "planta",
  "typeReal": "planta · veneno",
  "hp": 38,
  "learnset": [
   {
    "n": "Latigo Cepa",
    "t": "planta",
    "d": 13,
    "lvl": 1
   },
   {
    "n": "Constriccion",
    "t": "normal",
    "d": 8,
    "lvl": 8
   },
   {
    "n": "Acido",
    "t": "veneno",
    "d": 11,
    "lvl": 12
   },
   {
    "n": "Hoja Afilada",
    "t": "planta",
    "d": 16,
    "lvl": 22
   }
  ]
 },
 "weepinbell": {
  "name": "Weepinbell",
  "id": 70,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
  "type": "planta",
  "typeReal": "planta · veneno",
  "hp": 47,
  "learnset": [
   {
    "n": "Latigo Cepa",
    "t": "planta",
    "d": 13,
    "lvl": 1
   },
   {
    "n": "Constriccion",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Acido",
    "t": "veneno",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Hoja Afilada",
    "t": "planta",
    "d": 16,
    "lvl": 27
   }
  ]
 },
 "victreebel": {
  "name": "Victreebel",
  "id": 71,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
  "type": "planta",
  "typeReal": "planta · veneno",
  "hp": 56,
  "learnset": [
   {
    "n": "Atizar",
    "t": "normal",
    "d": 23,
    "lvl": 1
   },
   {
    "n": "Latigo Cepa",
    "t": "planta",
    "d": 13,
    "lvl": 1
   },
   {
    "n": "Constriccion",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Acido",
    "t": "veneno",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Hoja Afilada",
    "t": "planta",
    "d": 16,
    "lvl": 1
   }
  ]
 },
 "tentacool": {
  "name": "Tentacool",
  "id": 72,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
  "type": "agua",
  "typeReal": "agua · veneno",
  "hp": 32,
  "learnset": [
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Acido",
    "t": "veneno",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Constrict",
    "t": "normal",
    "d": 8,
    "lvl": 4
   },
   {
    "n": "Burbuja",
    "t": "agua",
    "d": 11,
    "lvl": 6
   },
   {
    "n": "Constriccion",
    "t": "normal",
    "d": 8,
    "lvl": 8
   }
  ]
 },
 "tentacruel": {
  "name": "Tentacruel",
  "id": 73,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
  "type": "agua",
  "typeReal": "agua · veneno",
  "hp": 56,
  "learnset": [
   {
    "n": "Constriccion",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Acido",
    "t": "veneno",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Constrict",
    "t": "normal",
    "d": 8,
    "lvl": 1
   }
  ]
 },
 "geodude": {
  "name": "Geodude",
  "id": 74,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
  "type": "roca",
  "typeReal": "roca · tierra",
  "hp": 32,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Rodar",
    "t": "roca",
    "d": 9,
    "lvl": 1
   }
  ]
 },
 "graveler": {
  "name": "Graveler",
  "id": 75,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
  "type": "roca",
  "typeReal": "roca · tierra",
  "hp": 41,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Lanzarrocas",
    "t": "roca",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Rodar",
    "t": "roca",
    "d": 9,
    "lvl": 1
   }
  ]
 },
 "golem": {
  "name": "Golem",
  "id": 76,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
  "type": "roca",
  "typeReal": "roca · tierra",
  "hp": 56,
  "learnset": [
   {
    "n": "Megapuño",
    "t": "normal",
    "d": 23,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Lanzarrocas",
    "t": "roca",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Rodar",
    "t": "roca",
    "d": 9,
    "lvl": 1
   }
  ]
 },
 "ponyta": {
  "name": "Ponyta",
  "id": 77,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
  "type": "fuego",
  "typeReal": "fuego",
  "hp": 38,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Ascuas",
    "t": "fuego",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Ataque Rapido",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Double Hit",
    "t": "normal",
    "d": 10,
    "lvl": 9
   },
   {
    "n": "Rueda Fuego",
    "t": "fuego",
    "d": 17,
    "lvl": 13
   },
   {
    "n": "Doble Patada",
    "t": "lucha",
    "d": 9,
    "lvl": 15
   }
  ]
 },
 "rapidash": {
  "name": "Rapidash",
  "id": 78,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
  "type": "fuego",
  "typeReal": "fuego",
  "hp": 47,
  "learnset": [
   {
    "n": "Pisoton",
    "t": "normal",
    "d": 19,
    "lvl": 1
   },
   {
    "n": "Ataque Furia",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Ascuas",
    "t": "fuego",
    "d": 11,
    "lvl": 1
   }
  ]
 },
 "slowpoke": {
  "name": "Slowpoke",
  "id": 79,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
  "type": "agua",
  "typeReal": "agua · psiquico",
  "hp": 62,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Confusion",
    "t": "psiquico",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 11,
    "lvl": 6
   },
   {
    "n": "Hidropulso",
    "t": "agua",
    "d": 17,
    "lvl": 18
   }
  ]
 },
 "slowbro": {
  "name": "Slowbro",
  "id": 80,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
  "type": "agua",
  "typeReal": "agua · psiquico",
  "hp": 65,
  "learnset": [
   {
    "n": "Pisoton",
    "t": "normal",
    "d": 19,
    "lvl": 1
   },
   {
    "n": "Golpe Cabeza",
    "t": "normal",
    "d": 20,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Confusion",
    "t": "psiquico",
    "d": 14,
    "lvl": 1
   }
  ]
 },
 "magnemite": {
  "name": "Magnemite",
  "id": 81,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
  "type": "electrico",
  "typeReal": "electrico · acero",
  "hp": 23,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Impactrueno",
    "t": "electrico",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Bomba Iman",
    "t": "acero",
    "d": 17,
    "lvl": 7
   }
  ]
 },
 "magneton": {
  "name": "Magneton",
  "id": 82,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
  "type": "electrico",
  "typeReal": "electrico · acero",
  "hp": 38,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Impactrueno",
    "t": "electrico",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Tri Attack",
    "t": "normal",
    "d": 23,
    "lvl": 1
   },
   {
    "n": "Electrocañon",
    "t": "electrico",
    "d": 34,
    "lvl": 1
   }
  ]
 },
 "magnezone": {
  "name": "Magnezone",
  "id": 462,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png",
  "type": "electrico",
  "typeReal": "electrico · acero",
  "hp": 50,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Impactrueno",
    "t": "electrico",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Tri Attack",
    "t": "normal",
    "d": 23,
    "lvl": 1
   },
   {
    "n": "Electrocañon",
    "t": "electrico",
    "d": 34,
    "lvl": 1
   }
  ]
 },
 "gastly": {
  "name": "Gastly",
  "id": 92,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
  "type": "fantasma",
  "typeReal": "fantasma · veneno",
  "hp": 26,
  "learnset": [
   {
    "n": "Lengüetazo",
    "t": "fantasma",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Polucion",
    "t": "veneno",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Astonish",
    "t": "fantasma",
    "d": 9,
    "lvl": 1
   }
  ]
 },
 "haunter": {
  "name": "Haunter",
  "id": 93,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
  "type": "fantasma",
  "typeReal": "fantasma · veneno",
  "hp": 35,
  "learnset": [
   {
    "n": "Lengüetazo",
    "t": "fantasma",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Polucion",
    "t": "veneno",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Astonish",
    "t": "fantasma",
    "d": 9,
    "lvl": 1
   }
  ]
 },
 "gengar": {
  "name": "Gengar",
  "id": 94,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
  "type": "fantasma",
  "typeReal": "fantasma · veneno",
  "hp": 44,
  "learnset": [
   {
    "n": "Lengüetazo",
    "t": "fantasma",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Polucion",
    "t": "veneno",
    "d": 9,
    "lvl": 1
   }
  ]
 },
 "onix": {
  "name": "Onix",
  "id": 95,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
  "type": "roca",
  "typeReal": "roca · tierra",
  "hp": 29,
  "learnset": [
   {
    "n": "Atadura",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Lanzarrocas",
    "t": "roca",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Rodar",
    "t": "roca",
    "d": 9,
    "lvl": 1
   }
  ]
 },
 "steelix": {
  "name": "Steelix",
  "id": 208,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
  "type": "acero",
  "typeReal": "acero · tierra",
  "hp": 53,
  "learnset": [
   {
    "n": "Atadura",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Lanzarrocas",
    "t": "roca",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Rodar",
    "t": "roca",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Triturar",
    "t": "siniestro",
    "d": 23,
    "lvl": 1
   }
  ]
 },
 "cubone": {
  "name": "Cubone",
  "id": 104,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
  "type": "tierra",
  "typeReal": "tierra",
  "hp": 38,
  "learnset": [
   {
    "n": "Bone Club",
    "t": "tierra",
    "d": 19,
    "lvl": 1
   },
   {
    "n": "Mud Slap",
    "t": "tierra",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "False Swipe",
    "t": "normal",
    "d": 11,
    "lvl": 8
   },
   {
    "n": "Golpe Cabeza",
    "t": "normal",
    "d": 20,
    "lvl": 11
   },
   {
    "n": "Retaliate",
    "t": "normal",
    "d": 20,
    "lvl": 16
   }
  ]
 },
 "marowak": {
  "name": "Marowak",
  "id": 105,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
  "type": "tierra",
  "typeReal": "tierra",
  "hp": 44,
  "learnset": [
   {
    "n": "Golpe Cabeza",
    "t": "normal",
    "d": 20,
    "lvl": 1
   },
   {
    "n": "Bone Club",
    "t": "tierra",
    "d": 19,
    "lvl": 1
   }
  ]
 },
 "nidoran-f": {
  "name": "Nidoran-f",
  "id": 29,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
  "type": "veneno",
  "typeReal": "veneno",
  "hp": 41,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Doble Patada",
    "t": "lucha",
    "d": 9,
    "lvl": 9
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 17,
    "lvl": 12
   },
   {
    "n": "Garra Furia",
    "t": "normal",
    "d": 8,
    "lvl": 15
   }
  ]
 },
 "nidorina": {
  "name": "Nidorina",
  "id": 30,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
  "type": "veneno",
  "typeReal": "veneno",
  "hp": 50,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Doble Patada",
    "t": "lucha",
    "d": 9,
    "lvl": 9
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 17,
    "lvl": 12
   },
   {
    "n": "Garra Furia",
    "t": "normal",
    "d": 8,
    "lvl": 15
   }
  ]
 },
 "nidoqueen": {
  "name": "Nidoqueen",
  "id": 31,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
  "type": "veneno",
  "typeReal": "veneno · tierra",
  "hp": 62,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Doble Patada",
    "t": "lucha",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Golpe Cuerpo",
    "t": "normal",
    "d": 24,
    "lvl": 1
   },
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 17,
    "lvl": 1
   }
  ]
 },
 "nidoran-m": {
  "name": "Nidoran-m",
  "id": 32,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
  "type": "veneno",
  "typeReal": "veneno",
  "hp": 36,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Picotazo",
    "t": "volador",
    "d": 10,
    "lvl": 1
   },
   {
    "n": "Cornada",
    "t": "normal",
    "d": 19,
    "lvl": 8
   },
   {
    "n": "Doble Patada",
    "t": "lucha",
    "d": 9,
    "lvl": 9
   },
   {
    "n": "Ataque Furia",
    "t": "normal",
    "d": 8,
    "lvl": 15
   }
  ]
 },
 "nidorino": {
  "name": "Nidorino",
  "id": 33,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
  "type": "veneno",
  "typeReal": "veneno",
  "hp": 45,
  "learnset": [
   {
    "n": "Cornada",
    "t": "normal",
    "d": 19,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Picotazo",
    "t": "volador",
    "d": 10,
    "lvl": 1
   },
   {
    "n": "Doble Patada",
    "t": "lucha",
    "d": 9,
    "lvl": 9
   },
   {
    "n": "Ataque Furia",
    "t": "normal",
    "d": 8,
    "lvl": 15
   }
  ]
 },
 "nidoking": {
  "name": "Nidoking",
  "id": 34,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
  "type": "veneno",
  "typeReal": "veneno · tierra",
  "hp": 57,
  "learnset": [
   {
    "n": "Doble Patada",
    "t": "lucha",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Cornada",
    "t": "normal",
    "d": 19,
    "lvl": 1
   },
   {
    "n": "Ataque Furia",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 11,
    "lvl": 1
   },
   {
    "n": "Thrash",
    "t": "normal",
    "d": 34,
    "lvl": 1
   },
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 1
   }
  ]
 }
};
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
const INICIALES = ["charmander","squirtle","bulbasaur","pikachu","caterpie","weedle","pidgey","rattata","spearow","ekans","sandshrew","vulpix","zubat","oddish","paras","diglett","meowth","psyduck","mankey","growlithe","poliwag","abra","machop","bellsprout","tentacool","geodude","ponyta","slowpoke","magnemite","gastly","onix","cubone","nidoran-f","nidoran-m"];

const KEY = "pokerogue_best";
const PS_POR_NIVEL = 8;
const CURA_POR_NIVEL = 4;

const COLOR_TIPO = {"normal":"#cfd3da","fuego":"#ff8a5c","agua":"#7cc3ff","planta":"#7fe39a","electrico":"#ffe066","hielo":"#8fe0e0","lucha":"#e8705a","veneno":"#b366d9","tierra":"#e2c879","volador":"#a7c6ff","psiquico":"#ff7fa8","bicho":"#b3c647","roca":"#c9b680","fantasma":"#9a86d4","dragon":"#8a7cff","siniestro":"#9a8f82","acero":"#b8c3cf","hada":"#ff9ed6"};

function tipoHTML(real){return String(real||"normal").split("\u00b7").map(function(t){t=t.trim();return '<span class="t-'+t+'">'+t+'</span>';}).join('<span class="tsep"> \u00b7 </span>');}
function flash(lado, tipo) {
  const el = document.querySelector(".fighter." + lado);
  if (!el) return;
  el.style.setProperty("--flash", COLOR_TIPO[tipo] || "#fff");
  el.classList.remove("hit"); void el.offsetWidth; el.classList.add("hit");
}
function mov_html(nombre, tipo) { return `<span class="t-${tipo}">${nombre}</span>`; }

let me = null, foe = null, round = 1, streak = 0, turnos = 1;
let aprendidos = 0;        // cuantos del learnset ya se evaluaron
let pendienteResolver = null; // callback cuando el modal de olvidar se cierra

const $ = (id) => document.getElementById(id);
const startPanel = $("start");
const arena = $("arena");
const overPanel = $("over");

function init() {
  $("best").textContent = localStorage.getItem(KEY) || 0;
  const box = $("starters");
  box.innerHTML = "";
  ["charmander","squirtle","bulbasaur","pikachu"].forEach((k) => box.appendChild(tarjeta(k)));
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
  const learn = f.learnset.map((m) => ({ ...m }));
  // Movimientos iniciales: los que ya se aprenderian a nivel <= nivel de inicio (hasta 4).
  const moves = [];
  learn.forEach((m) => {
    if (m.lvl <= nivel && moves.length < 4) { moves.push({ n: m.n, t: m.t, d: m.d }); m._dado = true; }
  });
  if (!moves.length) moves.push({ n: "Golpe", t: f.type, d: 8 }); // red de seguridad
  return { key, name: f.name, sprite: f.sprite, type: f.type, typeReal: f.typeReal, hp: maxHp, maxHp, level: nivel, moves, learn };
}

function empezar(key) {
  me = nuevoLuchador(key, 5);
  aprendidos = 0;
  round = 1; streak = 0; turnos = 1;
  startPanel.classList.add("hidden");
  overPanel.classList.add("hidden");
  arena.classList.remove("hidden");
  nuevaRonda();
}

function rivalAleatorio() {
  const key = INICIALES[Math.floor(Math.random() * INICIALES.length)];
  const f = FORMAS[key];
  const extra = Math.floor((round - 1) * CURA_POR_NIVEL);
  const golpe = f.learnset[0] || { n:"Golpe", t:f.type, d:10 };
  return {
    name: f.name, sprite: f.sprite, type: f.type, typeReal: f.typeReal,
    hp: f.hp + extra, maxHp: f.hp + extra,
    moves: [{ n: golpe.n, t: f.type, d: Math.floor(8 + (round - 1) * 1.5) }],
  };
}

function nuevaRonda() {
  foe = rivalAleatorio();
  me.hp = me.maxHp;
  $("turno").textContent = turnos;
  log(`\u00a1Un ${foe.name} salvaje aparece!`);
  pintar(); pintarMoves(true);
}

function pintar() {
  $("meEmoji").innerHTML = `<img class="sprite" src="${me.sprite}" alt="${me.name}" />`;
  $("meName").textContent = me.name;
  $("meType").innerHTML = tipoHTML(me.typeReal || me.type); $("meType").className = "type";
  $("meLvl").textContent = "Nivel " + me.level;
  $("foeEmoji").innerHTML = `<img class="sprite" src="${foe.sprite}" alt="${foe.name}" />`;
  $("foeName").textContent = foe.name;
  $("foeType").innerHTML = tipoHTML(foe.typeReal || foe.type); $("foeType").className = "type";
  barra("me", me); barra("foe", foe);
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

// Devuelve movimientos del learnset cuyo nivel es EXACTAMENTE el nivel actual.
// Asi, al llegar a nivel 16 solo aprendes el de nivel 16, no los anteriores.
function movsNuevos() {
  const out = [];
  me.learn.forEach((m) => {
    if (m.lvl === me.level && !m._dado) { m._dado = true; out.push(m); }
  });
  return out;
}

function subirNivel() {
  me.level++;
  me.maxHp += PS_POR_NIVEL;
  let txt = `\u00a1${me.name} sube al nivel ${me.level}! +${PS_POR_NIVEL} PS max.`;
  // Evolucion por nivel.
  const evo = EVO[me.key];
  if (evo && me.level >= evo.aNivel) {
    const antes = me.name;
    const f = FORMAS[evo.siguiente];
    me.key = evo.siguiente; me.name = f.name; me.sprite = f.sprite; me.type = f.type; me.typeReal = f.typeReal;
    me.maxHp += 14;
    // al evolucionar, adopta el learnset de la nueva forma (desde su nivel actual)
    me.learn = f.learnset.map((m) => ({ ...m }));
    txt += ` \u00a1${antes} evoluciona a ${f.name}!`;
  }
  return txt;
}

// Intenta aprender una lista de movimientos nuevos, uno a uno.
// Si hay 4, abre el modal para olvidar; encadena con callback.
function aprenderMovs(lista, cuandoTermine) {
  if (!lista.length) { cuandoTermine(); return; }
  const nuevo = lista.shift();
  if (me.moves.length < 4) {
    me.moves.push({ ...nuevo });
    log(`${me.name} aprende ${mov_html(nuevo.n, nuevo.t)}.`);
    aprenderMovs(lista, cuandoTermine);
  } else {
    abrirModalOlvidar(nuevo, () => aprenderMovs(lista, cuandoTermine));
  }
}

// --- Modal para olvidar un movimiento (o descartar el nuevo) ---
function abrirModalOlvidar(nuevo, cuandoTermine) {
  const modal = $("modal");
  const lista = $("modalMoves");
  $("modalNew").innerHTML = `Quieres aprender <b>${mov_html(nuevo.n, nuevo.t)}</b> (fuerza ${nuevo.d}), pero ya tienes 4 movimientos. Elige cual olvidar:`;
  lista.innerHTML = "";
  // boton por cada movimiento actual (se olvida ese, entra el nuevo)
  me.moves.forEach((m, i) => {
    const b = document.createElement("button");
    b.className = "m-" + m.t;
    b.innerHTML = `Olvidar ${m.n} <small>(fuerza ${m.d})</small>`;
    b.addEventListener("click", () => {
      const viejo = me.moves[i];
      me.moves[i] = { ...nuevo };
      cerrarModal();
      log(`${me.name} olvida ${viejo.n} y aprende ${mov_html(nuevo.n, nuevo.t)}.`);
      cuandoTermine();
    });
    lista.appendChild(b);
  });
  // boton para NO aprender el nuevo
  const skip = document.createElement("button");
  skip.className = "m-normal";
  skip.textContent = "No aprender " + nuevo.n;
  skip.addEventListener("click", () => {
    cerrarModal();
    log(`${me.name} no aprende ${nuevo.n}.`);
    cuandoTermine();
  });
  lista.appendChild(skip);
  modal.classList.remove("hidden");
}

function cerrarModal() { $("modal").classList.add("hidden"); }

function turno(mov) {
  turnos++; $("turno").textContent = turnos;
  pintarMoves(false);
  const a = dano(mov, foe);
  foe.hp -= a.valor;
  flash("foe", mov.t);
  let txt = `${me.name} usa ${mov_html(mov.n, mov.t)}. ${efecto(a.mult)} ${a.valor} de dano.`;
  pintar();

  if (foe.hp <= 0) {
    streak++; round++;
    const subida = subirNivel();
    log(`\u00a1${foe.name} cae! ${subida}`);
    pintar();
    // aprende los movimientos nuevos (puede abrir modal), luego sigue
    const nuevos = movsNuevos();
    aprenderMovs(nuevos, () => setTimeout(nuevaRonda, 900));
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
  if (streak > best) { localStorage.setItem(KEY, streak); $("overTitle").textContent = "\u00a1Nuevo record!"; }
  else { $("overTitle").textContent = "Has caido"; }
  $("overText").textContent = `${me.name} llego al nivel ${me.level} con ${streak} victoria(s). Mejor racha: ${localStorage.getItem(KEY)}.`;
}

function log(t) { $("log").innerHTML = t; }

$("again").addEventListener("click", () => {
  overPanel.classList.add("hidden");
  startPanel.classList.remove("hidden");
  init();
});

init();
