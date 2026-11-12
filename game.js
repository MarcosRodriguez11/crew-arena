// PokeLike - datos reales de PokeAPI: sprites, evolucion por nivel y movimientos por nivel.
// Generado: 34 lineas evolutivas, 86 formas.

const VENTAJA = {"normal":{"normal":1,"fuego":1,"agua":1,"planta":1,"electrico":1,"hielo":1,"lucha":1,"veneno":1,"tierra":1,"volador":1,"psiquico":1,"bicho":1,"roca":0.5,"fantasma":0,"dragon":1,"siniestro":1,"acero":0.5,"hada":1},"fuego":{"normal":1,"fuego":0.5,"agua":0.5,"planta":2,"electrico":1,"hielo":2,"lucha":1,"veneno":1,"tierra":1,"volador":1,"psiquico":1,"bicho":2,"roca":0.5,"fantasma":1,"dragon":0.5,"siniestro":1,"acero":2,"hada":1},"agua":{"normal":1,"fuego":2,"agua":0.5,"planta":0.5,"electrico":1,"hielo":1,"lucha":1,"veneno":1,"tierra":2,"volador":1,"psiquico":1,"bicho":1,"roca":2,"fantasma":1,"dragon":0.5,"siniestro":1,"acero":1,"hada":1},"planta":{"normal":1,"fuego":0.5,"agua":2,"planta":0.5,"electrico":1,"hielo":1,"lucha":1,"veneno":0.5,"tierra":2,"volador":0.5,"psiquico":1,"bicho":0.5,"roca":2,"fantasma":1,"dragon":0.5,"siniestro":1,"acero":0.5,"hada":1},"electrico":{"normal":1,"fuego":1,"agua":2,"planta":0.5,"electrico":0.5,"hielo":1,"lucha":1,"veneno":1,"tierra":0,"volador":2,"psiquico":1,"bicho":1,"roca":1,"fantasma":1,"dragon":0.5,"siniestro":1,"acero":1,"hada":1},"hielo":{"normal":1,"fuego":0.5,"agua":0.5,"planta":2,"electrico":1,"hielo":0.5,"lucha":1,"veneno":1,"tierra":2,"volador":2,"psiquico":1,"bicho":1,"roca":1,"fantasma":1,"dragon":2,"siniestro":1,"acero":0.5,"hada":1},"lucha":{"normal":2,"fuego":1,"agua":1,"planta":1,"electrico":1,"hielo":2,"lucha":1,"veneno":0.5,"tierra":1,"volador":0.5,"psiquico":0.5,"bicho":0.5,"roca":2,"fantasma":0,"dragon":1,"siniestro":2,"acero":2,"hada":0.5},"veneno":{"normal":1,"fuego":1,"agua":1,"planta":2,"electrico":1,"hielo":1,"lucha":1,"veneno":0.5,"tierra":0.5,"volador":1,"psiquico":1,"bicho":1,"roca":0.5,"fantasma":0.5,"dragon":1,"siniestro":1,"acero":0,"hada":2},"tierra":{"normal":1,"fuego":2,"agua":1,"planta":0.5,"electrico":2,"hielo":1,"lucha":1,"veneno":2,"tierra":1,"volador":0,"psiquico":1,"bicho":0.5,"roca":2,"fantasma":1,"dragon":1,"siniestro":1,"acero":2,"hada":1},"volador":{"normal":1,"fuego":1,"agua":1,"planta":2,"electrico":0.5,"hielo":1,"lucha":2,"veneno":1,"tierra":1,"volador":1,"psiquico":1,"bicho":2,"roca":0.5,"fantasma":1,"dragon":1,"siniestro":1,"acero":0.5,"hada":1},"psiquico":{"normal":1,"fuego":1,"agua":1,"planta":1,"electrico":1,"hielo":1,"lucha":2,"veneno":2,"tierra":1,"volador":1,"psiquico":0.5,"bicho":1,"roca":1,"fantasma":1,"dragon":1,"siniestro":0,"acero":0.5,"hada":1},"bicho":{"normal":1,"fuego":0.5,"agua":1,"planta":2,"electrico":1,"hielo":1,"lucha":0.5,"veneno":0.5,"tierra":1,"volador":0.5,"psiquico":2,"bicho":1,"roca":1,"fantasma":0.5,"dragon":1,"siniestro":2,"acero":0.5,"hada":0.5},"roca":{"normal":1,"fuego":2,"agua":1,"planta":1,"electrico":1,"hielo":2,"lucha":0.5,"veneno":1,"tierra":0.5,"volador":2,"psiquico":1,"bicho":2,"roca":1,"fantasma":1,"dragon":1,"siniestro":1,"acero":0.5,"hada":1},"fantasma":{"normal":0,"fuego":1,"agua":1,"planta":1,"electrico":1,"hielo":1,"lucha":1,"veneno":1,"tierra":1,"volador":1,"psiquico":2,"bicho":1,"roca":1,"fantasma":2,"dragon":1,"siniestro":0.5,"acero":1,"hada":1},"dragon":{"normal":1,"fuego":1,"agua":1,"planta":1,"electrico":1,"hielo":1,"lucha":1,"veneno":1,"tierra":1,"volador":1,"psiquico":1,"bicho":1,"roca":1,"fantasma":1,"dragon":2,"siniestro":1,"acero":0.5,"hada":0},"siniestro":{"normal":1,"fuego":1,"agua":1,"planta":1,"electrico":1,"hielo":1,"lucha":0.5,"veneno":1,"tierra":1,"volador":1,"psiquico":2,"bicho":1,"roca":1,"fantasma":2,"dragon":1,"siniestro":0.5,"acero":1,"hada":0.5},"acero":{"normal":1,"fuego":0.5,"agua":0.5,"planta":1,"electrico":0.5,"hielo":2,"lucha":1,"veneno":1,"tierra":1,"volador":1,"psiquico":1,"bicho":1,"roca":2,"fantasma":1,"dragon":1,"siniestro":1,"acero":0.5,"hada":2},"hada":{"normal":1,"fuego":0.5,"agua":1,"planta":1,"electrico":1,"hielo":1,"lucha":2,"veneno":0.5,"tierra":1,"volador":1,"psiquico":1,"bicho":1,"roca":1,"fantasma":1,"dragon":2,"siniestro":2,"acero":0.5,"hada":1}};

// Cada forma: sprite real, tipo, hp y learnset (movimientos por nivel, reales de PokeAPI).
// PokeLike - datos reales de PokeAPI: 151 Pokemon de 1a generacion.
// Generado por tools/gen_dex.py: 151 formas, 52 evoluciones.

