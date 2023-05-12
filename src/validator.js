const validator = { // atribuindo o validator a uma variavel (ARRAY 1)

    isValid: function (numero) { //o meu isValid é um objeto, e minha função (numero) uma propriedade
       let ccNumber = numero.split('').map(Number).reverse(); // a variavel ccNumber pega os numeros e coloca eles em uma array, revertendo de trás pra frente
      
       console.log(ccNumber, "está pegando os numeros do cartao e colocando em uma array");

       let newArray = [];
       
        for (let i = 0; i < ccNumber.length; i++){ // (ARRAY 2) o for inicializa o i como 0, e acrescenta 1 (repete a ação) enquanto o i for menor que o comprimento da array
          if (i % 2 !== 0) { //a condição verifica se o numero esta na posição impar
          const multip = ccNumber[i] * 2; // a variavel multip faz a multiplicação se o numero estiver na posição impar
          //newArray.push(multip);
          //console.log(newArray);
          if (multip >=10) { //se a multiplicação der um número igual ou acima de dez, a const multiplo vai pegar o resto da divisão do numero por 10 e somar com 1, resultando sempre em um numero de 0 a 9
            const multiplo = multip % 10 + 1;
            newArray.push(multiplo); // a função .push() empurra dentro da array o resultado
            //console.log(newArray);
          }
          else {
            newArray.push(multip); //se a multiplicação menor que 10, a função .push() empurra dentro da array apenas o resultado da multiplicação
            //console.log(newArray); 
          }
          }
          else {
            ccNumber[i]; // se o numero estiver na posição par, a função .push() empurra dentro da array ele mesmo
            newArray.push(ccNumber[i]);
            //console.log(newArray);
          }
      }
        console.log(newArray);

        let soma = 0;
        for (let s = 0; s < newArray.length; s++){
          soma += newArray[s];
          console.log(soma);
        }
          
        return soma % 10 === 0;
  },
    //maskify: function(valor){

    //}
};

export default validator;