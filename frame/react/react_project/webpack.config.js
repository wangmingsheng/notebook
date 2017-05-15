var Webpack = require('webpack');
var CommonsPlugin = new Webpack.optimize.CommonsChunkPlugin('/assets/scripts/taro.common.js');

module.exports = {
  entry: {
    main: './entry/main.js'
  },
  output: {
    path: __dirname,
    filename: '/assets/scripts/taro.[name].js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['jsx']
      }
    ]
  },
  plugins: [CommonsPlugin]
}