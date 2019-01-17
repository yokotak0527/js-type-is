const path = require('path')
const WebpackNotifierPlugin = require('webpack-notifier')

module.exports = (env, args) => {
  const { mode } = args
  // ===========================================================================
  // commin settings
  // ===========================================================================
  let config = {
    mode: mode,
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      library: 'jsTypeIs',
      libraryTarget: 'umd',
      globalObject: 'this'
    },
    plugins: [],
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          include: path.resolve(__dirname, 'src/**/*.js'),
          options: {
            babelrc: false,
            presets: [
              ['@babel/preset-env', {
                targets: '> 1%',
                useBuiltIns: 'usage'
              }]
            ]
          }
        }
      ]
    }
  }
  // ===========================================================================
  // development mode settings
  // ===========================================================================
  if (mode === 'development') {
    const webpackNotifierPlugin = new WebpackNotifierPlugin()

    config.watch = true
    config.plugins.push(webpackNotifierPlugin)
    config.output.filename = 'index.js'
  }
  // =========================================================================
  // production mode settings
  // =========================================================================
  if (mode === 'production') {
    config.output.filename = 'index.min.js'
  }

  return config
}
