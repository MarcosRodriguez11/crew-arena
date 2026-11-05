const fs = require("fs"), vm = require("vm"), path = require("path");
const c = fs.readFileSync(path.resolve(__dirname, "..", "mapas.js"), "utf8") + "\n;globalThis.__M=MAPAS;";
const ctx = {}; vm.createContext(ctx); vm.runInContext(c, ctx);
ctx.__M.forEach((m) => {
  const info = m.pasos.map((f, i) => `p${i+1}:${f.length}${f.some(s => s.tipo === "cura") ? "(cura)" : ""}`).join("  ");
  console.log("mapa " + m.id + "  " + info);
});
