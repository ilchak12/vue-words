const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/vue-words/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/scss/style.scss";'
      }
    }
  }
})
