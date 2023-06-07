const cliente = {
  nombre: "Mario",
  balance: 1000,
};

describe("Testing al Cliente", () => {
  test("El cliente es premium", () => {
    expect(cliente.balance).toBeGreaterThan(800);
  });

  test("El ciente es: Mario", () => {
    expect(cliente.nombre).toBe("Mario");
  });

  test("No es otro cliente", () => {
    expect(cliente.nombre).not.toBe("Javier");
  });

  test("No tiene 1000", () => {
    expect(cliente.balance).not.toBe(800);
  });
});
