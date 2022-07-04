const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

const firstName = require('./middlewares/firstName');
const lastName = require('./middlewares/lastName');
const email = require('./middlewares/email');
const password = require('./middlewares/password');
const newUser = require('./middlewares/newUser');


app.post('/user',firstName, lastName, email, password, newUser

)

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));