const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js'
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    devMiddleware: {
      publicPath: '/assets/'
    }
  },
 module: {
    rules: [{
      // any javascript files
      test: /\.js$/,
      // except in node_modules, only process your code
      exclude: /node_modules/,
      // specify loader
      use: {
        loader: 'babel-loader',
        options: {
          // specify babel preset
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
};