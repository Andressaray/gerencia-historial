module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@interfaces/*': './src/interfaces/*',
          '@base/*': './*',
          '@controllers/*': './src/controllers/*'
        }
      }
    ]
  ]
};