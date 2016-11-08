const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.config')

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  stats: {
    assets: true,
    colors: true,
    chunks: false,
    chunkModules: false
  },
  publicPath: config.output.publicPath
}))


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'))
})

app.listen(3000, err => {
  if (err) {
    throw err
  } else {
    console.log('Listening at http://localhost:3000')
  }
})
