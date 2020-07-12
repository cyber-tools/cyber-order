const moment = require("moment");
const git = require("simple-git")();
const prompt = require("prompt-promise");
const toast = require("@/utils/toast");

const comfirmPushRemote = require("../utils/comfirmPushRemote");


module.exports = async () => {
  const defaultCommitMessage = [moment().format("YYYY年MM月DD日 HH:ss"), "的快速提交"].join("");
  try {
    await git.init();
    await git.add(".");
    const commitMessage = await prompt("请输入提交信息:");
    await git.commit(commitMessage || defaultCommitMessage);
    toast.succeed("提交成功!");
    await comfirmPushRemote();
  } catch (error) {
    toast.fail("提交失败!");
    throw error;
  };
};