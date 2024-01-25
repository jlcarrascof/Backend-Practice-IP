const { Router } = require('express');
const usersRouter = Router();
const { getUsersHandler, getUserHandler, createUserHandler } = require('../handlers/usersHandlers');   

usersRouter.get('/', getUsersHandler);

usersRouter.get('/:id', getUserHandler);

usersRouter.post('/', createUserHandler);

module.exports = usersRouter;
