const open = require("open");
const git = require("simple-git")();
const { fromPairs } = require("lodash");

module.exports = async () => {
  try {
    const list = await git.getRemotes(true);
    const remote = fromPairs(list.map(({ name, refs }) => [name, refs.push]));
    await open(remote["origin"]);
  } catch (error) {
    throw error;
  }
};