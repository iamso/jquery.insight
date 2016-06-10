module.exports = {
  options: {
    separator: '\n\n',
    stripBanners: {
      block: false,
      line: false
    },
    banner: '<%= banner %>',
  },
  dist: {
    src: ['src/jquery.insight.js'],
    dest: 'dist/jquery.insight.js'
  }
};
