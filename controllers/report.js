const catchAsyncError = require("../utils/catchAsyncError");
const reportService = require("../services/report");
const usersOnClassesService = require("../services/usersOnClasses");
const AppError = require("../utils/AppError");

const createReports = catchAsyncError(async (req, res, next) => {
  const { projectIds, name, description, startDate, dueDate } = req.body;

  const {
    class: { teacherId },
  } = await usersOnClassesService.getUsersOnClassesByProjectIds(projectIds);

  const isTeacher = teacherId === req.user.id;
  if (!isTeacher) {
    return next(
      new AppError("You are not allowed to perform this action", 403)
    );
  }

  const reports = projectIds.map((projectId) => ({
    name,
    projectId,
    description,
    dueDate: new Date(dueDate).toISOString(),
    startDate: new Date(startDate).toISOString(),
  }));

  const { count } = await reportService.createReports(reports);

  res.status(201).json({ count });
});

module.exports = {
  createReports,
};
