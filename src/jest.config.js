const { fromApp, fromThis } = require('./paths');

const jestConfig = {
  roots: [fromApp('src')],
  transform: { '^.+\\.js$': fromThis('babel-transform') },
};

module.exports = jestConfig;
