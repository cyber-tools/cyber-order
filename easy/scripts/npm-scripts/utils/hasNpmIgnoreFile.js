const fs = require("fs");
const path = require("path");
const { promisify } = require("es6-promisify");

module.exports = async () => {
  try {
    const npmignoreFilePath = path.join(process.cwd(), ".npmignore");
    const stats = await promisify(fs.stat)(npmignoreFilePath);
    return stats.isFile();
  } catch (error) {
    return false;
  };
};