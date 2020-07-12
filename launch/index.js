#!/usr/bin/env node
require("../utils/initial");
const { program } = require("commander");
const { name, version } = require("@/package.json");

program
  .name(name)
  .usage("launch command")
  .version(version)


program
  .command("git")
  .description("打开git的远程目录")
  .action(require("@/launch/scripts/launch-git"));

program
  .command("npm")
  .description("打开npm页面")
  .action(require("@/launch/scripts/launch-npm"));

program
  .command("all")
  .description("打开npm和git远程仓库")
  .action(async () => {
    await require("@/launch/scripts/launch-git")();
    await require("@/launch/scripts/launch-npm")();
  });

program.parse(process.argv);