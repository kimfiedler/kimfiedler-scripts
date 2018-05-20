const spawn = require('cross-spawn');
const { binPathFromPackage, fromThis } = require('../paths');

const args = process.argv.slice(3);
const lintStagedPath = binPathFromPackage('lint-staged', 'lint-staged');

const configPath = fromThis('lintstaged.js');

function main() {
  const result = spawn.sync(lintStagedPath, ['--config', configPath, ...args], {
    stdio: 'inherit',
  });

  process.exit(result.status);
}

main();
