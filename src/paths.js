const fs = require('fs-extra');
const path = require('path');
const readPkgUp = require('read-pkg-up');

const appPath = path.dirname(readPkgUp.sync().path);
const thisPath = __dirname;

const fromApp = (...paths) => path.join(appPath, ...paths);
const fromThis = (...paths) => path.join(thisPath, ...paths);
const packagePath = pkg => path.dirname(require.resolve(`${pkg}/package.json`));
const fromPackage = (pkg, ...paths) => path.join(packagePath(pkg), ...paths);

const workspace = readPkgUp.sync({ cwd: fromApp('..') });
const workspacePath = workspace.path && path.dirname(workspace.path);
const fromWorkspace = (...paths) => workspacePath && path.join(workspacePath, ...paths);
const isWorkspace = () => workspace.pkg && workspace.pkg.workspaces;

const fileExistsInApp = fileName => fs.existsSync(fromApp(fileName));
const fileExistsInWorkspace = fileName => isWorkspace() && fs.existsSync(fromWorkspace(fileName));

function binPathFromPackage(pkg, bin) {
  const pkgJsonPath = fromPackage(pkg, 'package.json');
  const pkgJson = require(pkgJsonPath);

  const binFile = typeof pkgJson['bin'] === 'string' ? pkgJson['bin'] : pkgJson['bin'][bin];

  return fromPackage(pkg, binFile);
}

module.exports = {
  appPath,
  thisPath,
  fromApp,
  fromThis,
  packagePath,
  fromPackage,
  fileExistsInApp,
  binPathFromPackage,
  fromWorkspace,
  isWorkspace,
  fileExistsInWorkspace,
};
