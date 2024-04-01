require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const cookieParser = require("cookie-parser");

const errorHandler = require("./middlewares/errorHandler");

const app = express();
const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cookieParser());

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
