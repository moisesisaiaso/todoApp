const taskServices = require("../services/task.services");

const getAllTasks = async (req, res) => {
    try {
        const result = await taskServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.messages });
    }
};

const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await taskServices.getById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const createTask = async (req, res) => {
    try {
        const newTask = req.body;
        const result = await taskServices.create(newTask);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const editedTask = req.body;
        const result = await taskServices.update(id, editedTask);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const getTasksWithCategories = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await taskServices.getWithCategories(id);
        res.json({
            message: "Enviando tareas con categorias",
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            error: error.messages,
            details: error.stack,
        });
    }
};

module.exports = { getTasksWithCategories, getAllTasks, getTaskById, createTask, updateTask };
