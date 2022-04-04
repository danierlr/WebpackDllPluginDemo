'use strict'

const path = require('path')
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  mode: 'development',

  devtool: 'inline-source-map',

  entry: "./src/index",

  output: {
    path: path.join(__dirname, './public'),
    publicPath: '/',
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "libApp",
      filename: "libApp.js",
      exposes: {
        "./moduleA": "./src/moduleA",
        "./moduleB": "./src/moduleB",
      }
    })
  ],

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
