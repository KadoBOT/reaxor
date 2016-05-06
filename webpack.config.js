require('babel-polyfill')

var path = require('path')
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var TARGET = process.env.npm_lifecycle_event
var host = (process.env.HOST || 'localhost')
var port = process.env.PORT || 3000

if (TARGET === 'start' || !TARGET) {
  module.exports = {
    devtool: 'eval',
    entry: [
        'react-hot-loader/patch',
        'babel-polyfill',
        'webpack-dev-server/client?http://' + host + ':' + port,
        'webpack/hot/only-dev-server',
        './src/index',
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: 'http://' + host + ':' + port + '/dist/',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development'),
        },
      }),
    ],
    resolve: {
      alias: {
        'react': path.join(__dirname, 'node_modules', 'react'),
      },
      extensions: ['', '.js', '.jsx'],
    },
    resolveLoader: {
      'fallback': path.join(__dirname, 'node_modules'),
    },
    module: {
      loaders: [
        { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel', 'eslint-loader'], include: path.join(__dirname, 'src')},
        { test: /\.css?$/, loaders: ['style', 'raw'], include: __dirname },
      ],
    },
    progress: true,
  }
}

if (TARGET === 'build') {
  module.exports = {
    devtool: 'cheap-module-source-map',
    entry: './src/index',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      loaders: [
        { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel']},
        { test: /\.css?$/, loaders: ['style', 'raw'], include: __dirname },
      ],
    },
    progress: true,
    resolve: {
      modulesDirectories: [
        'src',
        'node_modules',
      ],
      extensions: ['', '.json', '.js', '.jsx'],
    },
    plugins: [
      new CleanWebpackPlugin(path.join(__dirname, 'dist')),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
        },
      }),
      new ExtractTextPlugin('[name].css'),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
    ],
  }
}
