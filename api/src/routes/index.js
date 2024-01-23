const { Router } = require('express');
const usersRouter = require('./usersRouter');
const postsRouter = require('./postsRouter');

const mainRouter = Router();

mainRouter.get('/', (req, res) => {
    res.status(200).send('Ok!');
});

mainRouter.use('/users', usersRouter);
mainRouter.use('/posts', postsRouter );

module.exports = mainRouter;
