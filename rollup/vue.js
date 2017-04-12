import { common } from './_common.js';
import commonjs   from 'rollup-plugin-commonjs';

let vue = {
  entry: './client/vue/index.js',
  dest: '_dist/vue.rollup.min.js',
  format: common.format,
  moduleName: common.moduleName,
  sourceMap: common.sourceMap,
  plugins: [
    commonjs()
  ]
};

// APPEND COMMON PLUGINS
common.plugins.forEach((value, key) => {
  vue.plugins.push(value);
});

// module.exports = vue;
export default vue;
