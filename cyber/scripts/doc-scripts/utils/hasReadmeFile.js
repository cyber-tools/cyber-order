const path = require("path");
const pathExists = require("path-exists");


module.exports = async () => {
  try {
    const readmeFilePath = path.join(process.cwd(), "README.md");
    const hasReadmeFile = await pathExists(readmeFilePath);
    return hasReadmeFile;
  } catch (error) {
    throw error;
  }
};