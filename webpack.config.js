const path = require('path');
require('dotenv').config()

module.exports = {
  devtool: 'eval-cheap-source-map',
  entry: './public/src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js',
  },
  mode: `${process.env.WEBPACK}`,
  module: {
    rules: [
      {
        test: /\.?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif|ttf)$/,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
    ]
  },
  //
  // target: 'node', // use require() & use NodeJs CommonJS style
  // externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  // externalsPresets: {
  //     node: true // in order to ignore built-in modules like path, fs, etc.
  // },
};