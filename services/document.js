const prisma = require("../prisma");

const getDocuments = async () => {
  return prisma.document.findMany();
};

const uploadDocuments = async (documents) => {
  return prisma.document.createMany({
    data: documents,
  });
};

module.exports = {
  getDocuments,
  uploadDocuments,
};
