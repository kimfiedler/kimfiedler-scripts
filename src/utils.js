const { fileExistsInApp, fileExistsInWorkspace } = require('./paths');

function isUsingFlow() {
  return fileExistsInApp('.flowconfig') || fileExistsInWorkspace('.flowconfig');
}

module.exports = {
  isUsingFlow,
};
