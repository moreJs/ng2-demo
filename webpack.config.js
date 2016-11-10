'use strict';
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');


let extractCSS = new ExtractTextPlugin('[name].css');
let extractLESS = new ExtractTextPlugin('[name].less');


module.exports = {
  // 字符串、数组和对象
  entry: {
    index: './src/bootstrap',
  },
  output: {
    path: path.join('./build'),
//    publicPath: "http://alisports.alibaba-inc.com:9090/build/",
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      include: [
        path.join(__dirname, './src')
      ],
      exclude: /node_modules/,
      loader: 'ts',
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css')
    }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(['css', 'less'])
    }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
    }]
  },
  resolve: {
    root: [
      path.join(__dirname, './src/biz'),
      path.join(__dirname, './src/common'),
      path.join(__dirname, './src/entry')
    ],
    extensions: ['', '.ts', '.js']
  },
  plugins: [
      extractCSS,
      extractLESS,
      commonsPlugin
  ]
};
