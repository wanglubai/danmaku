const path = require('path');

module.exports = {
  entry: __dirname + '/src/module/VideoEntry.js',
  output: {
    path: path.resolve(__dirname, './output'),
    filename: 'VideoEntry.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}