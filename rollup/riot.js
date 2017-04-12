import { common }     from './_common.js';
import commonjs       from 'rollup-plugin-commonjs';
import riot           from 'rollup-plugin-riot';

let config = {
  entry: './client/riot/index.js',
  dest: '_dist/riot.rollup.min.js',
  format: common.format,
  moduleName: common.moduleName,
  sourceMap: common.sourceMap,
  plugins: [
    riot({
      ext: 'html'
    }),
    commonjs()
  ]
};

// APPEND COMMON PLUGINS
common.plugins.forEach((value, key) => {
  config.plugins.push(value);
});

export default config;
