
/*========================================
 =            Requiring stuffs            =
 ========================================*/

var gulp              = require('gulp'),
    gutil = require('gulp-util'),
    concat            = require('gulp-concat'),
    connect           = require('gulp-connect'),
    path              = require('path-extra'),
    releaseTasks      = require('gulp-release-tasks'),
    os                = require('os'),
    fs                = require('fs'),
    seq               = require('run-sequence'),
    nodemon         = require('gulp-nodemon'),
    sftp = require('gulp-sftp'),
    _ = require('lodash'),
    gls = require('gulp-live-server');

/*=============================
 =            Globs            =
 =============================*/

var fakeServerSshConfig = {
    host: 'fakeapi.fdjf.net',
    port: 22,
    user: 'wechat',
    key : path.homedir()+'/.ssh/wechat.key'
};

var fakeapiRemoteRootPath = '/home/wechat/www/fakeapi';

/*================================================
 =            Report Errors to Console            =
 ================================================*/

gulp.on('error', function(e) {
    throw(e);
});
/*===================================================================
 =            nodemon  a new connect server            =
 ===================================================================*/
gulp.task('nodemon', function () {
    var server = gls(path.join(__dirname, 'bin/www') , {env: {NODE_ENV: 'development'}});
    server.start();

    gulp.watch(['api/**','app.js'], server.start.bind(server));

});
/*===================================================================
 =            Watch for source changes and rebuild/reload            =
 ===================================================================*/

gulp.task('watch', function () {
    //gulp.watch(['api/**','app.js'],['fakeroutes']);
});

/*====================================
 =            Docs                   =
 ====================================*/

gulp.task('fakedocs', function(done){
    var fakeDocs = require('gulp-fakedocs');
    var options = {
        html5Mode: false
    };

    return gulp.src(['api/*.js'])
        .pipe(fakeDocs.process(options))
        .pipe(gulp.dest('./fakedocs'));
});


//gulp.task('fakedocs', function(done){
//    var fakeDocs = require('gulp-fakedocs');
//    var options = {
//        html5Mode: false
//    };
//
//    return gulp.src(['api/*.js'])
//        .pipe(fakeDocs.process(options))
//        .pipe(gulp.dest('./fakedocs'))
//        .pipe(sftp(_.extend({remotePath:fakeapiRemoteRootPath+'/fakedocs'}, fakeServerSshConfig)));
//});

/*====================================
 =            fake server remote     =
 ====================================*/
//gulp.task('fakeserver', function (done) {
//    var sftp = require('gulp-sftp');
//    return gulp.src(['./**','!bower_components/**', '!node_modules/**', '!tools/**', '!docs/**', '!fakedocs/**' ,
//        '!certificate.pem', '!privatekey.pem','!certrequest.csr'])
//        .pipe(sftp(_.extend({remotePath:fakeapiRemoteRootPath}, fakeServerSshConfig)));
//});
//
//gulp.task('fakeroutes', function (done) {
//    var sftp = require('gulp-sftp');
//    gulp.src(['./app.js'])
//        .pipe(sftp(_.extend({remotePath:fakeapiRemoteRootPath}, fakeServerSshConfig)));
//    return gulp.src(['./api/**'])
//        .pipe(sftp(_.extend({remotePath:fakeapiRemoteRootPath+'/api'}, fakeServerSshConfig)));
//});
//
//gulp.task('fakeapi', function () {
//   seq(['fakedocs', 'fakeroutes']);
//});


/*====================================
 =            Default Task            =
 ====================================*/

gulp.task('default', function(done){
    var tasks = [];

    tasks.push('nodemon');
    tasks.push('watch');
    seq(tasks,done);
});

/*===============================
 =            Release            =
 ===============================*/

releaseTasks(gulp);