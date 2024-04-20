const prisma = require("../prisma");

const getDocuments = async () => {
  return prisma.document.findMany();
};

module.exports = {
  getDocuments,
};
