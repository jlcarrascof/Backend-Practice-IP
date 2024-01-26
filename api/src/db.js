// Crear la conexion con la base de datos.
const { Sequelize } = require('sequelize');
require('dotenv').config();

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/repaso`);

// Definir los modelos.
// Relacionarlos.
// Exportarlos.

module.exports = { sequelize };