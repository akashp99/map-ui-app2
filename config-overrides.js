// config-overrides.js
const { addWebpackModuleRule } = require('customize-cra');

module.exports = function override(config, env) {
  // Add a custom loader for CSS files
  config = addWebpackModuleRule({
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  })(config);

  return config;
};
