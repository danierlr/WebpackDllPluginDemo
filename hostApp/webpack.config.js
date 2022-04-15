'use strict'

const path = require('path')
const webpack = require('webpack')
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  mode: 'development',

  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    hot: false,
    liveReload: false,
  },

  entry: {
    hostApp: './src/index.js',
  },
  output: {
    path: path.join(__dirname, './public'),
    filename: 'hostApp.js',
    publicPath: '/',
  },

  plugins: [
    new webpack.DllReferencePlugin({
      // context: path.join(__dirname, "public"),
      manifest: require("./public/libApp.manifest.json"),
      name: 'libApp',
      scope: "libScope",
      extensions: [".js"],
    }),
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
