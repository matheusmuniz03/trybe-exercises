const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const ROUTE = '/drinks';
const PORT = 3000;

const drinks = [
    { id: 1, name: 'Refrigerante Lata', price: 5.0 },
    { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
    { id: 3, name: 'Suco 300ml', price: 4.0 },
    { id: 4, name: 'Suco 1l', price: 10.0 },
    { id: 5, name: 'Cerveja Lata', price: 4.5 },
    { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get(ROUTE, (req, res) => {
    res.status(200).send({ drinks });
});

app.get(`${ROUTE}/search`, (req, res) => {
    const { name } = req.query;
    const filteredDrinks = drinks.filter((r) => r.name.includes(name));

    res.status(200).json(filteredDrinks);
});

app.get(`${ROUTE}/search`, (req, res) => {
    const { minPrice } = req.query;
    const filteredDrinks = drinks.filter((r) => r.price >= minPrice);

    res.status(200).json(filteredDrinks);
});

app.get(`${ROUTE}/:id`, (req, res) => {
    const { id } = req.params;
    const drink = drinks.find((d) => d.id === parseInt(id));

    if (!drink) return res.status(404).send({message: 'Drink not Found'});
    
    res.status(200).send(drink);
})

app.post(ROUTE, (req, res) => {
    const { name } = req.body;
    drinks.push(name);

    res.send(`Receita ${name} adicionada com sucesso!`);
});

app.listen(PORT, console.log('APP rodando na porta 3000'));