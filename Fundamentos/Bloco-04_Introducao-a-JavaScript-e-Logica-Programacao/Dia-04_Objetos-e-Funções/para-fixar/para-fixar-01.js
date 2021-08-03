//EXERCICIO 01:
let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
};



//EXERCICIO 02:
let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
};
player["fullName"] = player.name + " " + player.lastName;

console.log("A jogadora " + player.fullName + " tem " + player.age + " anos de idade.");



//EXERCICIO 03:
let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
};

player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];



//EXERCICIO 04:
let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
};

player["fullName"] = player.name + " " + player.lastName;
player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log("A jogadora " + player.fullName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes.");



//EXERCICIO 05:
let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
};

player["fullName"] = player.name + " " + player.lastName;
console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.");