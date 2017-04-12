import commonjsPlugin     from 'rollup-plugin-commonjs';
import browserifyPlugin   from 'rollup-plugin-browserify-transform';
import nodeResolvePlugin  from 'rollup-plugin-node-resolve';
import markoify           from 'markoify';
import { common }         from './_common.js';

let marko = {
  entry:      './client/marko/index.js',
  dest:       '_dist/marko.rollup.min.js',
  format:     common.format,
  moduleName: common.moduleName,
  plugins: [
    browserifyPlugin(markoify),
    nodeResolvePlugin({
      jsnext:         true,  // Default: false
      main:           true,  // Default: true
      browser:        true,  // Default: false
      preferBuiltins: false,
      extensions:     [ '.js', '.marko' ]
    }),
    commonjsPlugin({
      include:    ['node_modules/**', '**/*.marko', 'client/marko/**/*.js'],
      extensions: ['.js', '.marko']
    })
  ]
};

common.plugins.forEach((value, key) => {
  // DON'T IMPORT BABEL OR ESLINT
  if (value.name !== 'babel' && value.name !== 'eslint') {
    marko.plugins.push(value);
  }
});

export default marko;
