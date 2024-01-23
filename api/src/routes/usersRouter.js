const { Router } = require('express');

const usersRouter = Router();

usersRouter.get('/users', (req, res) => {
    res.status(200).send('Estoy en /users');
});

usersRouter.get('/users/:id', (req, res) => {
    res.status(200).send('Detalles del usuario ' + req.params.id);
});

usersRouter.post('/users', (req, res) => {
    res.status(200).send('Voy a crear un usuario');
});

module.exports = usersRouter;
