const git = require("simple-git")();
const { version } = require("@/package.json");

module.exports = async () => {
  try {
    await git.init();
    await git.add(".");
    await git.commit([version, "版本发布"].join(""));
    console.log("当前版本", version);
  } catch (error) {
    throw error;
  };
};