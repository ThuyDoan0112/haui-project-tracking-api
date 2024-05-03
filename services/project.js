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

const createProject = async (data) => {
  return prisma.project.create({ data });
}

const getProject = async (id) => {
  return prisma.project.findUnique({ where: { id } });
}

const updateProject = async (id, data) => {
  return prisma.project.update({ where: { id }, data });
}

const deleteProject = async (id) => {
  return prisma.project.delete({ where: { id } });
}

module.exports = {
  getProjects,
  createProject,
  getProject,
  updateProject,
  deleteProject,
  createProjects
}
