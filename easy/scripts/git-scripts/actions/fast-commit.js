const moment = require("moment");
const git = require("simple-git")();
const prompt = require("prompt-promise");
const toast = require("@/utils/toast");

const hasIgnoreFile = require("../utils/hasIgnoreFile");
const confirmPushRemote = require("../utils/confirmPushRemote");


module.exports = async () => {
  const defaultCommitMessage = [moment().format("YYYY年MM月DD日 HH:ss"), "的快速提交"].join("");
  if (await hasIgnoreFile()) {
    try {
      await git.init();
      await git.add(".");
      const commitMessage = await prompt("请输入提交信息:");
      await git.commit(commitMessage || defaultCommitMessage);
      toast.succeed("提交成功!");
      await confirmPushRemote();
    } catch (error) {
      toast.fail("提交失败!");
      throw error;
    };
  } else {
    toast.warn("该项目下不存在.gitignore文件");
  };
};