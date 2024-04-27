const express = require("express");

const taskController = require("../controllers/task");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.use(authMiddleware);

router
  .route('/')
  .get(taskController.getTasks)
  .post(taskController.createTask)

router
  .route("/:id")
  .get(taskController.getTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);

module.exports = router;
