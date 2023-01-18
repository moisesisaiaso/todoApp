const { Router } = require("express");
const {
    getAllTasks,
    getTasksWithCategories,
    getTaskById,
    createTask,
    updateTask,
} = require("../controllers/tasks.controllers");

const authMiddleware = require("../middlewares/auth.middleware");
const router = Router();

router.get("/tasks", authMiddleware, getAllTasks);
router.get("/tasks/:id", authMiddleware, getTaskById);
router.post("/tasks", authMiddleware, createTask);
router.put("/tasks/:id", authMiddleware, updateTask);
router.get("/tasks/:id/categories", authMiddleware, getTasksWithCategories);

module.exports = router;
