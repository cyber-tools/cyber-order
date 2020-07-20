const git = require("simple-git")();

const toast = require("@/utils/toast");
const fastCommit = require("./fast-commit");
const hasIgnoreFile = require("../utils/hasIgnoreFile");

module.exports = async () => {
  if (await hasIgnoreFile()) {
    try {
      toast.start("正在解除... ...");
      await git.rm(["-r", "--cached", "."]);
      toast.succeed("解除成功!");
      await fastCommit();
    } catch (error) {
      toast.fail("重置失败!");
      throw error;
    }
  } else {
    toast.warn("该项目下不存在.gitignore文件");
  };
};