import validator from './validator.js';

var captar = Number;

function chamar() {
    captar = document.getElementById("numero").value;
    document.getElementById("digitos").innerHTML = captar;
};

console.log(validator);