const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routers/teamRouters');
const PORT = 3000;

const app = express();
app.use(bodyParser.json());

app.use('/teams', router);

app.listen(PORT, console.log('Run server http://localhost:3000'));