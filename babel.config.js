module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '~src': './src',
          '~assets': './src/assets',
          '~components': './src/components',
          '~hooks': './src/hooks',
          '~navigation': './src/navigation',
          '~screens': './src/screens',
          '~theme': './src/theme',
          '~utils': './src/utils',
        },
      },
    ],
  ],
  presets: ['module:@react-native/babel-preset'],
};
