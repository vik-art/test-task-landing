const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.libs_style = tasks.libs_style;
exports.fonts = tasks.fonts;
exports.style = tasks.style;
exports.html = tasks.html;
exports.php = tasks.php;
exports.rastr = tasks.rastr;
exports.webp = tasks.webp;
exports.bs_html = tasks.bs_html;
exports.bs_php = tasks.bs_php;
exports.watch = tasks.watch;
exports.deploy = tasks.deploy;

exports.default = gulp.parallel(
  exports.libs_style,
  exports.fonts,
  exports.style,
  exports.rastr,
  exports.webp,
  exports.html,
  exports.bs_html,
  exports.watch
)
exports.dev_php = gulp.parallel(
  exports.libs_style,
  exports.fonts,
  exports.style,
  exports.rastr,
  exports.webp,
  exports.php,
  exports.bs_php,
  exports.watch
)