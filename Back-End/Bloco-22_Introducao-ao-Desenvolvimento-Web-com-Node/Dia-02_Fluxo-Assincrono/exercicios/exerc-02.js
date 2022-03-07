function exerc01() {
    num1 = Math.floor(Math.random() * 100 + 1);
    num2 = Math.floor(Math.random() * 100 + 1);
    num3 = Math.floor(Math.random() * 10 + 1);
    return new Promise((resolve, reject) => {
        if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
            reject(Error('Informe apenas Números'));
        }

        const resultado = ((num1 + num2) * num3);

        if (resultado < 50) {
            reject('Valor muito Baixo');
        }
        resolve(resultado);
    });
}

exerc01(10,10,10)
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error));