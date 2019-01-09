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
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          }
        ]
      }
    ]
  },
  plugins: [new HtmlPlugin()]
};
