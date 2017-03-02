const webpack = require("webpack");

module.exports = {
  entry: {
    js: "./entry.js",
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "plugin.js",
    // library: ["pluginOne"],
    // publicPath: "/dist/",
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     "React": "react",
  //     "ReactDOM": "react-dom",
  //   }),
  // ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              // presets: [["es2015", {modules: false}]],
              // plugins: ["syntax-dynamic-import"],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: "style!css",
      },
    ],
  },
};
