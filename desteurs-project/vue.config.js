const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:
    process.env.NODE_ENV === "production" ? "/desteur-s-portfolio/" : "/",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].inject = true;
      args[0].scriptLoading = "blocking";
      args[0].links = [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/alla;amin.css",
        },
      ];
      args[0].minify = {
        collapseWhitespace: false,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      };
      return args;
    });
  },
});
