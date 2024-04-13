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

module.exports = {
  createUser,
  getUserById,
  findUserByEmail,
};
