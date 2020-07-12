const fs = require("fs");
const ini = require("ini");
const path = require("path");
const { promisify } = require("es6-promisify");

const toast = require("@/utils/toast");
const selectNpmConfig = require("../utils/select-npm-config");


module.exports = async () => {
  try {
    const npmrcFilePath = path.join(process.cwd(), ".npmrc");
    const npmrcConfigText = await promisify(fs.readFile)(npmrcFilePath, { encoding: "utf-8" });
    const npmrcConfigObject = ini.parse(npmrcConfigText);
    const appendConfig = await selectNpmConfig();
    const assignConfig = Object.assign({}, npmrcConfigObject, appendConfig);
    await promisify(fs.writeFile)(npmrcFilePath, ini.stringify(assignConfig));
    toast.succeed("追加成功!");
  } catch (error) {
    toast.succeed("追加失败!");
    throw error;
  };
};