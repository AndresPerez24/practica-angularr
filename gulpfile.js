var gulp 		= require('gulp'),
	plumber 	= require('gulp-plumber'),
	gls			= require('gulp-live-server');


var options = {
	serve : {
		dir: 'application',
		port: 8000,
		files : ['application/index.html', 'application/assets/stylesheet/styles.css', 'application/assets/javascripts/script.js']
	}
};


gulp.task('watch', function(){
	gulp.watch('application/assets/javascripts/*.js', ['scripts']);
});

gulp.task('serve', function() {
  var server = gls.static(options.serve.dir, options.serve.port);
  server.start(); 
  gulp.watch(options.serve.files, function (file) {
    server.notify.apply(server, [file]);
  });
});

gulp.task('default', ['watch', 'serve']);