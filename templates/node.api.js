const Visualizer = require('webpack-visualizer-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

export default pluginOptions => ({
  webpack: (config, { stage, defaultLoaders }) => {
    if (stage === 'dev') {
      // Development environment
      // Bundle Analysis
      process.env.BUNDLE_ANALYZE &&
        config.plugins.push(new Visualizer({ filename: './public/bundle-size-analyzer.html' }));
    } else {
      // Duplicate package alert
      config.plugins.push(
        new DuplicatePackageCheckerPlugin({
          verbose: true,
          emitError: true
        })
      );
    }
    return config;
  }
});
