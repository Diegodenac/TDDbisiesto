import esBisiesto from "./verificadorBisiesto.js";

describe("Verificar si es Bisiesto", () => {
  it("Verificar si 4 es año bisiesto", () => {
    expect(esBisiesto(4)).toEqual(true);
  });
  it("Verificar si 2017 es año bisiesto", () => {
    expect(esBisiesto(2017)).toEqual(false);
  });
  it("Verificar si es divisible entre 400 es año bisiesto", () => {
    expect(esBisiesto(400)).toEqual(true);
  });
  it("Verificar si es divisible entre 400 es año bisiesto", () => {
    expect(esBisiesto(800)).toEqual(true);
  });
  it("Verificar si es divisible entre 400 es año bisiesto", () => {
    expect(esBisiesto(1200)).toEqual(true);
  });
  it("Verificar si es divisible entre 100, pero no por 400 no es año bisiesto", () => {
    expect(esBisiesto(1300)).toEqual(false);
  });
  it("Verificar si es divisible entre 100, pero no por 400 no es año bisiesto", () => {
    expect(esBisiesto(1800)).toEqual(false);
  });
  it("Verificar si es divisible entre 4, pero no por 100 es año bisiesto", () => {
    expect(esBisiesto(2008)).toEqual(true);
  });
  it("Verificar si es divisible entre 4, pero no por 100 es año bisiesto", () => {
    expect(esBisiesto(2012)).toEqual(true);
  });
  it("Verificar si es divisible entre 4, pero no por 100 es año bisiesto", () => {
    expect(esBisiesto(2016)).toEqual(true);
  });
});
