const inquirer = require("inquirer");
const { sync } = require("cross-spawn");

module.exports = async () => {
  const { versionType } = await inquirer.prompt({
    type: "list",
    name: "versionType",
    default: "patch",
    message: "选择要发布的版本类型:",
    choices: [{
      name: "大版本",
      description: "不兼容旧版的修改",
      value: "major"
    }, {
      name: "小版本",
      description: "兼容旧版API的修改或功能更新",
      value: "minor"
    }, {
      name: "补丁版本",
      description: "BUG修复",
      value: "patch"
    }]
  });
  await sync("npm", ["version", versionType], { stdio: "inherit" })
};