module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
};