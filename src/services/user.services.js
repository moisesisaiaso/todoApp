const Users = require("../models/users.model");
const Tasks = require("../models/tasks.model");

class userServices {
    static async getAll() {
        try {
            const result = await Users.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
            const result = await Users.findByPk(id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    //obtener user con sus tareas
    static async getWithTasks(id) {
        try {
            const result = await Users.findOne({
                where: { id },
                attributes: ["username"], // attributes[] permite señalar los campos que queremos que se muestren, sin esta directiva se muestran todos los campos
                include: {
                    model: Tasks,
                    as: "task", // es la referencia que se estableció en las relaciones para dar un nombre agrupado a los valores que surgen de esta relación
                },
            });

            return result;
        } catch (error) {
            throw error;
        }
    }

    static async create(user) {
        try {
            const result = await Users.create(user);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update(id, editedUser) {
        try {
            const result = await Users.update(editedUser, {
                where: { id },
            });

            return result;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const result = await Users.destroy({
                where: { id },
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = userServices;
