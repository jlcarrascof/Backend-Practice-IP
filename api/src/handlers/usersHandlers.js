const getUsersHandler = (req, res) => {
    // Llamar a la función que trae todos los usuarios de la base de datos.
    // Llamar a la función que obtenga los datos de una API externa.
    // Unir los datos, unificando el formato.
    // cuando tenga los datos, responder con los datos.
    const { name } = req.query;
    if (name) res.send(`Quiero buscar usuarios con el nombre: ${name}`)
    else res.send('Quiero buscar todos los usuarios');       
}

const getUserHandler = (req, res) => {
    const { id } = req.params;
    res.send(`Va a enviar la info del usuario con Id: ${id}`);
}    

const createUserHandler = (req, res) => {
    res.send('NIY: ESTA RUTA CREA UN NUEVO USUARIO');
}

module.exports = {
    getUsersHandler,
    getUserHandler,
    createUserHandler
}
