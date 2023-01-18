//* IMPORTAMOS EXPRESS
const express = require("express");
const db = require("./utils/database"); // como este es un modulo que hemos generado lo accedemos así
require("dotenv").config();

const initModels = require("./models/init.model");

const Users = require("./models/users.model");
const Tasks = require("./models/tasks.model");

const userRoutes = require("./routes/users.routes");
const taskRoutes = require("./routes/tasks.routes");
const authRoutes = require("./routes/auth.routes");
const cors = require("cors");

//* CREAR UNA INSTACIA DE EXPRESS
const app = express();

app.use(express.json()); // para poder leer json que nos llega de una petición o utilizar
app.use(cors());

const PORT = process.env.PORT;

//^ Probando la conexion a la base de datos
db.authenticate() // esto devuelve una promesa
    .then(() => console.log("Autenticación exitosa"))
    .catch((error) => console.log(error));

initModels(); // función para inicializar los modelos para luego poder crear las tablas
//vamos a usar el metodo sync de nuestra db para sincronizar la info de la base de datos
// db.sync() devuelve una promesa (crear las tablas que no existen)
db.sync({ force: false }) // { alter: true, force: true } permite dar cambios a las tablas que han sido modificadas, elimina las tablas de la db y las vuelve a crear
    .then(() => console.log("Base de datos Sincronizada"))
    .catch((error) => console.log(error));

app.get("/", (req, res) => {
    res.status(200).json({ message: "Bienvenido al servidor" });
});

//
app.use("/api/v1", userRoutes); //^rutas para usuarios

app.use("/api/v1", taskRoutes); //^rutas para tareas

app.use("/api/v1", authRoutes); //^ ruta para loging
//Definir las rutas de nuestros endpoints (de ahora en adelante ep)
//todas las consultas de usuarios
//localhost:5000/users -> todo para usuarios
//localhost:5000/tasks -> todo para tareas

/* //^ endpoints para USERS
//? GET a /users

app.get("/users", async (req, res) => {
    try {
        // vamos a obtener el resultado de consultar a todos los usuarios de la base de datos
        const result = await Users.findAll(); // SELECT * FROM users;
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

//? Obtener un usuario sabiendo su id
app.get("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Users.findByPk(id);

        res.status(200).json(result);
        console.log(id);
    } catch (error) {
        console.log(error);
    }
});

//^ Obtener usuario por su username
app.get("/users/username/:username", async (req, res) => {
    try {
        const { username } = req.params;
        const result = await Users.findOne({ where: { username } }); // SELECT * FROM users WHERE username = moises
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

//? Crear un usuario
app.post("/users", async (req, res) => {
    try {
        const user = req.body;
        const result = await Users.create(user);

        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);
    }
});

//? actualizar un usuario, solo podemos cambiar password
app.put("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = await Users.update(field, {
            where: { id },
        }); // el primer parametro es el campo que queremos actualizar, el segundo es el registro que se va a actualizar por su id
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);
    }
});

//? eliminar un usuario
app.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Users.destroy({
            where: { id },
        });

        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);
    }
}); */

/* //^ endpoints para TASKS
//? GET a /tasks (obtener todas las tasks)
app.get("/tasks", async (req, res) => {
    try {
        const tasks = await Tasks.findAll();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);
    }
});

//? GET a /tasks/:id (obtener una tarea)
app.get("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Tasks.findByPk(id);

        res.status(200).json(task);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);
    }
});

//? POST a /tasks (crear una nueva tarea);

app.post("/tasks", async (req, res) => {
    try {
        const newTask = req.body;
        const task = await Tasks.create(newTask);

        res.status(200).json(task);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);
    }
});

//? actualizar una tarea
app.put("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const task = req.body;

        const taskEdit = await Tasks.update(task, {
            where: { id },
        });

        res.status(200).json(taskEdit);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);
    }
});

//? eliminar un task
app.delete("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Tasks.destroy({
            where: { id },
        });

        res.status(200).json(task);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);
    }
}); */
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
