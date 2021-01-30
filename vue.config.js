const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = 8888;

module.exports = {
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
     externals: {
      'AMap': 'AMap' // 高德地图配置
    }
  },
  devServer: {
    open: false,
    port: port
    // proxy: {
    //   '/api': {
    //     target: 'http://dev.heidutech.com:17988',
    //     changeOrigin: true,
    //     crossDomain: true,
    //     ws: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  }
};
