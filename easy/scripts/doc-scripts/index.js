const inquirer = require("inquirer");


module.exports = async () => {
  try {
    const { action } = await inquirer.prompt({
      type: "list",
      name: "action",
      message: "选择要生成的markdown模板",
      choices: [{
        name: "命令行README.md模板",
        value: require("./actions/create-cli-readme")
      }]
    });
    await action();
    process.exit(0);
  } catch (error) {
    throw error;
  };
};