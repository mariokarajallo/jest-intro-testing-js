const pass = "123456";

describe("Valida que el password no este vacio y tenga una eaxtension de 6 caracteres", () => {
  test("Que el password tenga 6 caracteres", () => {
    expect(pass).toHaveLength(6);
  });

  test("Password no vacio", () => {
    expect(pass).not.toHaveLength(0);
  });
});
