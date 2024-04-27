const prisma = require("../prisma");

const createReports = async (reports) => {
  const { count } = await prisma.report.createMany({
    data: reports,
    skipDuplicates: true,
  });

  return { count };
};

module.exports = {
  createReports,
};
