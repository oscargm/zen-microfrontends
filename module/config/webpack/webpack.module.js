const merge = require('webpack-merge');
const configCommon = require('./config.base');
const configModule = require('./config.module');

// [!] Order of the configs matter. Module config last to
// overwrite bundle name.
module.exports = env => merge(configCommon(env), configModule(env));
