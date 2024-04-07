const excludeFields = (model, keys) => {
  return Object.fromEntries(
    Object.entries(model).filter(([key]) => !keys.includes(key))
  );
};

module.exports = {
  excludeFields,
};
