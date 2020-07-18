const execa = require("execa");
const toast = require("@/utils/toast");
const { name } = require("@/package.json");
const isPackageName = require("@/utils/is-package-name");
const versionCommit = require("./version-commit");
const selectVersionType = require("./select-version-type");

module.exports = async () => {
  if (!(await isPackageName())) {
    toast.warn(["包名", name, "不符合规范!"].join(""));
    process.exit(0);
  };
  try {
    const versionType = await selectVersionType();
    await versionCommit();
    await execa("npm", ["version", versionType], { stdio: "inherit" });
    await execa("npm", ["publish"], { stdio: "inherit" });
    toast.succeed("发布成功!");
  } catch (error) {
    throw error;
  };
};