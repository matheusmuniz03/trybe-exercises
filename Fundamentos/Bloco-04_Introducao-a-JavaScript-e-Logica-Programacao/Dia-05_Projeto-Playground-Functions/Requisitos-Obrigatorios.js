// Desafio 1
function compareTrue(booleano1, booleano2) {
    if (booleano1 === true && booleano2 === true) {
      return true;
    }
    else{
      return false;
    }
  }
  
  // Desafio 2
  function calcArea(base, height) {
    return (base * height) / 2;
  }
  
  // Desafio 3
  function splitSentence(string) {
    let array = string.split(' ');
    return array;
  }
  
  // Desafio 4
  function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
  }
  
  // Desafio 5
  function footballPoints(wins, ties) {
    return (3 * wins) + ties;
  }
  
  // Desafio 6
  function highestCount(arrayNumeros) {
    let maior = arrayNumeros[0];
    let contador = 0; 
    for (let index = 0; index < arrayNumeros.length; index += 1) {
      if (arrayNumeros[index] >= maior) {
        maior = arrayNumeros[index];
      }
    }
    for (let indexAux = 0; indexAux < arrayNumeros.length; indexAux += 1) {
      if (maior === arrayNumeros[indexAux]) {
        contador += 1;
      }
    }
    return contador;
  }
  
  // Desafio 7
  function catAndMouse(mouse, cat1, cat2) {
    let distanciaGato1 = cat1 - mouse;
    let distanciaGato2 = cat2 - mouse;
  
    if (distanciaGato1 < 0) {
      distanciaGato1 = distanciaGato1 * -1;
    }
    if (distanciaGato2 < 0) {
      distanciaGato2 = distanciaGato2 * -1;
    }
    
    if (distanciaGato1 < distanciaGato2) {
      return 'cat1';
    }
    else if (distanciaGato2 < distanciaGato1) {
      return 'cat2';
    }
    else {
      return 'os gatos trombam e o rato foge';
    }
  }
  
  // Desafio 8
  function fizzBuzz(arrayNumeros) {
    let string = [];
    for (let index = 0; index < arrayNumeros.length; index += 1) {
      if (arrayNumeros[index] % 3 === 0 && arrayNumeros[index] % 5 === 0) {
        string.push('fizzBuzz');
      }
      else if (arrayNumeros[index] % 3 === 0) {
        string.push('fizz');
      }
      else if (arrayNumeros[index] % 5 === 0) {
        string.push('buzz');
      }
      else {
        string.push('bug!');
      }
    }
    return string;
  }
  
  // Desafio 9
  function encode(string) {
    let newString = '';
    for (let index = 0; index < string.length; index += 1) {
      if (string[index] == 'a') {
        newString = newString + 1;
      }
      else if (string[index] == 'e') {
        newString = newString + 2;
      }
      else if (string[index] == 'i') {
        newString = newString + 3;
      }
      else if (string[index] == 'o') {
        newString = newString + 4;
      }
      else if (string[index] == 'u') {
        newString = newString + 5;
      }
      else {
        newString = newString + string[index];
      }
    }
    return newString;
  }
  
  function decode(string) {
    let newString = '';
    for (let index = 0; index < string.length; index += 1) {
      if (string[index] == 1) {
        newString = newString + 'a';
      }
      else if (string[index] == 2) {
        newString = newString + 'e';
      }
      else if (string[index] == 3) {
        newString = newString + 'i';
      }
      else if (string[index] == 4) {
        newString = newString + 'o';
      }
      else if (string[index] == 5) {
        newString = newString + 'u';
      }
      else {
        newString = newString + string[index];
      }
    }
    return newString;
  }

// Desafio 10
function techList(arrayNomes, nome) {
    // seu código aqui
    arrayNomes.sort();
    let lista = [];
    if (arrayNomes.length === 0) {
      return 'Vazio!';
    }
    for (let key in arrayNomes) {
      arrayNomes[key] = {
        tech: arrayNomes[key],
        name: nome,
      };
      lista.push(arrayNomes[key]);
    }
    return lista;
  }