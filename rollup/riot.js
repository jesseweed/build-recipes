import { common }     from './_common.js';
import commonjs       from 'rollup-plugin-commonjs';
import postcss        from 'postcss';
import postcssCssnext from 'postcss-cssnext';
import riot           from 'rollup-plugin-riot';

let config = {
  entry: './client/riot/index.js',
  dest: '_dist/riot.rollup.min.js',
  format: common.format,
  moduleName: common.moduleName,
  sourceMap: common.sourceMap,
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

// APPEND COMMON PLUGINS
common.plugins.forEach((value, key) => {
  config.plugins.push(value);
});

export default config;
