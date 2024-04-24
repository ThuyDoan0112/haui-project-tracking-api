const prisma = require("../prisma");

const createReports = async (reports) => {
  const { count } = await prisma.report.createMany({
    data: reports,
    skipDuplicates: true,
  });

  return { count };
};

const getReports = async (query) => {
  return prisma.report.findMany({
    where: query,
    include: {
      tasks: true,
    }
  });
};

module.exports = {
  getReports,
  createReports,
};
