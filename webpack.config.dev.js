const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './public/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, './index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, './public/'),
    port: 8011,
    hot: true
  }
}

module.exports = config