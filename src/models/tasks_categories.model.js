//* instancia para la conexion de la db
const db = require("../utils/database");

//*tipos de datos de sequelize (para generalizar)
const { DataTypes } = require("sequelize");
const Tasks = require("./tasks.model");
const Categories = require("./categories.model");

//^definir el modelo de tacks_categories
//los modelos se definen con una Mayuscula

//parametros
//nombre de la tabla
//los atributos de la tabla {objeto}

const TasksCategories = db.define("tasks_categories", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    taskId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "task_id",
        references: {
            // con esto decimos que es una clave foranea y damos su relación
            model: Tasks,
            key: "id",
        },
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "category_id",
        references: {
            // con esto decimos que es una clave foranea y damos su relación
            model: Categories,
            key: "id",
        },
    },
});

module.exports = TasksCategories;
