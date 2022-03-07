// req => encapsula todas as informações da requisição
// res => trata a resposta que vamos receber (o que vamos mandar de volta)

// request : comumente chamado de req ; contém as informações enviadas pelo cliente ao servidor.
// response : geralmente chamado de res ; permite o envio de informações do servidor de volta ao cliente.
// next : função que diz para o Express que aquele callback terminou de ser executado,
// e que ele deve prosseguir para executar o próximo callback para aquela rota.
// Este parâmetro é opcional e você entenderá melhor o uso do next em breve.

// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World');
// })

// app.listen(3000, () => console.log('APP rodando na porta 3000'));



const express = require('express');

const app = express();

app.all('/hello', handleHelloWorldRequest);

app.listen(3000, () => {
    console.log('Aplicação ouvindo na porta 3001');
})

function handleHelloWorldRequest(req, res) {
    res.status(200).send('Olá Mundo!');
}