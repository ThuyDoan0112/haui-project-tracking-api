const prisma = require("../prisma");

const createClass = (data) => {
  const { startDate, endDate } = data;

  return prisma.class.create({
    data: {
      ...data,
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
    },
  });
};

const getClasses = (query) => {
  return prisma.class.findMany({
    where: query,
    include: {
      teacher: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
};

const getClass = (id) => {
  return prisma.class.findUnique({
    where: {
      id,
    },
    include: {
      teacher: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
};

module.exports = {
  createClass,
  getClasses,
  getClass,
};
