const { mdLinks } = require('../index.js');

describe("mdLinks", () => {
  it("debe ser una función", () => {
    expect(typeof mdLinks).toBe("function");
  });
  it('debe devolver una promesa', () => mdLinks()
  .then(() => {
    expect(mdLinks).toBe(typeof 'promise');
  })
  .catch((error) => error));
  it('Debe retornar error en la promesa si no encuentra un path', () => mdLinks('debe/errar.md').catch((error) => {
    expect(error).toEqual("The path does not exist");
  }));
  it('Debe retornar error la promesa si el archivo no es de tipo .md', () => mdLinks('./index.js').catch((error) => {
    expect(error).toEqual("The file is not .md type");
  }));
});

