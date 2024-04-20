const express = require("express");

const documentController = require("../controllers/document");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.use(authMiddleware);

router.get("/", documentController.getDocuments);

module.exports = router;
