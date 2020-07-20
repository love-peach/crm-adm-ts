const path = require('path');

const BASE_API = process.env.VUE_APP_BASE_API;

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/_variables.scss'),
        path.resolve(__dirname, 'src/styles/_mixins.scss'),
      ],
    },
  },
  devServer: {
    port: 8080,
    proxy: {
      '/mock/api': {
        // target: 'http://manyf.btr.jd.com/',
        target: 'http://localhost:5000/',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {
          '^/mock/api': '',
        },
      },
      '/api': {
        // target: 'http://manyf.btr.jd.com/',
        target: 'http://localhost:3000/',
        changeOrigin: true,
        logLevel: 'debug',
      },
    },
  },
};
