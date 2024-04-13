const userService = require("../services/user");
const catchAsyncError = require("../utils/catchAsyncError");
const bcryptService = require("../services/bcrypt");
const { excludeFields } = require("../utils/prisma");

const createUser = catchAsyncError(async (req, res, next) => {
  const { password } = req.body;

  const hashedPassword = await bcryptService.hash(password);
  const user = await userService.createUser({
    ...req.body,
    password: hashedPassword,
  });

  const userWithoutPassword = excludeFields(user, ["password"]);
  res.status(201).json(userWithoutPassword);
});

const getUsers = catchAsyncError(async (req, res, next) => {
  const users = await userService.getUsers();

  const usersWithoutPassword = users.map((user) =>
    excludeFields(user, ["password"])
  );
  res.status(200).json(usersWithoutPassword);
});

module.exports = {
  createUser,
  getUsers,
};
