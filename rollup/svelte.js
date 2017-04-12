import { common } from './_common.js';
import commonjs   from 'rollup-plugin-commonjs';
import svelte from 'rollup-plugin-svelte';

let rollup = {
  entry: './client/svelte/index.js',
  dest: '_dist/svelte.rollup.js',
  format: common.format,
  moduleName: common.moduleName,
  sourceMap: common.sourceMap,
  plugins: [
    commonjs(),
    svelte({
      extensions: ['.html'],
      include: 'client/svelte/**/*.html'
    })
  ]
};

// APPEND COMMON PLUGINS
common.plugins.forEach((value, key) => {
  rollup.plugins.push(value);
});

export default rollup;
