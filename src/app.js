const express = require('express');
const { login } = require('./controllers/login.controller');

// ...

const app = express();

app.use(express.json());
app.post('/login', login);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
