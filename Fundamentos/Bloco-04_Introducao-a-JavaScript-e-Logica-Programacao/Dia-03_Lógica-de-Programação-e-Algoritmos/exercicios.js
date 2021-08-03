//EXERCICIO 01:
let valor = 5;
let linha = "";

for (let indexAux = 0; indexAux < valor; indexAux += 1)
{
    linha = linha + "*";
}
for (let index = 0; index < valor; index += 1)
{
    console.log(linha);
}



//EXERCICIO 02:
let valor = 5;
let impressão = "*";

for(let index = 0; index < valor; index += 1){
    console.log(impressão);
    impressão = impressão + "*";
}



//EXERCICIO 03:
let valor = 5;
let impressão = "";
let contador = valor;

for (let index = 0; index < valor; index += 1){
    for (let indexAux = 0; indexAux <= valor; indexAux += 1){
        if (indexAux < contador){
            impressão = impressão + " ";
        }
        else{
            impressão = impressão + "*";
        }
    }
    console.log(impressão);
    impressão = "";
    contador -= 1;
}



//EXERCICIO 04:
let valor = 11;
let impressão = '';
let meioTriangulo =  (valor + 1) / 2;
let ladoEsquerdo = meioTriangulo;
let ladoDireito = meioTriangulo;

for (let index = 0; index <= meioTriangulo; index += 1)
{
    for (let indexAux = 0; indexAux <= valor; indexAux += 1)
    {
        if (indexAux > ladoEsquerdo && indexAux < ladoDireito)
        {
            impressão = impressão + "*";
        }
        else
        {
            impressão = impressão + " ";
        }
    }
    console.log(impressão);
    impressão = "";
    ladoDireito += 1;
    ladoEsquerdo -= 1;
}