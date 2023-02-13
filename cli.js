const chalk = require("chalk");
const { mdLinks } = require("./index.js");

console.log(chalk.magenta('-------------HOLA BIENVENIDA----------------'))
mdLinks("./routstesting")
  .then(() => {})
  .catch((error) => {
    console.log(error);
  });