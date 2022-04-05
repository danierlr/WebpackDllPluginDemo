'use strict'

const path = require('path')
const webpack = require('webpack')
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  mode: 'development',

  devtool: 'inline-source-map',

  // entry: "./src/index",

  entry: {
    libApp: [
      'index',
    ]
  },

  output: {
    filename: "[name].dll.js",
    chunkFilename: "[id].chunk.dll.js",
		libraryTarget: "commonjs2",
    path: path.join(__dirname, './public'),
    publicPath: '/',
  },

  plugins: [
		new webpack.DllPlugin({
      name: 'libApp',
			path: path.resolve(
				__dirname,
				"./public/libApp.manifest.json"
			),
			entryOnly: false,
      format: true,
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

  resolve: {
    extensions: [
      '.js',
    ],
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules'),
    ],
  },

  optimization: {
		usedExports: true,
		sideEffects: true
	},
}
