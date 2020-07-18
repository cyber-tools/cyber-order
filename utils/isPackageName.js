var validate = require("validate-npm-package-name");
const { name } = require("@/package.json");

module.exports = async () => {
  try {
    const { validForNewPackages, validForOldPackages } = await validate(name);
    console.log({ validForNewPackages, validForOldPackages });
    return (validForNewPackages && validForOldPackages);
  } catch (error) {
    throw error;
  };
};