const inquirer = require("inquirer");


module.exports = async ({ message = "是否同意" }) => {
  const comfirm = await inquirer.prompt({
    type: "confirm",
    name: "comfirm",
    default: true,
    message: message
  });
  return comfirm;
};