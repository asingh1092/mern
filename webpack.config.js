// import webpack using require cuz Node
// isn't configured to run import for js files
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      HOST: "localhost",
      PORT: "8080",
    }),
  ],
};
