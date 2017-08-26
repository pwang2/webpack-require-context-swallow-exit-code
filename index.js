import util from './util.js';

export default {
  a: 1,
  b: 2
};

const srcContext = require.context('./src', true);
srcContext.keys().forEach(srcContext);
