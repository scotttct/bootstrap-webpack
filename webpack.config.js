const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 
module.exports = {
  entry: './js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    //publicPath: 'dist/'   ← remove this line
  },
  mode: 'development',
  module: {
    rules: [
	// Keep all the rules you have, and add the one below:
      {
        test: /index.html$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'index.html'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};



