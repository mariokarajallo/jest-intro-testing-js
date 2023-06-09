import { suma, resta } from "../js/funciones";
describe("Testing a las funciones de suma y resta", () => {
  test("Suma de 20 y 30 y resultado 30 ", () => {
    expect(suma(20, 10)).toBe(30);
  });

  test("Resta de 10 - 5", () => {
    expect(resta(10, 5)).toBe(5);
  });

  test("Que la suma 10 y 10, no sea 10", () => {
    expect(suma(10, 10)).not.toBe(10);
  });

  test("Que la resta de 10 - 5 no sea otro valor ", () => {
    expect(resta(10, 5)).not.toBe(2);
  });
});
