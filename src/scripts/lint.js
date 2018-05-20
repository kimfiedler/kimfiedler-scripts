const spawn = require('cross-spawn');
const { binPathFromPackage, fileExistsInApp, fromApp, fromThis } = require('../paths');

const args = process.argv.slice(3);
const eslintPath = binPathFromPackage('eslint', 'eslint');

const configPath = fileExistsInApp('.eslintrc') ? fromApp('.eslintrc') : fromThis('eslintrc.js');

function main() {
  const result = spawn.sync(eslintPath, ['--config', configPath, '--fix', ...args], {
    stdio: 'inherit',
  });

  process.exit(result.status);
}

main();
