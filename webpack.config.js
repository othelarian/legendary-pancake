const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

const dist = path.resolve(__dirname, "dist");

module.exports = {
  //mode: "production",
  mode: "development",
  experiments: { asyncWebAssembly: true },
  entry: { index: "./index.js" },
  output: {
    path: dist,
    filename: "[name].js"
  },
  devServer: { static: {directory: dist} },
  module: {
    rules: [{
      test: /\.sass$/i,
      use: ["style-loader", "css-loader", "sass-loader"]
    }]
  },
  plugins: [
    new CopyPlugin([
      //path.resolve(__dirname, "static")
      path.resolve(__dirname, "index.html")
    ]),

    new WasmPackPlugin({
      crateDirectory: __dirname,
    }),
  ]
};
