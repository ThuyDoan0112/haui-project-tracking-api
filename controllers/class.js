const classService = require("../services/class");
const AppError = require("../utils/AppError");
const catchAsyncError = require("../utils/catchAsyncError");

const createClass = catchAsyncError(async (req, res, next) => {
  const newClass = await classService.createClass(req.body);
  res.status(201).json(newClass);
});

const getClasses = catchAsyncError(async (req, res, next) => {
  const { id: teacherId } = req.params;

  const isAdmin = req.user.role === "admin";
  if (!teacherId && !isAdmin) {
    return next(
      new AppError("You are not allowed to perform this action", 403)
    );
  }

  const query = teacherId ? { teacherId: +teacherId } : {};
  const classes = await classService.getClasses(query);

  res.status(200).json(classes);
});

module.exports = {
  createClass,
  getClasses,
};
