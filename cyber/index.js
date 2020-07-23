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
  .action(require("@/cyber/scripts/git-scripts"));

program
  .command("npm")
  .description("npm命令合集")
  .action(require("@/cyber/scripts/npm-scripts"));

program
  .command("doc")
  .description("生成markdown模板")
  .action(require("@/cyber/scripts/doc-scripts"));


program.parse(process.argv);