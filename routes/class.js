const express = require("express");

const classController = require("../controllers/class");
const authMiddleware = require("../middlewares/auth");
const restrictTo = require("../middlewares/role");
const usersOnClassesRouter = require("./usersOnClasses");

const router = express.Router({
  mergeParams: true,
});

router.use(authMiddleware);

router.use("/:id/users-on-classes", usersOnClassesRouter);

router.get("/:id", classController.getClass);
router.get("/", classController.getClasses);

router.patch("/:id", classController.updateClass);
router.post("/", restrictTo("admin"), classController.createClass);

module.exports = router;
