const path = require('path'),
      wp   = require('./_common');

wp.entry = path.resolve(__dirname, '../client/marko/index.js');

wp.output = {
  path: path.resolve(__dirname, '../_dist'),
  filename: 'marko.wp.min.js'
};

wp.module.rules.push({
  test: /\.marko$/,
  exclude: /node_modules/,
  loader: 'marko-loader'
});

module.exports = wp;
