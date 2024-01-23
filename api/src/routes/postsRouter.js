const { Router } = require('express');

const postsRouter = Router();

postsRouter.get('/', (req, res) => {
    res.status(200).send('Estoy en /posts');
});

postsRouter.get('/:id', (req, res) => {
    res.status(200).send('Detalles del post ' + req.params.id);
});

module.exports = postsRouter;
