const path = require("path");

const rootPath = path.resolve(__dirname, "..");
const resolveFromRootPath = (...args) => path.join(rootPath, ...args);

const bundleName = process.env.npm_package_name;
const versionName = JSON.stringify(process.env.npm_package_version).replace(/"/g, "");
const getFileName = min => `${bundleName}-${versionName}${min ? ".min" : ""}.js`;

exports.srcPath = resolveFromRootPath("src");
exports.distPath = resolveFromRootPath("build", "dist");
exports.bundleName = bundleName;
exports.getFileName = getFileName;
