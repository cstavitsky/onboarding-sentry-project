const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");

const path = require("path");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  devtool: "source-map",
  mode: "production",
  plugins: [
    sentryWebpackPlugin({
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: "cstavitsky",
      project: "chris-frontend-javascript",
    }),
  ],
};
