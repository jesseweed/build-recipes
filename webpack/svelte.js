const path = require('path'),
      wp   = require('./_common');

wp.entry = path.resolve(__dirname, '../client/svelte/index.js');

wp.output = {
  path: path.resolve(__dirname, '../_dist'),
  filename: 'svelte.wp.min.js'
};

wp.module.rules.push({
  test: /\.html$/,
  exclude: /node_modules/,
  use: 'svelte-loader'
});

module.exports = wp;
