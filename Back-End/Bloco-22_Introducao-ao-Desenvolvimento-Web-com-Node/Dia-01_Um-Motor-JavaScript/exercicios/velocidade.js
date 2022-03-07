const readline = require('readline-sync');

function velocidade() {
  const distancia = readline.questionInt('Distancia Percorrida (em m): ');
  const tempo = readline.questionInt('Tempo Gasto (em s): ');

  const velocidade = distancia / tempo;
  console.log(`Velocidade média: ${velocidade} m/s`);
}

velocidade();