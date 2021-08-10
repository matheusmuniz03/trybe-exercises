//EXERCICIO 01:
function verificaPalindrome (string)
{
    for (let index in  string)
    {
        if (string[index] != string[(string.length -1 ) - index])
        {
            return false;
        }
    }
    return true;
}

console.log(verificaPalindrome("arara"));
console.log(verificaPalindrome("Matheus"));



//EXERCICIO 02:
function verificaIndice (array) {
    let indiceMaior = 0;
    for (let index in array) {
        if (array[index] > array[indiceMaior]) {
            indiceMaior = index;
        }
    }
    return indiceMaior;
}
console.log(verificaIndice([2, 3, 6, 7, 10, 1]));



//EXERCICIO 03:
function verificaMenorIndice (array) {
    let indiceMenor = 0;
    for (let index in array) {
        if (array[index] < array[indiceMenor]) {
            indiceMenor = index;
        }
    }
    return indiceMenor;
}
console.log(verificaMenorIndice([2, 4, 6, 7, 10, 0, -3]));



//EXERCICIO 04:
function verificaMaiorNome (array) {
    let maiorNome = array[0];
    for (let index in array) {
        if (array[index].length > maiorNome.length) {
            maiorNome = array[index];
        }
    }
    return maiorNome;
}
console.log(verificaMaiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));



//EXERCICIO 05:
function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero += 1;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
}



//EXERCICIO 06:
function somador (numero) {
    let soma = 0;
    for (let index = 0; index <= numero; index += 1) {
        soma += index;
    }
    return soma;
}
console.log(somador(5));



//EXERCICIO 07:
function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split('');
    fimPalavra = fimPalavra.split('');
    controle = true;
    for (let index = 0; index < fimPalavra.length; index += 1) {
      if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
        controle = false;
      }
    }
    return controle;
  }