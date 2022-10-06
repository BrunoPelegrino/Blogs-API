const express = require('express');
const loginControler = require('./controllers/login.controller');
const userControler = require('./controllers/user.controller');
const categoryController = require('./controllers/category.controller');
const { validateDisplayName, validateEmail,
    validatePassword } = require('./middlewares/createUser.validation');
const { authToken } = require('./middlewares/JWT.validation');

// ...

const app = express();

app.use(express.json());
app.post('/login', loginControler.login);
app.post('/user', validateDisplayName, 
validatePassword,
validateEmail, 
userControler.createUser);
app.get('/user', authToken, userControler.getUsers);
app.get('/user/:id', authToken, userControler.getUsersById);
app.post('/categories', authToken, categoryController.createCategory);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
