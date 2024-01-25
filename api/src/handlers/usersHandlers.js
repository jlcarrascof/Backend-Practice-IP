const getUsersHandler = (req, res) => {
    // Llamar a la función que trae todos los usuarios de la base de datos.
    // Llamar a la función que obtenga los datos de una API externa.
    // Unir los datos, unificando el formato.
    // cuando tenga los datos, responder con los datos.               
}

const getUserHandler = (req, res) => {
    res.send('NIY: ESTA RUTA TRAE LA INFO DE UN USUARIO DETERMINADO POR ID ' + req.params.id);
}    

const createUserHandler = (req, res) => {
    res.send('NIY: ESTA RUTA CREA UN NUEVO USUARIO');
}

module.exports = {
    getUsersHandler,
    getUserHandler,
    createUserHandler
}
