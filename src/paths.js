const fs = require('fs-extra');
const path = require('path');
const readPkgUp = require('read-pkg-up');

const appPath = path.dirname(readPkgUp.sync().path);
const thisPath = __dirname;

const fromApp = (...paths) => path.join(appPath, ...paths);
const fromThis = (...paths) => path.join(thisPath, ...paths);
const packagePath = pkg => path.dirname(require.resolve(`${pkg}/package.json`));
const fromPackage = (pkg, ...paths) => path.join(packagePath(pkg), ...paths);

const fileExistsInApp = fileName => fs.existsSync(fromApp(fileName));

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
};
