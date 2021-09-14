//Para Fixar - Array Destructuring
//Exercicio 01:
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]);
const [saudacao, realizaSaudacao] = saudacoes;

console.log (realizaSaudacao(saudacao));

//Exercicio 02:
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida);

//Exercicio 03:
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

numerosPares = [6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];



//Para Fixar - Default Destructuring
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));



//Para Fixar - Object Property Shorthand
const getPosition = (latitude, longitude) => ({latitude, longitude});

console.log(getPosition(-19.8157, -43.9542));



//Para Fixar - Object Property Shorthand
const multiply = (number, value = 1) => number * value;

console.log(multiply(8,5));