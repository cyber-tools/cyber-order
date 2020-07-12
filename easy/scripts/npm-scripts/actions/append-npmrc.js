const fs = require("fs");
const ini = require("ini");
const path = require("path");
const { promisify } = require("es6-promisify");


module.exports = async () => {
  const npmrcFilePath = path.join(process.cwd(), ".npmrc");
  const npmrcConfigText = await promisify(fs.readFile)(npmrcFilePath, { encoding: "utf-8" });
  const npmrcConfigObject = ini.parse(npmrcConfigText);
  console.log(npmrcConfigObject);
};