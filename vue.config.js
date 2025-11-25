const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 7086,
    proxy: {
      '/flowable': {
        target: 'http://localhost:5080/flowable-rest/service',
        changeOrigin: true,
        pathRewrite: {
          '^/flowable': ''
        }
      },
      '/postgrest': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/postgrest': ''
        }
      },
      '/flowablejava': {
        target: 'http://localhost:9090',
        changeOrigin: true,
        pathRewrite: {
          '^/flowablejava': ''
        }
      }
    }
  }
})
