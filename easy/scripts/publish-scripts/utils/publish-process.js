const toast = require("@/utils/toast");
const versionCommit = require("./version-commit");
const selectVersionType = require("./select-version-type");

module.exports = async () => {
  try {
    await selectVersionType();
    await versionCommit();
    toast.start("开始发布npm包... ...");
  } catch (error) {
    throw error;
  }
};