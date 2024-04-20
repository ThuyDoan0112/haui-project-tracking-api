const express = require("express");

const documentsOnClassesController = require("../controllers/documentsOnClasses");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.use(authMiddleware);

router.post("/", documentsOnClassesController.createDocumentsOnClasses);

module.exports = router;
