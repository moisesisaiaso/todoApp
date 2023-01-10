//* instancia para la conexion de la db
const db = require("../utils/database");

//*tipos de datos de sequelize (para generalizar)
const { DataTypes } = require("sequelize");

const Users = require("./users.model");

//^definir el modelo de tacks
//los modelos se definen con una Mayuscula

//parametros
//nombre de la tabla
//los atributos de la tabla {objeto}

const Tasks = db.define("tasks", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isComplete: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        field: "is_complete",
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // la forma en que nos referimos es en camelcase, pero con el field le estamos diciendo que en la base de datos se define distinto
        field: "user_id",
        references: {
            // con esto decimos que es una clave foranea y damos su relación
            model: Users,
            key: "id",
        },
    },
});

module.exports = Tasks;
