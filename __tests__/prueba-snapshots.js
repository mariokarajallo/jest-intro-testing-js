const cliente = {
  nombre: "Mario",
  balance: 1000,
  tipo: "Premium",
};

describe("Testing al cliente", () => {
  test("Es cliente es Mario", () => {
    expect(cliente).toMatchSnapshot();
  });
});
