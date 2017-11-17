const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ],
    stats: {
      colors: true
    },
    devtool: 'source-map'
  }
};