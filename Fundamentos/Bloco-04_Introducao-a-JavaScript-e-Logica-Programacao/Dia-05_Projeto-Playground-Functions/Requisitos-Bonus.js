// Desafio 11
function generatePhoneNumber(numeroDeTelefone) {
  // seu código aqui
  let cont0 = 0;
  let cont1 = 0;
  let cont2 = 0;
  let cont3 = 0;
  let cont4 = 0;
  let cont5 = 0;
  let cont6 = 0;
  let cont7 = 0;
  let cont8 = 0;
  let cont9 = 0;
if (numeroDeTelefone.length !== 11) {
  return 'Array com tamanho incorreto.';
}
for (let index = 0; index < numeroDeTelefone.length; index += 1) {
  if (numeroDeTelefone[index] < 0 | numeroDeTelefone[index] > 9) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  }
  for(let index = 0; index < numeroDeTelefone.length; index += 1) {
  if (numeroDeTelefone[index] === 4) {
    cont0 +=1;
  }
  if (numeroDeTelefone[index] === 8) {
    cont1 += 1;
  }
  if (numeroDeTelefone[index] === 2) {
    cont2 += 1;
  }
  if (numeroDeTelefone[index] === 1) {
    cont3 += 1;
  }
  if (numeroDeTelefone[index] === 0) {
    cont4 += 1;
  }
  if (numeroDeTelefone[index] === 3) {
    cont5 += 1;
  }
  if (numeroDeTelefone[index] === 5) {
    cont6 += 1;
  }
  if (numeroDeTelefone[index] === 6) {
    cont7 += 1;
  }
  if (numeroDeTelefone[index] === 7) {
    cont8 += 1;
  }
  if (numeroDeTelefone[index] === 9) {
    cont9 += 1;
  }
}
  if (cont1 >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
}
if (cont2 >= 3) {
  return 'não é possível gerar um número de telefone com esses valores';
}
if (cont3 >= 3) {
  return 'não é possível gerar um número de telefone com esses valores';
}
if (cont4 >= 3) {
  return 'não é possível gerar um número de telefone com esses valores';
}
if (cont5 >= 3) {
  return 'não é possível gerar um número de telefone com esses valores';
}
if (cont6 >= 3) {
  return 'não é possível gerar um número de telefone com esses valores';
}
if (cont7 >= 3) {
  return 'não é possível gerar um número de telefone com esses valores';
}
if (cont8 >= 3) {
  return 'não é possível gerar um número de telefone com esses valores';
}
if (cont9 >= 3) {
  return 'não é possível gerar um número de telefone com esses valores';
}
if (cont0 >= 3) {
  return 'não é possível gerar um número de telefone com esses valores';
}

return '(' + numeroDeTelefone[0] + numeroDeTelefone[1] + ') '
 + numeroDeTelefone[2] + numeroDeTelefone[3] + numeroDeTelefone[4] + numeroDeTelefone[5]
  + numeroDeTelefone[6] + '-'  + numeroDeTelefone[7] + numeroDeTelefone[8] + numeroDeTelefone[9] + numeroDeTelefone[10];
};

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    return true;
  }
  if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  else {
    return false;
  }
};

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let contador = 0;
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index])
    {
      case '1':
        contador += 1;
        break;
      case '2':
        contador += 2;
        break;
      case '3':
        contador += 3;
        break;
      case '4':
        contador += 4;
        break;
      case '5':
        contador += 5;
        break;
      case '6':
        contador += 6;
        break;
      case '7':
        contador += 7;
        break;
      case '8':
        contador += 8;
        break;
      case '9':
        contador += 9;
        break;
    }
  }
  if (contador === 1) {
    return contador + ' copo de água';
  }
  else {
    return contador + ' copos de água';
  }
};