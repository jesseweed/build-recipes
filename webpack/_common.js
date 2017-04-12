const path    = require('path'),
      webpack = require('webpack');

let config = {
  output: {
    path: path.resolve(__dirname, '../_dist'),
    filename: 'app.min.js',
    sourceMapFilename: '[file].map'
  },

  // MISC
  devtool: 'source-map',
  target: 'web',

  // RULES
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [ 'es2015' ]
          }
        }]
      }
    ]
  },

  // PLUGINS
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      },
      sourceMap: true
    })
  ]
};

module.exports = config;
