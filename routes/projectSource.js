const express = require("express");

const projectSourceController = require("../controllers/projectSource");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.use(authMiddleware);

router.post("/", projectSourceController.createProjectSource);

module.exports = router;
