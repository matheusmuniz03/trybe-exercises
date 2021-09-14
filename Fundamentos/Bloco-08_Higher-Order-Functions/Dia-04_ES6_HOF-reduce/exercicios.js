//Exercicio 01:
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];

const exercicio01 = (array) => array.reduce((acumulador, current) => acumulador.concat(current, []));
console.log(exercicio01(arrays));

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
//Exercicio 02:
const exercicio02 = (livros) => {
    const nomes =  livros.reduce()
}
console.log(exercicio02(books));

//Exercicio 03:
function averageAge(livros) {
    const numeroLivros = livros.length;
    const somaLivros = livros.reduce((acc, livro) => (acc + (livro.releaseYear - livro.author.birthYear)),0);
    return somaLivros / numeroLivros;
}

console.log(averageAge(books));

//Exercicio 04:
const expectedResult = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  }
  
  function longestNamedBook() {
    return books.reduce((maiorLivro, livroAtual) => {
        if (livroAtual.name.length > maiorLivro.name.length) {
            return livroAtual;
        }
        return maiorLivro;
    })
  }
  assert.deepStrictEqual(longestNamedBook(), expectedResult);

//Exercicio 05:
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
    return names.reduce((acc, curr) =>
       acc + curr.split('').reduce((acumulator, current) => {
          if (current === 'a' || current === 'A') return acumulator + 1;
          return acumulator;
       }, 0), 0);
  }
assert.deepStrictEqual(containsA(), 20);