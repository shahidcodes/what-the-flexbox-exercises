var gulp = require("gulp");
var autoPrefixer = require("gulp-autoprefixer");
var rename = require("gulp-rename");

gulp.task("prefix", function() {
  return gulp
    .src("./style.css")
    .pipe(autoPrefixer())
    .pipe(gulp.dest("build"));
});

gulp.task("watch", function() {
  gulp.watch("./style.css", gulp.series("prefix"));
});
