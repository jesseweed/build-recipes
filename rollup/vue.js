import commonjs from 'rollup-plugin-commonjs';

let rollup = {
  entry: './client/vue/index.js',
  plugins: [
    commonjs()
  ]
};

export { rollup };
