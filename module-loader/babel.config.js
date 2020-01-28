module.exports = {
  sourceMaps: true,
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: ['@babel/proposal-class-properties'],
};
