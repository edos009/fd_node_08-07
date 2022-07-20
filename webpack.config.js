const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const pathToBuild = path.resolve(__dirname, "build");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[contenthash].js",
    path: pathToBuild,
    clean: true,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  devServer: {
    static: pathToBuild,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "./src/index.html",
    }),
  ],
};
