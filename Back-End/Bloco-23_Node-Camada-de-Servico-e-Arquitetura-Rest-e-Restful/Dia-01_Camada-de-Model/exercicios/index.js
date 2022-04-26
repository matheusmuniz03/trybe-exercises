const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const userModel = require('./models/user');
const { createUser, getAllUsers, getUserById, updateUser } = require('./controller/user');
const { validations, validPassword } = require('./middlewares/validations');

app.post('/user', validations, validPassword, createUser);

app.get('/user',getAllUsers);

app.get('/user/:id', getUserById);

app.put('/user/:id', validations, validPassword, updateUser);

app.listen(3001, () => console.log('Online'));