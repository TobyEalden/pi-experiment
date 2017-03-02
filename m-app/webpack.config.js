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
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["es2015", {modules: false}]],
              plugins: ["syntax-dynamic-import"],
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
