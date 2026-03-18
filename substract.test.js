const substract = require("./substract");

if (substract(5, 3) !== 2) {
  console.error("Test de resta falló");
  process.exit(1);
}

console.log("Test de resta pasó");