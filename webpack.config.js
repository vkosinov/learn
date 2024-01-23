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
      template: './src/public/register.html',
      filename: 'register.html',
      favicon: './src/public/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      template: './src/public/users.html',
      filename: 'users.html',
      favicon: './src/public/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      template: './src/public/reset.html',
      filename: 'reset.html',
      favicon: './src/public/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      template: './src/public/recovery.html',
      filename: 'recovery.html',
      favicon: './src/public/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      template: './src/public/comments.html',
      filename: 'comments.html',
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
