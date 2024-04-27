const taskService = require("../services/task");
const AppError = require("../utils/AppError");
const catchAsyncError = require("../utils/catchAsyncError");

const getTasks = catchAsyncError(async (req, res, next) => {
  const tasks = await taskService.getTasks();
  res.status(200).json(tasks);
})

const createTask = catchAsyncError(async (req, res, next) => {
  const newTask = await taskService.createTask(req.body);
  res.status(201).json(newTask);
});

const getTask = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  const task = await taskService.getTask(+id);

  if (!task) {
    return next(new AppError("Task not found", 404));
  }

  res.status(200).json(task);
})

const updateTask = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  const updatedTask = await taskService.updateTask(+id, req.body);

  res.status(200).json(updatedTask);
});

const deleteTask = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  await taskService.deleteTask(+id);

  res.status(204).json(null);
})

module.exports = {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}
