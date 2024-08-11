export const webpack = {
  configure: (webpackConfig) => {
    const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
      ({ constructor }) => constructor && constructor.name === "ModuleScopePlugin"
    );

    webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
    webpackConfig["resolve"] = {
      fallback: {
        path: false,
        crypto: false,
        util: false,
        os: false,
        fs: false,
        zlib: false,
        http: false,
        https: false,
        buffer: false,
      },
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    };
    return webpackConfig;
  },
};
export const devServer = whenDev(() => ({
  https: true,
}));