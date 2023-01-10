const db = require("../utils/database");
const Users = require("../models/users.model");
const Tasks = require("../models/tasks.model");

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

// const tasksCategories = [];

//^ cada modelo puede acceder a los metodos
//create
//findOne, findAll, findByPk
//update
//destroy

//? con esto generamos datos de las tablas
db.sync({ force: true }) // el force es como en laravel el refresh que lo que hace es borrar los datos si existen para volverlos a crear de esta manera evita errores
    .then(() => {
        console.log("Iniciando con el sembrío");
        users.forEach((user) => {
            // creando datos para tabla users
            Users.create(user);

            //creando datos para tabla tasks
            setTimeout(() => {
                // este setTimeout es una forma de poder esperar que primero se creen los usuarios y luego este registro de tasks ya que sin el usuario no se podría crear las tareas por que existe el user_id como clave foranea
                tasks.forEach((task) => {
                    Tasks.create(task);
                });
            }, 100);
        });
    })
    .catch((error) => console.log(error));
