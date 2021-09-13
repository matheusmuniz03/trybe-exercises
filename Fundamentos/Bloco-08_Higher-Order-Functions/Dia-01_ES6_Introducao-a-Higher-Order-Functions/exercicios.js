//Exercicio 01:
const novoContratado = nome => {
    const email = nome.toLowerCase().split(' ').join('_');
    let objeto = {
        nomeCompleto: nome,
        email: `${email}@trybe.com`,
    };
    return objeto;
}

const newEmployees = () => {
    const employees = {
        id1: novoContratado('Pedro Guerra'),
        id2: novoContratado('Luiza Drummond'),
        id3: novoContratado('Carla Paiva'),
    }
    return employees;
}

console.log(newEmployees());



//Exercicio 02:
const check = (myNumber, number) => myNumber === number;

const resultado = (myNumber, checkado) => {
    const number = Math.floor(Math.random() * 6);

    console.log(myNumber, number);
    return checkado(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
}

console.log(resultado(2, check));



//Exercicio 03:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const repeat = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAnswer, uAnswer) => {
  if (rAnswer === uAnswer) {
    return 1;
  } if (uAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
}));