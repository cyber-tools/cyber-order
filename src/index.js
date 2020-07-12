const { program } = require("commander");
const { name, version } = require("../package.json");

program
  .name(name)
  .usage("nice command")
  .version(version)


program
  .command("git")
  .description("git命令合集")
  .action(require("@/scripts/git-scripts"))

program.parse(process.argv)