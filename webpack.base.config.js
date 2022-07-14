const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const getPath = (p) => path.resolve(__dirname, p);

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const config = {
  entry: {
    integration: "./src/pages/integration/main.tsx",
    phone: "./src/pages/phone/main.tsx",
    callPanel: "./src/pages/callPanel/main.tsx"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `[name]_bundle.js`
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"]
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset"
      }

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "integration.html",
      template: "./src/pages/integration/index.html",
      chunks: ["integration"]
    }),
    new HtmlWebpackPlugin({
      filename: "phone.html",
      template: "./src/pages/phone/index.html",
      chunks: ["phone"]
    }),
    new HtmlWebpackPlugin({
      filename: "callPanel.html",
      template: "./src/pages/callPanel/index.html",
      chunks: ["callPanel"]
    })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      src: getPath("./src")
    }
  }
};

module.exports = config;
