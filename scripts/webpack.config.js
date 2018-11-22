const path = require('path');

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
      exclude: [
        path.resolve(__dirname, '../node_modules'),
      ],
      loader: 'ts-loader',
    }]
  },
  resolve: {
    extensions: ['.ts', '.js', '.jsx', '.tsx']
  },
  devtool: 'source-map'
};