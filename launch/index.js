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
  .action(() => { });

program.parse(process.argv);