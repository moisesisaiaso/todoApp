const Categories = require("../models/categories.model");
const Tasks = require("../models/tasks.model");
const TasksCategories = require("../models/tasks_categories.model");

class taskServices {
    static async getAll() {
        try {
            const result = await Tasks.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
            const result = await Tasks.findByPk(id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async create(task) {
        try {
            const result = await Tasks.create(task);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update(id, editedTask) {
        try {
            const result = await Tasks.update(editedTask, {
                where: { id },
            });

            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getWithCategories(id) {
        try {
            const result = await Tasks.findOne({
                where: { id },
                attributes: ["title"],
                include: {
                    model: TasksCategories,
                    as: "categories",
                    attributes: ["id"],
                    include: {
                        model: Categories,
                        as: "category",
                        attributes: ["name"],
                    },
                },
            });

            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = taskServices;
