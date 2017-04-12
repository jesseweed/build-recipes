import babel      from 'rollup-plugin-babel';
import { common } from './_common.js';
import cjs        from 'rollup-plugin-commonjs';

let react = {
  entry: './client/react/index.js',
  dest: '_dist/react.rollup.min.js',
  format: common.format,
  moduleName: common.moduleName,
  sourceMap: common.sourceMap,
  plugins: [
    cjs({
      exclude: 'node_modules/process-es6/**',
      include: [
        'node_modules/fbjs/**',
        'node_modules/object-assign/**',
        'node_modules/react/**',
        'node_modules/react-dom/**'
      ]
    }),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [ [ 'es2015', { modules: false } ], 'stage-0', 'react' ],
      plugins: [ 'external-helpers' ]
    })
  ]
};

// APPEND COMMON PLUGINS
common.plugins.forEach((value, key) => {
  react.plugins.push(value);
});

export default react;
