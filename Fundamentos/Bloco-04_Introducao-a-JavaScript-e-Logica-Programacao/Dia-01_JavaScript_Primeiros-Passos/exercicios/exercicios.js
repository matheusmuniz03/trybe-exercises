// EXERCICIO 1: 
// let a = 20;
// let b = 10;
// let operação = "+";

// switch(operação){
//     case "+":
//         console.log(a+b);
//         break;

//     case "-":
//         console.log(a-b);
//         break;

//     case "*":
//         console.log(a*b);
//         break;

//     case "/":
//         console.log(a/b);
//         break;

//     case "%":
//         console.log(a%b);
//         break;

//     default:
//         console.log("Operação Inválida");   
// }


// EXERCICIO 2:
// let numero1 = 100;
// let numero2 = 500;

// if (numero1 > numero2){
//     console.log(numero1);
// }
// else{
//     console.log(numero2);
// }



// EXERCICIO 3:
// let numero1 = 100;
// let numero2 = 50;
// let numero3 = 30;

// if (numero1 > numero2 && numero1 > numero3){
//     console.log(numero1);
// }
// else if (numero2 > numero1 && numero2 > numero3){
//     console.log(numero2);
// }
// else{
//     console.log(numero3);
// }



//EXERCICIO 4:
// let numero = -10;

// if (numero > 0){
//     console.log("postive");
// }
// else if (numero < 0){
//     console.log("negative");
// }
// else{
//     console.log("zero");
// }



//EXERCICIO 5:
// let angulo1 = 29;
// let angulo2 = 31;
// let angulo3 = 120;
// let booleano;

// if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0){
//     if (angulo1 + angulo2 + angulo3 == 180){
//         booleano = true;
//     }
//     else{
//         booleano = false;
//     }
//     console.log(booleano);
// }
// else{
//     console.log("Ângulo Invalido");
// }



//EXERCICIO 6:
// let peçaXadrez = "RAINHA";

// switch(peçaXadrez.toLowerCase()){
//     case "rei":
//         console.log("Rei --> pode andar uma casa em todas as direções");
//         break;
//     case "peão":
//         console.log("Peão --> só pode andar para frente");
//         break;
//     case "cavalo":
//         console.log("Cavalo --> ele anda em formato de 'L'");
//         break;
//     case "rainha":
//         console.log("Rainha --> pode andar em qualquer direção");
//         break;
//     case "torre":
//         console.log("Torre --> anda na horizontal e na vertical");
//         break;
//     case "bispo":
//         console.log("Bispo --> anda apenas nas diagonais");
//         break;
//     default:
//         console.log("Peça Invalida");
// }



//EXERCICIO 7:
// let nota = 93;

// if (nota > 100){
//     console.log("Erro, nota inválida.");
// }
// else if (nota >= 90){
//     console.log("Nota A");
// }
// else if (nota >= 80){
//     console.log("Nota B");
// }
// else if (nota >= 70){
//     console.log("Nota C");
// }
// else if (nota >= 60){
//     console.log("Nota D");
// }
// else if (nota >= 50){
//     console.log("Nota E");
// }
// else if (nota < 50 && nota >= 0){
//     console.log("Nota F");
// }
// else{
//     console.log("Erro, nota inválida.");
// }



//EXERCICIO 8:
// let numero1 = 5;
// let numero2 = 7;
// let numero3 = 9;
// let booleano;

// if(numero1%2 == 0 || numero2%2 == 0 || numero3%2 == 0){
//     booleano = true;
// }
// else{
//     booleano = false;
// }
// console.log(booleano);



//EXERCICIO 9:
// let numero1 = 4;
// let numero2 = 6;
// let numero3 = 7;
// let booleano;

// if(numero1%2 !== 0 || numero2%2 !== 0 || numero3%2 !== 0){
//     booleano = true;
// }
// else{
//     booleano = false;
// }
// console.log(booleano);



//EXERCICIO 10:
// let custoProdução = 100;
// let valorVenda = 125;

// if(custoProdução >= 0 && valorVenda >= 0){
//     let custoTotalProdução = custoProdução * 1.2;
//     let lucroTotal = (valorVenda - custoTotalProdução) * 1000;
//     console.log(lucroTotal);
// }
// else{
//     console.log("Erro, os valores não podem ser Negativos!");
// }



//EXERCICIO 11:
let salarioBruto = 4000;
let impostoINSS;
let impostoRenda;
console.log("Sálario Bruto: " + salarioBruto);
if (salarioBruto <= 1556.94){
    impostoINSS = salarioBruto * 0.08;
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    impostoINSS = salarioBruto * 0.09;
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    impostoINSS = salarioBruto * 0.11;
}
else if (salarioBruto >= 5189.83){
    impostoINSS = 570.88;
}
else{
    console.log("Não é um número válido.");
}

let salarioLiquido = salarioBruto - impostoINSS;
console.log("Sálario Sem INSS: " + salarioLiquido);

if (salarioLiquido <= 1903.98){
    impostoRenda = 0;
}
else if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65){
    impostoRenda = (salarioLiquido * 0.075) - 142.80;
}
else if (salarioLiquido >= 2826.66 && salarioLiquido <= 3751.05){
    impostoRenda = (salarioLiquido * 0.15) - 354.80;
}
else if (salarioLiquido >= 3751.06 && salarioLiquido <= 4664.68){
    impostoRenda = (salarioLiquido * 0.225) - 636.13;
}
else if (salarioLiquido >= 4664.68){
    impostoRenda = (salarioLiquido * 0.275) - 869.36;
}

let salarioReal = salarioLiquido - impostoRenda;
console.log("Sálario Real: " + salarioReal);