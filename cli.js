#!/usr/bin/env nodo
const { mdLinks } = require("./index.js");
const chalk = require('chalk');

console.log(chalk.magenta('--------------------HOLA!! TE DOY LA BIENVENIDA--------------------'));

mdLinks("./README.md")
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error);
  });



// ruta .md con links './routstesting/Test1.md'
// ruta .md sin links '../routstesting/Test0.md'
// ruta archivo no .md './package.json' 