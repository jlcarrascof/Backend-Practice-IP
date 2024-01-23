const { Router } = require('express');

const usersRouter = Router();

usersRouter.get('/', (req, res) => {
    res.send('NIY: ESTA RUTA TRAE LA INFO DE TODOS LOS USUARIOS');
});

usersRouter.get('/:id', (req, res) => {
    res.send('NIY: ESTA RUTA TRAE LA INFO DE UN USUARIO DETERMINADO POR ID ' + req.params.id);
});

usersRouter.post('/', (req, res) => {
    res.send('NIY: ESTA RUTA CREA UN NUEVO USUARIO');
});

module.exports = usersRouter;
