const db = require("../utils/database");
const Users = require("../models/users.model");
const Tasks = require("../models/tasks.model");
const Categories = require("../models/categories.model");
const TasksCategories = require("../models/tasks_categories.model");

const users = [
    { username: "Moises", email: "moises@gmail.com", password: "12345" },
    { username: "Mari", email: "mari@gmail.com", password: "123456" },
    { username: "Maady", email: "maddy@gmail.com", password: "1234567" },
];

const tasks = [
    { title: "tarea1", description: "lalalalal", userId: 1 },
    { title: "tarea2", description: "lalalalal", userId: 1 },
    { title: "tarea3", description: "lalalalal", userId: 2 },
    { title: "tarea4", description: "lalalalal", userId: 3 },
];

// const categories = [];
const categories = [
    { name: "personal" },
    { name: "educacion" },
    { name: "salud" },
    { name: "trabajo" },
    { name: "hogar" },
    { name: "cocina" },
    { name: "deporte" },
    { name: "ocio" },
    { name: "financiero" },
    { name: "entretenimiento" },
];

const tasksCategories = [
    { categoryId: 1, taskId: 1 },
    { categoryId: 2, taskId: 1 },
    { categoryId: 4, taskId: 1 },
    { categoryId: 1, taskId: 2 },
    { categoryId: 7, taskId: 2 },
    { categoryId: 10, taskId: 2 },
    { categoryId: 3, taskId: 2 },
    { categoryId: 5, taskId: 3 },
    { categoryId: 6, taskId: 3 },
    { categoryId: 1, taskId: 4 },
    { categoryId: 3, taskId: 4 },
];

//^ cada modelo puede acceder a los metasks
//create
//findOne, findAll, findByPk
//update
//destroy

//? con esto generamos datos de las tablas
db.sync({ force: true }) // el force es como en laravel el refresh que lo que hace es borrar los datos si existen para volverlos a crear de esta manera evita errores
    .then(() => {
        console.log("Iniciando con el sembrío");
        users.forEach((users) => Users.create(users));

        setTimeout(() => {
            tasks.forEach((tasks) => Tasks.create(tasks));
        }, 100);
        setTimeout(() => {
            categories.forEach((category) => Categories.create(category));
        }, 200);
        setTimeout(() => {
            tasksCategories.forEach((taskCat) => TasksCategories.create(taskCat));
        }, 300);
    })
    .catch((error) => console.log(error));
