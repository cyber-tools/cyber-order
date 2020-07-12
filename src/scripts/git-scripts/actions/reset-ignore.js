const git = require("simple-git")();

const toast = require("@/utils/toast");
const fastCommit = require("./fast-commit");
const hasIgnoreFile = require("../utils/hasIgnoreFile");

module.exports = async () => {
  if (await hasIgnoreFile()) {
    try {
      toast.start("解除文件提交历史... ...");
      await git.rm(["-r", "--cached", "."]);
      await fastCommit();
      toast.succeed("重置成功!");
    } catch (error) {
      toast.fail("重置失败!");
      throw error;
    }
  } else {
    toast.warn("该项目下不存在.gitignore文件");
  };
};