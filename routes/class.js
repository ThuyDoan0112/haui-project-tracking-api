const express = require("express");

const classController = require("../controllers/class");
const authMiddleware = require("../middlewares/auth");
const restrictTo = require("../middlewares/role");

const router = express.Router({
  mergeParams: true,
});

router.use(authMiddleware);

router.get("/:id", classController.getClass);
router.get("/", classController.getClasses);
router.post("/", restrictTo("admin"), classController.createClass);

module.exports = router;
