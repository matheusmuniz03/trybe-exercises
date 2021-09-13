//Para Fixar => Array.forEach()
//Exercicio 01:
const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
  // Adicione seu código aqui
emailListInData.forEach(showEmailList);



//Para Fixar => Array.find
//Exercicio 01:
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (numero) => numero % 3 === 0 && numero % 5 === 0;

const number = numbers.find(findDivisibleBy3And5);

console.log(number);

//Exercicio 02:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => name.length === 5;

const nome = names.find(findNameWithFiveLetters);

console.log(nome);

//Exercicio 03:
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

const findMusic = (music) => music.id === '31031686';

const musica = musicas.find(findMusic);

console.log(musica);



//Para Fixar => Array.some e Array.every
//Exercicio 01:
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((nomeAtual) => nomeAtual === name);
}

console.log(hasName(names, 'Ana'))

//Exercicio 02:
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
  return arr.every((pessoaAtual) => pessoaAtual.age >= minimumAge);
}

console.log(verifyAges(people, 18));



//Para Fixar => Array.sort
//Exercicio 01:
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
// Adicione se código aqui
people.sort((a,b) => a.age - b.age);

console.log(people);

//Exercicio 02:
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
// Adicione se código aqui
people.sort((a,b) => b.age - a.age);

console.log(people);