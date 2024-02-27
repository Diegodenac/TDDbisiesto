import esBisiesto from "./verificadorBisiesto.js";

describe("Verificar Bisiesto", () => {
  it("Verificar si 4 es año bisiesto", () => {
    expect(esBisiesto(4)).toEqual(true);
  });
  it("Verificar si 2017 es año bisiesto", () => {
    expect(esBisiesto(2017)).toEqual(false);
  });
});
