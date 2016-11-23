const conf = require('./gulp.conf');

module.exports = function () {
  return {
    server: {
      baseDir: [
        conf.paths.dist
      ]
    },
    https: {
      key: conf.paths.conf + '/ssl-cert/server.key',
      cert: conf.paths.conf + '/ssl-cert/server.crt',
    },
    open: false
  };
};
