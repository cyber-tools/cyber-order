const fs = require("fs");
const path = require("path");
const { promisify } = require("es6-promisify");

module.exports = async () => {
  try {
    const readmeFilePath = path.join(process.cwd(), "README.md");
    const stats = await promisify(fs.stat)(readmeFilePath);
    return stats.isFile();
  } catch (error) {
    return false;
  }
};