const path = require('path'),
      wp   = require('./_common');

wp.entry = path.resolve(__dirname, '../client/vanilla/index.js');

wp.output = {
  path: path.resolve(__dirname, '../_dist'),
  filename: 'vanilla.wp.min.js'
};

module.exports = wp;
