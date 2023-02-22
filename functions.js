const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

// Función para validar si existe la ruta
const existPath = (paths) => fs.existsSync(paths);

// Función para validar si la ruta es absoluta o relativa, y si es relativa la convierte a absoluta
const absolutePath = (paths) => {
  return path.isAbsolute(paths) ? paths : path.resolve(paths);
};

// Función para validar si el archivo es .md y su extención
const existFile = (paths) => path.extname(paths) === ".md";

//Función para validar si es un File (archivo)
const validateFile = (paths) => fs.statSync(paths).isFile();
//console.log(chalk.magenta(validateFile('./routstesting/Test0.md')));

//Función que lee un archivo .md
const validateReadFileMd = (paths) => fs.readFileSync(paths, "utf8");
//console.log(validateReadFileMd('./routstesting/Test1.md'));

//Función para validar si es un directorio
const validateDirectory = (paths) => fs.statSync(paths).isDirectory();
//console.log(validateDirectory('./routstesting'));

//Función para leer un directorio
const readingDirectory = (paths) => fs.readdirSync(paths);
//console.log(readingDirectory('./routstesting'));

//Función para obtener los links
const getLinks = (text) => {
  const regexLinks =
    /\[(.+?)\]\((https?:\/\/[^\s]+)(?: "(.+)")?\)|(https?:\/\/[^\s]+)/gi;
  return text.match(regexLinks);
};

//Función para extraer los links de un archivo .md, devuelve array de objetos
const linkToObject = (db, paths) => {
  const urlRegex = /\((https?:\/\/[^\s]+)(?: "(.+)")?\)|(https?:\/\/[^\s]+)/gi;
  const textRegex = /\[(\w+.+?)\]/gi;
  let extractedURL = db.match(urlRegex).toString();
  let linkURL = extractedURL.slice(1, -1);
  let extractedText = db.match(textRegex).toString();
  let linkText = extractedText.slice(1, -1);
  return { href: linkURL, text: linkText, file: paths };
};

// Función para buscar archivos .md con su ruta para poder guardarlos los archivos en un array
const readingDirandFile = (paths) => {
  const pathAbsolute = absolutePath(paths);
  let filesArray = [];
  if (absolutePath(pathAbsolute) && validateFile(paths)) {
    if (existFile(pathAbsolute)) {
      filesArray.push(pathAbsolute);
    }
  } else {
    const verifyReadDir = readingDirectory(paths);
    verifyReadDir.forEach((paths) => {
      filesArray = filesArray.concat(
        readingDirandFile(path.join(pathAbsolute, paths))
      );
    });
  }
  return filesArray;
};

module.exports = {
  existPath,
  absolutePath,
  existFile,
  validateFile,
  validateDirectory,
  readingDirectory,
  validateReadFileMd,
  getLinks,
  linkToObject,
  readingDirandFile,
};
