const fs = require("fs");
const path = require("path");
const { promisify } = require("es6-promisify");

const toast = require("@/utils/toast");
const hasReadmeFile = require("../utils/hasReadmeFile");
const cliReadmeTemplate = require("../assets/cli-readme-template");

module.exports = async () => {
  if (await hasReadmeFile()) {
    toast.warn("该项目下已存在README.md文件!");
  } else {
    try {
      const readmeFilePath = path.join(process.cwd(), "README.md");
      await promisify(fs.writeFile)(readmeFilePath, cliReadmeTemplate);
      toast.succeed("创建成功!");
    } catch (error) {
      toast.succeed("创建失败!");
      throw error;
    };
  };
};