'use strict'

const path = require('path')
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
    new ModuleFederationPlugin({
      name: "hostApp",
      remotes: {
        libApp: `libApp@http://localhost:3000/libApp`,
      },
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
