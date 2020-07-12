const fs = require("fs");
const path = require("path");
const { promisify } = require("es6-promisify");

module.exports = async () => {
  try {
    const npmrcFilePath = path.join(process.cwd(), ".npmrc");
    const stats = await promisify(fs.stat)(npmrcFilePath);
    return stats.isFile();
  } catch (error) {
    throw error;
  };
};