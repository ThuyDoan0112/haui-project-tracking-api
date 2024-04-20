const prisma = require("../prisma");

const createProjects = (data) => {
  return prisma.project.createMany({
    data,
  });
};

const getProjects = (query) => {
  return prisma.project.findMany({
    where: query,
  });
};

module.exports = {
  createProjects,
  getProjects,
};
