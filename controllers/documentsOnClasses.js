const documentsOnClassesService = require("../services/documentsOnClasses");
const classService = require("../services/class");
const catchAsyncError = require("../utils/catchAsyncError");

const getDocumentsOnClasses = catchAsyncError(async (req, res) => {
  const classId = req.query.classId;
  if (!classId) {
    return next(new AppError("Class ID is required", 400));
  }

  const documentsOnClasses =
    await documentsOnClassesService.getDocumentsOnClasses(+classId);
  res.status(200).json(documentsOnClasses);
});

const createDocumentsOnClasses = catchAsyncError(async (req, res) => {
  const { classId, documentIds } = req.body;

  const { teacherId } = await classService.getClass(classId);
  const isAdmin = req.user.role === "admin";
  if (!teacherId && !isAdmin) {
    return next(
      new AppError("You are not allowed to perform this action", 403)
    );
  }

  const documentsOnClassesData = documentIds.map((documentId) => ({
    classId,
    documentId,
  }));

  const { count } = await documentsOnClassesService.createDocumentsOnClasses(
    documentsOnClassesData
  );

  res.status(201).json({ count });
});

module.exports = {
  getDocumentsOnClasses,
  createDocumentsOnClasses,
};
