const git = require("simple-git")();
const inquirer = require("inquirer");


module.exports = async () => {
  try {
    await git.init();
    const { action } = await inquirer.prompt({
      type: "list",
      name: "action",
      default: require("@/scripts/git-scripts/fast-commit"),
      message: "选择要执行的git命令",
      choices: [{
        name: "快速提交",
        value: require("@/scripts/git-scripts/fast-commit")
      }, {
        name: "生成.gitignore文件",
        // value: () => { }
      }, {
        name: "重置.gitignore",
        // value: () => { }
      }, {
        name: "替换origin",
        // value: () => { }
      }]
    });
    await action();
  } catch (error) {
    throw error;
  };
};