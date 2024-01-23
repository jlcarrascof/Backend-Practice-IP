const { Router } = require('express');

const mainRouter = Router();

mainRouter.get('/', (req, res) => {
    res.status(200).send('Ok!');
});

mainRouter.use('/users', require('./usersRouter'));

/*
mainRouter.get('/posts', (req, res) => {
    res.status(200).send('Estoy en posts');
});

mainRouter.get('/posts/:id', (req, res) => {
    res.status(200).send('Detalles del post ' + req.params.id);
});
*/

module.exports = mainRouter;
