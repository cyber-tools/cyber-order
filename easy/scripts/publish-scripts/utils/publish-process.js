const { sync } = require("cross-spawn");
const toast = require("@/utils/toast");
const { name } = require("@/package.json");
const isPackageName = require("@/utils/isPackageName");
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
    sync("npm", ["version", versionType], { stdio: "inherit" });
    toast.start("开始发布npm包... ...");
    sync("npm", ["publish"], { stdio: "inherit" });
    toast.succeed("发布成功!");
  } catch (error) {
    throw error;
  };
};