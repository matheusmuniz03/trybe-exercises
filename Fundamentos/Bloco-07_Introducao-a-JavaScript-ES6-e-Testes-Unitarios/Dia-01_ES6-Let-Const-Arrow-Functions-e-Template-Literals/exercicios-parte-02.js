// Exercicio 01:
const fatorial = numero => {
    let cont = 1;

    for (let index = 2; index <= numero; index += 1) {
        cont = cont * index;
    }
    return cont;
}

console.log(fatorial(5));


// Exercicio 02:
const longestWord = text => {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }
    return result;
}
console.log(longestWord("O Antônio foi no banheiro e não sabemos o que aconteceu"));
