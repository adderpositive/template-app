const path = require('path');

const config = {
  entry: './src/app.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'public')
  },
  // using './Main' instead of './Main.jsx'
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['src', 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 9000,
    index: 'index.html'
  }
};

module.exports = config;