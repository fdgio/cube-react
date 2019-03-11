const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [{
      test: /.tsx?$/,
      exclude: [
        path.resolve(__dirname, '../node_modules'),
      ],
      loader: ['babel-loader'],
    }, {
      test: /\.s?css/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.styl$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader']
    }]
  },
  resolve: {
    extensions: ['.ts', '.js', '.jsx', '.tsx']
  },
  devtool: 'source-map',
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
