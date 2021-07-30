//EXERCICIO 01:
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

 for(let index = 0; index < numbers.length; index += 1){
     console.log(numbers[index]);
 }



//EXERCICIO 02:
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let soma = 0;

 for(let index = 0; index < numbers.length; index += 1){
     soma += numbers[index];
 }
 console.log(soma);



//EXERCICIO 03:
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let soma = 0;

 for(let index = 0; index < numbers.length; index += 1){
     soma += numbers[index];
 }
 let mediaAritmetica = soma / numbers.length;
 console.log(mediaAritmetica);



//EXERCICIO 04:
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let soma = 0;

 for(let index = 0; index < numbers.length; index += 1){
     soma += numbers[index];
 }
 let mediaAritmetica = soma / numbers.length;
 if (mediaAritmetica >= 20){
     console.log("Valor Maior que 20!");
 }
 else{
     console.log("Valor Menor que 20.");
 }



//EXERCICIO 05:
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let maior = 0;

 for (let index = 0; index < numbers.length; index += 1){
     if (numbers[index] >= maior)
     {
         maior = numbers[index];
     }
 }
 console.log("O Maior Valor é: " + maior);



//EXERCICIO 06:
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let contadorImpares = 0;

 for (let index = 0; index < numbers.length; index += 1){
     if (numbers[index] % 2 !== 0)
     {
         contadorImpares += 1;
     }
 }
 if (contadorImpares > 0){
     console.log("Quantidade de numeros Impares: " + contadorImpares);
 }
 else{
     console.log("Nenhum Valor Impar Encontrado.");
 }



//EXERCICIO 07:
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let menor = numbers[0];

 for (let index = 0; index < numbers.length; index += 1){
     if (numbers[index] <= menor)
     {
         menor = numbers[index];
     }
 }
 console.log("O Menor Valor é: " + menor);



//EXERCICIO 08:
 let array = [];
 let tamanhoArray = 25;

 for(let index = 1; index <= tamanhoArray; index += 1){
     array.push(index);
 }
 console.log(array);



//EXERCICIO 09:
let array = [];
let tamanhoArray = 25;

for(let index = 1; index <= tamanhoArray; index += 1){
    array.push(index);
}

for(let indexDivisao = 0; indexDivisao < array.length; indexDivisao += 1){
    console.log(array[indexDivisao] / 2);
}