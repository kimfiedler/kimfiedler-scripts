const { fileExistsInApp } = require('./paths');

function isUsingFlow() {
  return fileExistsInApp('.flowconfig');
}

module.exports = {
  isUsingFlow,
};
