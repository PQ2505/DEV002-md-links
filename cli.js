#!/usr/bin/env nodo
const { mdLinks } = require("./index.js");
const chalk = require("chalk");
const process = require("process");

const path = process.argv[2];
const option1 = process.argv[3];
const option2 = process.argv[4];

if (path) {
  if (option1 === undefined && option2 === undefined) {
    mdLinks(path, { validate: false, stats: false }).then((result) => result);
  }
}

// ruta .md con links './routstesting/Test1.md'
// ruta .md sin links '../routstesting/Test0.md'
// ruta archivo no .md './package.json'
