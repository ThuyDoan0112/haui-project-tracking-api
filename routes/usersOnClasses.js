const express = require("express");

const authMiddleware = require("../middlewares/auth");
const uploadMiddleware = require("../middlewares/upload");
const usersOnClassesController = require("../controllers/usersOnClasses");

const router = express.Router({
  mergeParams: true,
});

router.use(authMiddleware);

router.post(
  "/",
  uploadMiddleware.single("sheet"),
  usersOnClassesController.createUsersOnClasses
);

module.exports = router;
