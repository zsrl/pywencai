const path = require('path');

module.exports = {
    target: 'node',
    entry: './hexin-v.js',
    output: {
      filename: 'hexin-v.bundle.js',
      path: __dirname,
    },
    externals: {
      'canvas': 'commonjs canvas'
    },
    optimization: {
      minimize: false
    },
    node: {
      __dirname: false,
      __filename: false,
    }
  };
