const prisma = require("../prisma");

const createDocumentsOnClasses = (data) => {
  return prisma.documentsOnClasses.createMany({
    data,
    skipDuplicates: true,
  });
};

const getDocumentsOnClasses = (classId) => {
  return prisma.documentsOnClasses.findMany({
    where: {
      classId,
    },
    include: {
      document: true,
    },
  });
};

module.exports = {
  createDocumentsOnClasses,
  getDocumentsOnClasses,
};
