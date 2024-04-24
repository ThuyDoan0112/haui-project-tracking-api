const AppError = require("../utils/AppError");
const catchAsyncError = require("../utils/catchAsyncError");
const usersOnClassesService = require("../services/usersOnClasses");
const excelService = require("../services/excel");
const classService = require("../services/class");
const bcryptService = require("../services/bcrypt");
const prisma = require("../prisma");

const getUsersOnClasses = catchAsyncError(async (req, res) => {
  if(req.params.id){
    const usersOnClasses = await prisma.usersOnClasses.findMany({
      where: {
        userId: +req.params.id,
      },
      include: {
        class: true
      }
    });

    return res.status(200).json(usersOnClasses.map((userOnClass) => userOnClass.class));
  }

  const classId = req.query.classId;
  if (!classId) {
    return next(new AppError("Class ID is required", 400));
  }

  const usersOnClasses = await usersOnClassesService.getUsersOnClasses({
    classId: +classId,
  });
  
  res.status(200).json(usersOnClasses);
})

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
  getUsersOnClasses,
  createUsersOnClasses,
};
