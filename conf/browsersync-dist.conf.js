const conf = require('./gulp.conf');

module.exports = function () {
  return {
    server: {
      baseDir: [
        conf.paths.dist
      ]
    },
    https: {
      key: conf.paths.conf + '/server.key',
      cert: conf.paths.conf + '/server.crt',
    },
    open: false
  };
};
