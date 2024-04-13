const express = require("express");

const userController = require("../controllers/user");
const authMiddleware = require("../middlewares/auth");
const restrictTo = require("../middlewares/role");

const router = express.Router();

router.use(authMiddleware);

router.post("/", restrictTo("admin", "teacher"), userController.createUser);

module.exports = router;
