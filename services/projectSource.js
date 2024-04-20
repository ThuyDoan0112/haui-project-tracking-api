const prisma = require("../prisma");

const createProjectSource = async (data) => {
  return await prisma.projectSource.create({
    data,
  });
};

module.exports = {
  createProjectSource,
};
