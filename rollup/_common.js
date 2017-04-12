// PLUGINS
import babel      from 'rollup-plugin-babel';
import eslint     from 'rollup-plugin-eslint';
import globals    from 'rollup-plugin-node-globals';
import replace    from 'rollup-plugin-replace';
import resolve    from 'rollup-plugin-node-resolve';
import uglify     from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';

// CONFIG
let common, config,
    path = require('path');

try {
  config = require(path.resolve(__dirname, '../shared/_config.js'));
} catch (e) {
  config = require(path.resolve(__dirname, './shared/_config.js'));
}

common = {
  dest       : '_dist/app.min.js', // EXPORT FILE
  format     : 'iife', // EMPORT FORMAT
  moduleName : config.name,
  sourceMap  : true,
  plugins: [
    eslint({
      exclude: [
        'public/**',
        'client/**/*.pug',
        'client/**/*.scss',
        'client/**/*.styl',
        'client/**/*.html',
        'client/**/*.jsx'
      ]
    }),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [ [ 'es2015', { modules: false } ], 'stage-0', 'react' ],
      plugins: [ 'external-helpers' ]
    }),
    resolve({
      browser: true,
      jsnext: true,
      main: true,
      module: true
    }),
    globals(),
    replace({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
    uglify({
      'mangle-props': false,
      'keep-fnames': true
    }, minify)
  ]
};

export { common };
