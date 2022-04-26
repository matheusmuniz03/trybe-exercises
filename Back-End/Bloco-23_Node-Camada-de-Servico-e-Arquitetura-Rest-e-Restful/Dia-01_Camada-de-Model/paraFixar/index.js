const express = require('express');
const bodyParser = require('body-parser');
const register = require('./middlewares/register');

const app = express();

app.get('/', (req, res) => res.send('teste'));

app.use('/user', register);

app.listen(3000, () => console.log('Ouvindo na Porta 3000'));