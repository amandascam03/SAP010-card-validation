import validator from './validator.js';

//essa é a variavel const que pega a id do meu botão, chamada "botao"
const botao = document.getElementById("botao")

/*eu usei o addEventListener para adicionar uma ação quando meu botão sofrer um "click"
em seguida fiz uma função para adicionar o preventDefault, porque não quero enviar o valor inserido para nenhum lugar*/
botao.addEventListener("click", function(e) {
    e.preventDefault();

    //fiz uma variavel const para pegar o valor inserido no input
    const numeroInserido = document.getElementById("numero");

    //fiz uma const value para poder mostrar o valor inserido no input
    const value = numero.value;

    /*fiz um getElementById para mostrar na tela em um paragrafo <p> se a quantidade de dígitos do cartão que o usuário inseriu é
suficiente ou não, usando if e else para as condições*/
    if (value.length == 16) {
        document.getElementById("alerta").style.border = 'thick outset green';
        document.getElementById("alerta").style.backgroundColor = 'green';
        document.getElementById("alerta").innerHTML = `Parabéns! seu cartão de número ${value} é válido.`;
    }
    else if (value.length >= 1 && value.length <=15) {
        document.getElementById("alerta").style.border = 'thick outset red';
        document.getElementById("alerta").style.backgroundColor = 'red';
        document.getElementById("alerta").innerHTML = "Por favor, insira até 16 dígitos.";
    }
    else if (value.length == 0) {
        document.getElementById("alerta").style.border = 'thick outset red';
        document.getElementById("alerta").style.backgroundColor = 'red';
        document.getElementById("alerta").innerHTML = "Por favor, insira os dígitos do cartão.";
    }
    else if (value.length >=17) {
        document.getElementById("alerta").style.border = 'thick outset red';
        document.getElementById("alerta").style.backgroundColor = 'red';
        document.getElementById("alerta").innerHTML = "Você inseriu muitos números.";
    };
});

/*pretendo fazer:
algoritmo de luhn para retornar falso se o número for inválido e true se for válido
mascarar os 12 primeiros dígitos do cartão
*/

console.log(validator);