import commonjs       from 'rollup-plugin-commonjs';
import postcss        from 'postcss';
import postcssCssnext from 'postcss-cssnext';
import riot           from 'rollup-plugin-riot';

let rollup = {
  entry: './client/riot/index.js',
  plugins: [
    riot({
      ext: 'html',
      style: 'cssnext',
      parsers: {
        css: { function(tagName, css) {
          css = css.replace(/:scope/g, ':root');
          css = postcss([postcssCssnext]).process(css).css;
          css = css.replace(/:root/g, ':scope');
          return css;
        }}
      }
    }),
    commonjs()
  ]
};

export {rollup};
