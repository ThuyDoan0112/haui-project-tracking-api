const bcrypt = require("bcryptjs");

const hash = async (string) => {
  const salt = 8;
  return await bcrypt.hash(string, salt);
};

const compare = async (string, hash) => {
  return await bcrypt.compare(string, hash);
};

module.exports = {
  hash,
  compare,
};
