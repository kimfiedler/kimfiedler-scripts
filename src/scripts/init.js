const fs = require('fs-extra');
const { fromApp, fileExistsInApp } = require('../paths');

function updatePackageJson() {
  const pkgPath = fromApp('package.json');
  const pkg = require(pkgPath);

  const scripts = {
    build: 'kimfiedler-scripts build',
    watch: 'kimfiedler-scripts build --watch',
    flow: 'kimfiedler-scripts flow',
    lint: 'kimfiedler-scripts lint src',
    precommit: 'kimfiedler-scripts precommit',
    test: 'kimfiedler-scripts test',
  };

  const existingScripts = pkg['scripts'] || {};

  pkg['scripts'] = {
    ...scripts,
    ...existingScripts,
  };

  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
}

function createEslintConfig() {
  if (!fileExistsInApp('.eslintrc')) {
    const eslintRc = {
      extends: '@kimfiedler/eslint-config',
    };

    fs.writeFileSync(fromApp('.eslintrc'), JSON.stringify(eslintRc, null, 2));
  }
}

function main() {
  updatePackageJson();
  createEslintConfig();
}

main();
