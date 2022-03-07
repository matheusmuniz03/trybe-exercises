const readline = require('readline-sync');

function fatorial() {
    const numeroFatorial = readline.questionInt('Escolha um Numero para acharmos seu Fatorial: ');

    let fatorial = 1;
    for (let i = 1; i <= numeroFatorial; i++) {
        if (i !== (numeroFatorial + 1)) {
            fatorial = fatorial * i;
        }
    }
    console.log(`Fatorial de ${numeroFatorial}: ${fatorial}`);
}
fatorial();