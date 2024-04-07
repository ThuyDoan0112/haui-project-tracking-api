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

module.exports = {
  getUserById,
  findUserByEmail,
};
