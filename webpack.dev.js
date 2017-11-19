const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

 const dev = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 9000,
    index: 'index.html',
    historyApiFallback: true
  }
});

module.exports = dev;
