//* instancia para la conexion de la db
const db = require("../utils/database");

//*tipos de datos de sequelize (para generalizar)
const { DataTypes } = require("sequelize");

//^definir el modelo de categories
//los modelos se definen con una Mayuscula

//parametros
//nombre de la tabla
//los atributos de la tabla {objeto}

const Categories = db.define(
    "categories",
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = Categories;
