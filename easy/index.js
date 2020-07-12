#!/usr/bin/env node
const path = require("path");
const { addAlias } = require("module-alias");

addAlias("@", path.resolve(__dirname, "src"));

process.on("uncaughtException", (error) => {
  console.log(error);
  process.exit(0);
});

process.on("unhandledRejection", (error) => {
  console.log(error);
  process.exit(0);
});


const { program } = require("commander");
const { name, version } = require("../package.json");

program
  .name(name)
  .usage("easy command")
  .version(version)


program
  .command("git")
  .description("git命令合集")
  .action(require("@/scripts/git-scripts"));

program.parse(process.argv);