#!/usr/bin/env node
require("../utils/initial");
const { program } = require("commander");
const { name, version } = require("@/package.json");

program
  .name(name)
  .usage("easy command")
  .version(version)


program
  .command("git")
  .description("git命令合集")
  .action(require("@/easy/scripts/git-scripts"));

program
  .command("npm")
  .description("npm命令合集")
  .action(require("@/easy/scripts/npm-scripts"));


program.parse(process.argv);