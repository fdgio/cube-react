const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '../example/index.tsx'),
  output: {
    filename: 'cube-react.doc.js',
    path: path.resolve(__dirname, '../example/dist'),
    publicPath: '/'
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
      test: /\.scss$/,
      loader: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(styl|css)$/,
      loader: ['style-loader', 'css-loader', 'stylus-loader']
    }, {
      test: /\.(png|jpg|gif)$/,
      use: ['file-loader']
    }, {
      test: /\.(woff2?|eot|ttf|otf)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 81920,
          name: "[name]-[hash].[ext]"
        }
      }]
    }]
  },
  resolve: {
    alias: {
      'cube-react': process.cwd()
    },
    extensions: ['.ts', '.js', '.jsx', '.tsx', '.styl', '.scss', '.css']
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'cube-react.doc.css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../example/index.html')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '../example'),
    compress: true,
    port: 11000,
    hot: true,
    historyApiFallback: true
  }
};
