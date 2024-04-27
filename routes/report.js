const express = require("express");

const reportController = require("../controllers/report");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.use(authMiddleware);

router.post("/", reportController.createReports);

module.exports = router;
