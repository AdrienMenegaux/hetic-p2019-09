var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  debug: true,
  entry: {
    main: './front/js/app.js'
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss!sass-loader')
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader?name=assets/img-[hash:6].[ext]'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'BuddyTrain',
      template: 'front/templates/home.html'
    }),
    new ExtractTextPlugin('style.css')
  ],
  postcss: [autoprefixer({ browsers: ['> 1%'] })]
};
