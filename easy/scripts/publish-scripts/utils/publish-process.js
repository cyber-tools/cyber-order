const { sync } = require("cross-spawn");
const toast = require("@/utils/toast");
const versionCommit = require("./version-commit");
const selectVersionType = require("./select-version-type");

module.exports = async () => {
  try {
    const versionType = await selectVersionType();
    await versionCommit();
    await sync("npm", ["version", versionType], { stdio: "inherit" });
    toast.start("开始发布npm包... ...");
  } catch (error) {
    throw error;
  }
};