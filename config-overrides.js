const webpack = require('webpack');
const path = require('path');

module.exports = function override(config, env) {
  // Ensure fallback for path is added correctly
  config.resolve.fallback = {
    ...config.resolve.fallback,
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    zlib: require.resolve('browserify-zlib'),
    url: require.resolve('url/'),
    buffer: require.resolve('buffer/'),
    path: require.resolve('path-browserify') // Add path fallback here
  };

  // Provide polyfill for Buffer
  config.plugins.push(
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer']
    })
  );

  return config;
};