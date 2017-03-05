// LIBRARY
import { rollup } from './rollup/vue.js'; // VUE
// import { rollup } from './rollup/react.js'; // REACT
// import { rollup } from './rollup/riot.js'; // RIOT

// CONFIG
import config     from './shared/config.js';

// PLUGINS
import babel      from 'rollup-plugin-babel';
import eslint     from 'rollup-plugin-eslint';
import globals    from 'rollup-plugin-node-globals';
import replace    from 'rollup-plugin-replace';
import resolve    from 'rollup-plugin-node-resolve';

// COMMON SETTINGS
rollup.dest       = '_dist/app.min.js'; // EXPORT FILE
rollup.format     = 'iife'; // EMPORT FORMAT
rollup.moduleName = config.shared.name;
rollup.sourceMap  = true;

// COMMON PLUGINS

rollup.plugins.push(eslint({
  exclude: [
    'public/**',
    'client/**/*.pug',
    'client/**/*.scss',
    'client/**/*.styl'
  ]
}));

rollup.plugins.push(babel({
  babelrc: false,
  exclude: 'node_modules/**',
  presets: [ [ 'es2015', { modules: false } ], 'stage-0', 'react' ],
  plugins: [ 'external-helpers' ]
}));

rollup.plugins.push(resolve({
  browser: true,
  jsnext: true,
  main: true,
  module: true
}));

rollup.plugins.push(globals());

rollup.plugins.push(replace({ 'process.env.NODE_ENV': JSON.stringify('development') }));

export default rollup;
