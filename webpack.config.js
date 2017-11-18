const path = require('path');

const config = {
  entry: './src/app.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: 'babel-loader',
        exclude: /(node_modules)/
      }
    ]
  }
};

module.exports = config;