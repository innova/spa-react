const path = require('path');
//const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname + '/build',
      publicPath: '/',
      filename: 'build.[contenthash].js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }     
      ]
    },
    plugins: [
        //new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: 'Production',
          template: path.resolve('src/index.html'),
        }),

      ]
  };