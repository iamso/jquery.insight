module.exports = {
  options: {
    mangle: {
      except: ['u', 'µ']
    },
    compress: {
      //drop_console: true
    },
    preserveComments: false,
    sourceMap: true
  },
  dist: {
    options: {
      banner: '<%= banner %>'
    },
    src: ['dist/jquery.insight.js'],
    dest: 'dist/jquery.insight.min.js'
  }
};
