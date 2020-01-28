const helpers = require('../helpers');
const IgnoreNotFoundExportPlugin = require("./IgnoreNotFoundExportPlugin.js");

module.exports = (env = {}) => ({
  context: helpers.srcPath,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    mainFields: ['browser', 'module', 'main']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new IgnoreNotFoundExportPlugin()],
});
