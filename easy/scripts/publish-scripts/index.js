const { sync } = require("cross-spawn");
const popConfirm = require("@/utils/pop-confirm");
const getLoginInfo = require("./utils/get-login-info");
const publishProcess = require("./utils/publish-process");

module.exports = async function startPublish() {
  try {
    const currentUser = await getLoginInfo();
    if (!currentUser) {
      sync("npm", ["login"], { stdio: "inherit" });
      await startPublish();
    } else {
      const text = ["当前登录用户为", currentUser, "是否更换?"].join("");
      const confirm = await popConfirm(text, false);
      if (confirm) {
        sync("npm", ["logout"], { stdio: "inherit" });
        sync("npm", ["login"], { stdio: "inherit" });
      };
      await publishProcess();
    };
  } catch (error) {
    throw error;
  };
};