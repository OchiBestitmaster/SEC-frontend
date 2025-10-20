const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 7086,
    proxy: {
      // 代理 OnlyOffice API 請求
      '/web-apps': {
        target: 'http://localhost:8043',
        changeOrigin: true,
        secure: false
      },
      // 代理文件下載請求
      '/documents': {
        target: 'http://localhost:4321',
        changeOrigin: true,
        secure: false
      }
    },
    // 允許跨域請求
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  }
})
