const fs = require("fs");
const path = require("path");

// Función para validar si existe la ruta
const existPath = (paths) => fs.existsSync(paths);

// Función para validar si la ruta es absoluta o relativa, y si es relativa la convierte a absoluta
const absolutePath = (paths) => {
  return path.isAbsolute(paths) ? paths : path.resolve(paths); 
};

// Funcion para validar si el archivo es .md y su extención
const existFile = (paths) => path.extname(paths) === '.md';

//Función para validar si es un File (archivo)
const validateFile = (paths) => fs.statSync(paths).isFile();

// Función para validar si es un directorio
const validateDirectory =  (paths) => fs.statSync(paths).isDirectory();

// 



module.exports = {
  existPath,
  absolutePath,
  existFile,
  validateFile,
  validateDirectory,
};