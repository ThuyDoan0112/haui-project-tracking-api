const excelToJson = require("convert-excel-to-json");

const parseUsersOnClassesFile = (file) => {
  const data = excelToJson({
    sourceFile: file.path,
    columnToKey: {
      A: "order",
      B: "name",
      C: "studentCode",
      D: "email",
      E: "projectName",
      F: "projectDescription",
    },
  });

  const [rowHeader, ...rowsData] = data["Sheet1"];
  return rowsData;
};

module.exports = {
  parseUsersOnClassesFile,
};
