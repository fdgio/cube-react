const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '../docs/index.tsx'),
  output: {
    filename: 'cube-react.doc.js',
    path: path.resolve(__dirname, '../docs/dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        exclude: '/node_modules/',
        loader: ['babel-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: [path.resolve(__dirname, '../node_modules')],
        loader: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        loader: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|ttf)$/,
        use: ['file-loader']
      },
      {
        test: /\.md$/,
        use: path.resolve(__dirname, './docs')
        // use: ['html-loader', 'markdown-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.jsx', '.tsx', '.styl', '.scss', '.css', 'md'],
    alias: {
      "cube-react": path.join(__dirname, '../src/index.ts')
    }
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: 'cube-react.doc.css'
    // }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../docs/index.html')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '../docs'),
    compress: true,
    port: 10000,
    hot: true,
    open: true,
    historyApiFallback: true
  }
};
