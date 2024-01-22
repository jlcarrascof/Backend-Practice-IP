const { Router } = require('express');

const mainRouter = Router();

module.exports = mainRouter;

/*
app.get('/', (req, res) => {
    res.status(200).send('Ok!');
});

app.get('/users', (req, res) => {
    res.status(200).send('Estoy en /users');
});

app.get('/users/:id', (req, res) => {
    res.status(200).send('Detalles del usuario ' + req.params.id);
});

app.post('/users', (req, res) => {
    res.status(200).send('Voy a crear un usuario');
});

app.get('/posts', (req, res) => {
    res.status(200).send('Estoy en posts');
});

app.get('/posts/:id', (req, res) => {
    res.status(200).send('Detalles del post ' + req.params.id);
});
*/