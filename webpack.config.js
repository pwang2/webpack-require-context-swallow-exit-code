module.exports = {
  entry: ['./index.js'],
  output: {
    path: require('path').resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: []
  }
};
