const express = require("express");

const classController = require("../controllers/class");
const authMiddleware = require("../middlewares/auth");
const restrictTo = require("../middlewares/role");

const router = express.Router();

router.use(authMiddleware);

router.post("/", restrictTo("admin"), classController.createClass);

module.exports = router;
