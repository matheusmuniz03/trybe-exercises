//Exercicio 02:
const promise = new Promise((resolve, reject) => {
    const array = Array.from(
        { length: 10},
        () => Math.floor(Math.random() * 50) + 1,
    )
    const elevaNumeros = array.map((number) => number * number);
    const somaNumeros = elevaNumeros.reduce((sum, number) => sum + number);

    (somaNumeros < 8000) ? resolve() : reject();

    promise
        .then(console.log('DEU BOM'))
        .catch(console.log('DEU RUIM'));
});

promise();