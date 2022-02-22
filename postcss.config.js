module.exports = {
  plugins: [
    //
    require("postcss-import"),
    // 自动添加前缀
    require("autoprefixer"),
    // 用来优化和压缩css
    require("cssnano"),
  ],
};
