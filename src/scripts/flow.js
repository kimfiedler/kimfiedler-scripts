const spawn = require('cross-spawn');
const { binPathFromPackage } = require('../paths');

const args = process.argv.slice(3);
const flowPath = binPathFromPackage('flow-bin', 'flow');

function main() {
  const result = spawn.sync(flowPath, [...args], { stdio: 'inherit' });

  process.exit(result.status);
}

main();
