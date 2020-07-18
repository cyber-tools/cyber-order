const { sync } = require("cross-spawn");
const toast = require("@/utils/toast");


module.exports = async () => {
  toast.start("检查登录信息... ...");
  const { stderr, stdout } = sync("npm", ["whoami"], { encoding: "utf-8" });
  if (stderr) {
    toast.warn("未检测到登录用户");
    return false;
  };
  toast.succeed(["当前用户", stdout].join(""));
  return stdout.trim();
};