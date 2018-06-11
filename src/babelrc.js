const { isUsingFlow } = require('./utils');

module.exports = function() {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
      isUsingFlow() && '@babel/flow',
    ].filter(Boolean),
    plugins: ['macros'],
  };
};
