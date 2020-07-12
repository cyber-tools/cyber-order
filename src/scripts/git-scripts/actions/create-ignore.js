const fs = require("fs");
const path = require("path");
const simpleGit = require("simple-git");
const { promisify } = require("es6-promisify");
const toast = require("@/utils/toast");

const template = require("../assets/gitignore-template");
const hasIgnoreFile = require("../utils/hasIgnoreFile");

const git = simpleGit();

module.exports = async () => {
  console.log(await hasIgnoreFile());
  try {
    console.log("");
  } catch (error) {
    throw error;
  }
};