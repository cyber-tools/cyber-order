const open = require("open");
const { fromPairs } = require("lodash");
const git = require("simple-git")();

module.exports = async () => {
  try {
    const list = await git.getRemotes(true);
    const remote = fromPairs(list.map(({ name, refs }) => [name, refs.push]));
    await open(remote["origin"]);
  } catch (error) {
    throw error;
  }
};