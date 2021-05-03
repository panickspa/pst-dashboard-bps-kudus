// var MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  configureWebpack: {
    optimization: {
      minimize: true,
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `npm.${packageName.replace('@', '')}`;
            },
          },
        },
      },
    },
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: true
    }
  },
  chainWebpack: config => {
      config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Your App Name'
        return args
      })
    },
  runtimeCompiler: true,
  // plugins: [new MiniCssExtractPlugin()],
  // module: {
  //   rules: [
  //     // ... other rules omitted
  //     {
  //       test: /\.css$/,
  //       use: [
  //         process.env.NODE_ENV !== 'production'
  //           ? 'vue-style-loader'
  //           : MiniCssExtractPlugin.loader,
  //         'css-loader'
  //       ]
  //     }
  //   ]
  // },
  // plugins: [
  //   // ... Vue Loader plugin omitted
  //   new MiniCssExtractPlugin({
  //     filename: 'style.css'
  //   })
  // ],
}