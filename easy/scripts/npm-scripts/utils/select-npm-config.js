const inquirer = require("inquirer");

module.exports = async () => {
  const { config } = await inquirer.prompt({
    type: "list",
    name: "config",
    message: "选择追加的npm配置",
    choices: [{
      name: "sass_binary",
      value: {
        sass_binary_site: "https://npm.taobao.org/mirrors/node-sass/"
      }
    }, {
      name: "electron_mirror",
      value: {
        electron_mirror: "https://npm.taobao.org/mirrors/electron/"
      }
    }]
  });
  return config;
};