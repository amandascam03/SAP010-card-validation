const validator = { //atribuindo o validator a uma variavel

  isValid: function(numero) { //a função(numero) é uma propriedade e executa o algoritmo de Luhn
    const ccNumber = numero.split('').map(Number).reverse(); // a variavel ccNumber pega os numeros e coloca eles em uma array, revertendo de trás pra frente
    //console.log(ccNumber);

    const newArray = [];
       
    for (let i = 0; i < ccNumber.length; i++){ //o for inicializa o i como 0, e acrescenta 1 (repete a ação) enquanto o i for menor que o comprimento da array
      if (i % 2 !== 0) { //a condição verifica se o numero esta na posição impar
        const multip = ccNumber[i] * 2; // a variavel multip faz a multiplicação se o numero estiver na posição impar
        if (multip >=10) { //se a multiplicação der um número igual ou acima de dez, a const multiplo vai pegar o resto da divisão do numero por 10 e somar com 1, resultando sempre em um numero de 0 a 9
          const multiplo = multip % 10 + 1;
          newArray.push(multiplo); // a função .push() empurra dentro da array o resultado
        }
        else {
          newArray.push(multip); //se a multiplicação der menor que 10, a função .push() empurra dentro da array apenas o resultado da multiplicação
        }
      }
      else {
        ccNumber[i]; // se o numero estiver na posição par, a função .push() empurra dentro da array ele mesmo
        newArray.push(ccNumber[i]);
      }
    }
    //console.log(newArray);

    let soma = 0; // vai fazendo a soma dos números da array um por um, ate atingir o comprimento da array
    for (let s = 0; s < newArray.length; s++){
      soma += newArray[s];
      //console.log(soma);
    }
    return soma % 10 === 0; //se o resto da soma da divisão desse número por 10 for 0, retorna true e se não, false
  },

  maskify: function(numeroMascarado){ // função para mascarar os primeiros dígitos exceto os 4 ultimos
    const string = numeroMascarado.toString(); //transforma os numeros em uma string
    const arr = string.split(''); //coloca a string em uma array de substrings

    for (let i = 0; i < arr.length - 4; i++){ //executa a função até que atinja o comprimento da array - 4, para mascarar apenas os 12 primeiros dígitos
      arr[i] = '#'; //atribui ao indice da array a hashtag, substituindo os numeros
      //console.log(arr);
    }
    const masked = arr.join(''); //variavel para todas as substrings da array se tornar 1 só
    //console.log(masked);
    return masked;
  }
};

export default validator;