const documentService = require("../services/document");
const catchAsyncError = require("../utils/catchAsyncError");

const getDocuments = catchAsyncError(async (req, res) => {
  const documents = await documentService.getDocuments();
  res.status(200).json(documents);
});

module.exports = {
  getDocuments,
};
