console.log('Hello World');

const readline = require('readline-sync');

const name = readline.question('Qual o seu Nome: ');
const idade = readline.questionInt('Qual a sua Idade: ');

console.log(`Hello ${name}, you are ${idade} years old!`);