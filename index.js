const { existPath } = require("./functions.js");
const chalk = require("chalk");

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    // Identificar si la ruta exite
    if (!existPath(path)) {
      reject("The path does not exist");
      console.log(chalk.magenta(reject));
    } else {
      console.log(chalk.magenta("The path exist"));
    }
  });
};

module.exports = {
  mdLinks,
};