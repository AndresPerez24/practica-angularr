var gulp 		= require('gulp'),
	uglify 		= require('gulp-uglify'),
	plumber 	= require('gulp-plumber'),
	gls			= require('gulp-live-server');


var options = {
	serve : {
		dir: 'application',
		port: 3000,
		files : ['*.html', 'styles.css', 'script.js']
	}
};



gulp.task('scripts', function(){
	gulp.src('*.js')
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest('minjs'))
});

gulp.task('styles', function(){

});


gulp.task('watch', function(){
	gulp.watch('*.js', ['scripts']);
});

gulp.task('serve', function() {
  var server = gls.static(options.serve.dir, options.serve.port);
  server.start(); 
  gulp.watch(options.serve.files, function (file) {
    server.notify.apply(server, [file]);
  });
});

gulp.task('default', ['scripts', 'styles', 'watch', 'serve']);