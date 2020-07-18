// const { sync } = require("cross-spawn");
const execa = require("execa");
const toast = require("@/utils/toast");


module.exports = async () => {
  toast.start("检查登录信息... ...");
  const { stderr, stdout } = await execa("npm", ["whoami"], {
    encoding: "utf-8"
  });
  if (stderr) {
    toast.warn("未检测到登录用户");
    return false;
  };
  toast.stop();
  return stdout.trim();
};