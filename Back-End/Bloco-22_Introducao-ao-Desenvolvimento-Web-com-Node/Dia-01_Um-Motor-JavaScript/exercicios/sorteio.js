const readline = require('readline-sync');

function sorteio() {
  const numeroPessoa = readline.questionInt('Escolha um Numero (0 a 10): ');

  const numeroAleatorio = parseInt(Math.random() * 2);

  if (numeroPessoa === numeroAleatorio) {
    console.log("Parabéns, número correto!");
  }
  else {
    console.log(`Opa, não foi dessa vez. O número era ${numeroAleatorio}`);
  }

  const jogarNovamente = readline.question('Deseja Jogar novamente (Sim x Nao): ');
  if (jogarNovamente === 'Sim') {
    sorteio();
  }
}
sorteio();