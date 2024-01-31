const path = require('path')

module.exports = {
  watch: true,
  entry: path.resolve(__dirname, 'app/src/js'),

  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, 'app/public/js'),
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  resolve: {
    alias: {
      utils: path.resolve(__dirname, '../shared/app/utils'),
    },
  },
}
