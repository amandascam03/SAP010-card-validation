import validator from './validator.js';

//essa é a variavel const que pega a id do meu botão, chamada "botao"
const botao = document.getElementById("botao");

/*eu usei o addEventListener para adicionar ações quando meu botão sofrer um "click"
em seguida fiz uma função para o preventDefault, porque não quero enviar o valor inserido para nenhum lugar*/
botao.addEventListener("click", function(e) {
  e.preventDefault();

  const valor = document.getElementById("numero").value; // variavel para pegar o numero inserido no input
  const resultado = validator.isValid(valor); // variavel para chamar a função e executar com o valor inserido
  //console.log(resultado);
  const maskified = validator.maskify(valor);
  //console.log(maskified);

  /*o getElementById pega no HTML o paragrafo <p> de id "alerta" e mostra se a quantidade de dígitos do cartão que o usuário inseriu é
suficiente ou não, se o campo está vazio e se é true ou false, usando if e else para as condições*/
    
  if (valor.length === 0) {
    document.getElementById("alerta").style.border = 'thick outset red';
    document.getElementById("alerta").style.backgroundColor = 'red';
    document.getElementById("alerta").innerHTML = "O campo está vazio. Por favor, insira os dígitos do cartão.";
  }
  else if (valor.length >= 1 && valor.length <= 15) {
    document.getElementById("alerta").style.border = 'thick outset red';
    document.getElementById("alerta").style.backgroundColor = 'red';
    document.getElementById("alerta").innerHTML = "Por favor, insira até 16 dígitos.";
  }
  else if (valor.length >= 17) {
    document.getElementById("alerta").style.border = 'thick outset red';
    document.getElementById("alerta").style.backgroundColor = 'red';
    document.getElementById("alerta").innerHTML = "Você inseriu muitos números.";
  }
  else if (resultado === true) {
    document.getElementById("alerta").style.border = 'thick outset green';
    document.getElementById("alerta").style.backgroundColor = 'green';
    document.getElementById("alerta").innerHTML = `Parabéns! seu cartão de número ${maskified} é válido.`;
  }
  else {
    document.getElementById("alerta").style.border = 'thick outset red';
    document.getElementById("alerta").style.backgroundColor = 'red';
    document.getElementById("alerta").innerHTML = "Infelizmente esse cartão é inválido.";
  }

});

//console.log(validator);