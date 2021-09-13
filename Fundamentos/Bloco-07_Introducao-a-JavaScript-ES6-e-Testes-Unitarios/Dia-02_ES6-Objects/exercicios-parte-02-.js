const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//Exercicio 01:
const exerc01 = (objeto, key, valor) => {
    objeto[key] = valor;
}
exerc01(lesson2, 'turno', 'noite');

//Exercicio 02:
const exerc02 = objeto => {
    return Object.keys(objeto);
}
console.log(exerc02(lesson1));

//Exercicio 03:
const exerc03 = objeto => {
    return Object.keys(objeto).length;
}
console.log(exerc03(lesson1));

//Exercicio 04:
const exerc04 = objeto => {
    return Object.values(objeto);
}
console.log(exerc04(lesson1));

//Exercicio 05:
const allLessons = Object.assign({},{lesson1, lesson2, lesson3});
console.log(allLessons);

//Exercicio 06:
const exerc06 = objeto => {
    let cont = 0;
    let array = Object.keys(objeto);

    for (let index in array) {
        cont += objeto[array[index]].numeroEstudantes;
    }
    return cont;
}
console.log(exerc06(allLessons));

//Exercicio 07:
const exerc07 = (objeto, key) => {
    return Object.values(objeto)[key];
}
console.log(exerc07(lesson1,2));

//Exercicio 08:
const exerc08 = (objeto, key, valor) => {
    const array = Object.entries(objeto);
    let trueFalse = false;

    for (let index in array) {
        if (array[index][0] === key && array[index][1] === valor) {
            return true;
        }
        else {
            return false;
        }
    }
}
console.log(exerc08(lesson3, 'materia', 'Maria Clara'));