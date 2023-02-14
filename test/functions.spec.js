const { existPath, absolutePath, existFile } = require("../functions.js");

describe("existPath", () => {
  it("Debe validar cuando el path existe", () => {
    existPath("./routstesting/Test1.md");
    expect(existPath("./routstesting/Test1.md")).toEqual(true);
  });
  it("Debe validar cuando el path no existe", () => {
    existPath("./esto/falla.md");
    expect(existPath("./esto/falla.md")).toEqual(false);
  });
});
//Test para validar si a ruta es absoluta o relativa
describe("absolutePath", () => {
  it("Debe cambiar a absoluta si es relativa", () => {
    absolutePath("./README.md");
    expect(absolutePath("./README.md")).toEqual(
      "C:\\Users\\eprip\\OneDrive\\Desktop\\DEV002-md-links\\README.md"
    );
  });
  it("Debe devolver la ruta si ya es absoluta", () => {
    absolutePath("./README.md");
    expect(absolutePath("./README.md")).toEqual(
      "C:\\Users\\eprip\\OneDrive\\Desktop\\DEV002-md-links\\README.md"
    );
  });
});
// Test para validar si es archivo es tipo .md
describe("existFile", () => {
  it("Debe devolver true si el archivo es tipo .md", () => {
    existFile("./README.md");
    expect(existFile("./README.md")).toEqual(true);
  });
  it("Debe devolver false si el archivo no es tipo .md", () => {
    existFile("./README.md");
    expect(existFile("./package.json")).toEqual(false);
  });
});



