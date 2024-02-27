import esBisiesto from "./verificadorBisiesto.js";

const number = document.querySelector("#numero");
const form = document.querySelector("#esBisiesto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML = "<p> No es bisiesto </p>";
  if(esBisiesto(parseInt(number.value)))
    div.innerHTML = "<p> Es bisiesto </p>";
});
