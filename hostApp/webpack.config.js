'use strict'

const path = require('path')

module.exports = {
  mode: 'development',

  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
  },

  entry: {
    hostApp: './src/index.js',
  },
  output: {
    path: path.join(__dirname, './public'),
    filename: 'hostApp.js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ],
            },
          }
        ]
      },
    ],
  },
}
