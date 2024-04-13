const express = require("express");

const authController = require("../controllers/auth");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.post("/login", authController.login);

router.use(authMiddleware);
router.get("/logout", authController.logout);
router.get("/user", authController.getAuthUser);

module.exports = router;