const FORMAS = {
 "bulbasaur": {
  "name": "Bulbasaur",
  "id": 1,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  "type": "planta",
  "typeReal": "planta · veneno",
  "hp": 45,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 4
   },
   {
    "n": "Drenadoras",
    "t": "planta",
    "d": 9,
    "lvl": 7
   },
   {
    "n": "Látigo Cepa",
    "t": "planta",
    "d": 18,
    "lvl": 10
   },
   {
    "n": "Derribo",
    "t": "normal",
    "d": 36,
    "lvl": 15
   },
   {
    "n": "Polvo Veneno",
    "t": "veneno",
    "d": 9,
    "lvl": 15
   },
   {
    "n": "Somnífero",
    "t": "planta",
    "d": 9,
    "lvl": 15
   },
   {
    "n": "Bomba Germen",
    "t": "planta",
    "d": 32,
    "lvl": 18
   }
  ]
 },
 "ivysaur": {
  "name": "Ivysaur",
  "id": 2,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  "type": "planta",
  "typeReal": "planta · veneno",
  "hp": 60,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Drenadoras",
    "t": "planta",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Látigo Cepa",
    "t": "planta",
    "d": 18,
    "lvl": 10
   },
   {
    "n": "Derribo",
    "t": "normal",
    "d": 36,
    "lvl": 15
   },
   {
    "n": "Polvo Veneno",
    "t": "veneno",
    "d": 9,
    "lvl": 15
   },
   {
    "n": "Somnífero",
    "t": "planta",
    "d": 9,
    "lvl": 15
   },
   {
    "n": "Bomba Germen",
    "t": "planta",
    "d": 32,
    "lvl": 20
   }
  ]
 },
 "venusaur": {
  "name": "Venusaur",
  "id": 3,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  "type": "planta",
  "typeReal": "planta · veneno",
  "hp": 80,
  "learnset": [
   {
    "n": "Látigo Cepa",
    "t": "planta",
    "d": 18,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Drenadoras",
    "t": "planta",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Danza Pétalo",
    "t": "planta",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Amnesia",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Latigazo",
    "t": "planta",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Tormenta Floral",
    "t": "planta",
    "d": 36,
    "lvl": 1
   }
  ]
 },
 "charmander": {
  "name": "Charmander",
  "id": 4,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  "type": "fuego",
  "typeReal": "fuego",
  "hp": 39,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Ascuas",
    "t": "fuego",
    "d": 16,
    "lvl": 7
   },
   {
    "n": "Dragoaliento",
    "t": "dragon",
    "d": 24,
    "lvl": 12
   },
   {
    "n": "Garra Metal",
    "t": "acero",
    "d": 20,
    "lvl": 13
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 15
   },
   {
    "n": "Colmillo Ígneo",
    "t": "fuego",
    "d": 26,
    "lvl": 17
   },
   {
    "n": "Golpes Furia",
    "t": "normal",
    "d": 8,
    "lvl": 18
   }
  ]
 },
 "charmeleon": {
  "name": "Charmeleon",
  "id": 5,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  "type": "fuego",
  "typeReal": "fuego",
  "hp": 58,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Ascuas",
    "t": "fuego",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Dragoaliento",
    "t": "dragon",
    "d": 24,
    "lvl": 12
   },
   {
    "n": "Garra Metal",
    "t": "acero",
    "d": 20,
    "lvl": 13
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 15
   },
   {
    "n": "Colmillo Ígneo",
    "t": "fuego",
    "d": 26,
    "lvl": 19
   },
   {
    "n": "Pantalla de Humo",
    "t": "normal",
    "d": 9,
    "lvl": 20
   }
  ]
 },
 "charizard": {
  "name": "Charizard",
  "id": 6,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  "type": "fuego",
  "typeReal": "fuego · volador",
  "hp": 78,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Ascuas",
    "t": "fuego",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Contraataque",
    "t": "lucha",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Garra Metal",
    "t": "acero",
    "d": 20,
    "lvl": 1
   },
   {
    "n": "Triturar",
    "t": "siniestro",
    "d": 32,
    "lvl": 1
   },
   {
    "n": "Onda Ígnea",
    "t": "fuego",
    "d": 38,
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
  "hp": 44,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 4
   },
   {
    "n": "Burbuja",
    "t": "agua",
    "d": 16,
    "lvl": 7
   },
   {
    "n": "Refugio",
    "t": "agua",
    "d": 9,
    "lvl": 10
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 16,
    "lvl": 13
   },
   {
    "n": "Hidropulso",
    "t": "agua",
    "d": 24,
    "lvl": 15
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 24,
    "lvl": 18
   },
   {
    "n": "Giro Rápido",
    "t": "normal",
    "d": 20,
    "lvl": 23
   }
  ]
 },
 "wartortle": {
  "name": "Wartortle",
  "id": 8,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  "type": "agua",
  "typeReal": "agua",
  "hp": 59,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Burbuja",
    "t": "agua",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Refugio",
    "t": "agua",
    "d": 9,
    "lvl": 10
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 16,
    "lvl": 13
   },
   {
    "n": "Hidropulso",
    "t": "agua",
    "d": 24,
    "lvl": 15
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 24,
    "lvl": 19
   },
   {
    "n": "Giro Rápido",
    "t": "normal",
    "d": 20,
    "lvl": 25
   }
  ]
 },
 "blastoise": {
  "name": "Blastoise",
  "id": 9,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
  "type": "agua",
  "typeReal": "agua",
  "hp": 79,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Refugio",
    "t": "agua",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Burbuja",
    "t": "agua",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Sorpresa",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Cañón Resplandor",
    "t": "acero",
    "d": 32,
    "lvl": 1
   },
   {
    "n": "Acua Jet",
    "t": "agua",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 16,
    "lvl": 13
   }
  ]
 },
 "caterpie": {
  "name": "Caterpie",
  "id": 10,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
  "type": "bicho",
  "typeReal": "bicho",
  "hp": 45,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Disparo Demora",
    "t": "bicho",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Picadura",
    "t": "bicho",
    "d": 24,
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
  "hp": 50,
  "learnset": [
   {
    "n": "Fortaleza",
    "t": "normal",
    "d": 9,
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
  "hp": 60,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Disparo Demora",
    "t": "bicho",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Confusión",
    "t": "psiquico",
    "d": 20,
    "lvl": 1
   },
   {
    "n": "Fortaleza",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Picadura",
    "t": "bicho",
    "d": 24,
    "lvl": 1
   },
   {
    "n": "Polvo Veneno",
    "t": "veneno",
    "d": 9,
    "lvl": 13
   },
   {
    "n": "Paralizador",
    "t": "planta",
    "d": 9,
    "lvl": 14
   },
   {
    "n": "Somnífero",
    "t": "planta",
    "d": 9,
    "lvl": 15
   }
  ]
 },
 "weedle": {
  "name": "Weedle",
  "id": 13,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
  "type": "bicho",
  "typeReal": "bicho · veneno",
  "hp": 40,
  "learnset": [
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Disparo Demora",
    "t": "bicho",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Picadura",
    "t": "bicho",
    "d": 24,
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
  "hp": 45,
  "learnset": [
   {
    "n": "Fortaleza",
    "t": "normal",
    "d": 9,
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
  "hp": 65,
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
    "n": "Picotazo",
    "t": "volador",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Disparo Demora",
    "t": "bicho",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Fortaleza",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Picadura",
    "t": "bicho",
    "d": 24,
    "lvl": 1
   },
   {
    "n": "Corte Furia",
    "t": "bicho",
    "d": 16,
    "lvl": 11
   },
   {
    "n": "Aguzar",
    "t": "normal",
    "d": 9,
    "lvl": 14
   }
  ]
 },
 "pidgey": {
  "name": "Pidgey",
  "id": 16,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
  "type": "normal",
  "typeReal": "normal · volador",
  "hp": 40,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Ataque Arena",
    "t": "tierra",
    "d": 9,
    "lvl": 5
   },
   {
    "n": "Tornado",
    "t": "volador",
    "d": 16,
    "lvl": 9
   },
   {
    "n": "Ataque Rápido",
    "t": "normal",
    "d": 16,
    "lvl": 13
   },
   {
    "n": "Respiro",
    "t": "volador",
    "d": 9,
    "lvl": 17
   },
   {
    "n": "Remolino",
    "t": "normal",
    "d": 9,
    "lvl": 19
   },
   {
    "n": "Ciclón",
    "t": "dragon",
    "d": 16,
    "lvl": 21
   },
   {
    "n": "Ataque Ala",
    "t": "volador",
    "d": 24,
    "lvl": 25
   }
  ]
 },
 "pidgeotto": {
  "name": "Pidgeotto",
  "id": 17,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
  "type": "normal",
  "typeReal": "normal · volador",
  "hp": 63,
  "learnset": [
   {
    "n": "Tornado",
    "t": "volador",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Ataque Arena",
    "t": "tierra",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Ataque Rápido",
    "t": "normal",
    "d": 16,
    "lvl": 13
   },
   {
    "n": "Respiro",
    "t": "volador",
    "d": 9,
    "lvl": 17
   },
   {
    "n": "Remolino",
    "t": "normal",
    "d": 9,
    "lvl": 20
   },
   {
    "n": "Ciclón",
    "t": "dragon",
    "d": 16,
    "lvl": 22
   },
   {
    "n": "Ataque Ala",
    "t": "volador",
    "d": 24,
    "lvl": 27
   }
  ]
 },
 "pidgeot": {
  "name": "Pidgeot",
  "id": 18,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
  "type": "normal",
  "typeReal": "normal · volador",
  "hp": 83,
  "learnset": [
   {
    "n": "Tornado",
    "t": "volador",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Ataque Arena",
    "t": "tierra",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Ataque Rápido",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Ataque Aéreo",
    "t": "volador",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Onda Ígnea",
    "t": "fuego",
    "d": 38,
    "lvl": 1
   },
   {
    "n": "Vendaval",
    "t": "volador",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Respiro",
    "t": "volador",
    "d": 9,
    "lvl": 17
   }
  ]
 },
 "rattata": {
  "name": "Rattata",
  "id": 19,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
  "type": "normal",
  "typeReal": "normal",
  "hp": 30,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Ataque Rápido",
    "t": "normal",
    "d": 16,
    "lvl": 7
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 24,
    "lvl": 10
   },
   {
    "n": "Hipercolmillo",
    "t": "normal",
    "d": 32,
    "lvl": 13
   },
   {
    "n": "Aguzar",
    "t": "normal",
    "d": 9,
    "lvl": 13
   },
   {
    "n": "Derribo",
    "t": "normal",
    "d": 36,
    "lvl": 16
   },
   {
    "n": "Triturar",
    "t": "siniestro",
    "d": 32,
    "lvl": 18
   }
  ]
 },
 "raticate": {
  "name": "Raticate",
  "id": 20,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
  "type": "normal",
  "typeReal": "normal",
  "hp": 55,
  "learnset": [
   {
    "n": "Danza Espada",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Contraataque",
    "t": "lucha",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Ataque Rápido",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Golpes Furia",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 24,
    "lvl": 10
   },
   {
    "n": "Hipercolmillo",
    "t": "normal",
    "d": 32,
    "lvl": 13
   }
  ]
 },
 "spearow": {
  "name": "Spearow",
  "id": 21,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
  "type": "normal",
  "typeReal": "normal · volador",
  "hp": 40,
  "learnset": [
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Picotazo",
    "t": "volador",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 7
   },
   {
    "n": "Buena Baza",
    "t": "siniestro",
    "d": 24,
    "lvl": 8
   },
   {
    "n": "Foco Energía",
    "t": "normal",
    "d": 9,
    "lvl": 11
   },
   {
    "n": "Ataque Furia",
    "t": "normal",
    "d": 8,
    "lvl": 13
   },
   {
    "n": "Ataque Ala",
    "t": "volador",
    "d": 24,
    "lvl": 18
   },
   {
    "n": "Persecución",
    "t": "siniestro",
    "d": 16,
    "lvl": 19
   }
  ]
 },
 "fearow": {
  "name": "Fearow",
  "id": 22,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
  "type": "normal",
  "typeReal": "normal · volador",
  "hp": 65,
  "learnset": [
   {
    "n": "Ataque Furia",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Picotazo",
    "t": "volador",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Ataque Rápido",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Foco Energía",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Ataque Aéreo",
    "t": "volador",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Picoteo",
    "t": "volador",
    "d": 24,
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
  "hp": 35,
  "learnset": [
   {
    "n": "Constricción",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 8
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 24,
    "lvl": 13
   },
   {
    "n": "Deslumbrar",
    "t": "normal",
    "d": 9,
    "lvl": 20
   },
   {
    "n": "Puya Nociva",
    "t": "veneno",
    "d": 32,
    "lvl": 24
   },
   {
    "n": "Chirrido",
    "t": "normal",
    "d": 9,
    "lvl": 25
   },
   {
    "n": "Atizar",
    "t": "normal",
    "d": 32,
    "lvl": 28
   }
  ]
 },
 "arbok": {
  "name": "Arbok",
  "id": 24,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
  "type": "veneno",
  "typeReal": "veneno",
  "hp": 60,
  "learnset": [
   {
    "n": "Constricción",
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
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 24,
    "lvl": 1
   },
   {
    "n": "Triturar",
    "t": "siniestro",
    "d": 32,
    "lvl": 1
   },
   {
    "n": "Golpe Bajo",
    "t": "siniestro",
    "d": 28,
    "lvl": 1
   },
   {
    "n": "Colmillo Rayo",
    "t": "electrico",
    "d": 26,
    "lvl": 1
   },
   {
    "n": "Colmillo Hielo",
    "t": "hielo",
    "d": 26,
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
  "hp": 35,
  "learnset": [
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Impactrueno",
    "t": "electrico",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Beso Dulce",
    "t": "hada",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Encanto",
    "t": "hada",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Maquinación",
    "t": "siniestro",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Camaradería",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Moflete Estático",
    "t": "electrico",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 6
   }
  ]
 },
 "raichu": {
  "name": "Raichu",
  "id": 26,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
  "type": "electrico",
  "typeReal": "electrico",
  "hp": 60,
  "learnset": [
   {
    "n": "Puño Trueno",
    "t": "electrico",
    "d": 30,
    "lvl": 1
   },
   {
    "n": "Atizar",
    "t": "normal",
    "d": 32,
    "lvl": 1
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Impactrueno",
    "t": "electrico",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Rayo",
    "t": "electrico",
    "d": 36,
    "lvl": 1
   },
   {
    "n": "Onda Trueno",
    "t": "electrico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Trueno",
    "t": "electrico",
    "d": 40,
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
  "hp": 50,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Rizo Defensa",
    "t": "normal",
    "d": 9,
    "lvl": 6
   },
   {
    "n": "Rodar",
    "t": "roca",
    "d": 12,
    "lvl": 7
   },
   {
    "n": "Giro Rápido",
    "t": "normal",
    "d": 20,
    "lvl": 9
   },
   {
    "n": "Ataque Arena",
    "t": "tierra",
    "d": 9,
    "lvl": 11
   },
   {
    "n": "Corte Furia",
    "t": "bicho",
    "d": 16,
    "lvl": 11
   },
   {
    "n": "Magnitud",
    "t": "tierra",
    "d": 9,
    "lvl": 14
   },
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 17
   }
  ]
 },
 "sandslash": {
  "name": "Sandslash",
  "id": 28,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
  "type": "tierra",
  "typeReal": "tierra",
  "hp": 75,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Ataque Arena",
    "t": "tierra",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Contraataque",
    "t": "lucha",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Agilidad",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Rizo Defensa",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Garra Brutal",
    "t": "normal",
    "d": 30,
    "lvl": 1
   },
   {
    "n": "Rodar",
    "t": "roca",
    "d": 12,
    "lvl": 7
   },
   {
    "n": "Giro Rápido",
    "t": "normal",
    "d": 20,
    "lvl": 9
   }
  ]
 },
 "nidoran-f": {
  "name": "Nidoran♀",
  "id": 29,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
  "type": "veneno",
  "typeReal": "veneno",
  "hp": 55,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 8
   },
   {
    "n": "Doble Patada",
    "t": "lucha",
    "d": 12,
    "lvl": 12
   },
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 17
   },
   {
    "n": "Tóxico",
    "t": "veneno",
    "d": 9,
    "lvl": 18
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 24,
    "lvl": 20
   }
  ]
 },
 "nidorina": {
  "name": "Nidorina",
  "id": 30,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
  "type": "veneno",
  "typeReal": "veneno",
  "hp": 70,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 8
   },
   {
    "n": "Doble Patada",
    "t": "lucha",
    "d": 12,
    "lvl": 12
   },
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 18
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 24,
    "lvl": 22
   },
   {
    "n": "Púas Tóxicas",
    "t": "veneno",
    "d": 9,
    "lvl": 22
   }
  ]
 },
 "nidoqueen": {
  "name": "Nidoqueen",
  "id": 31,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
  "type": "veneno",
  "typeReal": "veneno · tierra",
  "hp": 90,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Doble Patada",
    "t": "lucha",
    "d": 12,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
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
    "d": 24,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Supersónico",
    "t": "normal",
    "d": 9,
    "lvl": 1
   }
  ]
 },
 "nidoran-m": {
  "name": "Nidoran♂",
  "id": 32,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
  "type": "veneno",
  "typeReal": "veneno",
  "hp": 46,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Picotazo",
    "t": "volador",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Foco Energía",
    "t": "normal",
    "d": 9,
    "lvl": 8
   },
   {
    "n": "Doble Patada",
    "t": "lucha",
    "d": 12,
    "lvl": 12
   },
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 17
   },
   {
    "n": "Tóxico",
    "t": "veneno",
    "d": 9,
    "lvl": 18
   },
   {
    "n": "Cornada",
    "t": "normal",
    "d": 26,
    "lvl": 20
   }
  ]
 },
 "nidorino": {
  "name": "Nidorino",
  "id": 33,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
  "type": "veneno",
  "typeReal": "veneno",
  "hp": 61,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Picotazo",
    "t": "volador",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Foco Energía",
    "t": "normal",
    "d": 9,
    "lvl": 8
   },
   {
    "n": "Doble Patada",
    "t": "lucha",
    "d": 12,
    "lvl": 12
   },
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 18
   },
   {
    "n": "Cornada",
    "t": "normal",
    "d": 26,
    "lvl": 22
   },
   {
    "n": "Púas Tóxicas",
    "t": "veneno",
    "d": 9,
    "lvl": 22
   }
  ]
 },
 "nidoking": {
  "name": "Nidoking",
  "id": 34,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
  "type": "veneno",
  "typeReal": "veneno · tierra",
  "hp": 81,
  "learnset": [
   {
    "n": "Doble Patada",
    "t": "lucha",
    "d": 12,
    "lvl": 1
   },
   {
    "n": "Cornada",
    "t": "normal",
    "d": 26,
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
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Supersónico",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Picotazo",
    "t": "volador",
    "d": 14,
    "lvl": 1
   }
  ]
 },
 "clefairy": {
  "name": "Clefairy",
  "id": 35,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
  "type": "hada",
  "typeReal": "hada",
  "hp": 70,
  "learnset": [
   {
    "n": "Destructor",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Salpicadura",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Beso Dulce",
    "t": "hada",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Encanto",
    "t": "hada",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Deseo Cura",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Copión",
    "t": "normal",
    "d": 9,
    "lvl": 1
   }
  ]
 },
 "clefable": {
  "name": "Clefable",
  "id": 36,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
  "type": "hada",
  "typeReal": "hada",
  "hp": 95,
  "learnset": [
   {
    "n": "Destructor",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Doble Bofetón",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Canto",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Reducción",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Rizo Defensa",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Metrónomo",
    "t": "normal",
    "d": 9,
    "lvl": 1
   }
  ]
 },
 "vulpix": {
  "name": "Vulpix",
  "id": 37,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
  "type": "fuego",
  "typeReal": "fuego",
  "hp": 38,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Ascuas",
    "t": "fuego",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Anulación",
    "t": "normal",
    "d": 9,
    "lvl": 4
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 5
   },
   {
    "n": "Rugido",
    "t": "normal",
    "d": 9,
    "lvl": 9
   },
   {
    "n": "Maquinación",
    "t": "siniestro",
    "d": 9,
    "lvl": 9
   },
   {
    "n": "Ojitos Tiernos",
    "t": "hada",
    "d": 9,
    "lvl": 9
   },
   {
    "n": "Rencor",
    "t": "fantasma",
    "d": 9,
    "lvl": 12
   }
  ]
 },
 "ninetales": {
  "name": "Ninetales",
  "id": 38,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
  "type": "fuego",
  "typeReal": "fuego",
  "hp": 73,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Rugido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Anulación",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Ascuas",
    "t": "fuego",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Lanzallamas",
    "t": "fuego",
    "d": 36,
    "lvl": 1
   },
   {
    "n": "Hipnosis",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Ataque Rápido",
    "t": "normal",
    "d": 16,
    "lvl": 1
   }
  ]
 },
 "jigglypuff": {
  "name": "Jigglypuff",
  "id": 39,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
  "type": "normal",
  "typeReal": "normal · hada",
  "hp": 115,
  "learnset": [
   {
    "n": "Canto",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Beso Dulce",
    "t": "hada",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Encanto",
    "t": "hada",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Copión",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Voz Cautivadora",
    "t": "hada",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Rizo Defensa",
    "t": "normal",
    "d": 9,
    "lvl": 4
   },
   {
    "n": "Eco Voz",
    "t": "normal",
    "d": 16,
    "lvl": 4
   },
   {
    "n": "Antojo",
    "t": "normal",
    "d": 24,
    "lvl": 8
   }
  ]
 },
 "wigglytuff": {
  "name": "Wigglytuff",
  "id": 40,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
  "type": "normal",
  "typeReal": "normal · hada",
  "hp": 140,
  "learnset": [
   {
    "n": "Destructor",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Doble Bofetón",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Golpe Cuerpo",
    "t": "normal",
    "d": 34,
    "lvl": 1
   },
   {
    "n": "Doble Filo",
    "t": "normal",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Canto",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Anulación",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Mimético",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Reducción",
    "t": "normal",
    "d": 9,
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
  "hp": 40,
  "learnset": [
   {
    "n": "Tornado",
    "t": "volador",
    "d": 16,
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
    "d": 32,
    "lvl": 1
   },
   {
    "n": "Hipnosis",
    "t": "psiquico",
    "d": 9,
    "lvl": 6
   },
   {
    "n": "Impresionar",
    "t": "fantasma",
    "d": 12,
    "lvl": 6
   },
   {
    "n": "Supersónico",
    "t": "normal",
    "d": 9,
    "lvl": 11
   },
   {
    "n": "Meteoros",
    "t": "normal",
    "d": 24,
    "lvl": 12
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 24,
    "lvl": 16
   }
  ]
 },
 "golbat": {
  "name": "Golbat",
  "id": 42,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
  "type": "veneno",
  "typeReal": "veneno · volador",
  "hp": 75,
  "learnset": [
   {
    "n": "Tornado",
    "t": "volador",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Remolino",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Supersónico",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Absorber",
    "t": "planta",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Ataque Rápido",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Chirrido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Chupavidas",
    "t": "bicho",
    "d": 32,
    "lvl": 1
   },
   {
    "n": "Triturar",
    "t": "siniestro",
    "d": 32,
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
  "hp": 45,
  "learnset": [
   {
    "n": "Absorber",
    "t": "planta",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Desarrollo",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Dulce Aroma",
    "t": "normal",
    "d": 9,
    "lvl": 7
   },
   {
    "n": "Megaagotar",
    "t": "planta",
    "d": 16,
    "lvl": 12
   },
   {
    "n": "Polvo Veneno",
    "t": "veneno",
    "d": 9,
    "lvl": 14
   },
   {
    "n": "Paralizador",
    "t": "planta",
    "d": 9,
    "lvl": 16
   },
   {
    "n": "Hoja Afilada",
    "t": "planta",
    "d": 22,
    "lvl": 18
   },
   {
    "n": "Somnífero",
    "t": "planta",
    "d": 9,
    "lvl": 18
   }
  ]
 },
 "gloom": {
  "name": "Gloom",
  "id": 44,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
  "type": "planta",
  "typeReal": "planta · veneno",
  "hp": 60,
  "learnset": [
   {
    "n": "Absorber",
    "t": "planta",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Desarrollo",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Polvo Veneno",
    "t": "veneno",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Dulce Aroma",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Megaagotar",
    "t": "planta",
    "d": 16,
    "lvl": 12
   },
   {
    "n": "Paralizador",
    "t": "planta",
    "d": 9,
    "lvl": 16
   },
   {
    "n": "Hoja Afilada",
    "t": "planta",
    "d": 22,
    "lvl": 18
   },
   {
    "n": "Somnífero",
    "t": "planta",
    "d": 9,
    "lvl": 18
   }
  ]
 },
 "vileplume": {
  "name": "Vileplume",
  "id": 45,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
  "type": "planta",
  "typeReal": "planta · veneno",
  "hp": 75,
  "learnset": [
   {
    "n": "Ácido",
    "t": "veneno",
    "d": 16,
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
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Desarrollo",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Rayo Solar",
    "t": "planta",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Paralizador",
    "t": "planta",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Somnífero",
    "t": "planta",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Tóxico",
    "t": "veneno",
    "d": 9,
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
  "hp": 35,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Absorber",
    "t": "planta",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Somnífero",
    "t": "planta",
    "d": 9,
    "lvl": 2
   },
   {
    "n": "Paralizador",
    "t": "planta",
    "d": 9,
    "lvl": 7
   },
   {
    "n": "Polvo Veneno",
    "t": "veneno",
    "d": 9,
    "lvl": 13
   },
   {
    "n": "Golpes Furia",
    "t": "normal",
    "d": 8,
    "lvl": 15
   },
   {
    "n": "Carga Tóxica",
    "t": "veneno",
    "d": 26,
    "lvl": 15
   },
   {
    "n": "Corte Furia",
    "t": "bicho",
    "d": 16,
    "lvl": 17
   }
  ]
 },
 "parasect": {
  "name": "Parasect",
  "id": 47,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
  "type": "bicho",
  "typeReal": "bicho · planta",
  "hp": 60,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Absorber",
    "t": "planta",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Drenadoras",
    "t": "planta",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Polvo Veneno",
    "t": "veneno",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Paralizador",
    "t": "planta",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Somnífero",
    "t": "planta",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Chirrido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Veneno X",
    "t": "veneno",
    "d": 28,
    "lvl": 1
   }
  ]
 },
 "venonat": {
  "name": "Venonat",
  "id": 48,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
  "type": "bicho",
  "typeReal": "bicho · veneno",
  "hp": 60,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Anulación",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Profecía",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Estoicismo",
    "t": "bicho",
    "d": 20,
    "lvl": 1
   },
   {
    "n": "Supersónico",
    "t": "normal",
    "d": 9,
    "lvl": 9
   },
   {
    "n": "Confusión",
    "t": "psiquico",
    "d": 20,
    "lvl": 17
   },
   {
    "n": "Polvo Veneno",
    "t": "veneno",
    "d": 9,
    "lvl": 20
   },
   {
    "n": "Megaagotar",
    "t": "planta",
    "d": 16,
    "lvl": 25
   }
  ]
 },
 "venomoth": {
  "name": "Venomoth",
  "id": 49,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
  "type": "bicho",
  "typeReal": "bicho · veneno",
  "hp": 70,
  "learnset": [
   {
    "n": "Remolino",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Supersónico",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Anulación",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Agilidad",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Chirrido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Profecía",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Viento Plata",
    "t": "bicho",
    "d": 24,
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
  "hp": 10,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Ataque Arena",
    "t": "tierra",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 5
   },
   {
    "n": "Impresionar",
    "t": "fantasma",
    "d": 12,
    "lvl": 7
   },
   {
    "n": "Magnitud",
    "t": "tierra",
    "d": 9,
    "lvl": 9
   },
   {
    "n": "Agilidad",
    "t": "psiquico",
    "d": 9,
    "lvl": 12
   },
   {
    "n": "Terratemblor",
    "t": "tierra",
    "d": 24,
    "lvl": 16
   },
   {
    "n": "Excavar",
    "t": "tierra",
    "d": 32,
    "lvl": 17
   }
  ]
 },
 "dugtrio": {
  "name": "Dugtrio",
  "id": 51,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
  "type": "tierra",
  "typeReal": "tierra",
  "hp": 35,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Ataque Arena",
    "t": "tierra",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Agilidad",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Chirrido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Triataque",
    "t": "normal",
    "d": 32,
    "lvl": 1
   },
   {
    "n": "Impresionar",
    "t": "fantasma",
    "d": 12,
    "lvl": 1
   },
   {
    "n": "Tajo Umbrío",
    "t": "siniestro",
    "d": 28,
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
  "hp": 40,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Amago",
    "t": "normal",
    "d": 12,
    "lvl": 4
   },
   {
    "n": "Mofa",
    "t": "siniestro",
    "d": 9,
    "lvl": 9
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 24,
    "lvl": 10
   },
   {
    "n": "Día de Pago",
    "t": "normal",
    "d": 16,
    "lvl": 18
   },
   {
    "n": "Buena Baza",
    "t": "siniestro",
    "d": 24,
    "lvl": 24
   },
   {
    "n": "Finta",
    "t": "siniestro",
    "d": 24,
    "lvl": 25
   }
  ]
 },
 "persian": {
  "name": "Persian",
  "id": 53,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
  "type": "normal",
  "typeReal": "normal",
  "hp": 65,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 24,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Hipnosis",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Meteoros",
    "t": "normal",
    "d": 24,
    "lvl": 1
   },
   {
    "n": "Amnesia",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Amago",
    "t": "normal",
    "d": 12,
    "lvl": 1
   },
   {
    "n": "Joya de Luz",
    "t": "roca",
    "d": 32,
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
  "hp": 50,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Burbuja",
    "t": "agua",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Hidrochorro",
    "t": "agua",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 16,
    "lvl": 3
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 5
   },
   {
    "n": "Anulación",
    "t": "normal",
    "d": 9,
    "lvl": 10
   },
   {
    "n": "Hidropulso",
    "t": "agua",
    "d": 24,
    "lvl": 11
   },
   {
    "n": "Confusión",
    "t": "psiquico",
    "d": 20,
    "lvl": 16
   }
  ]
 },
 "golduck": {
  "name": "Golduck",
  "id": 55,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
  "type": "agua",
  "typeReal": "agua",
  "hp": 80,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Anulación",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Burbuja",
    "t": "agua",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Otra Vez",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Bostezo",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Hidrochorro",
    "t": "agua",
    "d": 9,
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
  "hp": 40,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Antojo",
    "t": "normal",
    "d": 24,
    "lvl": 1
   },
   {
    "n": "Patada Baja",
    "t": "lucha",
    "d": 9,
    "lvl": 6
   },
   {
    "n": "Bofetón Lodo",
    "t": "tierra",
    "d": 8,
    "lvl": 8
   },
   {
    "n": "Mofa",
    "t": "siniestro",
    "d": 9,
    "lvl": 8
   },
   {
    "n": "Golpe Kárate",
    "t": "lucha",
    "d": 20,
    "lvl": 11
   },
   {
    "n": "Persecución",
    "t": "siniestro",
    "d": 16,
    "lvl": 12
   }
  ]
 },
 "primeape": {
  "name": "Primeape",
  "id": 57,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
  "type": "lucha",
  "typeReal": "lucha",
  "hp": 65,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Patada Baja",
    "t": "lucha",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Contraataque",
    "t": "lucha",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Furia",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Otra Vez",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Mofa",
    "t": "siniestro",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Antojo",
    "t": "normal",
    "d": 24,
    "lvl": 1
   }
  ]
 },
 "growlithe": {
  "name": "Growlithe",
  "id": 58,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
  "type": "fuego",
  "typeReal": "fuego",
  "hp": 55,
  "learnset": [
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 24,
    "lvl": 1
   },
   {
    "n": "Rugido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Aullido",
    "t": "normal",
    "d": 9,
    "lvl": 4
   },
   {
    "n": "Ascuas",
    "t": "fuego",
    "d": 16,
    "lvl": 7
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 13
   },
   {
    "n": "Inversión",
    "t": "lucha",
    "d": 9,
    "lvl": 19
   },
   {
    "n": "Rastreo",
    "t": "normal",
    "d": 9,
    "lvl": 19
   },
   {
    "n": "Colmillo Ígneo",
    "t": "fuego",
    "d": 26,
    "lvl": 21
   }
  ]
 },
 "arcanine": {
  "name": "Arcanine",
  "id": 59,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
  "type": "fuego",
  "typeReal": "fuego",
  "hp": 90,
  "learnset": [
   {
    "n": "Derribo",
    "t": "normal",
    "d": 36,
    "lvl": 1
   },
   {
    "n": "Doble Filo",
    "t": "normal",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 24,
    "lvl": 1
   },
   {
    "n": "Rugido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Ascuas",
    "t": "fuego",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Lanzallamas",
    "t": "fuego",
    "d": 36,
    "lvl": 1
   },
   {
    "n": "Agilidad",
    "t": "psiquico",
    "d": 9,
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
  "hp": 40,
  "learnset": [
   {
    "n": "Burbuja",
    "t": "agua",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Hidrochorro",
    "t": "agua",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Destructor",
    "t": "normal",
    "d": 16,
    "lvl": 4
   },
   {
    "n": "Hipnosis",
    "t": "psiquico",
    "d": 9,
    "lvl": 7
   },
   {
    "n": "Disparo Lodo",
    "t": "tierra",
    "d": 22,
    "lvl": 12
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 16,
    "lvl": 13
   },
   {
    "n": "Rayo Burbuja",
    "t": "agua",
    "d": 26,
    "lvl": 18
   },
   {
    "n": "Doble Bofetón",
    "t": "normal",
    "d": 8,
    "lvl": 19
   }
  ]
 },
 "poliwhirl": {
  "name": "Poliwhirl",
  "id": 61,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
  "type": "agua",
  "typeReal": "agua",
  "hp": 65,
  "learnset": [
   {
    "n": "Destructor",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Hipnosis",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Burbuja",
    "t": "agua",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Disparo Lodo",
    "t": "tierra",
    "d": 22,
    "lvl": 1
   },
   {
    "n": "Hidrochorro",
    "t": "agua",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Rayo Burbuja",
    "t": "agua",
    "d": 26,
    "lvl": 18
   },
   {
    "n": "Doble Bofetón",
    "t": "normal",
    "d": 8,
    "lvl": 19
   }
  ]
 },
 "poliwrath": {
  "name": "Poliwrath",
  "id": 62,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
  "type": "agua",
  "typeReal": "agua · lucha",
  "hp": 90,
  "learnset": [
   {
    "n": "Destructor",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Doble Bofetón",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Golpe Cuerpo",
    "t": "normal",
    "d": 34,
    "lvl": 1
   },
   {
    "n": "Doble Filo",
    "t": "normal",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Neblina",
    "t": "hielo",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Hidrobomba",
    "t": "agua",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Rayo Burbuja",
    "t": "agua",
    "d": 26,
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
  "hp": 25,
  "learnset": [
   {
    "n": "Teletransporte",
    "t": "psiquico",
    "d": 9,
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
  "hp": 40,
  "learnset": [
   {
    "n": "Confusión",
    "t": "psiquico",
    "d": 20,
    "lvl": 1
   },
   {
    "n": "Teletransporte",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Kinético",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Destello",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Hipnosis",
    "t": "psiquico",
    "d": 9,
    "lvl": 6
   },
   {
    "n": "Paz Mental",
    "t": "psiquico",
    "d": 9,
    "lvl": 11
   },
   {
    "n": "Cambio de Banda",
    "t": "psiquico",
    "d": 9,
    "lvl": 15
   },
   {
    "n": "Anulación",
    "t": "normal",
    "d": 9,
    "lvl": 18
   }
  ]
 },
 "alakazam": {
  "name": "Alakazam",
  "id": 65,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
  "type": "psiquico",
  "typeReal": "psiquico",
  "hp": 55,
  "learnset": [
   {
    "n": "Confusión",
    "t": "psiquico",
    "d": 20,
    "lvl": 1
   },
   {
    "n": "Teletransporte",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Barrera",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Kinético",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Destello",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Otra Vez",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Hipnosis",
    "t": "psiquico",
    "d": 9,
    "lvl": 6
   },
   {
    "n": "Cambio de Banda",
    "t": "psiquico",
    "d": 9,
    "lvl": 15
   }
  ]
 },
 "machop": {
  "name": "Machop",
  "id": 66,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
  "type": "lucha",
  "typeReal": "lucha",
  "hp": 70,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Patada Baja",
    "t": "lucha",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Golpe Roca",
    "t": "lucha",
    "d": 16,
    "lvl": 6
   },
   {
    "n": "Foco Energía",
    "t": "normal",
    "d": 9,
    "lvl": 7
   },
   {
    "n": "Venganza",
    "t": "normal",
    "d": 9,
    "lvl": 8
   },
   {
    "n": "Puño Bala",
    "t": "acero",
    "d": 16,
    "lvl": 11
   },
   {
    "n": "Puntapié",
    "t": "lucha",
    "d": 26,
    "lvl": 12
   }
  ]
 },
 "machoke": {
  "name": "Machoke",
  "id": 67,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
  "type": "lucha",
  "typeReal": "lucha",
  "hp": 80,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Patada Baja",
    "t": "lucha",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Foco Energía",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Venganza",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Golpe Roca",
    "t": "lucha",
    "d": 16,
    "lvl": 6
   },
   {
    "n": "Puño Bala",
    "t": "acero",
    "d": 16,
    "lvl": 11
   },
   {
    "n": "Puntapié",
    "t": "lucha",
    "d": 26,
    "lvl": 12
   }
  ]
 },
 "machamp": {
  "name": "Machamp",
  "id": 68,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
  "type": "lucha",
  "typeReal": "lucha",
  "hp": 90,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Patada Baja",
    "t": "lucha",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Contraataque",
    "t": "lucha",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Fuerza",
    "t": "normal",
    "d": 32,
    "lvl": 1
   },
   {
    "n": "Foco Energía",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Venganza",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Otra Vez",
    "t": "normal",
    "d": 9,
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
  "hp": 50,
  "learnset": [
   {
    "n": "Látigo Cepa",
    "t": "planta",
    "d": 18,
    "lvl": 1
   },
   {
    "n": "Desarrollo",
    "t": "normal",
    "d": 9,
    "lvl": 6
   },
   {
    "n": "Constricción",
    "t": "normal",
    "d": 8,
    "lvl": 11
   },
   {
    "n": "Somnífero",
    "t": "planta",
    "d": 9,
    "lvl": 15
   },
   {
    "n": "Polvo Veneno",
    "t": "veneno",
    "d": 9,
    "lvl": 17
   },
   {
    "n": "Paralizador",
    "t": "planta",
    "d": 9,
    "lvl": 19
   },
   {
    "n": "Ácido",
    "t": "veneno",
    "d": 16,
    "lvl": 23
   },
   {
    "n": "Puya Nociva",
    "t": "veneno",
    "d": 32,
    "lvl": 26
   }
  ]
 },
 "weepinbell": {
  "name": "Weepinbell",
  "id": 70,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
  "type": "planta",
  "typeReal": "planta · veneno",
  "hp": 65,
  "learnset": [
   {
    "n": "Látigo Cepa",
    "t": "planta",
    "d": 18,
    "lvl": 1
   },
   {
    "n": "Constricción",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Desarrollo",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Somnífero",
    "t": "planta",
    "d": 9,
    "lvl": 15
   },
   {
    "n": "Polvo Veneno",
    "t": "veneno",
    "d": 9,
    "lvl": 17
   },
   {
    "n": "Paralizador",
    "t": "planta",
    "d": 9,
    "lvl": 19
   },
   {
    "n": "Ácido",
    "t": "veneno",
    "d": 16,
    "lvl": 24
   },
   {
    "n": "Desarme",
    "t": "siniestro",
    "d": 26,
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
  "hp": 80,
  "learnset": [
   {
    "n": "Danza Espada",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Atizar",
    "t": "normal",
    "d": 32,
    "lvl": 1
   },
   {
    "n": "Látigo Cepa",
    "t": "planta",
    "d": 18,
    "lvl": 1
   },
   {
    "n": "Ácido",
    "t": "veneno",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Desarrollo",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Hoja Afilada",
    "t": "planta",
    "d": 22,
    "lvl": 1
   },
   {
    "n": "Paralizador",
    "t": "planta",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Somnífero",
    "t": "planta",
    "d": 9,
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
  "hp": 40,
  "learnset": [
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Supersónico",
    "t": "normal",
    "d": 9,
    "lvl": 6
   },
   {
    "n": "Burbuja",
    "t": "agua",
    "d": 16,
    "lvl": 6
   },
   {
    "n": "Hidropulso",
    "t": "agua",
    "d": 24,
    "lvl": 11
   },
   {
    "n": "Restricción",
    "t": "normal",
    "d": 8,
    "lvl": 12
   },
   {
    "n": "Púas Tóxicas",
    "t": "veneno",
    "d": 9,
    "lvl": 13
   },
   {
    "n": "Infortunio",
    "t": "fantasma",
    "d": 26,
    "lvl": 18
   },
   {
    "n": "Ácido",
    "t": "veneno",
    "d": 16,
    "lvl": 19
   }
  ]
 },
 "tentacruel": {
  "name": "Tentacruel",
  "id": 73,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
  "type": "agua",
  "typeReal": "agua · veneno",
  "hp": 80,
  "learnset": [
   {
    "n": "Picotazo Veneno",
    "t": "veneno",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Supersónico",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Niebla",
    "t": "hielo",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Restricción",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Manto Espejo",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Estrujón",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Clonatipo",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Burbuja",
    "t": "agua",
    "d": 16,
    "lvl": 6
   }
  ]
 },
 "geodude": {
  "name": "Geodude",
  "id": 74,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
  "type": "roca",
  "typeReal": "roca · tierra",
  "hp": 40,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Rizo Defensa",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Ataque Arena",
    "t": "tierra",
    "d": 9,
    "lvl": 3
   },
   {
    "n": "Tormenta de Arena",
    "t": "roca",
    "d": 9,
    "lvl": 4
   },
   {
    "n": "Venganza",
    "t": "normal",
    "d": 9,
    "lvl": 6
   },
   {
    "n": "Chapoteo Lodo",
    "t": "tierra",
    "d": 9,
    "lvl": 6
   },
   {
    "n": "Pulimento",
    "t": "roca",
    "d": 9,
    "lvl": 6
   },
   {
    "n": "Bofetón Lodo",
    "t": "tierra",
    "d": 8,
    "lvl": 9
   }
  ]
 },
 "graveler": {
  "name": "Graveler",
  "id": 75,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
  "type": "roca",
  "typeReal": "roca · tierra",
  "hp": 55,
  "learnset": [
   {
    "n": "Ataque Arena",
    "t": "tierra",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Lanzarrocas",
    "t": "roca",
    "d": 20,
    "lvl": 1
   },
   {
    "n": "Rizo Defensa",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Venganza",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Chapoteo Lodo",
    "t": "tierra",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Pulimento",
    "t": "roca",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Tormenta de Arena",
    "t": "roca",
    "d": 9,
    "lvl": 4
   }
  ]
 },
 "golem": {
  "name": "Golem",
  "id": 76,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
  "type": "roca",
  "typeReal": "roca · tierra",
  "hp": 80,
  "learnset": [
   {
    "n": "Megapuño",
    "t": "normal",
    "d": 32,
    "lvl": 1
   },
   {
    "n": "Ataque Arena",
    "t": "tierra",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Lanzarrocas",
    "t": "roca",
    "d": 20,
    "lvl": 1
   },
   {
    "n": "Rizo Defensa",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Venganza",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Chapoteo Lodo",
    "t": "tierra",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Pulimento",
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
  "hp": 50,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Ataque Rápido",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 5
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 9
   },
   {
    "n": "Doble Golpe",
    "t": "normal",
    "d": 14,
    "lvl": 9
   },
   {
    "n": "Rueda Fuego",
    "t": "fuego",
    "d": 24,
    "lvl": 13
   },
   {
    "n": "Ascuas",
    "t": "fuego",
    "d": 16,
    "lvl": 14
   },
   {
    "n": "Doble Patada",
    "t": "lucha",
    "d": 12,
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
  "hp": 65,
  "learnset": [
   {
    "n": "Perforador",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Ascuas",
    "t": "fuego",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Hipnosis",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Ataque Rápido",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Megacuerno",
    "t": "bicho",
    "d": 40,
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
  "hp": 90,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Maldición",
    "t": "fantasma",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Bostezo",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 6
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 16,
    "lvl": 13
   },
   {
    "n": "Confusión",
    "t": "psiquico",
    "d": 20,
    "lvl": 17
   },
   {
    "n": "Hidropulso",
    "t": "agua",
    "d": 24,
    "lvl": 18
   },
   {
    "n": "Anulación",
    "t": "normal",
    "d": 9,
    "lvl": 24
   }
  ]
 },
 "slowbro": {
  "name": "Slowbro",
  "id": 80,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
  "type": "agua",
  "typeReal": "agua · psiquico",
  "hp": 95,
  "learnset": [
   {
    "n": "Pisotón",
    "t": "normal",
    "d": 26,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Maldición",
    "t": "fantasma",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Bostezo",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Pulso Cura",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 16,
    "lvl": 13
   },
   {
    "n": "Confusión",
    "t": "psiquico",
    "d": 20,
    "lvl": 17
   }
  ]
 },
 "magnemite": {
  "name": "Magnemite",
  "id": 81,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
  "type": "electrico",
  "typeReal": "electrico · acero",
  "hp": 25,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Eco Metálico",
    "t": "acero",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Impactrueno",
    "t": "electrico",
    "d": 16,
    "lvl": 6
   },
   {
    "n": "Bomba Imán",
    "t": "acero",
    "d": 24,
    "lvl": 7
   },
   {
    "n": "Supersónico",
    "t": "normal",
    "d": 9,
    "lvl": 11
   },
   {
    "n": "Bola Voltio",
    "t": "electrico",
    "d": 9,
    "lvl": 12
   },
   {
    "n": "Pantalla de Luz",
    "t": "psiquico",
    "d": 9,
    "lvl": 13
   },
   {
    "n": "Bomba Sónica",
    "t": "normal",
    "d": 9,
    "lvl": 16
   }
  ]
 },
 "magneton": {
  "name": "Magneton",
  "id": 82,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
  "type": "electrico",
  "typeReal": "electrico · acero",
  "hp": 50,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Supersónico",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Impactrueno",
    "t": "electrico",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Eco Metálico",
    "t": "acero",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Bomba Imán",
    "t": "acero",
    "d": 24,
    "lvl": 1
   },
   {
    "n": "Campo Eléctrico",
    "t": "electrico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Bola Voltio",
    "t": "electrico",
    "d": 9,
    "lvl": 12
   },
   {
    "n": "Pantalla de Luz",
    "t": "psiquico",
    "d": 9,
    "lvl": 13
   }
  ]
 },
 "farfetchd": {
  "name": "Farfetch’d",
  "id": 83,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
  "type": "normal",
  "typeReal": "normal · volador",
  "hp": 52,
  "learnset": [
   {
    "n": "Picotazo",
    "t": "volador",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Ataque Rápido",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Espejo",
    "t": "volador",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Amago",
    "t": "normal",
    "d": 12,
    "lvl": 1
   },
   {
    "n": "Puya Nociva",
    "t": "veneno",
    "d": 32,
    "lvl": 1
   },
   {
    "n": "Pájaro Osado",
    "t": "volador",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Foco Energía",
    "t": "normal",
    "d": 9,
    "lvl": 4
   },
   {
    "n": "Ataque Arena",
    "t": "tierra",
    "d": 9,
    "lvl": 6
   }
  ]
 },
 "doduo": {
  "name": "Doduo",
  "id": 84,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
  "type": "normal",
  "typeReal": "normal · volador",
  "hp": 35,
  "learnset": [
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Picotazo",
    "t": "volador",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Ataque Rápido",
    "t": "normal",
    "d": 16,
    "lvl": 5
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 8
   },
   {
    "n": "Persecución",
    "t": "siniestro",
    "d": 16,
    "lvl": 9
   },
   {
    "n": "Ataque Furia",
    "t": "normal",
    "d": 8,
    "lvl": 13
   },
   {
    "n": "Picoteo",
    "t": "volador",
    "d": 24,
    "lvl": 14
   },
   {
    "n": "Ataque Ala",
    "t": "volador",
    "d": 24,
    "lvl": 15
   }
  ]
 },
 "dodrio": {
  "name": "Dodrio",
  "id": 85,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
  "type": "normal",
  "typeReal": "normal · volador",
  "hp": 60,
  "learnset": [
   {
    "n": "Ataque Furia",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Supersónico",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Picotazo",
    "t": "volador",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Ataque Rápido",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Espejo",
    "t": "volador",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Persecución",
    "t": "siniestro",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Picoteo",
    "t": "volador",
    "d": 24,
    "lvl": 1
   }
  ]
 },
 "seel": {
  "name": "Seel",
  "id": 86,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
  "type": "agua",
  "typeReal": "agua",
  "hp": 65,
  "learnset": [
   {
    "n": "Golpe Cabeza",
    "t": "normal",
    "d": 28,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 16,
    "lvl": 7
   },
   {
    "n": "Encanto",
    "t": "hada",
    "d": 9,
    "lvl": 7
   },
   {
    "n": "Hidrochorro",
    "t": "agua",
    "d": 9,
    "lvl": 7
   },
   {
    "n": "Otra Vez",
    "t": "normal",
    "d": 9,
    "lvl": 8
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 9
   },
   {
    "n": "Acua Jet",
    "t": "agua",
    "d": 16,
    "lvl": 12
   },
   {
    "n": "Esquirla Helada",
    "t": "hielo",
    "d": 16,
    "lvl": 16
   }
  ]
 },
 "dewgong": {
  "name": "Dewgong",
  "id": 87,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
  "type": "agua",
  "typeReal": "agua · hielo",
  "hp": 90,
  "learnset": [
   {
    "n": "Golpe Cabeza",
    "t": "normal",
    "d": 28,
    "lvl": 1
   },
   {
    "n": "Perforador",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Rayo Burbuja",
    "t": "agua",
    "d": 26,
    "lvl": 1
   },
   {
    "n": "Rayo Aurora",
    "t": "hielo",
    "d": 26,
    "lvl": 1
   },
   {
    "n": "Viento Hielo",
    "t": "hielo",
    "d": 22,
    "lvl": 1
   },
   {
    "n": "Otra Vez",
    "t": "normal",
    "d": 9,
    "lvl": 1
   }
  ]
 },
 "grimer": {
  "name": "Grimer",
  "id": 88,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
  "type": "veneno",
  "typeReal": "veneno",
  "hp": 80,
  "learnset": [
   {
    "n": "Destructor",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Gas Venenoso",
    "t": "veneno",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Fortaleza",
    "t": "normal",
    "d": 9,
    "lvl": 4
   },
   {
    "n": "Bofetón Lodo",
    "t": "tierra",
    "d": 8,
    "lvl": 7
   },
   {
    "n": "Anulación",
    "t": "normal",
    "d": 9,
    "lvl": 8
   },
   {
    "n": "Residuos",
    "t": "veneno",
    "d": 26,
    "lvl": 13
   },
   {
    "n": "Polución",
    "t": "veneno",
    "d": 12,
    "lvl": 18
   },
   {
    "n": "Disparo Lodo",
    "t": "tierra",
    "d": 22,
    "lvl": 18
   }
  ]
 },
 "muk": {
  "name": "Muk",
  "id": 89,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
  "type": "veneno",
  "typeReal": "veneno",
  "hp": 105,
  "learnset": [
   {
    "n": "Destructor",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Fortaleza",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Niebla",
    "t": "hielo",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Gas Venenoso",
    "t": "veneno",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Bofetón Lodo",
    "t": "tierra",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Fuerza Lunar",
    "t": "hada",
    "d": 38,
    "lvl": 1
   },
   {
    "n": "Trampa Venenosa",
    "t": "veneno",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Anulación",
    "t": "normal",
    "d": 9,
    "lvl": 8
   }
  ]
 },
 "shellder": {
  "name": "Shellder",
  "id": 90,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
  "type": "agua",
  "typeReal": "agua",
  "hp": 30,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Refugio",
    "t": "agua",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Carámbano",
    "t": "hielo",
    "d": 10,
    "lvl": 8
   },
   {
    "n": "Esquirla Helada",
    "t": "hielo",
    "d": 16,
    "lvl": 8
   },
   {
    "n": "Supersónico",
    "t": "normal",
    "d": 9,
    "lvl": 15
   },
   {
    "n": "Torbellino",
    "t": "agua",
    "d": 14,
    "lvl": 16
   },
   {
    "n": "Rayo Aurora",
    "t": "hielo",
    "d": 26,
    "lvl": 22
   }
  ]
 },
 "cloyster": {
  "name": "Cloyster",
  "id": 91,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
  "type": "agua",
  "typeReal": "agua · hielo",
  "hp": 50,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Doble Ataque",
    "t": "bicho",
    "d": 10,
    "lvl": 1
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Supersónico",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Hidrobomba",
    "t": "agua",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Rayo Hielo",
    "t": "hielo",
    "d": 36,
    "lvl": 1
   },
   {
    "n": "Rayo Aurora",
    "t": "hielo",
    "d": 26,
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
  "hp": 30,
  "learnset": [
   {
    "n": "Hipnosis",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Lengüetazo",
    "t": "fantasma",
    "d": 12,
    "lvl": 1
   },
   {
    "n": "Polución",
    "t": "veneno",
    "d": 12,
    "lvl": 1
   },
   {
    "n": "Impresionar",
    "t": "fantasma",
    "d": 12,
    "lvl": 1
   },
   {
    "n": "Gas Venenoso",
    "t": "veneno",
    "d": 9,
    "lvl": 6
   },
   {
    "n": "Rencor",
    "t": "fantasma",
    "d": 9,
    "lvl": 8
   },
   {
    "n": "Infortunio",
    "t": "fantasma",
    "d": 26,
    "lvl": 11
   },
   {
    "n": "Vendetta",
    "t": "siniestro",
    "d": 20,
    "lvl": 12
   }
  ]
 },
 "haunter": {
  "name": "Haunter",
  "id": 93,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
  "type": "fantasma",
  "typeReal": "fantasma · veneno",
  "hp": 45,
  "learnset": [
   {
    "n": "Hipnosis",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Lengüetazo",
    "t": "fantasma",
    "d": 12,
    "lvl": 1
   },
   {
    "n": "Polución",
    "t": "veneno",
    "d": 12,
    "lvl": 1
   },
   {
    "n": "Rencor",
    "t": "fantasma",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Impresionar",
    "t": "fantasma",
    "d": 12,
    "lvl": 1
   },
   {
    "n": "Gas Venenoso",
    "t": "veneno",
    "d": 9,
    "lvl": 6
   },
   {
    "n": "Infortunio",
    "t": "fantasma",
    "d": 26,
    "lvl": 11
   },
   {
    "n": "Vendetta",
    "t": "siniestro",
    "d": 20,
    "lvl": 12
   }
  ]
 },
 "gengar": {
  "name": "Gengar",
  "id": 94,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
  "type": "fantasma",
  "typeReal": "fantasma · veneno",
  "hp": 60,
  "learnset": [
   {
    "n": "Anulación",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Hipnosis",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Niebla",
    "t": "hielo",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Lengüetazo",
    "t": "fantasma",
    "d": 12,
    "lvl": 1
   },
   {
    "n": "Polución",
    "t": "veneno",
    "d": 12,
    "lvl": 1
   },
   {
    "n": "Rencor",
    "t": "fantasma",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Canto Mortal",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Impresionar",
    "t": "fantasma",
    "d": 12,
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
  "hp": 35,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Chirrido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Rodar",
    "t": "roca",
    "d": 12,
    "lvl": 1
   },
   {
    "n": "Chapoteo Lodo",
    "t": "tierra",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Maldición",
    "t": "fantasma",
    "d": 9,
    "lvl": 4
   },
   {
    "n": "Antiaéreo",
    "t": "roca",
    "d": 20,
    "lvl": 4
   },
   {
    "n": "Trampa Rocas",
    "t": "roca",
    "d": 9,
    "lvl": 5
   },
   {
    "n": "Atadura",
    "t": "normal",
    "d": 8,
    "lvl": 8
   }
  ]
 },
 "drowzee": {
  "name": "Drowzee",
  "id": 96,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
  "type": "psiquico",
  "typeReal": "psiquico",
  "hp": 60,
  "learnset": [
   {
    "n": "Destructor",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Hipnosis",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Anulación",
    "t": "normal",
    "d": 9,
    "lvl": 7
   },
   {
    "n": "Confusión",
    "t": "psiquico",
    "d": 20,
    "lvl": 11
   },
   {
    "n": "Golpe Cabeza",
    "t": "normal",
    "d": 28,
    "lvl": 17
   },
   {
    "n": "Psicorrayo",
    "t": "psiquico",
    "d": 26,
    "lvl": 21
   },
   {
    "n": "Gas Venenoso",
    "t": "veneno",
    "d": 9,
    "lvl": 21
   },
   {
    "n": "Meditación",
    "t": "psiquico",
    "d": 9,
    "lvl": 27
   }
  ]
 },
 "hypno": {
  "name": "Hypno",
  "id": 97,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
  "type": "psiquico",
  "typeReal": "psiquico",
  "hp": 85,
  "learnset": [
   {
    "n": "Destructor",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Anulación",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Confusión",
    "t": "psiquico",
    "d": 20,
    "lvl": 1
   },
   {
    "n": "Hipnosis",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Barrera",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Pesadilla",
    "t": "fantasma",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Trapicheo",
    "t": "siniestro",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Maquinación",
    "t": "siniestro",
    "d": 9,
    "lvl": 1
   }
  ]
 },
 "krabby": {
  "name": "Krabby",
  "id": 98,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
  "type": "agua",
  "typeReal": "agua",
  "hp": 30,
  "learnset": [
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Burbuja",
    "t": "agua",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Chapoteo Lodo",
    "t": "tierra",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 5
   },
   {
    "n": "Garra Metal",
    "t": "acero",
    "d": 20,
    "lvl": 8
   },
   {
    "n": "Agarre",
    "t": "normal",
    "d": 22,
    "lvl": 12
   },
   {
    "n": "Rayo Burbuja",
    "t": "agua",
    "d": 26,
    "lvl": 15
   },
   {
    "n": "Fortaleza",
    "t": "normal",
    "d": 9,
    "lvl": 16
   }
  ]
 },
 "kingler": {
  "name": "Kingler",
  "id": 99,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
  "type": "agua",
  "typeReal": "agua",
  "hp": 55,
  "learnset": [
   {
    "n": "Agarre",
    "t": "normal",
    "d": 22,
    "lvl": 1
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Agilidad",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Fortaleza",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Amnesia",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Burbuja",
    "t": "agua",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Garra Metal",
    "t": "acero",
    "d": 20,
    "lvl": 1
   }
  ]
 },
 "voltorb": {
  "name": "Voltorb",
  "id": 100,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
  "type": "electrico",
  "typeReal": "electrico",
  "hp": 40,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Carga",
    "t": "electrico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Impactrueno",
    "t": "electrico",
    "d": 16,
    "lvl": 4
   },
   {
    "n": "Onda Anómala",
    "t": "electrico",
    "d": 9,
    "lvl": 6
   },
   {
    "n": "Chirrido",
    "t": "normal",
    "d": 9,
    "lvl": 8
   },
   {
    "n": "Bomba Sónica",
    "t": "normal",
    "d": 9,
    "lvl": 15
   },
   {
    "n": "Rayo Carga",
    "t": "electrico",
    "d": 20,
    "lvl": 16
   },
   {
    "n": "Chispa",
    "t": "electrico",
    "d": 26,
    "lvl": 21
   }
  ]
 },
 "electrode": {
  "name": "Electrode",
  "id": 101,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
  "type": "electrico",
  "typeReal": "electrico",
  "hp": 60,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Bomba Sónica",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Impactrueno",
    "t": "electrico",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Chirrido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Carga",
    "t": "electrico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Onda Anómala",
    "t": "electrico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Aura Magnética",
    "t": "electrico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Rayo Carga",
    "t": "electrico",
    "d": 20,
    "lvl": 16
   }
  ]
 },
 "exeggcute": {
  "name": "Exeggcute",
  "id": 102,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
  "type": "planta",
  "typeReal": "planta · psiquico",
  "hp": 60,
  "learnset": [
   {
    "n": "Absorber",
    "t": "planta",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Hipnosis",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Bombardeo",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Alboroto",
    "t": "normal",
    "d": 36,
    "lvl": 1
   },
   {
    "n": "Reflejo",
    "t": "psiquico",
    "d": 9,
    "lvl": 7
   },
   {
    "n": "Drenadoras",
    "t": "planta",
    "d": 9,
    "lvl": 13
   },
   {
    "n": "Megaagotar",
    "t": "planta",
    "d": 16,
    "lvl": 15
   },
   {
    "n": "Semilladora",
    "t": "planta",
    "d": 10,
    "lvl": 17
   }
  ]
 },
 "exeggutor": {
  "name": "Exeggutor",
  "id": 103,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
  "type": "planta",
  "typeReal": "planta · psiquico",
  "hp": 95,
  "learnset": [
   {
    "n": "Absorber",
    "t": "planta",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Megaagotar",
    "t": "planta",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Drenadoras",
    "t": "planta",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Rayo Solar",
    "t": "planta",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Paralizador",
    "t": "planta",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Confusión",
    "t": "psiquico",
    "d": 20,
    "lvl": 1
   },
   {
    "n": "Hipnosis",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Reflejo",
    "t": "psiquico",
    "d": 9,
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
  "hp": 50,
  "learnset": [
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Bofetón Lodo",
    "t": "tierra",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 5
   },
   {
    "n": "Hueso Palo",
    "t": "tierra",
    "d": 26,
    "lvl": 9
   },
   {
    "n": "Golpe Cabeza",
    "t": "normal",
    "d": 28,
    "lvl": 13
   },
   {
    "n": "Represalia",
    "t": "normal",
    "d": 28,
    "lvl": 16
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 17
   },
   {
    "n": "Lanzamiento",
    "t": "siniestro",
    "d": 9,
    "lvl": 20
   }
  ]
 },
 "marowak": {
  "name": "Marowak",
  "id": 105,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
  "type": "tierra",
  "typeReal": "tierra",
  "hp": 60,
  "learnset": [
   {
    "n": "Danza Espada",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Golpe Cabeza",
    "t": "normal",
    "d": 28,
    "lvl": 1
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Chirrido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Hueso Palo",
    "t": "tierra",
    "d": 26,
    "lvl": 1
   },
   {
    "n": "Bofetón Lodo",
    "t": "tierra",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Represalia",
    "t": "normal",
    "d": 28,
    "lvl": 16
   }
  ]
 },
 "hitmonlee": {
  "name": "Hitmonlee",
  "id": 106,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
  "type": "lucha",
  "typeReal": "lucha",
  "hp": 50,
  "learnset": [
   {
    "n": "Doble Patada",
    "t": "lucha",
    "d": 12,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Sorpresa",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Refuerzo",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Desquite",
    "t": "lucha",
    "d": 24,
    "lvl": 1
   },
   {
    "n": "Amago",
    "t": "normal",
    "d": 12,
    "lvl": 1
   },
   {
    "n": "A Bocajarro",
    "t": "lucha",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Puntapié",
    "t": "lucha",
    "d": 26,
    "lvl": 1
   }
  ]
 },
 "hitmonchan": {
  "name": "Hitmonchan",
  "id": 107,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
  "type": "lucha",
  "typeReal": "lucha",
  "hp": 50,
  "learnset": [
   {
    "n": "Puño Cometa",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Foco Energía",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Sorpresa",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Puño Certero",
    "t": "lucha",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Refuerzo",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Desquite",
    "t": "lucha",
    "d": 24,
    "lvl": 1
   },
   {
    "n": "Amago",
    "t": "normal",
    "d": 12,
    "lvl": 1
   }
  ]
 },
 "lickitung": {
  "name": "Lickitung",
  "id": 108,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
  "type": "normal",
  "typeReal": "normal",
  "hp": 90,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Lengüetazo",
    "t": "fantasma",
    "d": 12,
    "lvl": 1
   },
   {
    "n": "Descanso",
    "t": "psiquico",
    "d": 9,
    "lvl": 6
   },
   {
    "n": "Rodar",
    "t": "roca",
    "d": 12,
    "lvl": 6
   },
   {
    "n": "Supersónico",
    "t": "normal",
    "d": 9,
    "lvl": 7
   },
   {
    "n": "Ácido",
    "t": "veneno",
    "d": 16,
    "lvl": 10
   },
   {
    "n": "Terratemblor",
    "t": "tierra",
    "d": 24,
    "lvl": 11
   },
   {
    "n": "Rizo Defensa",
    "t": "normal",
    "d": 9,
    "lvl": 12
   }
  ]
 },
 "koffing": {
  "name": "Koffing",
  "id": 109,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
  "type": "veneno",
  "typeReal": "veneno",
  "hp": 40,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Gas Venenoso",
    "t": "veneno",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Polución",
    "t": "veneno",
    "d": 12,
    "lvl": 9
   },
   {
    "n": "Buena Baza",
    "t": "siniestro",
    "d": 24,
    "lvl": 12
   },
   {
    "n": "Niebla Clara",
    "t": "veneno",
    "d": 20,
    "lvl": 12
   },
   {
    "n": "Autodestrucción",
    "t": "normal",
    "d": 40,
    "lvl": 17
   },
   {
    "n": "Residuos",
    "t": "veneno",
    "d": 26,
    "lvl": 21
   },
   {
    "n": "Pantalla de Humo",
    "t": "normal",
    "d": 9,
    "lvl": 25
   }
  ]
 },
 "weezing": {
  "name": "Weezing",
  "id": 110,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
  "type": "veneno",
  "typeReal": "veneno",
  "hp": 65,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Psicorrayo",
    "t": "psiquico",
    "d": 26,
    "lvl": 1
   },
   {
    "n": "Chirrido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Autodestrucción",
    "t": "normal",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Polución",
    "t": "veneno",
    "d": 12,
    "lvl": 1
   },
   {
    "n": "Gas Venenoso",
    "t": "veneno",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Onda Ígnea",
    "t": "fuego",
    "d": 38,
    "lvl": 1
   },
   {
    "n": "Doble Golpe",
    "t": "normal",
    "d": 14,
    "lvl": 1
   }
  ]
 },
 "rhyhorn": {
  "name": "Rhyhorn",
  "id": 111,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
  "type": "tierra",
  "typeReal": "tierra · roca",
  "hp": 80,
  "learnset": [
   {
    "n": "Ataque Arena",
    "t": "tierra",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Cornada",
    "t": "normal",
    "d": 26,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Antiaéreo",
    "t": "roca",
    "d": 20,
    "lvl": 5
   },
   {
    "n": "Terratemblor",
    "t": "tierra",
    "d": 24,
    "lvl": 6
   },
   {
    "n": "Pisotón",
    "t": "normal",
    "d": 26,
    "lvl": 10
   },
   {
    "n": "Golpe Roca",
    "t": "lucha",
    "d": 16,
    "lvl": 11
   }
  ]
 },
 "rhydon": {
  "name": "Rhydon",
  "id": 112,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
  "type": "tierra",
  "typeReal": "tierra · roca",
  "hp": 105,
  "learnset": [
   {
    "n": "Pisotón",
    "t": "normal",
    "d": 26,
    "lvl": 1
   },
   {
    "n": "Ataque Arena",
    "t": "tierra",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Cornada",
    "t": "normal",
    "d": 26,
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
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Contraataque",
    "t": "lucha",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Triturar",
    "t": "siniestro",
    "d": 32,
    "lvl": 1
   }
  ]
 },
 "chansey": {
  "name": "Chansey",
  "id": 113,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
  "type": "normal",
  "typeReal": "normal",
  "hp": 250,
  "learnset": [
   {
    "n": "Destructor",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Beso Dulce",
    "t": "hada",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Encanto",
    "t": "hada",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Antojo",
    "t": "normal",
    "d": 24,
    "lvl": 1
   },
   {
    "n": "Copión",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Voz Cautivadora",
    "t": "hada",
    "d": 16,
    "lvl": 1
   }
  ]
 },
 "tangela": {
  "name": "Tangela",
  "id": 114,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
  "type": "planta",
  "typeReal": "planta",
  "hp": 65,
  "learnset": [
   {
    "n": "Restricción",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Arraigo",
    "t": "planta",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Somnífero",
    "t": "planta",
    "d": 9,
    "lvl": 4
   },
   {
    "n": "Absorber",
    "t": "planta",
    "d": 8,
    "lvl": 10
   },
   {
    "n": "Confusión",
    "t": "psiquico",
    "d": 20,
    "lvl": 10
   },
   {
    "n": "Desarrollo",
    "t": "normal",
    "d": 9,
    "lvl": 13
   },
   {
    "n": "Bomba Ácida",
    "t": "veneno",
    "d": 16,
    "lvl": 15
   },
   {
    "n": "Doble Golpe",
    "t": "normal",
    "d": 14,
    "lvl": 18
   }
  ]
 },
 "kangaskhan": {
  "name": "Kangaskhan",
  "id": 115,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
  "type": "normal",
  "typeReal": "normal",
  "hp": 105,
  "learnset": [
   {
    "n": "Destructor",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Puño Cometa",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 4
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 24,
    "lvl": 7
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 13
   },
   {
    "n": "Pisotón",
    "t": "normal",
    "d": 26,
    "lvl": 16
   },
   {
    "n": "Sorpresa",
    "t": "normal",
    "d": 16,
    "lvl": 19
   }
  ]
 },
 "horsea": {
  "name": "Horsea",
  "id": 116,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
  "type": "agua",
  "typeReal": "agua",
  "hp": 30,
  "learnset": [
   {
    "n": "Burbuja",
    "t": "agua",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Pantalla de Humo",
    "t": "normal",
    "d": 9,
    "lvl": 8
   },
   {
    "n": "Foco Energía",
    "t": "normal",
    "d": 9,
    "lvl": 14
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 15
   },
   {
    "n": "Rayo Burbuja",
    "t": "agua",
    "d": 26,
    "lvl": 18
   },
   {
    "n": "Dragoaliento",
    "t": "dragon",
    "d": 24,
    "lvl": 20
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 16,
    "lvl": 22
   },
   {
    "n": "Cascada",
    "t": "agua",
    "d": 32,
    "lvl": 27
   }
  ]
 },
 "seadra": {
  "name": "Seadra",
  "id": 117,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
  "type": "agua",
  "typeReal": "agua",
  "hp": 55,
  "learnset": [
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Anulación",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Pantalla de Humo",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Burbuja",
    "t": "agua",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Niebla Clara",
    "t": "veneno",
    "d": 20,
    "lvl": 1
   },
   {
    "n": "Foco Energía",
    "t": "normal",
    "d": 9,
    "lvl": 14
   },
   {
    "n": "Rayo Burbuja",
    "t": "agua",
    "d": 26,
    "lvl": 18
   }
  ]
 },
 "goldeen": {
  "name": "Goldeen",
  "id": 118,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
  "type": "agua",
  "typeReal": "agua",
  "hp": 45,
  "learnset": [
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Picotazo",
    "t": "volador",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Hidrochorro",
    "t": "agua",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Supersónico",
    "t": "normal",
    "d": 9,
    "lvl": 10
   },
   {
    "n": "Ataque Rápido",
    "t": "normal",
    "d": 16,
    "lvl": 10
   },
   {
    "n": "Hidropulso",
    "t": "agua",
    "d": 24,
    "lvl": 10
   },
   {
    "n": "Cornada",
    "t": "normal",
    "d": 26,
    "lvl": 15
   },
   {
    "n": "Acua Aro",
    "t": "agua",
    "d": 9,
    "lvl": 21
   }
  ]
 },
 "seaking": {
  "name": "Seaking",
  "id": 119,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
  "type": "agua",
  "typeReal": "agua",
  "hp": 80,
  "learnset": [
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Supersónico",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Psicorrayo",
    "t": "psiquico",
    "d": 26,
    "lvl": 1
   },
   {
    "n": "Picotazo",
    "t": "volador",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Ataque Rápido",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Cabezazo",
    "t": "normal",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Hidrochorro",
    "t": "agua",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Hidropulso",
    "t": "agua",
    "d": 24,
    "lvl": 1
   }
  ]
 },
 "staryu": {
  "name": "Staryu",
  "id": 120,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
  "type": "agua",
  "typeReal": "agua",
  "hp": 30,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Fortaleza",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Psicoonda",
    "t": "psiquico",
    "d": 9,
    "lvl": 4
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 16,
    "lvl": 6
   },
   {
    "n": "Rayo Confuso",
    "t": "fantasma",
    "d": 9,
    "lvl": 8
   },
   {
    "n": "Giro Rápido",
    "t": "normal",
    "d": 20,
    "lvl": 10
   },
   {
    "n": "Recuperación",
    "t": "normal",
    "d": 9,
    "lvl": 15
   },
   {
    "n": "Camuflaje",
    "t": "normal",
    "d": 9,
    "lvl": 19
   }
  ]
 },
 "starmie": {
  "name": "Starmie",
  "id": 121,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
  "type": "agua",
  "typeReal": "agua · psiquico",
  "hp": 60,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Hidrobomba",
    "t": "agua",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Surf",
    "t": "agua",
    "d": 36,
    "lvl": 1
   },
   {
    "n": "Psicorrayo",
    "t": "psiquico",
    "d": 26,
    "lvl": 1
   },
   {
    "n": "Rayo Burbuja",
    "t": "agua",
    "d": 26,
    "lvl": 1
   },
   {
    "n": "Psíquico",
    "t": "psiquico",
    "d": 36,
    "lvl": 1
   },
   {
    "n": "Recuperación",
    "t": "normal",
    "d": 9,
    "lvl": 1
   }
  ]
 },
 "mr-mime": {
  "name": "Mr. Mime",
  "id": 122,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
  "type": "psiquico",
  "typeReal": "psiquico · hada",
  "hp": 40,
  "learnset": [
   {
    "n": "Destructor",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Barrera",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Copión",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Cambiafuerza",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Cambiadefensa",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Vasta Guardia",
    "t": "roca",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Anticipo",
    "t": "lucha",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Campo de Niebla",
    "t": "hada",
    "d": 9,
    "lvl": 1
   }
  ]
 },
 "scyther": {
  "name": "Scyther",
  "id": 123,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
  "type": "bicho",
  "typeReal": "bicho · volador",
  "hp": 70,
  "learnset": [
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Ataque Rápido",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Onda Vacío",
    "t": "lucha",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Foco Energía",
    "t": "normal",
    "d": 9,
    "lvl": 6
   },
   {
    "n": "Viento Plata",
    "t": "bicho",
    "d": 24,
    "lvl": 6
   },
   {
    "n": "Persecución",
    "t": "siniestro",
    "d": 16,
    "lvl": 11
   },
   {
    "n": "Golpe Aéreo",
    "t": "volador",
    "d": 24,
    "lvl": 11
   },
   {
    "n": "Amago",
    "t": "normal",
    "d": 12,
    "lvl": 12
   }
  ]
 },
 "jynx": {
  "name": "Jynx",
  "id": 124,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
  "type": "hielo",
  "typeReal": "hielo · psiquico",
  "hp": 65,
  "learnset": [
   {
    "n": "Destructor",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Lengüetazo",
    "t": "fantasma",
    "d": 12,
    "lvl": 1
   },
   {
    "n": "Beso Amoroso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Nieve Polvo",
    "t": "hielo",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Beso Dulce",
    "t": "hada",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Copión",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Beso Drenaje",
    "t": "hada",
    "d": 20,
    "lvl": 1
   },
   {
    "n": "Confusión",
    "t": "psiquico",
    "d": 20,
    "lvl": 12
   }
  ]
 },
 "electabuzz": {
  "name": "Electabuzz",
  "id": 125,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
  "type": "electrico",
  "typeReal": "electrico",
  "hp": 65,
  "learnset": [
   {
    "n": "Puño Trueno",
    "t": "electrico",
    "d": 30,
    "lvl": 1
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Ataque Rápido",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Carga",
    "t": "electrico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Patada Baja",
    "t": "lucha",
    "d": 9,
    "lvl": 8
   },
   {
    "n": "Onda Trueno",
    "t": "electrico",
    "d": 9,
    "lvl": 11
   },
   {
    "n": "Chispa",
    "t": "electrico",
    "d": 26,
    "lvl": 11
   },
   {
    "n": "Onda Voltio",
    "t": "electrico",
    "d": 24,
    "lvl": 15
   }
  ]
 },
 "magmar": {
  "name": "Magmar",
  "id": 126,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
  "type": "fuego",
  "typeReal": "fuego",
  "hp": 65,
  "learnset": [
   {
    "n": "Puño Fuego",
    "t": "fuego",
    "d": 30,
    "lvl": 1
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Ascuas",
    "t": "fuego",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Polución",
    "t": "veneno",
    "d": 12,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 6
   },
   {
    "n": "Rueda Fuego",
    "t": "fuego",
    "d": 24,
    "lvl": 11
   },
   {
    "n": "Finta",
    "t": "siniestro",
    "d": 24,
    "lvl": 12
   },
   {
    "n": "Niebla Clara",
    "t": "veneno",
    "d": 20,
    "lvl": 12
   }
  ]
 },
 "pinsir": {
  "name": "Pinsir",
  "id": 127,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
  "type": "bicho",
  "typeReal": "bicho",
  "hp": 65,
  "learnset": [
   {
    "n": "Agarre",
    "t": "normal",
    "d": 22,
    "lvl": 1
   },
   {
    "n": "Foco Energía",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Atadura",
    "t": "normal",
    "d": 8,
    "lvl": 7
   },
   {
    "n": "Sísmico",
    "t": "lucha",
    "d": 9,
    "lvl": 13
   },
   {
    "n": "Picadura",
    "t": "bicho",
    "d": 24,
    "lvl": 16
   },
   {
    "n": "Llave Vital",
    "t": "lucha",
    "d": 28,
    "lvl": 18
   },
   {
    "n": "Fortaleza",
    "t": "normal",
    "d": 9,
    "lvl": 19
   },
   {
    "n": "Tijera X",
    "t": "bicho",
    "d": 32,
    "lvl": 20
   }
  ]
 },
 "tauros": {
  "name": "Tauros",
  "id": 128,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
  "type": "normal",
  "typeReal": "normal",
  "hp": 75,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Furia",
    "t": "normal",
    "d": 8,
    "lvl": 4
   },
   {
    "n": "Avivar",
    "t": "normal",
    "d": 9,
    "lvl": 5
   },
   {
    "n": "Cornada",
    "t": "normal",
    "d": 26,
    "lvl": 8
   },
   {
    "n": "Vendetta",
    "t": "siniestro",
    "d": 20,
    "lvl": 10
   },
   {
    "n": "Cara Susto",
    "t": "normal",
    "d": 9,
    "lvl": 13
   },
   {
    "n": "Buena Baza",
    "t": "siniestro",
    "d": 24,
    "lvl": 15
   }
  ]
 },
 "magikarp": {
  "name": "Magikarp",
  "id": 129,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
  "type": "agua",
  "typeReal": "agua",
  "hp": 20,
  "learnset": [
   {
    "n": "Salpicadura",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 15
   },
   {
    "n": "Azote",
    "t": "normal",
    "d": 9,
    "lvl": 30
   }
  ]
 },
 "gyarados": {
  "name": "Gyarados",
  "id": 130,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
  "type": "agua",
  "typeReal": "agua · volador",
  "hp": 95,
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
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Saña",
    "t": "normal",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Salpicadura",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Azote",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Torbellino",
    "t": "agua",
    "d": 14,
    "lvl": 4
   },
   {
    "n": "Colmillo Hielo",
    "t": "hielo",
    "d": 26,
    "lvl": 8
   },
   {
    "n": "Salmuera",
    "t": "agua",
    "d": 26,
    "lvl": 12
   }
  ]
 },
 "lapras": {
  "name": "Lapras",
  "id": 131,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
  "type": "agua",
  "typeReal": "agua · hielo",
  "hp": 130,
  "learnset": [
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Canto",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Neblina",
    "t": "hielo",
    "d": 9,
    "lvl": 7
   },
   {
    "n": "Esquirla Helada",
    "t": "hielo",
    "d": 16,
    "lvl": 10
   },
   {
    "n": "Golpe Cuerpo",
    "t": "normal",
    "d": 34,
    "lvl": 13
   },
   {
    "n": "Hidropulso",
    "t": "agua",
    "d": 24,
    "lvl": 14
   },
   {
    "n": "Gota Vital",
    "t": "agua",
    "d": 9,
    "lvl": 15
   }
  ]
 },
 "ditto": {
  "name": "Ditto",
  "id": 132,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
  "type": "normal",
  "typeReal": "normal",
  "hp": 48,
  "learnset": [
   {
    "n": "Transformación",
    "t": "normal",
    "d": 9,
    "lvl": 1
   }
  ]
 },
 "eevee": {
  "name": "Eevee",
  "id": 133,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
  "type": "normal",
  "typeReal": "normal",
  "hp": 55,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Refuerzo",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Antojo",
    "t": "normal",
    "d": 24,
    "lvl": 1
   },
   {
    "n": "Ataque Arena",
    "t": "tierra",
    "d": 9,
    "lvl": 8
   },
   {
    "n": "Ojitos Tiernos",
    "t": "hada",
    "d": 9,
    "lvl": 9
   },
   {
    "n": "Doble Patada",
    "t": "lucha",
    "d": 12,
    "lvl": 10
   },
   {
    "n": "Meteoros",
    "t": "normal",
    "d": 24,
    "lvl": 10
   }
  ]
 },
 "vaporeon": {
  "name": "Vaporeon",
  "id": 134,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
  "type": "agua",
  "typeReal": "agua",
  "hp": 130,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Derribo",
    "t": "normal",
    "d": 36,
    "lvl": 1
   },
   {
    "n": "Doble Filo",
    "t": "normal",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Meteoros",
    "t": "normal",
    "d": 24,
    "lvl": 1
   },
   {
    "n": "Encanto",
    "t": "hada",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Relevo",
    "t": "normal",
    "d": 9,
    "lvl": 1
   }
  ]
 },
 "jolteon": {
  "name": "Jolteon",
  "id": 135,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
  "type": "electrico",
  "typeReal": "electrico",
  "hp": 65,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Derribo",
    "t": "normal",
    "d": 36,
    "lvl": 1
   },
   {
    "n": "Doble Filo",
    "t": "normal",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 24,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Meteoros",
    "t": "normal",
    "d": 24,
    "lvl": 1
   },
   {
    "n": "Encanto",
    "t": "hada",
    "d": 9,
    "lvl": 1
   }
  ]
 },
 "flareon": {
  "name": "Flareon",
  "id": 136,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
  "type": "fuego",
  "typeReal": "fuego",
  "hp": 65,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Derribo",
    "t": "normal",
    "d": 36,
    "lvl": 1
   },
   {
    "n": "Doble Filo",
    "t": "normal",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Agitacola",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Gruñido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Meteoros",
    "t": "normal",
    "d": 24,
    "lvl": 1
   },
   {
    "n": "Encanto",
    "t": "hada",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Relevo",
    "t": "normal",
    "d": 9,
    "lvl": 1
   }
  ]
 },
 "porygon": {
  "name": "Porygon",
  "id": 137,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
  "type": "normal",
  "typeReal": "normal",
  "hp": 65,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Conversión",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Conversión 2",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Impactrueno",
    "t": "electrico",
    "d": 16,
    "lvl": 5
   },
   {
    "n": "Onda Trueno",
    "t": "electrico",
    "d": 9,
    "lvl": 9
   },
   {
    "n": "Agilidad",
    "t": "psiquico",
    "d": 9,
    "lvl": 9
   },
   {
    "n": "Levitón",
    "t": "electrico",
    "d": 9,
    "lvl": 10
   },
   {
    "n": "Psicorrayo",
    "t": "psiquico",
    "d": 26,
    "lvl": 12
   }
  ]
 },
 "omanyte": {
  "name": "Omanyte",
  "id": 138,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
  "type": "roca",
  "typeReal": "roca · agua",
  "hp": 35,
  "learnset": [
   {
    "n": "Atadura",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Refugio",
    "t": "agua",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Restricción",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Rodar",
    "t": "roca",
    "d": 12,
    "lvl": 5
   },
   {
    "n": "Ataque Arena",
    "t": "tierra",
    "d": 9,
    "lvl": 10
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 24,
    "lvl": 13
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 16,
    "lvl": 19
   },
   {
    "n": "Disparo Lodo",
    "t": "tierra",
    "d": 22,
    "lvl": 25
   }
  ]
 },
 "omastar": {
  "name": "Omastar",
  "id": 139,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
  "type": "roca",
  "typeReal": "roca · agua",
  "hp": 70,
  "learnset": [
   {
    "n": "Atadura",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Ataque Arena",
    "t": "tierra",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Cornada",
    "t": "normal",
    "d": 26,
    "lvl": 1
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 24,
    "lvl": 1
   },
   {
    "n": "Supersónico",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Pistola Agua",
    "t": "agua",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Refugio",
    "t": "agua",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Venganza",
    "t": "normal",
    "d": 9,
    "lvl": 1
   }
  ]
 },
 "kabuto": {
  "name": "Kabuto",
  "id": 140,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
  "type": "roca",
  "typeReal": "roca · agua",
  "hp": 30,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Fortaleza",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Absorber",
    "t": "planta",
    "d": 8,
    "lvl": 13
   },
   {
    "n": "Acua Jet",
    "t": "agua",
    "d": 16,
    "lvl": 15
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 19
   },
   {
    "n": "Disparo Lodo",
    "t": "tierra",
    "d": 22,
    "lvl": 25
   },
   {
    "n": "Lanzarrocas",
    "t": "roca",
    "d": 20,
    "lvl": 30
   },
   {
    "n": "Ataque Arena",
    "t": "tierra",
    "d": 9,
    "lvl": 31
   }
  ]
 },
 "kabutops": {
  "name": "Kabutops",
  "id": 141,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
  "type": "roca",
  "typeReal": "roca · agua",
  "hp": 60,
  "learnset": [
   {
    "n": "Arañazo",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Absorber",
    "t": "planta",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Chirrido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Fortaleza",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Rayo Confuso",
    "t": "fantasma",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Corte Furia",
    "t": "bicho",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Amago",
    "t": "normal",
    "d": 12,
    "lvl": 1
   }
  ]
 },
 "aerodactyl": {
  "name": "Aerodactyl",
  "id": 142,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
  "type": "roca",
  "typeReal": "roca · volador",
  "hp": 80,
  "learnset": [
   {
    "n": "Ataque Ala",
    "t": "volador",
    "d": 24,
    "lvl": 1
   },
   {
    "n": "Colmillo Rayo",
    "t": "electrico",
    "d": 26,
    "lvl": 1
   },
   {
    "n": "Colmillo Hielo",
    "t": "hielo",
    "d": 26,
    "lvl": 1
   },
   {
    "n": "Colmillo Ígneo",
    "t": "fuego",
    "d": 26,
    "lvl": 1
   },
   {
    "n": "Cabeza de Hierro",
    "t": "acero",
    "d": 32,
    "lvl": 1
   },
   {
    "n": "Rugido",
    "t": "normal",
    "d": 9,
    "lvl": 7
   },
   {
    "n": "Agilidad",
    "t": "psiquico",
    "d": 9,
    "lvl": 8
   },
   {
    "n": "Mordisco",
    "t": "siniestro",
    "d": 24,
    "lvl": 15
   }
  ]
 },
 "snorlax": {
  "name": "Snorlax",
  "id": 143,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
  "type": "normal",
  "typeReal": "normal",
  "hp": 160,
  "learnset": [
   {
    "n": "Placaje",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Chirrido",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Metrónomo",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Lengüetazo",
    "t": "fantasma",
    "d": 12,
    "lvl": 1
   },
   {
    "n": "Azote",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Reserva",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Tragar",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Reciclaje",
    "t": "normal",
    "d": 9,
    "lvl": 1
   }
  ]
 },
 "articuno": {
  "name": "Articuno",
  "id": 144,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
  "type": "hielo",
  "typeReal": "hielo · volador",
  "hp": 90,
  "learnset": [
   {
    "n": "Tornado",
    "t": "volador",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Picotazo",
    "t": "volador",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Nieve Polvo",
    "t": "hielo",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Respiro",
    "t": "volador",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Viento Afín",
    "t": "volador",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Esquirla Helada",
    "t": "hielo",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Vendaval",
    "t": "volador",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Liofilización",
    "t": "hielo",
    "d": 28,
    "lvl": 1
   }
  ]
 },
 "zapdos": {
  "name": "Zapdos",
  "id": 145,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
  "type": "electrico",
  "typeReal": "electrico · volador",
  "hp": 90,
  "learnset": [
   {
    "n": "Picotazo",
    "t": "volador",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Impactrueno",
    "t": "electrico",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Electrocañón",
    "t": "electrico",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Respiro",
    "t": "volador",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Onda Trueno",
    "t": "electrico",
    "d": 9,
    "lvl": 13
   },
   {
    "n": "Picoteo",
    "t": "volador",
    "d": 24,
    "lvl": 15
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 16
   },
   {
    "n": "Agilidad",
    "t": "psiquico",
    "d": 9,
    "lvl": 25
   }
  ]
 },
 "moltres": {
  "name": "Moltres",
  "id": 146,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
  "type": "fuego",
  "typeReal": "fuego · volador",
  "hp": 90,
  "learnset": [
   {
    "n": "Tornado",
    "t": "volador",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Ataque Ala",
    "t": "volador",
    "d": 24,
    "lvl": 1
   },
   {
    "n": "Ascuas",
    "t": "fuego",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Picotazo",
    "t": "volador",
    "d": 14,
    "lvl": 1
   },
   {
    "n": "Respiro",
    "t": "volador",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Vendaval",
    "t": "volador",
    "d": 40,
    "lvl": 1
   },
   {
    "n": "Giro Fuego",
    "t": "fuego",
    "d": 14,
    "lvl": 13
   },
   {
    "n": "Tajo Aéreo",
    "t": "volador",
    "d": 30,
    "lvl": 24
   }
  ]
 },
 "dratini": {
  "name": "Dratini",
  "id": 147,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
  "type": "dragon",
  "typeReal": "dragon",
  "hp": 41,
  "learnset": [
   {
    "n": "Constricción",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Onda Trueno",
    "t": "electrico",
    "d": 9,
    "lvl": 8
   },
   {
    "n": "Ciclón",
    "t": "dragon",
    "d": 16,
    "lvl": 15
   },
   {
    "n": "Cola Dragón",
    "t": "dragon",
    "d": 24,
    "lvl": 15
   },
   {
    "n": "Furia Dragón",
    "t": "dragon",
    "d": 9,
    "lvl": 22
   },
   {
    "n": "Atizar",
    "t": "normal",
    "d": 32,
    "lvl": 29
   },
   {
    "n": "Acua Cola",
    "t": "agua",
    "d": 36,
    "lvl": 31
   }
  ]
 },
 "dragonair": {
  "name": "Dragonair",
  "id": 148,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
  "type": "dragon",
  "typeReal": "dragon",
  "hp": 61,
  "learnset": [
   {
    "n": "Constricción",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Onda Trueno",
    "t": "electrico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Ciclón",
    "t": "dragon",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Cola Dragón",
    "t": "dragon",
    "d": 24,
    "lvl": 15
   },
   {
    "n": "Furia Dragón",
    "t": "dragon",
    "d": 9,
    "lvl": 22
   },
   {
    "n": "Atizar",
    "t": "normal",
    "d": 32,
    "lvl": 29
   },
   {
    "n": "Acua Cola",
    "t": "agua",
    "d": 36,
    "lvl": 33
   }
  ]
 },
 "dragonite": {
  "name": "Dragonite",
  "id": 149,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
  "type": "dragon",
  "typeReal": "dragon · volador",
  "hp": 91,
  "learnset": [
   {
    "n": "Puño Fuego",
    "t": "fuego",
    "d": 30,
    "lvl": 1
   },
   {
    "n": "Puño Trueno",
    "t": "electrico",
    "d": 30,
    "lvl": 1
   },
   {
    "n": "Constricción",
    "t": "normal",
    "d": 8,
    "lvl": 1
   },
   {
    "n": "Malicioso",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Neblina",
    "t": "hielo",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Onda Trueno",
    "t": "electrico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Ciclón",
    "t": "dragon",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Velocidad Extrema",
    "t": "normal",
    "d": 32,
    "lvl": 1
   }
  ]
 },
 "mewtwo": {
  "name": "Mewtwo",
  "id": 150,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
  "type": "psiquico",
  "typeReal": "psiquico",
  "hp": 106,
  "learnset": [
   {
    "n": "Anulación",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Confusión",
    "t": "psiquico",
    "d": 20,
    "lvl": 1
   },
   {
    "n": "Teletransporte",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Rayo Confuso",
    "t": "fantasma",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Psicoonda",
    "t": "psiquico",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Aguzar",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Gota Vital",
    "t": "agua",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Poder Pasado",
    "t": "roca",
    "d": 24,
    "lvl": 8
   }
  ]
 },
 "mew": {
  "name": "Mew",
  "id": 151,
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
  "type": "psiquico",
  "typeReal": "psiquico",
  "hp": 100,
  "learnset": [
   {
    "n": "Destructor",
    "t": "normal",
    "d": 16,
    "lvl": 1
   },
   {
    "n": "Confusión",
    "t": "psiquico",
    "d": 20,
    "lvl": 1
   },
   {
    "n": "Mimético",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Clonatipo",
    "t": "normal",
    "d": 9,
    "lvl": 1
   },
   {
    "n": "Amnesia",
    "t": "psiquico",
    "d": 9,
    "lvl": 10
   },
   {
    "n": "Transformación",
    "t": "normal",
    "d": 9,
    "lvl": 10
   },
   {
    "n": "Meteoros",
    "t": "normal",
    "d": 24,
    "lvl": 11
   },
   {
    "n": "Megapuño",
    "t": "normal",
    "d": 32,
    "lvl": 20
   }
  ]
 }
};
const EVO = {
 "kadabra": { "aNivel": 36, "siguiente": "alakazam" },
 "machoke": { "aNivel": 35, "siguiente": "machamp" },
 "graveler": { "aNivel": 35, "siguiente": "golem" },
 "haunter": { "aNivel": 36, "siguiente": "gengar" },
 "vulpix": { "aNivel": 25, "siguiente": "ninetales" },
 "growlithe": { "aNivel": 30, "siguiente": "arcanine" },
 "poliwhirl": { "aNivel": 38, "siguiente": "poliwrath" },
 "shellder": { "aNivel": 30, "siguiente": "cloyster" },
 "staryu": { "aNivel": 25, "siguiente": "starmie" },
 "pikachu": { "aNivel": 30, "siguiente": "raichu" },
 "gloom": { "aNivel": 32, "siguiente": "vileplume" },
 "weepinbell": { "aNivel": 38, "siguiente": "victreebel" },
 "exeggcute": { "aNivel": 30, "siguiente": "exeggutor" },
 "nidorina": { "aNivel": 40, "siguiente": "nidoqueen" },
 "nidorino": { "aNivel": 40, "siguiente": "nidoking" },
 "clefairy": { "aNivel": 30, "siguiente": "clefable" },
 "jigglypuff": { "aNivel": 32, "siguiente": "wigglytuff" },
 "eevee": { "aNivel": 22, "elige": ["vaporeon", "jolteon", "flareon"] },
 "bulbasaur": {
  "aNivel": 16,
  "siguiente": "ivysaur"
 },
 "ivysaur": {
  "aNivel": 32,
  "siguiente": "venusaur"
 },
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
 "nidoran-f": {
  "aNivel": 16,
  "siguiente": "nidorina"
 },
 "nidoran-m": {
  "aNivel": 16,
  "siguiente": "nidorino"
 },
 "zubat": {
  "aNivel": 22,
  "siguiente": "golbat"
 },
 "oddish": {
  "aNivel": 21,
  "siguiente": "gloom"
 },
 "paras": {
  "aNivel": 24,
  "siguiente": "parasect"
 },
 "venonat": {
  "aNivel": 31,
  "siguiente": "venomoth"
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
 "poliwag": {
  "aNivel": 25,
  "siguiente": "poliwhirl"
 },
 "abra": {
  "aNivel": 16,
  "siguiente": "kadabra"
 },
 "machop": {
  "aNivel": 28,
  "siguiente": "machoke"
 },
 "bellsprout": {
  "aNivel": 21,
  "siguiente": "weepinbell"
 },
 "tentacool": {
  "aNivel": 30,
  "siguiente": "tentacruel"
 },
 "geodude": {
  "aNivel": 25,
  "siguiente": "graveler"
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
 "doduo": {
  "aNivel": 31,
  "siguiente": "dodrio"
 },
 "seel": {
  "aNivel": 34,
  "siguiente": "dewgong"
 },
 "grimer": {
  "aNivel": 38,
  "siguiente": "muk"
 },
 "gastly": {
  "aNivel": 25,
  "siguiente": "haunter"
 },
 "drowzee": {
  "aNivel": 26,
  "siguiente": "hypno"
 },
 "krabby": {
  "aNivel": 28,
  "siguiente": "kingler"
 },
 "voltorb": {
  "aNivel": 30,
  "siguiente": "electrode"
 },
 "cubone": {
  "aNivel": 28,
  "siguiente": "marowak"
 },
 "koffing": {
  "aNivel": 35,
  "siguiente": "weezing"
 },
 "rhyhorn": {
  "aNivel": 42,
  "siguiente": "rhydon"
 },
 "horsea": {
  "aNivel": 32,
  "siguiente": "seadra"
 },
 "goldeen": {
  "aNivel": 33,
  "siguiente": "seaking"
 },
 "magikarp": {
  "aNivel": 20,
  "siguiente": "gyarados"
 },
 "omanyte": {
  "aNivel": 40,
  "siguiente": "omastar"
 },
 "kabuto": {
  "aNivel": 40,
  "siguiente": "kabutops"
 },
 "dratini": {
  "aNivel": 30,
  "siguiente": "dragonair"
 },
 "dragonair": {
  "aNivel": 55,
  "siguiente": "dragonite"
 }
};
const INICIALES = [
 "bulbasaur",
 "charmander",
 "squirtle",
 "caterpie",
 "weedle",
 "pidgey",
 "rattata",
 "spearow",
 "ekans",
 "pikachu",
 "raichu",
 "sandshrew",
 "nidoran-f",
 "nidoqueen",
 "nidoran-m",
 "nidoking",
 "clefairy",
 "clefable",
 "vulpix",
 "ninetales",
 "jigglypuff",
 "wigglytuff",
 "zubat",
 "oddish",
 "vileplume",
 "paras",
 "venonat",
 "diglett",
 "meowth",
 "psyduck",
 "mankey",
 "growlithe",
 "arcanine",
 "poliwag",
 "poliwrath",
 "abra",
 "alakazam",
 "machop",
 "machamp",
 "bellsprout",
 "victreebel",
 "tentacool",
 "geodude",
 "golem",
 "ponyta",
 "slowpoke",
 "magnemite",
 "farfetchd",
 "doduo",
 "seel",
 "grimer",
 "shellder",
 "cloyster",
 "gastly",
 "gengar",
 "onix",
 "drowzee",
 "krabby",
 "voltorb",
 "exeggcute",
 "exeggutor",
 "cubone",
 "hitmonlee",
 "hitmonchan",
 "lickitung",
 "koffing",
 "rhyhorn",
 "chansey",
 "tangela",
 "kangaskhan",
 "horsea",
 "goldeen",
 "staryu",
 "starmie",
 "mr-mime",
 "scyther",
 "jynx",
 "electabuzz",
 "magmar",
 "pinsir",
 "tauros",
 "magikarp",
 "lapras",
 "ditto",
 "eevee",
 "vaporeon",
 "jolteon",
 "flareon",
 "porygon",
 "omanyte",
 "kabuto",
 "aerodactyl",
 "snorlax",
 "articuno",
 "zapdos",
 "moltres",
 "dratini",
 "mewtwo",
 "mew"
];

const KEY = "pokerogue_best";
const PS_POR_NIVEL = 8;
const CURA_POR_NIVEL = 4;

// --- Catalogo de objetos ---
// tipo "equipable": se pone en la ranura del pokemon (1 por pokemon), efecto pasivo.
// tipo "uso": se consume al darselo a un pokemon (no se equipa).
const OBJETOS = {
  amuleto_ataque: { id: "amuleto_ataque", nombre: "Amuleto de Ataque", icono: "\u2694\uFE0F", tipo: "equipable",
    desc: "+20% de dano", efecto: { ataque: 1.2 } },
  pluma_velocidad: { id: "pluma_velocidad", nombre: "Pluma de Velocidad", icono: "\uD83E\uDEB6", tipo: "equipable",
    desc: "20% de esquivar un golpe", efecto: { esquiva: 0.2 } },
  caramelo_raro: { id: "caramelo_raro", nombre: "Caramelo Raro", icono: "\uD83C\uDF6C", tipo: "uso",
    desc: "+3 niveles" },
  cura_total: { id: "cura_total", nombre: "Cura Total", icono: "\uD83E\uDDEA", tipo: "uso",
    desc: "cura toda la vida" },
};

const COLOR_TIPO = {"normal":"#cfd3da","fuego":"#ff8a5c","agua":"#7cc3ff","planta":"#7fe39a","electrico":"#ffe066","hielo":"#8fe0e0","lucha":"#e8705a","veneno":"#b366d9","tierra":"#e2c879","volador":"#a7c6ff","psiquico":"#ff7fa8","bicho":"#b3c647","roca":"#c9b680","fantasma":"#9a86d4","dragon":"#8a7cff","siniestro":"#9a8f82","acero":"#9ba3ac","hada":"#ff9ed6"};

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

// --- Estado de aventura ---
let mapaIdx = 0;     // indice del mapa actual (0..8)
let pasoIdx = 0;     // indice del paso actual dentro del mapa (0..5); 6 = lider
let enLider = false; // el combate actual es contra el lider
let pasosActivos = null; // copia de los pasos del mapa con los entrenadores ya colocados (por partida de mapa)
let elegidos = [];       // por cada paso completado, el indice del nodo que eligio el jugador (para colocar su icono)
let medallasGanadas = []; // nombres de medalla ya conseguidas (al vencer a cada lider con medalla)

// Mapa: nombre de medalla (de mapas.js) -> sprite de la medalla y su nombre bonito.
// Solo las 8 de mapa; el "Campeon de la Liga" no es medalla de hueco.
const MEDALLAS = {
  "Medalla Hoja":        { img: "img/badges/4.png", nombre: "Medalla Arcoiris" },
  "Medalla Roca":        { img: "img/badges/1.png", nombre: "Medalla Roca" },
  "Medalla Cascada":     { img: "img/badges/2.png", nombre: "Medalla Cascada" },
  "Medalla Alma":        { img: "img/badges/6.png", nombre: "Medalla Pantano" },
  "Medalla Volcán":      { img: "img/badges/7.png", nombre: "Medalla Volcan" },
  "Medalla Trueno":      { img: "img/badges/3.png", nombre: "Medalla Trueno" },
  "Medalla Alma Oscura": { img: "img/badges/5.png", nombre: "Medalla Alma" },
  "Medalla Tierra":      { img: "img/badges/8.png", nombre: "Medalla Tierra" },
};
// Orden de los 8 huecos (de arriba a abajo), igual que el orden de los mapas 1..8.
const ORDEN_MEDALLAS = [
  "Medalla Hoja", "Medalla Roca", "Medalla Cascada", "Medalla Alma",
  "Medalla Volcán", "Medalla Trueno", "Medalla Alma Oscura", "Medalla Tierra",
];

const $ = (id) => document.getElementById(id);
const startPanel = $("start");
// El contenedor en fila (panel de equipo a la izquierda + mapa). Mostrar/ocultar actua sobre toda la fila.
const mapaPanel = $("mapaFila");
// El contenedor en fila (banquillos fuera + cuadro). Mostrar/ocultar actua sobre toda la fila.
const arena = $("arenaFila");
const overPanel = $("over");

function init() {
  if (mapaPanel) mapaPanel.classList.add("hidden");
  if (arena) arena.classList.add("hidden");
  $("best").textContent = localStorage.getItem(KEY) || 0;
  const box = $("starters");
  box.innerHTML = "";
  ["charmander","squirtle","bulbasaur","pikachu","eevee","dratini"].forEach((k) => box.appendChild(tarjeta(k)));
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
  return { key, name: f.name, sprite: f.sprite, type: f.type, typeReal: f.typeReal, hp: maxHp, maxHp, level: nivel, moves, learn, item: null };
}

function empezar(key) {
  me = nuevoLuchador(key, 5);
  equipo = [me];
  activoIdx = 0;
  aprendidos = 0;
  round = 1; streak = 0; turnos = 1;
  mapaIdx = 0;
  evoPendientes = [];
  movsPendientes = [];
  medallasGanadas = []; // nueva partida: sin medallas
  startPanel.classList.add("hidden");
  overPanel.classList.add("hidden");
  arena.classList.add("hidden");
  iniciarMapa();
}

// =========================================================================
//  MOTOR DE AVENTURA  -  recorre MAPAS[] en orden: 6 pasos + lider por mapa
// =========================================================================

// Si una especie no existe en FORMAS, cae en uno de los iniciales validos
// (asi mapas.js puede listar especies que todavia no estan en la dex).
function keyValida(key) {
  if (FORMAS[key]) return key;
  return INICIALES[Math.floor(Math.random() * INICIALES.length)];
}

// --- Estado de equipos (6 maximo: el activo + hasta 5 al lado) ---
const MAX_EQUIPO = 6;  // equipo normal; se permite capturar un 7o temporalmente para decidir
let equipo = [];     // equipo del jugador; me = equipo[activoIdx]
let equipoFoe = [];  // equipo del rival; foe = el activo del rival
let activoIdx = 0;   // indice del Pokemon activo del jugador
let foeIdx = 0;      // indice del activo del rival
let esSalvaje = false; // el combate actual es contra un pokemon salvaje (se puede capturar)
let evoPendientes = []; // pokemon que esperan que el jugador elija su evolucion (Eevee)
let movsPendientes = []; // movimientos nuevos del BANQUILLO esperando modal

// Nivel base de un combate segun el mapa y el paso (sube suave con el avance).
function nivelDeCombate() {
  return 3 + mapaIdx * 3 + pasoIdx;
}

// Abre el mapa actual en el paso 1.
function iniciarMapa() {
  pasoIdx = 0;
  enLider = false;
  elegidos = []; // nueva ruta: aun no hay nodos elegidos
  // Al CAMBIAR de mapa se cura todo el equipo (entre pasos del mismo mapa no).
  equipo.forEach((p) => { p.hp = p.maxHp; });
  colocarEntrenadores(); // decide donde salen los entrenadores de ESTA partida del mapa
  arena.classList.add("hidden");
  overPanel.classList.add("hidden");
  mapaPanel.classList.remove("hidden");
  mostrarPaso();
}

// Genera pasosActivos: una copia de los pasos del mapa donde TODOS los
// entrenadores definidos (5) y 3 spots de OBJETO ocupan huecos de hierba al azar.
function colocarEntrenadores() {
  const mapa = MAPAS[mapaIdx];
  // copia profunda simple de los pasos (solo datos planos)
  pasosActivos = mapa.pasos.map((fila) => fila.map((spot) => ({ ...spot })));

  // lista de todos los huecos de HIERBA libres (paso, indice)
  const huecosLibres = () => {
    const h = [];
    pasosActivos.forEach((fila, p) => {
      fila.forEach((spot, i) => { if ((spot.tipo || "pokemon") === "pokemon") h.push([p, i]); });
    });
    return h;
  };

  // 1) ENTRENADORES: todos los definidos (5)
  const entren = (mapa.entrenadores || []).slice();
  barajar(entren);
  let huecos = huecosLibres();
  barajar(huecos);
  for (let k = 0; k < entren.length && k < huecos.length; k++) {
    const [p, i] = huecos[k];
    const e = entren[k];
    pasosActivos[p][i] = { tipo: "entrenador", nombre: e.nombre, equipo: e.equipo.slice() };
  }

  // 2) OBJETOS: 1 spot en un hueco de hierba que quede libre
  huecos = huecosLibres();
  barajar(huecos);
  for (let k = 0; k < 1 && k < huecos.length; k++) {
    const [p, i] = huecos[k];
    pasosActivos[p][i] = { tipo: "objeto" };
  }
}

// Baraja un array en el sitio (Fisher-Yates).
function barajar(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Dibuja el mapa como una RUTA vertical (estilo Pokemon): el jugador abajo,
// Fondo EXTERIOR del body: dos colores (centro + borde) por mapa, en tono
// con su ambiente pero SIN el detalle del SVG interior. Idx = indice del mapa.
const FONDO_EXT = [
  ["#1c3322", "#0f1a12"], // 1 Bosque Verde (verde oscuro)
  ["#241f33", "#12101c"], // 2 Monte Moon (cueva morada)
  ["#152c3f", "#0b1620"], // 3 Ruta 110 (agua azul)
  ["#1b2838", "#0e141d"], // 4 Silph S.A. (acero/mar)
  ["#2a2340", "#140f20"], // 5 Pueblo Lavanda (noche lavanda)
  ["#3a1f2a", "#1c0f15"], // 6 Ciudad Fucsia (rosa calido)
  ["#3a241a", "#1c120d"], // 7 Islas Canela (volcan naranja)
  ["#27302a", "#131713"], // 8 Ciudad Verde (gris verdoso roca)
  ["#2b2620", "#151310"], // 9 Meseta Anil (piedra/castillo)
];
function aplicarFondoExterior(idx) {
  const par = FONDO_EXT[idx] || ["#1b2030", "#11131a"];
  document.body.style.backgroundImage =
    "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)," +
    "linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)," +
    `radial-gradient(circle at 50% 0%, ${par[0]} 0%, ${par[1]} 70%)`;
}

// el lider arriba, y cada paso es una fila de 2-3 nodos conectados por el camino.
function mostrarPaso() {
  const mapa = MAPAS[mapaIdx];
  $("mapaNombre").textContent = `Mapa ${mapa.id}: ${mapa.nombre}`;

  const fondo = mapa.fondo || "mapa-fondo.svg";
  $("mapa").style.backgroundImage = `url("${fondo}?v=42")`;

  // Fondo EXTERIOR (detras de todo, en el body): color tematico por mapa,
  // version simple (solo color + la rejilla tenue, sin el detalle del SVG).
  aplicarFondoExterior(mapaIdx);

  pintarEquipoMapa(); // panel de equipo a la izquierda (vida y nivel)
  pintarMedallasMapa(); // panel de 8 medallas a la derecha

  if (pasoIdx >= 6) {
    $("mapaTexto").textContent = `\u00a1Has llegado al final! Te espera el ${mapa.lider.nombre}.`;
  } else {
    $("mapaTexto").textContent = `Paso ${pasoIdx + 1} de 6 \u00b7 elige por donde seguir`;
  }

  const ruta = $("mapaOpciones");
  ruta.className = "ruta";
  ruta.innerHTML = "";

  // Fila del LIDER (arriba del todo)
  const filaLider = document.createElement("div");
  filaLider.className = "ruta-fila fila-lider";
  const nLider = document.createElement("button");
  const liderAlcanzable = pasoIdx >= 6;
  nLider.className = "nodo nodo-lider" + (liderAlcanzable ? " activo" : " bloqueado");
  nLider.innerHTML = `<span class="nodo-icono">\u2605</span><span class="nodo-label">${mapa.lider.nombre}</span>`;
  if (liderAlcanzable) nLider.addEventListener("click", () => empezarLider());
  else nLider.disabled = true;
  filaLider.appendChild(nLider);
  ruta.appendChild(filaLider);

  // Filas de los 6 pasos, de ARRIBA (paso 6) a ABAJO (paso 1),
  // para que el jugador suba por la ruta como en el juego.
  for (let p = 5; p >= 0; p--) {
    // conector entre filas
    const con = document.createElement("div");
    con.className = "ruta-conector" + (p < pasoIdx ? " hecho" : "");
    ruta.appendChild(con);

    const fila = document.createElement("div");
    fila.className = "ruta-fila";
    const spots = (pasosActivos || mapa.pasos)[p] || [];
    spots.forEach((spot, i) => fila.appendChild(nodoRuta(spot, i, p)));
    ruta.appendChild(fila);
  }

  // En el paso 1 el icono del jugador esta en el punto de salida (abajo).
  // Despues viaja sobre el nodo elegido, asi que aqui no se dibuja nada.
  if (pasoIdx === 0) {
    const jug = document.createElement("div");
    jug.className = "ruta-jugador";
    jug.innerHTML = `<img class="jug-sprite" src="img/mapa/jugador.png" alt="Tu" />`;
    jug.dataset.activo = "1";
    ruta.appendChild(jug);
  }

  // La pantalla SIGUE al jugador: centra en la ventana el icono del jugador
  // (o, en el paso 1, el punto de salida / nodo activo) cada vez que se redibuja.
  setTimeout(() => {
    const mapaEl = $("mapa");
    const destino =
      mapaEl.querySelector(".con-jugador") ||
      mapaEl.querySelector('[data-activo="1"]') ||
      mapaEl.querySelector(".ruta-jugador");
    if (destino && destino.scrollIntoView) {
      destino.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, 60);
}

// Un nodo de la ruta. Solo los del paso ACTUAL son clicables; los pasados
// muestran una marca y los futuros salen bloqueados. Los combates son
// PARCHES DE HIERBA (no se revela el Pokemon).
function nodoRuta(spot, indice, pasoDeLaFila) {
  const b = document.createElement("button");
  const esActual = pasoDeLaFila === pasoIdx;
  const esPasado = pasoDeLaFila < pasoIdx;
  const tipo = spot.tipo || "pokemon";
  b.className = "nodo nodo-" + tipo + (esActual ? " activo" : esPasado ? " hecho" : " bloqueado");

  // Sprites de los nodos (tileset CC0 "Puny World" + personajes del mismo autor):
  //  - hierba     -> tile de arbusto/hierba del tileset
  //  - entrenador -> personaje Soldier-Blue
  //  - jugador    -> personaje Character-Base
  //  - objeto     -> tile de cofre del tileset
  //  - centro     -> sprite propio (SVG)
  let sprite = "img/mapa/hierba.png"; // hierba por defecto
  if (tipo === "entrenador") sprite = "img/mapa/entrenador.png";
  else if (tipo === "objeto") sprite = "img/mapa/objeto.png";
  else if (tipo === "cura") sprite = "img/mapa/centro.svg";
  const label = (tipo === "pokemon") ? `Hierba ${indice + 1}` : etiquetaSpot(spot);

  b.innerHTML = `<img class="nodo-sprite" src="${sprite}" alt="${label}" /><span class="nodo-label">${label}</span>`;

  // El icono del jugador aparece UNA sola vez: sobre el nodo que eligio en el
  // paso inmediatamente anterior (el ultimo hecho). Los anteriores no lo muestran.
  if (pasoDeLaFila === pasoIdx - 1 && elegidos[pasoDeLaFila] === indice) {
    b.classList.add("con-jugador");
    const marca = document.createElement("img");
    marca.className = "jugador-aqui";
    marca.src = "img/mapa/jugador.png"; // sprite del jugador
    marca.alt = "Tu";
    b.appendChild(marca);
  }
  if (esActual) b.dataset.activo = "1"; // para centrar la vista aqui

  if (esActual) {
    b.addEventListener("click", () => {
      elegidos[pasoDeLaFila] = indice; // recuerda donde se coloco el jugador
      empezarSpot(spot);
    });
  } else {
    b.disabled = true;
  }
  return b;
}

function etiquetaSpot(spot) {
  if (spot.tipo === "entrenador") return (spot.nombre || "Entrenador");
  if (spot.tipo === "objeto") return "Objeto";
  if (spot.tipo === "cura") return "Zona de cura";
  return "Combate";
}

// Empieza el combate de un spot: ENTRENADOR (equipo, no se captura) o HIERBA (salvaje).
function empezarSpot(spot) {
  if (spot.tipo === "cura") {
    usarCura();
    return;
  }
  if (spot.tipo === "objeto") {
    abrirMenuObjeto();
    return;
  }
  if (spot.tipo === "entrenador") {
    const nivel = nivelDeCombate() + 1; // los entrenadores pican un poco mas que la hierba
    const keys = (spot.equipo && spot.equipo.length) ? spot.equipo : ["pidgey"];
    enLider = false;
    esSalvaje = false;
    equipoFoe = keys.map((k) => rivalDesde(keyValida(k), nivel));
    foeIdx = 0;
    foe = equipoFoe[0];
    foe.entrenador = spot.nombre || "Entrenador";
    prepararCombate(`\u00a1${foe.entrenador} te reta con ${equipoFoe.length} Pokemon!`);
    return;
  }
  // hierba: un pokemon salvaje, se puede capturar
  const key = keyValida(spot.especie || "pidgey");
  enLider = false;
  esSalvaje = true;
  equipoFoe = [rivalDesde(key, nivelDeCombate())];
  foeIdx = 0;
  foe = equipoFoe[0];
  prepararCombate(`\u00a1Un ${foe.name} salvaje aparece!`);
}

// Punto de CURA: restaura la vida de todo el equipo al maximo y avanza un paso.
// No hay combate. (El spot {tipo:"cura"} se colocara en el mapa mas adelante.)
function usarCura() {
  equipo.forEach((p) => { p.hp = p.maxHp; });
  pintarEquipos();
  $("mapaTexto").textContent = "\u2764\uFE0F Centro de cura: todo tu equipo recupera la vida.";
  pasoIdx++;
  // nos quedamos en el mapa; redibuja tras un instante para que se vea el mensaje
  setTimeout(() => mostrarPaso(), 700);
}

// Avanza un paso quedandose en el mapa (comun a cura y objetos).
function avanzarPasoMapa() {
  pasoIdx++;
  setTimeout(() => mostrarPaso(), 700);
}

// Spot de OBJETO: elige uno de los objetos disponibles.
function abrirMenuObjeto() {
  const modal = $("modal");
  const lista = $("modalMoves");
  $("modalTitle").textContent = "Objeto encontrado";
  $("modalNew").textContent = "Elige un objeto para llevarte:";
  lista.innerHTML = "";
  Object.values(OBJETOS).forEach((obj) => {
    const b = document.createElement("button");
    b.className = "m-normal";
    b.innerHTML = `${obj.icono} ${obj.nombre} <small>(${obj.desc})</small>`;
    b.addEventListener("click", () => elegirPokemonObjeto(obj));
    lista.appendChild(b);
  });
  modal.classList.remove("hidden");
}

// Elige a QUE pokemon del equipo se le da el objeto.
function elegirPokemonObjeto(obj) {
  const lista = $("modalMoves");
  $("modalTitle").textContent = obj.nombre;
  const accion = obj.tipo === "equipable" ? "equipar a" : "dar a";
  $("modalNew").innerHTML = `${obj.icono} <b>${obj.nombre}</b> (${obj.desc}). Elige a quien ${accion}:`;
  lista.innerHTML = "";
  equipo.forEach((p, i) => {
    const b = document.createElement("button");
    b.className = "m-normal";
    const equipado = p.item ? ` [lleva ${OBJETOS[p.item].icono}]` : "";
    b.innerHTML = `<img class="mini" src="${p.sprite}" alt=""> ${p.name} <small>(Nv ${p.level}${equipado})</small>`;
    b.addEventListener("click", () => aplicarObjeto(obj, i));
    lista.appendChild(b);
  });
  modal.classList.remove("hidden");
}

// Aplica el objeto al pokemon 'idx' del equipo.
function aplicarObjeto(obj, idx) {
  const p = equipo[idx];
  cerrarModal();
  if (obj.tipo === "equipable") {
    p.item = obj.id; // 1 objeto por pokemon: reemplaza el anterior si lo hubiera
    $("mapaTexto").textContent = `${obj.icono} ${p.name} ahora lleva ${obj.nombre} (${obj.desc}).`;
  } else if (obj.id === "caramelo_raro") {
    for (let n = 0; n < 3; n++) subirNivel(p);
    $("mapaTexto").textContent = `\uD83C\uDF6C ${p.name} sube 3 niveles (ahora Nv ${p.level}).`;
    // Aprende los movimientos nuevos (modal de cambio si tiene 4) y resuelve
    // evoluciones por eleccion, antes de avanzar de paso.
    const nuevos = movsNuevos(p);
    aprenderMovs(nuevos, () => resolverEvoluciones(() => avanzarPasoMapa()), p);
    return;
  } else if (obj.id === "cura_total") {
    p.hp = p.maxHp;
    $("mapaTexto").textContent = `\uD83E\uDDEA ${p.name} recupera toda su vida.`;
  }
  avanzarPasoMapa();
}

// Combate contra el LIDER (equipo completo, no se captura).
function empezarLider() {
  const mapa = MAPAS[mapaIdx];
  const nivel = nivelDeCombate() + 2;
  const keys = (mapa.lider.equipo && mapa.lider.equipo.length) ? mapa.lider.equipo : ["charizard"];
  enLider = true;
  esSalvaje = false;
  equipoFoe = keys.map((k) => rivalDesde(keyValida(k), nivel));
  foeIdx = 0;
  foe = equipoFoe[0];
  foe.entrenador = mapa.lider.nombre;
  prepararCombate(`\u00a1${mapa.lider.nombre} te reta con ${equipoFoe.length} Pokemon!`);
}

// Rival concreto a partir de una key de FORMAS y un nivel.
function rivalDesde(key, nivel) {
  const f = FORMAS[key];
  const maxHp = f.hp + (nivel - 1) * CURA_POR_NIVEL;
  const golpe = (f.learnset && f.learnset[0]) || { n: "Golpe", t: f.type, d: 10 };
  return {
    key, name: f.name, sprite: f.sprite, type: f.type, typeReal: f.typeReal,
    level: nivel,
    hp: maxHp, maxHp,
    moves: [{ n: golpe.n, t: golpe.t || f.type, d: Math.max(8, Math.floor(8 + (nivel - 5) * 1.2)) }],
  };
}

// Cambia a la arena y pinta el combate. (No cura: el equipo conserva su vida.)
function prepararCombate(mensaje) {
  // El que sale a combatir es siempre el PRIMERO del equipo (el primero vivo).
  const primero = equipo.findIndex((p) => p.hp > 0);
  activoIdx = primero >= 0 ? primero : 0;
  me = equipo[activoIdx];
  mapaPanel.classList.add("hidden");
  arena.classList.remove("hidden");
  turnos = 1;
  $("turno").textContent = turnos;
  log(mensaje);
  pintar(); pintarMoves(true);
}

function rivalAleatorio() {
  const key = INICIALES[Math.floor(Math.random() * INICIALES.length)];
  const f = FORMAS[key];
  const extra = Math.floor((round - 1) * CURA_POR_NIVEL);
  const golpe = f.learnset[0] || { n:"Golpe", t:f.type, d:10 };
  return {
    name: f.name, sprite: f.sprite, type: f.type, typeReal: f.typeReal,
    level: 4 + round,
    hp: f.hp + extra, maxHp: f.hp + extra,
    moves: [{ n: golpe.n, t: f.type, d: Math.floor(8 + (round - 1) * 1.5) }],
  };
}

function nuevaRonda() {
  foe = rivalAleatorio();
  me.hp = me.maxHp;
  turnos = 1;
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
  $("foeLvl").textContent = "Nivel " + foe.level;
  barra("me", me); barra("foe", foe);
  pintarEquipos();
}

// Fichas pequenas del equipo: el jugador a la izquierda, el rival a la derecha.
// Se muestran los NO activos (hasta 5); el activo es el que esta en combate.
function pintarEquipos() {
  pintarFichas($("meTeam"), equipo, activoIdx);
  pintarFichas($("foeTeam"), equipoFoe, foeIdx);
}

// Panel del equipo en el MAPA (a la izquierda): cada pokemon con vida y nivel.
function pintarEquipoMapa() {
  const cont = $("equipoMapa");
  if (!cont) return;
  cont.innerHTML = '<div class="eq-titulo">Tu equipo</div><div class="eq-ayuda">Ordena con \u2191 \u2193</div>';
  (equipo || []).forEach((p, i) => {
    const pct = Math.max(0, Math.round((p.hp / p.maxHp) * 100));
    const color = pct > 50 ? "#4ade80" : pct > 20 ? "#facc15" : "#ef4444";
    const vivo = p.hp > 0;
    const fila = document.createElement("div");
    fila.className = "eq-item" + (i === 0 ? " activo" : "") + (vivo ? "" : " ko");
    fila.innerHTML =
      `<img class="eq-sprite" src="${p.sprite}" alt="${p.name}" />` +
      `<div class="eq-datos">` +
        `<div class="eq-nombre">${p.name}${i === 0 ? ' <span class="eq-primero">1\u00ba</span>' : ""}</div>` +
        `<div class="eq-nivel">Nv ${p.level}</div>` +
        `<div class="eq-bar"><div class="eq-fill" style="width:${pct}%;background:${color}"></div></div>` +
        `<div class="eq-hp">${Math.max(0, Math.round(p.hp))}/${p.maxHp} PS</div>` +
        (p.item
          ? `<div class="eq-objeto"><span class="eq-item-chip" title="${OBJETOS[p.item].nombre}: ${OBJETOS[p.item].desc}">${OBJETOS[p.item].icono}</span></div>`
          : "") +
      `</div>` +
      `<div class="eq-orden">` +
        `<button class="eq-sube" title="Subir" ${i === 0 ? "disabled" : ""}>\u2191</button>` +
        `<button class="eq-baja" title="Bajar" ${i === equipo.length - 1 ? "disabled" : ""}>\u2193</button>` +
      `</div>`;
    const sube = fila.querySelector(".eq-sube");
    const baja = fila.querySelector(".eq-baja");
    if (sube) sube.addEventListener("click", () => moverEquipo(i, -1));
    if (baja) baja.addEventListener("click", () => moverEquipo(i, 1));
    cont.appendChild(fila);
  });
}

// Mueve un Pokemon del equipo una posicion (dir -1 sube, +1 baja) y repinta.
function moverEquipo(i, dir) {
  const j = i + dir;
  if (j < 0 || j >= equipo.length) return;
  const tmp = equipo[i]; equipo[i] = equipo[j]; equipo[j] = tmp;
  // El activo sigue el movimiento para no perder la referencia en combate.
  if (activoIdx === i) activoIdx = j;
  else if (activoIdx === j) activoIdx = i;
  me = equipo[activoIdx];
  pintarEquipoMapa();
  if (typeof pintarEquipos === "function") pintarEquipos();
}

// Panel de 8 huecos a la DERECHA del mapa: se llenan con la medalla al vencer cada lider.
function pintarMedallasMapa() {
  const cont = $("medallasMapa");
  if (!cont) return;
  cont.innerHTML = '<div class="eq-titulo">Medallas</div><div class="med-huecos"></div>';
  const huecos = cont.querySelector(".med-huecos");
  ORDEN_MEDALLAS.forEach((clave) => {
    const info = MEDALLAS[clave];
    const ganada = medallasGanadas.includes(clave);
    const h = document.createElement("div");
    h.className = "med-hueco" + (ganada ? " ganada" : "");
    h.title = ganada ? info.nombre : "Medalla por conseguir";
    h.innerHTML = ganada
      ? `<img class="med-img" src="${info.img}" alt="${info.nombre}" />`
      : "";
    huecos.appendChild(h);
  });
}

function pintarFichas(cont, lista, idxActivo) {
  if (!cont) return;
  cont.innerHTML = "";
  lista.forEach((p, i) => {
    if (i === idxActivo) return; // el activo esta en el cuadro, no en la fila
    const f = document.createElement("div");
    const vivo = p.hp > 0;
    f.className = "ficha" + (vivo ? "" : " ko");
    f.title = `${p.name} (Nv ${p.level})` + (vivo ? "" : " - debilitado");
    f.innerHTML = `<img src="${p.sprite}" alt="${p.name}" />`;
    cont.appendChild(f);
  });
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
  pintarAcciones(activo);
}

// Fila de acciones del combate: Capturar (solo salvajes) y Cambiar Pokemon.
function pintarAcciones(activo) {
  const box = $("acciones");
  if (!box) return;
  box.innerHTML = "";

  if (esSalvaje) {
    const cap = document.createElement("button");
    cap.className = "accion accion-cap";
    const prob = probCaptura();
    cap.innerHTML = `\u{1F534} Capturar <small>(${prob}%)</small>`;
    cap.disabled = !activo;
    cap.addEventListener("click", () => intentarCaptura());
    box.appendChild(cap);
  }

  // Cambiar a otro del equipo (si hay mas de uno vivo)
  const vivos = equipo.filter((p, i) => p.hp > 0 && i !== activoIdx).length;
  if (vivos > 0) {
    const cam = document.createElement("button");
    cam.className = "accion accion-cambiar";
    cam.textContent = "\u{1F504} Cambiar";
    cam.disabled = !activo;
    cam.addEventListener("click", () => abrirCambio(false));
    box.appendChild(cam);
  }
}

// Probabilidad de captura: mas alta cuanto menos PS le queda al salvaje.
function probCaptura() {
  const frac = Math.max(0, foe.hp) / foe.maxHp;        // 1 lleno, 0 KO
  let p = Math.round((1 - frac) * 70) + 20;            // 20%..90%
  return Math.max(0, Math.min(95, p));
}

function dano(mov, defensor, atacante) {
  // Esquiva: si el defensor lleva Pluma de Velocidad, puede evitar el golpe.
  const objDef = defensor && defensor.item && OBJETOS[defensor.item];
  if (objDef && objDef.efecto && objDef.efecto.esquiva && Math.random() < objDef.efecto.esquiva) {
    return { valor: 0, mult: 1, esquivado: true };
  }
  const mult = (VENTAJA[mov.t] && VENTAJA[mov.t][defensor.type]) || 1;
  const varia = 0.85 + Math.random() * 0.3;
  // Ataque: si el atacante lleva Amuleto de Ataque, +20% de dano.
  const objAtk = atacante && atacante.item && OBJETOS[atacante.item];
  const boost = (objAtk && objAtk.efecto && objAtk.efecto.ataque) || 1;
  return { valor: Math.round(mov.d * mult * varia * boost), mult };
}

// Devuelve los movimientos del learnset de 'p' AUN no aprendidos cuyo nivel ya
// se alcanzo (lvl <= nivel actual). Asi, si sube varios niveles de golpe (p.ej.
// 3 -> 5 tras un entrenador), no se salta el movimiento de un nivel intermedio.
function movsNuevos(p = me) {
  const out = [];
  (p.learn || []).forEach((m) => {
    if (m.lvl <= p.level && !m._dado) { m._dado = true; out.push(m); }
  });
  return out;
}

// Sube UN nivel al Pokemon 'p' (por defecto el activo). Evoluciona si toca.
// Devuelve el texto para el log.
function subirNivel(p = me) {
  p.level++;
  p.maxHp += PS_POR_NIVEL;
  let txt = `\u00a1${p.name} sube al nivel ${p.level}! +${PS_POR_NIVEL} PS max.`;
  // Evolucion por nivel.
  const evo = EVO[p.key];
  if (evo && p.level >= evo.aNivel) {
    if (evo.elige) {
      // Evolucion con varias salidas (Eevee): no evoluciona sola; queda
      // pendiente para que el jugador elija en un modal tras subir niveles.
      // Evita duplicados si sube varios niveles de golpe.
      if (!evoPendientes.includes(p)) evoPendientes.push(p);
    } else {
      const antes = p.name;
      aplicarEvo(p, evo.siguiente);
      txt += ` \u00a1${antes} evoluciona a ${FORMAS[evo.siguiente].name}!`;
    }
  }
  return txt;
}

// Aplica la transformacion a una forma concreta (comun a evo directa y a eleccion).
function aplicarEvo(p, destKey) {
  const f = FORMAS[destKey];
  p.key = destKey; p.name = f.name; p.sprite = f.sprite; p.type = f.type; p.typeReal = f.typeReal;
  p.maxHp += 14;
  // al evolucionar, adopta el learnset de la nueva forma.
  p.learn = f.learnset.map((m) => ({ ...m }));
  // Marca como YA vistos los movimientos de nivel ya alcanzado, para no
  // ofrecer todo el repertorio pasado de golpe.
  p.learn.forEach((m) => { if (m.lvl <= p.level) m._dado = true; });
}

// Procesa los pokemon que esperan elegir evolucion (Eevee). El banquillo
// evoluciona por eleccion: cada uno (activo o banquillo) abre su propio modal.
function resolverEvoluciones(cuandoTermine) {
  // Descarta entradas invalidas (ya evolucionadas o sin opciones de eleccion).
  evoPendientes = evoPendientes.filter((p) => {
    const evo = EVO[p.key];
    return evo && evo.elige;
  });
  if (!evoPendientes.length) { cuandoTermine(); return; }
  // Procesa de uno en uno: abre el modal, y al elegir pasa al siguiente.
  const p = evoPendientes.shift();
  const evo = EVO[p.key];
  abrirElegirEvo(p, evo.elige, () => {
    // Si el que evoluciono es el activo, puede aprender movimientos nuevos.
    if (p === me) {
      const nuevos = movsNuevos(me);
      aprenderMovs(nuevos, () => resolverEvoluciones(cuandoTermine));
    } else {
      resolverEvoluciones(cuandoTermine);
    }
  });
}

// Modal de eleccion de evolucion (Eevee -> Vaporeon / Jolteon / Flareon).
function abrirElegirEvo(p, opciones, cuandoTermine) {
  const modal = $("modal");
  const lista = $("modalMoves");
  $("modalTitle").textContent = "\u00a1Evolucion!";
  $("modalNew").textContent = `${p.name} evoluciona en... Elige su forma:`;
  lista.innerHTML = "";
  opciones.forEach((key) => {
    const f = FORMAS[key];
    const b = document.createElement("button");
    b.className = "m-normal evo-opcion";
    b.innerHTML = `<img class="mini" src="${f.sprite}" alt=""> <b>${f.name}</b> <small>(${(f.typeReal || f.type)})</small>`;
    b.addEventListener("click", () => {
      const antes = p.name;
      aplicarEvo(p, key);
      cerrarModal();
      log(`\u00a1${antes} evoluciona a ${p.name}!`);
      pintar();
      cuandoTermine();
    });
    lista.appendChild(b);
  });
  modal.classList.remove("hidden");
}

// Sube 'niveles' niveles a TODO el equipo tras ganar un combate.
// Los movimientos nuevos (activo Y banquillo) se aprenden con modal de cambio.
// Rellena movsPendientes[] con {poke, lista} para resolverlos tras la subida.
function subirEquipo(niveles) {
  const partes = [];
  movsPendientes = [];
  equipo.forEach((p) => {
    const nuevosDeEste = [];
    for (let n = 0; n < niveles; n++) {
      const t = subirNivel(p);
      if (p === me) partes.push(t); // el activo se narra al detalle
      if (p !== me) {
        // junta los movimientos nuevos del banquillo (se deciden por modal luego)
        movsNuevos(p).forEach((mv) => {
          if (p.moves.some((m) => m.n === mv.n)) return; // ya lo conoce
          if (nuevosDeEste.some((m) => m.n === mv.n)) return; // ya en cola
          nuevosDeEste.push(mv);
        });
      }
    }
    if (p !== me && nuevosDeEste.length) movsPendientes.push({ poke: p, lista: nuevosDeEste });
  });
  const resto = equipo.length - 1;
  let txt = partes.join(" ");
  if (resto > 0) txt += ` El resto del equipo tambien sube (+${niveles}).`;
  return txt;
}

// Intenta aprender una lista de movimientos nuevos, uno a uno.
// Si hay 4, abre el modal para olvidar; encadena con callback.
// 'poke' es el pokemon que aprende (por defecto el activo me).
function aprenderMovs(lista, cuandoTermine, poke = me) {
  if (!lista.length) { cuandoTermine(); return; }
  const nuevo = lista.shift();
  // si ya conoce ese movimiento, lo salta (evita duplicados tras evolucionar)
  if (poke.moves.some((m) => m.n === nuevo.n)) {
    aprenderMovs(lista, cuandoTermine, poke);
    return;
  }
  if (poke.moves.length < 4) {
    // Hay hueco libre: no hay riesgo de borrar nada, se aprende directo.
    poke.moves.push({ ...nuevo });
    log(`${poke.name} aprende ${mov_html(nuevo.n, nuevo.t)}.`);
    aprenderMovs(lista, cuandoTermine, poke);
  } else {
    // Tiene los 4 movimientos: primero avisamos, luego abrimos el panel de cambio.
    confirmar(
      `${nombreTipo(poke)} quiere aprender un movimiento`,
      `${nombreTipo(poke)} quiere aprender <span class="mov-nuevo m-${nuevo.t}">${nuevo.n} \u00b7 fuerza ${nuevo.d}</span>,<br>pero ya tiene 4 movimientos.`,
      "Cambiar", "No Cambiar",
      () => abrirModalOlvidar(nuevo, () => aprenderMovs(lista, cuandoTermine, poke), poke),
      () => {
        log(`${poke.name} no aprende ${nuevo.n}.`);
        aprenderMovs(lista, cuandoTermine, poke);
      }
    );
  }
}

// Nombre del pokemon coloreado con su tipo principal (para los titulos de aprender).
function nombreTipo(p) {
  const tipo = (p.type || "normal").split(" ")[0];
  const color = COLOR_TIPO[tipo] || "#cfd3da";
  return `<span style="color:${color};font-weight:700">${p.name}</span>`;
}

// Recorre los movimientos pendientes del BANQUILLO y abre el modal de cada uno
// en secuencia. Cada pokemon del banquillo decide igual que el activo.
function resolverMovsBanquillo(cuandoTermine) {
  if (!movsPendientes.length) { cuandoTermine(); return; }
  const { poke, lista } = movsPendientes.shift();
  aprenderMovs(lista, () => resolverMovsBanquillo(cuandoTermine), poke);
}

// --- Panel de confirmacion generico (Si / No) ---
function confirmar(titulo, textoHtml, labelSi, labelNo, onSi, onNo) {
  const c = $("confirm");
  $("confirmTitle").innerHTML = titulo;
  $("confirmText").innerHTML = textoHtml;
  const yes = $("confirmYes");
  const no = $("confirmNo");
  yes.textContent = labelSi;
  no.textContent = labelNo;
  // Reemplazamos los nodos para limpiar listeners previos (evita dobles clics).
  const yes2 = yes.cloneNode(true);
  const no2 = no.cloneNode(true);
  yes.parentNode.replaceChild(yes2, yes);
  no.parentNode.replaceChild(no2, no);
  yes2.addEventListener("click", () => { c.classList.add("hidden"); if (onSi) onSi(); });
  no2.addEventListener("click", () => { c.classList.add("hidden"); if (onNo) onNo(); });
  c.classList.remove("hidden");
}

// --- Modal para olvidar un movimiento (o descartar el nuevo) ---
function abrirModalOlvidar(nuevo, cuandoTermine, poke = me) {
  const modal = $("modal");
  const lista = $("modalMoves");
  $("modalTitle").innerHTML = `${nombreTipo(poke)} aprende un movimiento`;
  $("modalNew").innerHTML =
    `Nuevo: <span class="mov-nuevo m-${nuevo.t}">${nuevo.n} \u00b7 ${nuevo.d}</span><br>` +
    `Toca el que quieres cambiar por el, o salta.`;
  lista.innerHTML = "";
  // una tarjeta por movimiento actual (se olvida ese, entra el nuevo)
  poke.moves.forEach((m, i) => {
    const b = document.createElement("button");
    b.className = "mov-card m-" + m.t;
    b.innerHTML =
      `<span class="mov-nombre">${m.n}</span>` +
      `<span class="mov-fuerza">fuerza ${m.d}</span>` +
      `<span class="mov-cambio">cambiar por ${nuevo.n} (${nuevo.d}) \u2192</span>`;
    b.addEventListener("click", () => {
      const viejo = poke.moves[i];
      // Cambio directo: sin segundo panel de confirmacion.
      poke.moves[i] = { ...nuevo };
      cerrarModal();
      log(`${poke.name} olvida ${viejo.n} y aprende ${mov_html(nuevo.n, nuevo.t)}.`);
      cuandoTermine();
    });
    lista.appendChild(b);
  });
  // boton discreto para NO aprender el nuevo
  const skip = document.createElement("button");
  skip.className = "mov-skip";
  skip.textContent = "No aprender " + nuevo.n;
  skip.addEventListener("click", () => {
    cerrarModal();
    log(`${poke.name} no aprende ${nuevo.n}.`);
    cuandoTermine();
  });
  lista.appendChild(skip);
  modal.classList.remove("hidden");
}

function cerrarModal() { $("modal").classList.add("hidden"); }

function turno(mov) {
  turnos++; $("turno").textContent = turnos;
  pintarMoves(false);
  const a = dano(mov, foe, me);
  foe.hp -= a.valor;
  flash("foe", mov.t);
  let txt = a.esquivado
    ? `${me.name} usa ${mov_html(mov.n, mov.t)}, pero \u00a1${foe.name} lo esquiva!`
    : `${me.name} usa ${mov_html(mov.n, mov.t)}. ${efecto(a.mult)} ${a.valor} de dano.`;
  pintar();

  if (foe.hp <= 0) {
    streak++; round++;
    // El rival (lider/entrenador) puede tener mas Pokemon: saca el siguiente vivo.
    const quedan = equipoFoe.findIndex((p, i) => i > foeIdx && p.hp > 0);
    if (quedan !== -1) {
      // aun no termina el combate: no se sube nivel todavia
      log(`\u00a1${foe.name} cae!`);
      pintar();
      setTimeout(() => relevoRival(quedan), 900);
      return;
    }
    // COMBATE GANADO: sube TODO el equipo segun el tipo de rival.
    const niveles = enLider ? 3 : (esSalvaje ? 1 : 2);
    const subida = subirEquipo(niveles);
    log(`\u00a1${foe.name} cae! ${subida}`);
    pintar();
    const nuevos = movsNuevos(); // movimientos nuevos del activo (modal)
    aprenderMovs(nuevos, () =>
      resolverMovsBanquillo(() =>
        resolverEvoluciones(() => setTimeout(trasVictoria, 900))
      )
    );
    return;
  }

  const fm = foe.moves[Math.floor(Math.random() * foe.moves.length)];
  const b = dano(fm, me, foe);
  me.hp -= b.valor;
  flash("me", fm.t);
  txt += b.esquivado
    ? ` ${foe.name} ataca con ${mov_html(fm.n, fm.t)}, pero \u00a1${me.name} lo esquiva!`
    : ` ${foe.name} responde con ${mov_html(fm.n, fm.t)}: ${b.valor} de dano.`;
  log(txt);
  pintar();

  if (me.hp <= 0) {
    log(`\u00a1${me.name} se ha debilitado!`);
    pintar();
    const vivos = equipo.some((p, i) => p.hp > 0 && i !== activoIdx);
    if (vivos) {
      setTimeout(() => abrirCambio(true), 700); // obligado: tu activo cayo
    } else {
      setTimeout(fin, 700); // no queda nadie
    }
    return;
  }
  pintarMoves(true);
}

// El rival saca su siguiente Pokemon.
function relevoRival(idx) {
  foeIdx = idx;
  foe = equipoFoe[idx];
  if (foe.entrenador === undefined && equipoFoe[0].entrenador) foe.entrenador = equipoFoe[0].entrenador;
  log(`El rival saca a ${foe.name}.`);
  pintar(); pintarMoves(true);
}

function efecto(mult) {
  if (mult > 1) return "\u00a1Es muy eficaz!";
  if (mult < 1) return "No es muy eficaz...";
  return "";
}

// Decide que pasa tras ganar un combate dentro de la aventura.
function trasVictoria() {
  if (enLider) {
    enLider = false;
    mapaSuperado();
    return;
  }
  // era un spot normal: avanza al siguiente paso (o al lider si ya hizo los 6)
  pasoIdx++;
  arena.classList.add("hidden");
  mapaPanel.classList.remove("hidden");
  // Sin cura: el equipo conserva la vida con la que acabo el combate.
  mostrarPaso();
}

// Mapa completado: desbloquea el siguiente o termina el juego.
function mapaSuperado() {
  // Al vencer al lider: si su mapa da medalla, se gana (una sola vez).
  const med = MAPAS[mapaIdx] && MAPAS[mapaIdx].lider && MAPAS[mapaIdx].lider.medalla;
  if (med && MEDALLAS[med] && !medallasGanadas.includes(med)) {
    medallasGanadas.push(med);
  }
  arena.classList.add("hidden");
  overPanel.classList.remove("hidden");
  if (mapaIdx < MAPAS.length - 1) {
    mapaIdx++;
    $("overTitle").textContent = "\u00a1Mapa superado!";
    $("overText").textContent = `Venciste al lider. Siguiente destino: Mapa ${MAPAS[mapaIdx].id} - ${MAPAS[mapaIdx].nombre}.`;
    $("again").textContent = "Ir al siguiente mapa";
    overPanel.dataset.accion = "siguiente";
  } else {
    juegoCompletado();
  }
}

// --- Captura de un Pokemon salvaje ---
function intentarCaptura() {
  if (!esSalvaje) return;
  turnos++; $("turno").textContent = turnos;
  pintarMoves(false);
  const prob = probCaptura();
  const exito = Math.random() * 100 < prob;
  if (exito) {
    const capturado = {
      key: foe.key, name: foe.name, sprite: foe.sprite, type: foe.type, typeReal: foe.typeReal,
      level: foe.level, maxHp: foe.maxHp, hp: foe.maxHp,
      moves: foe.moves.map((m) => ({ ...m })),
      learn: (FORMAS[foe.key] && FORMAS[foe.key].learnset.map((m) => ({ ...m }))) || [],
      item: null,
    };
    // Equipo lleno: se captura el 7o y el jugador decide a quien liberar.
    if (equipo.length >= MAX_EQUIPO) {
      log(`\u00a1Has capturado a ${capturado.name}! Pero tu equipo esta lleno (6).`);
      pintar();
      abrirLiberar(capturado);
      return;
    }
    equipo.push(capturado);
    log(`\u00a1Has capturado a ${foe.name}! Se une a tu equipo (${equipo.length}/6).`);
    pintar();
    setTimeout(trasVictoria, 1000); // capturar cuenta como superar el spot
  } else {
    log(`\u00a1${foe.name} se solto! El rival ataca.`);
    const fm = foe.moves[Math.floor(Math.random() * foe.moves.length)];
    const b = dano(fm, me, foe);
    me.hp -= b.valor;
    flash("me", fm.t);
    pintar();
    if (me.hp <= 0) {
      const vivos = equipo.some((p, i) => p.hp > 0 && i !== activoIdx);
      if (vivos) setTimeout(() => abrirCambio(true), 700);
      else setTimeout(fin, 700);
      return;
    }
    pintarMoves(true);
  }
}

// --- Cambio de Pokemon del equipo ---
// obligado=true cuando tu activo cayo (no puedes cerrar sin elegir uno vivo).
function abrirCambio(obligado) {
  const modal = $("modal");
  const lista = $("modalMoves");
  $("modalTitle").textContent = "Cambiar Pokemon";
  $("modalNew").textContent = obligado
    ? "Tu Pokemon se debilito. Elige quien sale a combatir:"
    : "Elige a que Pokemon cambiar:";
  lista.innerHTML = "";
  equipo.forEach((p, i) => {
    if (i === activoIdx) return;
    const b = document.createElement("button");
    const vivo = p.hp > 0;
    b.className = vivo ? "m-normal" : "m-normal";
    b.disabled = !vivo;
    b.innerHTML = `<img class="mini" src="${p.sprite}" alt=""> ${p.name} <small>(Nv ${p.level}, ${Math.max(0, Math.round(p.hp))}/${p.maxHp} PS)</small>`;
    b.addEventListener("click", () => {
      activoIdx = i;
      me = equipo[i];
      cerrarModal();
      log(`\u00a1Adelante, ${me.name}!`);
      pintar();
      if (obligado) {
        pintarMoves(true); // entras sin que el rival ataque extra
      } else {
        // cambiar gasta el turno: el rival ataca
        turnos++; $("turno").textContent = turnos;
        const fm = foe.moves[Math.floor(Math.random() * foe.moves.length)];
        const bd = dano(fm, me, foe);
        me.hp -= bd.valor;
        flash("me", fm.t);
        log(`El rival aprovecha y ataca a ${me.name}: ${bd.valor} de dano.`);
        pintar();
        if (me.hp <= 0) {
          const vivos = equipo.some((q, j) => q.hp > 0 && j !== activoIdx);
          if (vivos) setTimeout(() => abrirCambio(true), 700);
          else setTimeout(fin, 700);
          return;
        }
        pintarMoves(true);
      }
    });
    lista.appendChild(b);
  });
  // Flecha azul atras: solo cuando el cambio es opcional (no obligado por KO).
  if (!obligado) {
    const volver = document.createElement("button");
    volver.className = "cambio-volver";
    volver.innerHTML = "\u2190 No cambiar";
    volver.addEventListener("click", () => { cerrarModal(); pintarMoves(true); });
    lista.appendChild(volver);
  }
  modal.classList.remove("hidden");
}

// Equipo lleno (6) y capturas un 7o: elige a quien liberar, o suelta al nuevo.
function abrirLiberar(nuevo) {
  const modal = $("modal");
  const lista = $("modalMoves");
  $("modalTitle").textContent = "Equipo lleno (6/6)";
  $("modalNew").textContent = `Capturaste a ${nuevo.name} (Nv ${nuevo.level}). Elige a quien dejar ir para que entre, o libera a ${nuevo.name}.`;
  lista.innerHTML = "";
  // Tarjeta del recien capturado, arriba, destacada.
  const cab = document.createElement("div");
  cab.className = "lib-nuevo";
  cab.innerHTML = `<img class="mini" src="${nuevo.sprite}" alt=""> Nuevo: <b>${nuevo.name}</b> <small>(Nv ${nuevo.level})</small>`;
  lista.appendChild(cab);
  // Un boton por cada miembro actual: al pulsarlo, ese se libera y entra el nuevo.
  equipo.forEach((p, i) => {
    const b = document.createElement("button");
    b.className = "m-normal";
    b.innerHTML = `<img class="mini" src="${p.sprite}" alt=""> Soltar ${p.name} <small>(Nv ${p.level})</small>`;
    b.addEventListener("click", () => {
      const fuera = equipo[i];
      equipo[i] = nuevo;
      if (activoIdx === i) me = equipo[activoIdx];
      cerrarModal();
      log(`Liberaste a ${fuera.name}. ${nuevo.name} ocupa su lugar (6/6).`);
      pintar();
      setTimeout(trasVictoria, 900);
    });
    lista.appendChild(b);
  });
  // Liberar al recien capturado (no cambia el equipo).
  const soltar = document.createElement("button");
  soltar.className = "cambio-volver";
  soltar.innerHTML = `\u2190 Liberar a ${nuevo.name} y seguir`;
  soltar.addEventListener("click", () => {
    cerrarModal();
    log(`Liberaste a ${nuevo.name}. Tu equipo sigue igual (6/6).`);
    pintar();
    setTimeout(trasVictoria, 900);
  });
  lista.appendChild(soltar);
  modal.classList.remove("hidden");
}

// Fin de los 8 mapas.
function juegoCompletado() {
  $("overTitle").textContent = "\u00a1Campeon!";
  // Resumen final: tarjeta por cada Pokemon del equipo.
  const fichas = (equipo || []).map((p) => {
    const tipo = tipoHTML(p.typeReal || p.type);
    return `<div class="fin-card">` +
      `<img class="fin-sprite" src="${p.sprite}" alt="${p.name}" />` +
      `<div class="fin-nombre">${p.name}</div>` +
      `<div class="fin-nivel">Nv ${p.level}</div>` +
      `<div class="fin-tipo">${tipo}</div>` +
      (p.item ? `<div class="fin-objeto">${OBJETOS[p.item].icono} ${OBJETOS[p.item].nombre}</div>` : "") +
    `</div>`;
  }).join("");
  const medallas = (medallasGanadas || []).length;
  $("overText").innerHTML =
    `<div class="fin-sub">Has superado los 8 mapas y conseguido ${medallas} medallas. \u00a1Felicidades!</div>` +
    `<div class="fin-equipo">${fichas}</div>`;
  $("again").textContent = "Jugar otra vez";
  overPanel.dataset.accion = "reiniciar";
}

function fin() {
  arena.classList.add("hidden");
  overPanel.classList.remove("hidden");
  const best = Number(localStorage.getItem(KEY) || 0);
  if (streak > best) { localStorage.setItem(KEY, streak); $("overTitle").textContent = "\u00a1Nuevo record!"; }
  else { $("overTitle").textContent = "Has caido"; }
  $("overText").textContent = `${me.name} cayo en el Mapa ${MAPAS[mapaIdx].id} (${MAPAS[mapaIdx].nombre}), nivel ${me.level}.`;
  $("again").textContent = "Jugar otra vez";
  overPanel.dataset.accion = "reiniciar";
}

function log(t) { $("log").innerHTML = t; }

$("again").addEventListener("click", () => {
  overPanel.classList.add("hidden");
  if (overPanel.dataset.accion === "siguiente") {
    // conservas tu Pokemon; solo pasas al mapa ya desbloqueado
    iniciarMapa();
  } else {
    startPanel.classList.remove("hidden");
    init();
  }
});

init();
