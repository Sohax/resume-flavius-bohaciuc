'use strict';

var path = require('path');

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var dest = path.join(taskTarget);

  // Copy
  gulp.task('copy', ['update'], function() {
    return gulp.src([
        path.join(dirs.source, '**/*'),
        '!' + path.join(dirs.source, '{**/\_*,**/\_*/**}'),
        '!' + path.join(dirs.source, '**/*.jade')
      ])
      .pipe(plugins.changed(dest))
      .pipe(gulp.dest(dest));
  });

  // Copy
  gulp.task('update', function() {
    console.log('***!');
    console.log(dirs.source + '/_update');
    return gulp.src([
        path.join(dirs.source, '_update/index.html')
      ])
      .pipe(gulp.dest(dest));
  });
};
