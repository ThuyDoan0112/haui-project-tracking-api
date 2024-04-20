const express = require("express");

const documentController = require("../controllers/document");
const authMiddleware = require("../middlewares/auth");
const uploadMiddleware = require("../middlewares/upload");
const { FILE_UPLOAD_MAX_COUNT } = require("../constants");

const router = express.Router();

router.use(authMiddleware);

router.get("/", documentController.getDocuments);
router.post(
  "/",
  uploadMiddleware.array("documents", FILE_UPLOAD_MAX_COUNT),
  documentController.uploadDocuments
);

module.exports = router;
