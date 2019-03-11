const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '../src/index.ts'),
  output: {
    filename: 'cube-react.js',
    path: path.resolve(__dirname, '../lib')
  },
  module: {
    rules: [{
      test: /.tsx?$/,
      exclude: /node_modules/,
      loader: ['babel-loader'],
    }, {
      test: /\.s?css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    }, {
      test: /\.styl$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader']
    }]
  },
  resolve: {
    extensions: ['.ts', '.js', '.jsx', '.tsx']
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'cube-react.css'
    })
  ],
  externals: {
    react: 'react',
    "react-dom": 'react-dom'
  }
};
