const moment = require("moment");
const simpleGit = require("simple-git");
const toast = require("@/utils/toast");

const comfirmPushRemote = require("../utils/comfirmPushRemote");

const git = simpleGit();

module.exports = async () => {
  try {
    await git.init();
    await git.add(".");
    await git.commit([moment().format("YYYY年MM月DD日 HH:ss"), "的快速提交"].join(""));
    toast.succeed("提交成功!");
    await comfirmPushRemote();
  } catch (error) {
    toast.fail("提交失败!");
    throw error;
  };
};