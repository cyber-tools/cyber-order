const ora = require("ora");
const moment = require("moment");
const simpleGit = require("simple-git");
const git = simpleGit();

module.exports = async () => {
  const toast = ora();
  try {
    await git.add(".");
    await git.commit([moment().format("YYYY年MM月DD日 HH:ss"), "的快速提交"].join(""));
    toast.succeed("提交成功!");
  } catch (error) {
    toast.fail("提交失败!");
    throw error;
  }
};