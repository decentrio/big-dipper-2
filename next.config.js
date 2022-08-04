const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  poweredByHeader: false,
  basePath: '/provenance',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});
