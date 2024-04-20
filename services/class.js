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

const getClasses = () => {
  return prisma.class.findMany();
};

module.exports = {
  createClass,
  getClasses,
};
