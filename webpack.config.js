const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: {
    main: ['babel-polyfill', path.resolve(__dirname, 'src/index.jsx')]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // publicPath: './'
  },

  devServer: {
    historyApiFallback: true
  },

  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react'],
              plugins: ['transform-class-properties']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader',
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {},
      },
      {
        include: path.resolve(__dirname, 'src'),
        test: /\.json?$/,
        use: {
          loader: 'json-loader',
        },
      },
    ]
  },

  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial'
      // test: '/node_modules/',
      // enforce: true
    }
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
