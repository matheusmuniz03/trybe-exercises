const PESO = 71;
const ALTURA = 176;

const readline = require('readline-sync');


function calculaIMC() {
  const peso = readline.questionFloat('Qual o seu peso? (em kg): ');
  const altura = readline.questionInt('Qual a sua altura (em cm): ');

  const IMC = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  
  console.log(`IMC: ${IMC}`);
  if (IMC <= 18.5) {
    console.log('Abaixo do Peso (magreza)');
  }
  if (IMC > 18.5 && IMC <= 24.9) {
    console.log('Peso Normal');
  }
  if (IMC > 24.9 && IMC <= 29.9) {
    console.log('Acima do Peso (sobrepeso)');
  }
  if (IMC >= 30.0 && IMC <= 34.9) {
    console.log('Obesidade Grau I');
  }
  if (IMC >= 35.0 && IMC <= 39.9) {
    console.log('Obesidade Grau II');
  }
  if (IMC >= 40.0) {
    console.log('Obesidade Grau III e IV');
  }
}

calculaIMC();