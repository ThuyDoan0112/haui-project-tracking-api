const documentService = require("../services/document");
const AppError = require("../utils/AppError");
const catchAsyncError = require("../utils/catchAsyncError");

const getDocuments = catchAsyncError(async (req, res) => {
  const documents = await documentService.getDocuments();
  res.status(200).json(documents);
});

const uploadDocuments = catchAsyncError(async (req, res, next) => {
  if (!req.files.length) {
    return next(new AppError("Please upload documents", 400));
  }

  const documents = req.files.map((file) => ({
    name: file.originalname,
    path: file.path,
  }));

  const { count } = await documentService.uploadDocuments(documents);

  res.status(201).json({ count });
});

module.exports = {
  getDocuments,
  uploadDocuments,
};
