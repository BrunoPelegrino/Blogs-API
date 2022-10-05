const express = require('express');
const loginControler = require('./controllers/login.controller');

// ...

const app = express();

app.use(express.json());
app.post('/login', loginControler.login);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
