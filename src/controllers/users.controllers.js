const userServices = require("../services/user.services");

//* Obtener todos los usuarios
const getAllUsers = async (req, res) => {
    try {
        const result = await userServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

//* obtener el usuario por id
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await userServices.getById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).josn(error.message);
    }
};

// ^ Obtener el usuario con sus tareas
const getUserWithTasks = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await userServices.getWithTasks(id);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const createUser = async (req, res) => {
    try {
        const user = req.body;
        const result = await userServices.create(user);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const editedUser = req.body;
        const result = await userServices.update(id, editedUser);

        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await userServices.delete(id);

        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserWithTasks,
};
