const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = (dir) => path.join(__dirname, '..', dir);

module.exports = (env, options) => {
  const config = {
    entry: {
      app: ['babel-polyfill', './src/index.js'],
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@': resolve('src'),
      },
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          enforce: 'pre',
          options: {
            emitWarning: true,
            failOnError: true,
            failOnWarning: true,
          },
        },
      ],
    },
  };

  if (options.mode === 'development') {
    config.plugins = [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: 'Development',
        showErrors: true,
      }),
    ];

    config.devtool = 'inline-source-map';

    config.devServer = {
      hot: true,
      host: '0.0.0.0',
      contentBase: path.resolve(__dirname, 'dist'),
      stats: {
        color: true,
      },
    };
  } else {
    config.plugins = [new CleanWebpackPlugin(['dist'])];
  }

  return config;
};
