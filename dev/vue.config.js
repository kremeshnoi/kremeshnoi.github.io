const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'kremeshnoi',
  },
  css: {
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
