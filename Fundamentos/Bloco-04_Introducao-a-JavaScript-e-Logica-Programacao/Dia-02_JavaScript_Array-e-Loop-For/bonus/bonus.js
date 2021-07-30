//EXERCICIO 01
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

 for (let index = 0; index < numbers.length; index += 1) {
     for(let indexSecundario = 0; indexSecundario < index; indexSecundario += 1){
         if (numbers[index] < numbers[indexSecundario])
         {
             let aux =  numbers[index];
             numbers[index] = numbers[indexSecundario];
             numbers[indexSecundario] = aux;
         }
     }
 }
 console.log(numbers);


//EXERCICIO 02:
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

 for (let index = 0; index < numbers.length; index += 1) {
     for(let indexSecundario = 0; indexSecundario < index; indexSecundario += 1){
         if (numbers[index] < numbers[indexSecundario])
         {
             let aux =  numbers[index];
             numbers[index] = numbers[indexSecundario];
             numbers[indexSecundario] = aux;
         }
     }
 }
 console.log(numbers);



//EXERCICIO 03:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array = [];

for (let index = 0; index < numbers.length; index += 1){
    if (index + 1 < numbers.length)
    {
        array.push(numbers[index] * numbers[index + 1]);
    }
    else{
        array.push(numbers[index] * 2);
    }
}
console.log(array);