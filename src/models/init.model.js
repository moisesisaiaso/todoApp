//* vamos a importar todos nuestros modelos creados

const Users = require("./users.model");
const Tasks = require("./tasks.model");
const Categories = require("./categories.model");
const TasksCategories = require("./tasks_categories.model");

const initModels = () => {
    //Vamos a crear relaciones
    // hasOne -> para indicar que tiene una
    // hasMany -> tiene muchos
    // belongsTo -> pertence a
    Tasks.belongsTo(Users, { as: "author", foreignKey: "user_id" });
    Users.hasMany(Tasks, { as: "task", foreignKey: "user_id" });

    //relación de M-M categorias y tareas
    TasksCategories.belongsTo(Tasks, { as: "task", foreignKey: "task_id" });
    Tasks.hasMany(TasksCategories, { as: "category", foreignKey: "task_id" });

    TasksCategories.belongsTo(Categories, { as: "category", foreignKey: "category_id" });
    Categories.hasMany(TasksCategories, { as: "task", foreignKey: "category_id" });
};

module.exports = initModels;
