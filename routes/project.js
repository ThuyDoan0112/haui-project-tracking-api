const express = require("express");

const projectController = require("../controllers/project");
const authMiddleware = require("../middlewares/auth");
const reportRouter = require("./report");

const router = express.Router();

router.use(authMiddleware);

router.use("/:id/reports", reportRouter);

router
  .route('/')
  .get(projectController.getProjects)
  .post(projectController.createProject)

router
  .route("/:id")
  .get(projectController.getProject)
  .put(projectController.updateProject)
  .delete(projectController.deleteProject);

module.exports = router;
