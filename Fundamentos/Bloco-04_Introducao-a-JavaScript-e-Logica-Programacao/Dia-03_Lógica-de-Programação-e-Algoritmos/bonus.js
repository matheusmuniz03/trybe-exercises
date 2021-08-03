//EXERCICIO 05:
let numero = 7;
let meio = (numero + 1) / 2;
let ladoEsquerdo = meio;
let ladoDireito = meio;
let caracter = '*';
for (let line = 1; line <= meio; line += 1) {
  let linhaSaida = '';
  for (let col = 1; col <= numero; col += 1) {
    if (col == ladoEsquerdo || col == ladoDireito || line == meio) {
      linhaSaida += caracter;
    } else {
      linhaSaida += ' ';
    }
  }
  ladoEsquerdo -= 1;
  ladoDireito += 1;
  console.log(linhaSaida);
}



//EXERCICIO 06:
let numero = 11;
let contador = 0;

for (let index = 1; index < numero; index += 1)
{
    if (numero % index == 0)
    {
        contador += 1;
    }
}
if (contador > 1)
{
    console.log("O número não é Primo.");
}
else
{
    console.log("O número é Primo!");
}