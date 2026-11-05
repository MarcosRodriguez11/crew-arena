const fs = require("fs");
const vm = require("vm");
const path = require("path");
const p = path.resolve(__dirname, "..", "mapas.js");
const code = fs.readFileSync(p, "utf8") + "\n;globalThis.__M=MAPAS;";
const ctx = {}; vm.createContext(ctx); vm.runInContext(code, ctx);
const M = ctx.__M;
let ok = true;
M.forEach((m) => {
  const c4 = (m.pasos[3] || []).filter((s) => s.tipo === "cura").length;
  const c6 = (m.pasos[5] || []).filter((s) => s.tipo === "cura").length;
  const otros = m.pasos.filter((_, i) => i !== 3 && i !== 5).flat().filter((s) => s.tipo === "cura").length;
  const marca = (c4 === 1 && c6 === 1 && otros === 0) ? "OK" : "FALLO";
  if (marca === "FALLO") ok = false;
  console.log(`${marca} mapa ${m.id}: cura en p4=${c4} p6=${c6}, otras=${otros}`);
});
console.log(ok ? "\nTODO OK: 1 cura en paso 4 y 1 en paso 6 de cada mapa" : "\nHAY FALLOS");
process.exit(ok ? 0 : 1);
