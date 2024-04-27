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

const getUsersOnClassesByProjectIds = async (projectIds) => {
  return prisma.usersOnClasses.findFirst({
    where: {
      projectId: {
        in: projectIds,
      },
    },
    include: {
      class: {
        select: {
          teacherId: true,
        },
      },
    },
  });
};

module.exports = {
  getUsersOnClasses,
  createUsersOnClasses,
  getUsersOnClassesByProjectIds,
};
