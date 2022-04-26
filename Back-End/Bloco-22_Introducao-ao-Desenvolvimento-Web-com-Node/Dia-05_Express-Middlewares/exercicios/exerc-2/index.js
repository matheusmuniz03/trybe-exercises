const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const { validationToken } = require('./middlewares/validations');
const res = require('express/lib/response');

const app = express();
app.use(bodyParser.json());

app.get('/btc',
    validationToken,
    async (_req, res) => {
        const result = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');

        res.status(200).json(result.data);
    }
);

app.listen(3000, () => console.log('APP rodando na porta 3000!'));