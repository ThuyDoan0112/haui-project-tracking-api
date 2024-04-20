const prisma = require("../prisma");

const createProjectSource = async (data) => {
  return await prisma.projectSource.create({
    data,
  });
};

const getProjectSources = async (query = {}) => {
  return await prisma.projectSource.findMany({
    where: query,
  });
};

module.exports = {
  getProjectSources,
  createProjectSource,
};
