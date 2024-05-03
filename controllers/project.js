const projectService = require("../services/project");
const AppError = require("../utils/AppError");
const catchAsyncError = require("../utils/catchAsyncError");

const getProjects = catchAsyncError(async (req, res, next) => {
  const projects = await projectService.getProjects();
  res.status(200).json(projects);
})

const createProject = catchAsyncError(async (req, res, next) => {
  const newProject = await projectService.createProject(req.body);
  res.status(201).json(newProject);
});

const getProject = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  const project = await projectService.getProject(+id);

  if (!project) {
    return next(new AppError("Project not found", 404));
  }

  res.status(200).json(project);
})

const updateProject = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  const updatedProject = await projectService.updateProject(+id, req.body);

  res.status(200).json(updatedProject);
});

const deleteProject = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  await projectService.deleteProject(+id);

  res.status(204).json(null);
})

module.exports = {
  getProjects,
  createProject,
  getProject,
  updateProject,
  deleteProject
}
