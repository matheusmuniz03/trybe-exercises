const express = require('express');
const app = express();

const Books = require('./models/Books');
const routerRouter = require('./routers/bookRouter');

app.use('/books', routerRouter);

app.listen(3000, () => console.log('Online'));