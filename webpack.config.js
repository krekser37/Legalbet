const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: { main: './components/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '',
    assetModuleFilename: 'assets/[hash][ext]'
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
      // {
      //   test: /\.(png|svg|jpg|gif|woff2?|eot|ttf|otf)$/,
      //   type: 'asset/resource',
      //   generator:{
      //     publicPath: 'assets/',
      //     filename: "static/[hash][ext]",
      //   }
      // },
      {
        test: /\.woff2?$/,
        type: 'asset/resource',
        generator:{
          filename: "fonts/[name][ext]",
        }
      },
      {
        test: /\.png|jpg$/,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
