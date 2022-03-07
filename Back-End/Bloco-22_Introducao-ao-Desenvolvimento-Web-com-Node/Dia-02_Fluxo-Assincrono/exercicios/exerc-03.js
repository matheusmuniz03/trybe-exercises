function calcular() {
    num1 = Math.floor(Math.random() * 100 + 1);
    num2 = Math.floor(Math.random() * 10 + 1);
    num3 = Math.floor(Math.random() * 10 + 1);

    const resultado = ((num1 + num2) * num3);
    console.log(resultado);
}

async function exerc03() {
    try {
        await calcular();
        console.log('Função executada com Sucesso');
    } catch (err) {
        console.log(err);
    }
}

exerc03();