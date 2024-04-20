const catchAsyncError = require("../utils/catchAsyncError");
const projectSourceService = require("../services/projectSource");
const usersOnClassesService = require("../services/usersOnClasses");
const AppError = require("../utils/AppError");

const createProjectSource = catchAsyncError(async (req, res, next) => {
  const { projectId } = req.body;

  const project = await usersOnClassesService.getUsersOnClasses({
    projectId,
    userId: req.user.id,
  });

  if (!project) {
    return next(
      new AppError(
        "You are not allowed to create a project source for this project",
        403
      )
    );
  }

  const projectSource = await projectSourceService.createProjectSource(
    req.body
  );

  res.status(201).json(projectSource);
});

const getProjectSources = catchAsyncError(async (req, res, next) => {
  const { projectId, type } = req.query;

  const projectSources = await projectSourceService.getProjectSources({
    projectId: projectId ? +projectId : undefined,
    type,
  });

  res.status(200).json(projectSources);
});

module.exports = {
  getProjectSources,
  createProjectSource,
};
