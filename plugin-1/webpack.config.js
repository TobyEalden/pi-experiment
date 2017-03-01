module.exports = {
  entry: {
    js: "./entry.js",
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "plugin.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: "style!css",
      },
    ],
  },
};
