const webpack = require('webpack');

module.exports = {
  transpileDependencies: [],

  devServer: {
    port: 8080,
    https: false,
    client: {
      webSocketURL: {
        protocol: 'ws',
        hostname: 'localhost',
        port: 8080,
      },
    },
  },

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        // Define Vue feature flags here
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
      }),
    ],
  },
};
