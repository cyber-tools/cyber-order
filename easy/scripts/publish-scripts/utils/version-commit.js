const git = require("simple-git")();
const toast = require("@/utils/toast");
const { version } = require("@/package.json");
const hasIgnoreFile = require("@/easy/scripts/git-scripts/utils/hasIgnoreFile");

module.exports = async () => {
  if (await hasIgnoreFile()) {
    try {
      await git.init();
      await git.add(".");
      await git.commit([version, "版本发布"].join(""));
      console.log("当前版本", version);
    } catch (error) {
      throw error;
    };
  } else {
    toast.warn("当前项目不存在.gitignore文件");
    process.exit(0);
  };
};