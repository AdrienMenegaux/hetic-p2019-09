module.exports = {
  entry: './front/js/app.js',
  output: {
    path: './public',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './public',
  },
};
