module.exports = {
  publicPath: '/csgj/',
  productionSourceMap: false, // 屏蔽sourceMap
  // 反向代理的配置
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://192.168.71.33:9012', //目标地址
        ws: true, // 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
      },
      '/file': {
        target: 'http://192.168.71.33:50000', //目标地址
        ws: true, // 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
      },
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('autoprefixer')({ browsers: ['Android >= 4.0', 'iOS >= 7'] }),
          require('postcss-pxtorem')({
            rootValue: 37.5,
            propList: ['*'],
            selectorBlackList: ['van-circle__layer'],
          }),
        ],
      },
    },
  },
};
