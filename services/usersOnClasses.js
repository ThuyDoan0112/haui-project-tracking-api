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

module.exports = {
  createUsersOnClasses,
};
