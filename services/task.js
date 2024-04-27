const prisma = require('../prisma');

const getTasks = async () => {
  return prisma.task.findMany();
}

const createTask = async (data) => {
  return prisma.task.create({ data });
}

const getTask = async (id) => {
  return prisma.task.findUnique({ where: { id } });
}

const updateTask = async (id, data) => {
  return prisma.task.update({ where: { id }, data });
}

const deleteTask = async (id) => {
  return prisma.task.delete({ where: { id } });
}

module.exports = {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}
