const git = require("simple-git")();
const moment = require("moment");

module.exports = async () => {
  try {
    await git.add(".");
    await git.commit([moment().format("YYYY年MM月DD日 HH:ss"), "的快速提交"].join(""));
  } catch (error) {
    throw error;
  }
};