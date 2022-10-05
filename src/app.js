const express = require('express');
const loginControler = require('./controllers/login.controller');
const userControler = require('./controllers/user.controller');
const { validateDisplayName, validateEmail,
    validatePassword } = require('./middlewares/createUser.validation');

// ...

const app = express();

app.use(express.json());
app.post('/login', loginControler.login);
app.post('/user', validateDisplayName, 
validatePassword,
validateEmail, 
userControler.createUser);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
