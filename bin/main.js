#!/usr/bin/env node

const path = require('path');
const fs = require('fs-extra');

const script = process.argv[2];

const scriptPath = path.join(__dirname, '..', 'src', 'scripts', `${script}.js`);
if (!fs.existsSync(scriptPath)) {
  console.error(`The script ${script} does not exist.`);
  process.exit(1);
}

require(scriptPath);
