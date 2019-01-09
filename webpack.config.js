const path = require('path'),
      HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/public'),
  },
  devtool: 'hidden-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      }
    ]
  },
  plugins: [new HtmlPlugin()]
};
