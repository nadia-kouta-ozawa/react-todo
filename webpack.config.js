const path = require("path");
const webpack = require("webpack");
const devtool =
  process.argv[2] === "--mode=development" ? "cheap-module-source-map" : false;

module.exports = {
  entry: "./src/assets/js/index.js",
  output: {
    path: __dirname,
    filename: "./htdocs/assets/js/app.js",
  },
  devtool: devtool,
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
    ],
  },
  target: ["web", "es5"],
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
};
