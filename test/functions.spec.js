const { existPath, existMdFile, validateReadFileMd, getLinks, readAllFilesRecursive } = require("../functions.js");

// Method process.cwd = current working directory
const currentDir = `${process.cwd()}`;

describe("existPath", () => {
  it("Debe ser una función", () => {
    expect(typeof existPath).toBe("function");
  });
  it("Debe validar cuando el path existe", () => {
    existPath("testeando/conLinks.md");
    expect(existPath("testeando/conLinks.md")).toEqual(true);
  });
  it("Debe validar cuando el path no existe", () => {
    existPath("./aqui/falla.md");
    expect(existPath("./aqui/falla.md")).toEqual(false);
  });
});

// Test para validar si es archivo es tipo .md
describe("existMdFile", () => {
  it("Debe ser una función", () => {
    expect(typeof existMdFile).toBe("function");
  });
  it("Debe devolver true si el archivo es tipo .md", () => {
    existMdFile("./README.md");
    expect(existMdFile("./README.md")).toEqual(true);
  });
  it("Debe devolver false si el archivo no es tipo .md", () => {
    existMdFile("./README.md");
    expect(existMdFile("./package.json")).toEqual(false);
  });
});

//  Test para validar leer un archivo .md 
describe('validateReadFileMd', () => {
  it("Debe ser una función", () => {
    expect(typeof validateReadFileMd).toBe("function");
  });
  it('Debe devolver el contenido del archivo', () => {
    expect(validateReadFileMd(`${currentDir}\\testeando\\unLink.md`))
      .toEqual('[Testeando](https://www.linkedin.com/in/paola-quiroga-developerfrontend/)');
  });
});

// Test para traer los links
describe('getLinks', () => {
  it("Debe ser una función", () => {
    expect(typeof getLinks).toBe("function");
  });
  it('Debe obtener el link del archivo', () => {
    expect(getLinks(`${currentDir}\\testeando\\subTesteando\\Test2.md`))
      .toEqual(null)
  });
});

// Test para leer los archivos
describe("readAllFilesRecursive", () => {
  it("Debe ser una función", () => {
    expect(typeof readAllFilesRecursive).toBe("function");
  });
  it('Debe devolver los archivos del directorio', () => {
    expect(readAllFilesRecursive('./testeando'))
    .toEqual(["./testeando/conLinks.md", "./testeando/sinLinks.md", "./testeando/subTesteando/Test2.md", "./testeando/subTesteando/Test3.js", "./testeando/unLink.md"])
  });
});


