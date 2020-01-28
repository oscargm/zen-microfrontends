const helpers = require("../helpers");
const IgnoreNotFoundExportPlugin = require("./IgnoreNotFoundExportPlugin.js");

module.exports = (env, argv) => {
  const minimizeBundle = Boolean(argv["optimize-minimize"]);

  return {
    mode: "production",
    devtool: "none",
    context: helpers.srcPath,
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    entry: ["./index.ts"],
    output: {
      path: helpers.distPath,
      filename: helpers.getFileName(minimizeBundle),
      library: helpers.bundleName,
      libraryTarget: "umd",
      auxiliaryComment: {
        root: "Root Export",
        amd: "AMD Export",
        commonjs: "CommonJS Export",
        commonjs2: "CommonJS2 Export",
      },
    },
    optimization: {
      minimize: minimizeBundle,
    },
    module: {
      rules: [
        // Generic rule for source code.
        {
          test: /\.(jsx?|tsx?)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
    plugins: [new IgnoreNotFoundExportPlugin()],
  };
};
