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

    /*fiz um alert para abrir uma janela mostrando se a quantidade de dígitos do cartão que o usuário inseriu é
suficiente ou não, usando if e else para as condições
*/
    if (value.length == 16) {
        alert(`Seu cartão de número ${value} é válido`);
    }
    else if (value.length >= 1 && value.length <=15) {
        alert('Por favor, insira até 16 dígitos')
    }
    else if (value.length == 0) {
        alert('Por favor, digite o número do seu cartão')
    };
});

/*pretendo fazer:
*ainda não tenho certeza*: trocar alert por aparecer na tela
não deixar o usuario inserir letras
não deixar o campo em branco
mascarar os 12 primeiros dígitos do cartão
*/

console.log(validator);