const { Sequelize } = require("sequelize"); //desestructuro el objeto sequelize

//* Crear una instacia con parametros de configuración de nuestra base de datos
//un objeto de configuración que no es mas que las credenciaes de mi base de datos
const db = new Sequelize({
    database: "todoapp",
    username: "postgres",
    host: "localhost",
    port: "5432",
    password: "07101165",
    dialect: "postgres",
});

module.exports = db;
