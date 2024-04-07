const AppError = require("../utils/AppError");
const jwtService = require("../services/jwt");
const userService = require("../services/user");
const { REQUEST_USER_KEY } = require("../constants");
const catchAsyncError = require("../utils/catchAsyncError");

const authMiddleware = catchAsyncError(async (req, res, next) => {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    return next(new AppError("Unauthorized", 401));
  }

  const { userId } = jwtService.verifyToken(accessToken);
  const user = await userService.getUserById(userId);

  if (!user) {
    return next(new AppError("Unauthorized", 401));
  }

  req[REQUEST_USER_KEY] = user;

  next();
});

module.exports = authMiddleware;
