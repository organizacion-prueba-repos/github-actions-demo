const sum = require("./sum");

if (sum(2, 2) !== 4) {
  console.error("Test de suma falló");
  process.exit(1);
}

console.log("Test de suma pasó");