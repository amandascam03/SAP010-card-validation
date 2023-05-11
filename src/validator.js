const validator = { // atribuindo o validator a uma variavel

    isValid: function (numero) { //o meu isValid é um objeto, e minha função uma propriedade
       let ccNumber = numero.split('').map(Number).reverse(); // a variavel ccNumber pega os numeros e coloca eles em uma array, revertendo de trás pra frente
      
       console.log(ccNumber, "está pegando os numeros do cartao e colocando em uma array");
       let newArray = [];
        for (let i = 0; i < ccNumber.length; i++){
          if (i % 2 !== 0) {
          const multip = ccNumber[i] * 2;
          newArray.push(multip);
          console.log(newArray);
          if (multip >=10) {
            const multiplo = multip % 10 + 1;
            newArray.push(multiplo);
            console.log(newArray);
          }
          else {
            newArray.push(multip);
            console.log(newArray);
          }
          }
          else {
            ccNumber[i];
            newArray.push(ccNumber[i]);
            console.log(newArray);
          }
      }
  },
    //maskify: function(valor){

    //}
};


export default validator;
