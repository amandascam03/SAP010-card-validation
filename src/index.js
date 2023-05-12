import validator from './validator.js';

//essa é a variavel const que pega a id do meu botão, chamada "botao"
const botao = document.getElementById("botao");

/*eu usei o addEventListener para adicionar ações quando meu botão sofrer um "click"
em seguida fiz uma função para o preventDefault, porque não quero enviar o valor inserido para nenhum lugar*/
botao.addEventListener("click", function(e) {
    e.preventDefault();

    //fiz uma variavel const para pegar o valor do input
    //const numeroInserido = document.getElementById("numero");

    //fiz uma const valor para poder mostrar o valor inserido no input na string retornada no <p>
    let valor = document.getElementById("numero").value;

    //let resultado = validator.isValid(numero);
    //let maskify = validator.maskify

    /*fiz um getElementById para mostrar na tela em um paragrafo <p> se a quantidade de dígitos do cartão que o usuário inseriu é
suficiente ou não, usando if e else para as condições*/
    if (valor.length == 16) {
        document.getElementById("alerta").style.border = 'thick outset green';
        document.getElementById("alerta").style.backgroundColor = 'green';
        document.getElementById("alerta").innerHTML = `Parabéns! seu cartão de número ${valor} é válido.`;
    }
    else if (valor.length >= 1 && valor.length <=15) {
        document.getElementById("alerta").style.border = 'thick outset red';
        document.getElementById("alerta").style.backgroundColor = 'red';
        document.getElementById("alerta").innerHTML = "Por favor, insira até 16 dígitos.";
    }
    else if (valor.length == 0) {
        document.getElementById("alerta").style.border = 'thick outset red';
        document.getElementById("alerta").style.backgroundColor = 'red';
        document.getElementById("alerta").innerHTML = "Por favor, insira os dígitos do cartão.";
    }
    else if (valor.length >=17) {
        document.getElementById("alerta").style.border = 'thick outset red';
        document.getElementById("alerta").style.backgroundColor = 'red';
        document.getElementById("alerta").innerHTML = "Você inseriu muitos números.";
    }
    else {
        document.getElementById("alerta").style.border = 'thick outset red';
        document.getElementById("alerta").style.backgroundColor = 'red';
        document.getElementById("alerta").innerHTML = "Infelizmente esse cartão é inválido.";
    }
});

//teste
validator.isValid("1233456");
const resultado = validator.isValid(numero);
console.log(resultado);

console.log(validator);