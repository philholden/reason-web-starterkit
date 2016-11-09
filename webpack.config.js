const path = require('path')

module.exports = {
  entry: './src/index.js',
  resolve: {
    alias: {
      reason: path.join(__dirname, '_build/client/src/')
    }
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/static'
  }
}
