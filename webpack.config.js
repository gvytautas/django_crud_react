const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./register/frontend/src/index.js",
  output: {
    path: path.resolve(__dirname, "./register/frontend/static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
};
