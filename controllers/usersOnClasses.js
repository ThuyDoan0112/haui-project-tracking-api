const AppError = require("../utils/AppError");
const catchAsyncError = require("../utils/catchAsyncError");
const usersOnClassesService = require("../services/usersOnClasses");
const excelService = require("../services/excel");
const classService = require("../services/class");
const bcryptService = require("../services/bcrypt");

const createUsersOnClasses = catchAsyncError(async (req, res, next) => {
  const { id: classId } = req.params;

  const { teacherId } = await classService.getClass(+classId);
  if (teacherId !== req.user.id) {
    return next(
      new AppError("You do not have permission to perform this action", 403)
    );
  }

  if (!req.file) {
    return next(new AppError("File is required", 400));
  }

  if (
    req.file.mimetype !==
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  ) {
    return next(new AppError("Invalid file type", 400));
  }

  const usersOnClasses = excelService.parseUsersOnClassesFile(req.file);

  const rawPassword = "User@123";
  const password = await bcryptService.hash(rawPassword);

  const createUsersOnClassesPromises = usersOnClasses.map(
    ({ name, studentCode, email, projectName, projectDescription }) => {
      return usersOnClassesService.createUsersOnClasses({
        user: {
          create: {
            name,
            email,
            password,
            studentCode: studentCode.toString(),
          },
        },
        project: {
          create: {
            name: projectName,
            description: projectDescription,
          },
        },
        class: {
          connect: {
            id: +classId,
          },
        },
      });
    }
  );

  const result = await Promise.all(createUsersOnClassesPromises);

  res.status(201).json(result);
});

module.exports = {
  createUsersOnClasses,
};
