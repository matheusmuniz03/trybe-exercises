//EXERCICIO 01:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Bem-vinda, " + info.personagem);



//EXERCICIO 02:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info["recorrente"] = "Sim";
console.log(info.recorrente);



//EXERCICIO 03:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info["recorrente"] = "Sim";

for (let index in info){
    console.log(index);
}



//EXERCICIO 04:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};

for (let index in info){
    console.log(info[index]);
}



//EXERCICIO 05:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};

let infoTioPatinhas = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

for (let index in info)
{
    if (info[index] == "Sim" && infoTioPatinhas[index] == "Sim")
    {
        console.log("Ambos recorrentes.");
    }
    else
    {
        console.log(info[index] + " e " + infoTioPatinhas[index]);
    }
}
