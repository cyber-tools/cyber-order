const { sync } = require("cross-spawn");


module.exports = async () => {
  try {
    const result = sync("npm", ["login"], { stdio: "inherit" });
  } catch (error) {
    throw error;
  };
};