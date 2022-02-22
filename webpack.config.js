const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const package = require("./package.json");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

process.env.NODE_ENV = process.env.NODE_ENV || "production";

const isDev = process.env.NODE_ENV === "development" ? true : false;

const config = {
  mode: process.env.NODE_ENV,
  target: "web",
  context: __dirname,
  entry: {
    main: ["./src/Root.tsx"],
  },
  output: {
    // hash 整体的文件计算所得
    filename: "[name]-[fullhash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    // chunkhash 具体模块文件所得
    chunkFilename: "[name]-[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              // 使用缓存
              cacheDirectory: true,
            },
          },
          {
            // ts-loader和他的区别：awesome-typescript-loader功能更全
            loader: "ts-loader",
          },
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // 模块化
              modules: true,
            },
          },
          // 把 CSS 解析成 JavaScript 可以操作的 AST
          // 调用插件来处理 AST 并得到结果
          "postcss-loader",
          "sass-loader",
        ],
        exclude: [path.resolve(__dirname, "node_modules")],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "[name]-[hash:8].[ext]",
              publicPath: "images/",
              outputPath: "images/",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".js", ".ts", ".tsx", ".json"],
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(package.version),
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template:
        process.env.NODE_ENV === "production"
          ? "./src/index.html"
          : "./src/index.dev.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
    },
    port: 9000,
    hot: true,
  },
};

if (isDev) {
  config.entry.main.unshift("webpack-dev-server/client?http://localhost:9000/");
  config.devtool = "source-map";
} else {
  // remove dist dir when build
  if (process.env.BUILD_ENV) {
    config.plugins.push(new CleanWebpackPlugin());
  }
}

if (process.env.analyze) {
  config.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: "server",
      analyzerHost: "127.0.0.1",
      analyzerPort: 8889,
      reportFilename: "report.html",
      defaultSizes: "parsed",
      openAnalyzer: true,
      generateStatsFile: false,
      statsFilename: "stats.json",
      statsOptions: null,
      logLevel: "info",
    })
  );
}

module.exports = config;
