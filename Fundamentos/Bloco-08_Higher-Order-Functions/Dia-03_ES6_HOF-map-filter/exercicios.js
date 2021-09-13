const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
//Exercicio 01:
const exercicio01 = (livros) => {
    return livros.map((livro) => `${livro.name} - ${livro.genre} - ${livro.author.name}`);
}
console.log(exercicio01(books));

//Exercicio 02:
const exercicio02 = (livros) => {
    const livrosOrdenados = livros.map((livro) => (
        {
            age: livro.releaseYear - livro.author.birthYear,
            author: livro.author.name,
        }
    ))
    livrosOrdenados.sort((livroA, livroB) => livroA.age - livroB.age);
    return livrosOrdenados;
}
console.log(exercicio02(books));

//Exercicio 03:
const exercicio03 = (livros) => livros.filter((livro) => livro.genre === 'Ficção Científica' || livro.genre === 'Fantasia');

console.log(exercicio03(books));

//Exercicio 04:
const exercicio04 = (livros) => {
    let idade = 2021 - 60;
    const livrosFiltrados = livros.filter((livro) => livro.releaseYear < idade);
    return livrosFiltrados.sort((livroA, livroB) => livroA.releaseYear - livroB.releaseYear);
}
console.log(exercicio04(books));

//Exercicio 05:
const filterMap = exercicio03(books).map((livro) => (livro.author.name));
const exercicio05 = filterMap.sort();
console.log(exercicio05);

//Exercicio 06:
const exercicio06 = exercicio04(books).map((livro) => livro.name);
console.log(exercicio06);

//Exercicio 07:
const exercicio07 = (livros) => livros.filter((livro) => livro.author.name[1] === '.' && livro.author.name[4] === '.' && livro.author.name[7] === '.');
console.log(exercicio07(books));