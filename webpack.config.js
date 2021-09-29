const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  devtool: "eval",
  devServer: {
    hot: true,
    port: 3000,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "./src/img/", to: "./img" }],
    }),
    new HtmlWebpackPlugin({
      template: "/src/index.html",
      inject: true,
      author: process.env.AUTHOR,
      title: "To-do Tracker",
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "assets/[name]-[hash:3].[ext][query]",
  },
};
