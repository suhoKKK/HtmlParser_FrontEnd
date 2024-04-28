const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: 'source-map'
  }
})

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9090', // Spring Boot 서버의 포트
        changeOrigin: true
      },
    },
  },
};