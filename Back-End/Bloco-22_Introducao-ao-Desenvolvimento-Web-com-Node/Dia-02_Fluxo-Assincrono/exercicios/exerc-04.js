const fs = require('fs').promises;
const readline = require('readline-sync');

// Exercicio 01
fs.readFile('./simpsons.json', 'utf-8')
    .then((content) => {
        return JSON.parse(content);
    })
    .then((simpsons) => {
        return simpsons.map(({ id, name }) => `${id} - ${name}`);
    })
    .then((strings) => {
        strings.forEach((string) => console.log(string))
    });


// Exercicio 02:
async function getSimpsonsId() {
    const simpsons = await fs
        .readFile('./simpsons.json','utf-8')
        .then((content) => JSON.parse(content));

    const simpsonsID = readline.question('Digite o ID do Simpsons procurado: ');
    const simpsonsProcurado = simpsons.find((simpson) => simpson.id = simpsonsID);

    if(!simpsonsProcurado) {
        throw new Error('ID não encontrado');
    }
    console.log(simpsonsProcurado.name);
    return simpsonsProcurado;
}
getSimpsonsId();


// Exercicio 03:
async function removeSimpsons() {
    const simpsons = await fs
        .readFile('./simpsons.json','utf-8')
        .then((content) => JSON.parse(content));

    const newSimpsons = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
    const newArray = newSimpsons.map(({id, name}) => console.log(`${id} - ${name}`));
}
removeSimpsons();


// Exercicio 04:
async function simpsonsFamily() {
    const simpsons = await fs
        .readFile('./simpsons.json', 'utf-8')
        .then((content) => JSON.parse(content));

    const simpsonsFamily = simpsons.filter(simpson => simpson.id === '1' || simpson.id === '2' || simpson.id === '3' || simpson.id === '4');
    console.log(simpsonsFamily);

    await fs.writeFile('./simpsonsFamily.json',JSON.stringify(simpsonsFamily));
}
simpsonsFamily();


// Exercicio 05:
async function addNelson() {
    const simpsons = await fs
        .readFile('./simpsonsFamily.json','utf-8')
        .then((content) => JSON.parse(content));

    simpsons.push({ "id": "5", "name": "Nelson Muntz" });
    await fs.writeFile('./simpsonsFamily.json',JSON.stringify(simpsons));
    console.log(simpsons)
}
addNelson();


// Exercicio 06:
async function addMaggie() {
    const simpsons = await fs
        .readFile('./simpsonsFamily.json', 'utf-8')
        .then((content) => JSON.parse(content));

    const removeNelson = simpsons.filter(simpson => simpson.id !== '5');
    console.log(removeNelson);
    removeNelson.push({ "id": "5", "name": "Maggie Simpson" });

    await fs.writeFile('./simpsonsFamily.json',JSON.stringify(removeNelson));
}
addMaggie();