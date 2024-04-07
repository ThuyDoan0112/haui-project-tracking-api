const AppError = require("../utils/AppError");
const catchAsyncError = require("../utils/catchAsyncError");
const userService = require("../services/user");
const jwtService = require("../services/jwt");
const bcryptService = require("../services/bcrypt");

const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await userService.findUserByEmail(email);
  if (!user) {
    return next(new AppError("User not found", 404));
  }

  const isPasswordCorrect = await bcryptService.compare(
    password,
    user.password
  );
  if (!isPasswordCorrect) {
    return next(new AppError("Invalid email or password", 401));
  }

  const accessToken = jwtService.signToken({
    userId: user.id,
  });
  const isProductionEnv = process.env.NODE_ENV === "production";
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: isProductionEnv,
    expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
  });

  res.status(200).json({
    message: "OK",
  });
});

module.exports = {
  login,
};
