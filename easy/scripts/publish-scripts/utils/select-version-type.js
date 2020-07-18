const inquirer = require("inquirer");
const { spawn } = require("cross-spawn");

module.exports = async () => {
  const { action } = await inquirer.prompt({
    type: "list",
    name: "action",
    default: "patch",
    choices: [{
      name: "大版本",
      description: "不兼容旧版的修改",
      value: async () => {
        spawn("npm", ["version", "major"], { stdio: "inherit" })
      }
    }, {
      name: "小版本",
      description: "兼容旧版API的修改或功能更新",
      value: async () => {
        spawn("npm", ["version", "minor"], { stdio: "inherit" })
      }
    }, {
      name: "补丁版本",
      description: "BUG修复",
      value: async () => {
        spawn("npm", ["version", "patch"], { stdio: "inherit" })
      }
    }]
  });
  await action();
};