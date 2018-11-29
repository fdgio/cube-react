const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '../site/index.tsx'),
  output: {
    filename: 'cube-react.doc.js',
    path: path.resolve(__dirname, '../site/dist'),
    publicPath: 'dist'
  },
  module: {
    rules: [{
      test: /.tsx?$/,
      exclude: [
        path.resolve(__dirname, '../node_modules'),
      ],
      loader: ['babel-loader', 'awesome-typescript-loader'],
    }, {
      test: /\.jsx?$/,
      exclude: [
        path.resolve(__dirname, '../node_modules')
      ],
      loader: ['babel-loader']
    }, {
      test: /\.s?css$/,
      loader: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.styl$/,
      loader: ['style-loader', 'css-loader', 'stylus-loader']
    }, {
      test: /\.(png|jpg|gif|woff|svg|eot|ttf)$/,
      use: ['file-loader']
    }]
  },
  resolve: {
    extensions: ['.ts', '.js', '.jsx', '.tsx', '.styl', '.scss', '.css']
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'cube-react.doc.css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../site/index.html')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '../site'),
    compress: true,
    port: 10000,
    hot: true
  }
};
