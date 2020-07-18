const getLoginInfo = require("./utils/get-login-info");
const npmLogin = require("./utils/npm-login");
const publishProcess = require("./utils/publish-process");

module.exports = async function startPublish() {
  try {
    const currentUser = await getLoginInfo();
    if (currentUser) {
      await publishProcess();
    } else {
      await npmLogin();
      await startPublish();
    };
  } catch (error) {
    throw error;
  };
};