const express = require("express");

const userController = require("../controllers/user");
const authMiddleware = require("../middlewares/auth");
const restrictTo = require("../middlewares/role");
const classRouter = require("./class");

const router = express.Router();

router.use(authMiddleware);

router.use("/:id/classes", classRouter);

router.use(restrictTo("admin", "teacher"));

router.get("/", userController.getUsers);
router.post("/", userController.createUser);

module.exports = router;
