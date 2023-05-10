const validator = { // atribuindo o validator a uma variavel

    isValid: function (numero) { //o meu isValid é um objeto, e minha função uma propriedade
       let ccNumber = numero.split('').map(Number).reverse(); // a variavel ccNumber pega os numeros e coloca eles em uma array, revertendo de trás pra frente
      //somaPar = 0; // as variáveis são definidas para pegar o valor de numeros na posição impar, par e o valor final quando forem somados
       //somaImpar = 0;
       //valorFinal = 0;
       console.log(ccNumber, "está pegando os numeros do cartao e colocando em uma array");
      let totalNumbers = 0;
       for (let i = 0; i < ccNumber.length; i++){
        if (i % 2 !== 0) {
        let multip = ccNumber[i] * 2;
        console.log(multip);
        }
        }
  },
    //maskify: function(valor){

    //}
};


export default validator;
