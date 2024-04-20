const prisma = require("../prisma");

const findUserByEmail = (email) => {
  return prisma.user.findUnique({
    where: { email },
  });
};

const getUserById = (id) => {
  return prisma.user.findUnique({
    where: { id },
  });
};

const createUser = (data) => {
  return prisma.user.create({
    data,
  });
};

const createUsers = (data) => {
  return prisma.user.createMany({
    data,
  });
};

const getUsers = (query = {}) => {
  return prisma.user.findMany({
    where: query,
  });
};

module.exports = {
  getUsers,
  createUser,
  createUsers,
  getUserById,
  findUserByEmail,
};
