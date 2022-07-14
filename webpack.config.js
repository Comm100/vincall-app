// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const { merge } = require("webpack-merge");
const base = require("./webpack.base.config");
const proxyRules = require("./proxyRules");

// @ts-ignore
const config = merge(base, {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public")
    },
    open: true,
    host: "localhost",
    port: 8012,
    hot: false,
    proxy: proxyRules,
    liveReload: false
  }
});

module.exports = () => {
  return config;
};
