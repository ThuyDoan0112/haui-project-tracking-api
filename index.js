require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const classRouter = require("./routes/class");
const errorHandler = require("./middlewares/errorHandler");
const validationHandler = require("./middlewares/validationHandler");

const app = express();
const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cookieParser());

app.use(validationHandler);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/classes", classRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
