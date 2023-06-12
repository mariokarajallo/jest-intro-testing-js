import Citas from "../js/Clases/Citas";

//Instanciamos por fuera de los test para poder utilizar en varias pruebas
const citas = new Citas();

describe("Probar la clase de citas", () => {
  test("Agregar una nueva cita", () => {
    const citaObj = {
      mascota: "Frodo",
      propietario: "Mario",
      telefono: "111222",
      fecha: "11-06-23",
      hora: "10:40",
      sintomas: "Duerme mucho",
    };

    citaObj.id = Date.now();

    citas.agregarCita(citaObj);

    //prueba
    expect(citas).toMatchSnapshot();
  });
});