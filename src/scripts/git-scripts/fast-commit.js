const ora = require("ora");
const moment = require("moment");
const simpleGit = require("simple-git");
const popComfirm = require("@/utils/pop-comfirm");

const git = simpleGit();

module.exports = async () => {
  const toast = ora();
  try {
    await git.add(".");
    await git.commit([moment().format("YYYY年MM月DD日 HH:ss"), "的快速提交"].join(""));
    toast.succeed("提交成功!");
    if (await popComfirm("是否推送到远程仓库?")) {
      await git.push();
    };
  } catch (error) {
    toast.fail("提交失败!");
    throw error;
  }
};