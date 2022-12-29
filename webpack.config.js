const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ],
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js'],
  }
}
