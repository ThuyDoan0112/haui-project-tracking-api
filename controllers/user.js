const userService = require("../services/user");
const catchAsyncError = require("../utils/catchAsyncError");
const bcryptService = require("../services/bcrypt");

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

module.exports = {
  createUser,
};
