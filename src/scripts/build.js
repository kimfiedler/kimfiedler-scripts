const spawn = require('cross-spawn');
const rimraf = require('rimraf');
const flowCopySource = require('flow-copy-source');
const { isUsingFlow } = require('../utils');
const { fromApp, fromThis, binPathFromPackage } = require('../paths');

const args = process.argv.slice(3);
const config = fromThis('babelrc.js');
const inputDirectory = fromApp('src');
const outputDirectory = fromApp('lib');
const babelPath = binPathFromPackage('@babel/cli', 'babel');

async function main() {
  rimraf.sync(outputDirectory);

  if (isUsingFlow()) {
    await flowCopySource([inputDirectory], outputDirectory);
  }

  const result = spawn.sync(
    babelPath,
    [inputDirectory, '-d', outputDirectory, '--presets', config, ...args],
    { stdio: 'inherit' }
  );

  process.exit(result.status);
}

main();
