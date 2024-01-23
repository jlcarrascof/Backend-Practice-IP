const { Router } = require('express');

const usersRouter = Router();

usersRouter.get('/', (req, res) => {
    res.status(200).send('Estoy en /users');
});

usersRouter.get('/:id', (req, res) => {
    res.status(200).send('Detalles del usuario ' + req.params.id);
});

usersRouter.post('/', (req, res) => {
    res.status(200).send('Voy a crear un usuario');
});

module.exports = usersRouter;
