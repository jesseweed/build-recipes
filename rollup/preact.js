import babel      from 'rollup-plugin-babel';
import { common } from './_common.js';
import commonjs   from 'rollup-plugin-commonjs';

let preact = {
  entry: './client/preact/index.js',
  dest: '_dist/preact.rollup.min.js',
  format: common.format,
  moduleName: common.moduleName,
  sourceMap: common.sourceMap,
  plugins: [
    commonjs(),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [ [ 'es2015', { modules: false } ], 'stage-0', 'react' ],
      plugins: [ 'external-helpers', ['transform-react-jsx', { 'pragma':'h' }] ]
    })
  ]
};

// APPEND COMMON PLUGINS
common.plugins.forEach((value, key) => {
  // DON'T IMPORT BABEL OR ESLINT
  if (value.name !== 'babel' && value.name !== 'eslint'  && value.name !== 'uglify') {
    preact.plugins.push(value);
  }
});

export default preact;
