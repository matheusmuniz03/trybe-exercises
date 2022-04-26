const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const app = express();

app.use(bodyParser.json());

// Exercicio 01:
app.get('/ping', (_req, res) => {
    res.status(200).json({ message: 'pong'});
});

// Exercicio 02:
app.post('/hello', (req, res) => {
    const { name } = req.body;
    res.status(200).json({ message: `Hello, ${name}!`});
});

// Exercicio 03:
app.post('/greetings', (req, res) => {
    const { name, age } = req.body;

    if (parseInt(age) > 17) return res.status(200).json({ message: `Hello, ${name}!` });

    res.status(401).json({ message: 'Unauthorized' });
});

// Exercicio 04:
app.put('/greetings/:name/:age', (req, res) => {
    const { name, age } = req.params;

    res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade!` });
});

// Exercicio 05:
function getSimspons() {
    return fs.readFile('./simpsons.json', 'utf-8')
        .then(fileContent => JSON.parse(fileContent));
}

function setSimpsons(newSimpsons) {
    return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

// Exercicio 06:
app.get('/simpsons', async (req, res) => {
    res.status(200).json({ message: await getSimspons()});
});

app.use(function (err, req, res, next) {
    res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

// Exercicio 07:
app.get('/simpsons/:id', async (req, res) => {
    const { id } = req.params;
    const simpsons = await getSimspons();
    const simpson = simpsons.find((s) => s.id === id);

    if (!simpson) return res.status(404).send({ message: 'simpson not found'});

    res.status(200).json({ message: simpson});
});

// Exercicio 08:
app.post('/simpsons', async (req, res) => {
    const { id, name } = req.body;

    const simpsons = await getSimspons();
    if (simpsons.map(({ id }) => id).includes(id)) {
        return res.status(409).json({ message: "id already exists"});
    }
    simpsons.push({ id, name });

    await setSimpsons(simpsons);
    res.status(204).json({ message: simpsons});
});

app.listen(3000, () => console.log('APP rodando na Porta 3000!'));