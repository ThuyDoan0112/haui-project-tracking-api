const prisma = require("../prisma");

const createDocumentsOnClasses = (data) => {
  return prisma.documentsOnClasses.createMany({
    data,
    skipDuplicates: true,
  });
};

module.exports = {
  createDocumentsOnClasses,
};
