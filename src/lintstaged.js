const { fromThis } = require('./paths');

const scriptsPath = fromThis('..', 'bin', 'main.js');

module.exports = {
  linters: {
    'src/**/*.{js,jsx,json,css,ts,tsx}': [`${scriptsPath} lint`, 'git add'],
  },
};
