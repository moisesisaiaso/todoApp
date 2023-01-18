const { Sequelize } = require("sequelize"); //desestructuro el objeto sequelize
require("dotenv").config();

//* Crear una instacia con parametros de configuración de nuestra base de datos
//un objeto de configuración que no es mas que las credenciaes de mi base de datos
const db = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    dialect: "postgres",
    logging: false,
});

module.exports = db;
