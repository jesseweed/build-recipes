const path = require('path'),
      wp   = require('./_common');

wp.entry = path.resolve(__dirname, '../client/riot/index.js');

wp.output = {
  path: path.resolve(__dirname, '../_dist'),
  filename: 'riot.wp.min.js'
};

wp.module.rules.push({
  test: /\.html$/,
  exclude: /node_modules/,
  loader: 'riot-tag-loader',
  query: {
    type: 'es6', // transpile the riot tags using babel
    debug: true
  }
});

module.exports = wp;
