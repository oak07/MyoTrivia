var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');

gulp.task('bundleClient', ['move'], function() {
    var b = browserify();
    
    // USING THE REACT TRANSFORM
    b.transform(reactify);
    
    // Grab the file to build the dependency graph from
    b.add('./bin/client/main.js');
    
    b.bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./bin/client/static/js'));
});

gulp.task('move', ['move-js', 'move-component', 'move-statics', 'css']);

gulp.task('move-js', function() {
    var jsfiles = gulp.src('src/**/*.js');

    return jsfiles.pipe(gulp.dest('./bin'));
});


gulp.task('move-component', function(cb) {
    var jsx = gulp.src('src/client/component/*.jsx')
        .pipe(gulp.dest('./bin/client/component'));

    jsx.on('end', function() {
        cb();
    });
});

gulp.task('move-statics', function() {
    var vendors = gulp.src([
        'src/client/static/**/*',
        '!src/client/static/css/*.css',
    ]);

    return vendors.pipe(gulp.dest('./bin/client/static'));
});

gulp.task('css', function() {
    return gulp.src('src/client/static/**/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./bin/client/static/css'));
})

gulp.task('watch-css', function() {
    gulp.watch('src/client/static/**/*.css', ['css']);
});

gulp.task('watch-jsx', function() {
    gulp.watch('src/client/component/*.jsx', ['default']);
});

gulp.task('default', ['bundleClient', 'watch-css', 'watch-jsx']);
