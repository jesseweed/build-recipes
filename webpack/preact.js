const path = require('path'),
      wp   = require('./_common');

wp.entry = path.resolve(__dirname, '../client/preact/index.js');

wp.output = {
  path: path.resolve(__dirname, '../_dist'),
  filename: 'preact.wp.min.js'
};

wp.module.rules = [{
  test: /\.(js|jsx)$/,
  exclude: [/node_modules/],
  use: [{
    loader: 'babel-loader',
    options: {
      babelrc: false,
      presets: [ [ 'es2015', { modules: false } ], 'stage-0', 'react' ],
      plugins: [ ['transform-react-jsx', { 'pragma':'h' }] ]
    }
  }]
}];

module.exports = wp;
