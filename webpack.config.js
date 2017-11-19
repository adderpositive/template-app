const path = require('path');

const config = {
  entry: './src/app.jsx',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
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
    index: 'index.html',
    historyApiFallback: true
  }
};

module.exports = config;