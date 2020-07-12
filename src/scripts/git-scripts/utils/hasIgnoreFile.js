const fs = require("fs");
const path = require("path");
const { promisify } = require("es6-promisify");

module.exports = async () => {
  try {
    const ignoreFilePath = path.resolve(process.cwd(), ".gitignore");
    const { isFile } = await promisify(fs.stat)(ignoreFilePath);
    return isFile();
  } catch (error) {
    throw error;
  }
};