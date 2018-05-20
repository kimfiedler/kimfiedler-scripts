const args = process.argv.slice(3);

function main() {
  const configArgs = ['--config', JSON.stringify(require('../jest.config'))];

  require('jest').run([...configArgs, ...args]);
}

main();
