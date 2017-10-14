const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './app'),
    // publicPath: "/",
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.js$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|woff2?|ttf|eot)$/,
        use: 'file-loader?name=[name].[ext]&outputPath=./fonts/',
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'file-loader?name=[name].[ext]&outputPath=../img/',
      },
      {
        test: /\.html$/,
        loader: 'vue-template-loader'
      },
      { test: /\.(scss|css)$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
