import { common } from './_common.js';
import commonjs   from 'rollup-plugin-commonjs';

let vanilla = {
  entry: './client/vanilla/index.js',
  dest: '_dist/vanilla.rollup.min.js',
  format: common.format,
  moduleName: common.moduleName,
  sourceMap: common.sourceMap,
  plugins: [
    commonjs()
  ]
};

// APPEND COMMON PLUGINS
common.plugins.forEach((value, key) => {
  vanilla.plugins.push(value);
});

// module.exports = vanilla;
export default vanilla;
