module.exports = {
  entry: "./entry.js",
  output: {
    path: `${__dirname}/public`,
    filename: "bundle.js",
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
