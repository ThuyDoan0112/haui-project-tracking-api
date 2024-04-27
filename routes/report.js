const express = require("express");

const reportController = require("../controllers/report");
const authMiddleware = require("../middlewares/auth");

const router = express.Router({
  mergeParams: true,
});

router.use(authMiddleware);

router.get("/", reportController.getReports);
router.post("/", reportController.createReports);

module.exports = router;
