const webpack = require('webpack');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      }),
      new WebpackManifestPlugin()
    ]
  },
  pwa: {
    name: 'kremeshnoi'
  },
  css: {
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
