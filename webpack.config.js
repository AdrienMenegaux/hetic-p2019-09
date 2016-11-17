var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: './front/js/app.js',
  output: {
      path: __dirname + '/public',
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
      	test: /\.scss$/,
      	loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss!sass-loader")
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader?name=assets/img-[hash:6].[ext]'
      }
    ]
	},
  plugins: [
      new ExtractTextPlugin("style.css")
  ],
  postcss: [ autoprefixer({ browsers: ['last 3 versions'] }) ]
}