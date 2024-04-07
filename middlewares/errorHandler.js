const errorHandler = (err, req, res, next) => {
  console.error(err);

  // Custom error for Prisma unique constraint validation
  if (err.code === "P2002") {
    err.statusCode = 400;
    err.message = `Duplicate ${err.meta.target.split("_").join(" ")}`;
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  res.status(statusCode).json({ message });
};

module.exports = errorHandler;
