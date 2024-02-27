import esBisiesto from "./verificadorBisiesto.js";

describe("Verificar si es Bisiesto", () => {
  it("Verificar si 4 es año bisiesto", () => {
    expect(esBisiesto(4)).toEqual(true);
  });
  it("Verificar si 2017 es año bisiesto", () => {
    expect(esBisiesto(2017)).toEqual(false);
  });
  it("Verificar si es divisible entre 4 es año bisiesto", () => {
    expect(esBisiesto(8)).toEqual(true);
  });
});
