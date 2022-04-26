const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./routers/userRouter');

const app = express();
app.use(bodyParser.json());

app.use('/user', userRouter);

app.listen(3000, () => console.log('APP rodando na porta 3000!'));