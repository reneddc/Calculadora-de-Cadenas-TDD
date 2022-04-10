import SumaCadena from './sumaCadena'

const cadenaInput = document.querySelector("#cadena");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const sumaCadena = new SumaCadena();

  let cadena = cadenaInput.value;
  const total = sumaCadena.sumarCadena(cadena);

  div.innerHTML = "<p>Total= " + total + "</p>";
});
