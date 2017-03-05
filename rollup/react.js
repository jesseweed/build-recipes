import cjs     from 'rollup-plugin-commonjs';

let rollup = {
  entry: './client/react/index.js',
  plugins: [
    cjs({
      exclude: 'node_modules/process-es6/**',
      include: [
        'node_modules/fbjs/**',
        'node_modules/object-assign/**',
        'node_modules/react/**',
        'node_modules/react-dom/**'
      ]
    })
  ]
};

export { rollup };
