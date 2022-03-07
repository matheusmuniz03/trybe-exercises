const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const recipes = [
    { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
    { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
    { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', (req, res) => {
    res.json(recipes);
});

app.get('/recipes/search', (req, res) => {
    const { name, maxPrice } = req.query
    const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price <= parseInt(maxPrice));

    res.status(200).json(filteredRecipes)
})

app.get('/recipes/:id', (req, res) => {
    const { id } = req.params;
    const recipe = recipes.find((r) => r.id === parseInt(id));

    if (!recipe) return res.status(404).json({ message: 'Recipe not Found'});

    res.status(200).json(recipe);
})

app.post('/recipes', (req, res) => {
    const { id, name, price } = req.body;
    recipes.push({ id, name, price });
    res.status(202).json({ message: 'Recipe created successfully!'});
});

// fetch(`http://localhost:3001/recipes/`, {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     id: 4,
//     name: 'Macarrão com Frango',
//     price: 30
//   })
// });

app.listen(3001, () => {
    console.log('APP rodando na porta 3001');
});
