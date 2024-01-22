const { Router } = require('express');

const mainRouter = Router();

mainRouter.get('/', (req, res) => {
    res.status(200).send('Ok!');
});

mainRouter.get('/users', (req, res) => {
    res.status(200).send('Estoy en /users');
});

mainRouter.get('/users/:id', (req, res) => {
    res.status(200).send('Detalles del usuario ' + req.params.id);
});

mainRouter.post('/users', (req, res) => {
    res.status(200).send('Voy a crear un usuario');
});

mainRouter.get('/posts', (req, res) => {
    res.status(200).send('Estoy en posts');
});

mainRouter.get('/posts/:id', (req, res) => {
    res.status(200).send('Detalles del post ' + req.params.id);
});

module.exports = mainRouter;
