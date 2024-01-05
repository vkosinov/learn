const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',

  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    static: './dist',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      favicon: './src/public/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      template: './src/public/login.html',
      filename: 'login.html',
      favicon: './src/public/favicon.ico',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
