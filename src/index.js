import validator from './validator.js';

console.log(validator);

const button = document.getElementById("botao");

button.addEventListener("click", teste);

function teste() {
    return("Chamou a função teste!");
}