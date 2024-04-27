const express = require("express");

const authMiddleware = require("../middlewares/auth");
const reportRouter = require("./report");

const router = express.Router();

router.use(authMiddleware);

router.use("/:id/reports", reportRouter);

module.exports = router;
