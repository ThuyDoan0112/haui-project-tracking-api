const classService = require("../services/class");
const catchAsyncError = require("../utils/catchAsyncError");

const createClass = catchAsyncError(async (req, res, next) => {
  const newClass = await classService.createClass(req.body);
  res.status(201).json(newClass);
});

const getClasses = catchAsyncError(async (req, res, next) => {
  const classes = await classService.getClasses();
  res.status(200).json(classes);
});

module.exports = {
  createClass,
  getClasses,
};
