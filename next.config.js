const { resolve } = require('path');

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  webpack: (config, opts) => {
    config.resolve.alias = {
      ...config?.resolve?.alias,
      '@': resolve(__dirname, '.'),
    };
    return config;
  },
};
