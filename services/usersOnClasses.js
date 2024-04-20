const prisma = require("../prisma");

const createUsersOnClasses = async (data) => {
  return prisma.usersOnClasses.create({
    data,
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          studentCode: true,
        },
      },
      project: true,
    },
  });
};

const getUsersOnClasses = async (query) => {
  return prisma.usersOnClasses.findMany({
    where: query,
  });
};

module.exports = {
  getUsersOnClasses,
  createUsersOnClasses,
};
