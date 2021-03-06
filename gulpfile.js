var _ = require('lodash'),
    gulp = require('gulp'),
    path = require('path'),
    walk = require('walk'),
    slash = require('slash'),
    git = require('gulp-git'),
    umd = require('gulp-umd'),
    prompt = require('prompt'),
    bump = require('gulp-bump'),
    shell = require('gulp-shell'),
    modify = require('gulp-modify'),
    rename = require('gulp-rename'),
    exec = require('child_process').exec,
    release = require('publish-release'),
    eventStream = require('event-stream'),
    runSequence = require('run-sequence'),
    vinylBuffer = require('vinyl-buffer'),
    gulpCallback = require('gulp-callback'),
    source = require('vinyl-source-stream'),
    stringifyObject = require('stringify-object');

var version,
    libPath = 'lib',
    sitesPath = path.join(libPath, 'sites'),
    createCommonJSAdapterFile = function(dependencies, dir) {
        var code = {},
            moduleName = (dir ? _.last(dir.split(path.sep)) : 'allColors'),
            file = source(moduleName + '.js');

        _.each(dependencies, function(dep) {
            code[dep.param] = dep.param;
        });

        file.write();

        file.pipe(vinylBuffer())
            .pipe(umd({
                template: path.join(__dirname, libPath, 'templates', 'commonjsAdapter.js'),
                dependencies: function() {
                    return dependencies;
                },
                exports: function() {
                    return stringifyObject(code, {indent: '        '}).replace(/'/g, '').replace('}', '    }');
                }
            }))
            .pipe(gulp.dest(dir ? path.join(sitesPath, moduleName) : libPath))
            .pipe(gulpCallback(function() {
                file.end();
            }));

        return file;
    };

gulp.task('colors', function() {
    return gulp.src(path.join(sitesPath, '*', 'getColors.js'), {read: false})
        .pipe(shell(['node <%= file.path %>']));
});

gulp.task('umd', function() {
    var jsPath = path.join(sitesPath, '*', '*');

    return gulp.src([path.join(jsPath, '*.array')], {base: __dirname})
        .pipe(rename(function(file) {
            file.extname = '.js';
        }))
        .pipe(modify({
            fileModifier: function(file, contents) {
                return stringifyObject(JSON.parse(contents), {indent: '        '}).replace(']', '    ]');
            }
        }))
        .pipe(umd({
            template: path.join(__dirname, libPath, 'templates', 'returnExports.js'),
            namespace: function(file) {
                var pathArr = file.history[0].split(path.sep);

                return 'allColors.' + pathArr[pathArr.length - 3] + '.' + pathArr[pathArr.length - 1].split('.')[0];
            }
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('site', function() {
    var dirs = [],
        files = [];

    walk.walkSync(sitesPath, {
        listeners: {
            directories: function(filePath, stats, next) {
                dirs.push(filePath);
                next();
            },
            errors: function(filePath) {
                throw new Error('Error encountered in path ' + filePath);
            }
        }
    });

    _.each(_.without(dirs, sitesPath), function(dir) {
        var dependencies = [];

        walk.walkSync(dir, {
            listeners: {
                file: function(filePath, stats, next) {
                    if (filePath !== dir && path.extname(stats.name) === '.js') {
                        dependencies.push({
                            name: slash('./' + path.join(path.relative(dir, filePath), stats.name)),
                            param: path.basename(stats.name, '.js')
                        });
                    }

                    next();
                },
                errors: function(filePath) {
                    throw new Error('Error encountered in path ' + filePath);
                }
            }
        });

        files.push(createCommonJSAdapterFile(dependencies, dir));
    });

    return eventStream.merge.apply(this, files);
});

gulp.task('module', function() {
    var dirs = [],
        files = [];

    walk.walkSync(sitesPath, {
        listeners: {
            directories: function(filePath, stats, next) {
                dirs.push(filePath);
                next();
            },
            errors: function(filePath) {
                throw new Error('Error encountered in path ' + filePath);
            }
        }
    });

    _.each(_.without(dirs, sitesPath), function(dir) {
        var dependencies = [];

        walk.walkSync(dir, {
            listeners: {
                file: function(filePath, stats, next) {
                    var fileName = path.basename(stats.name, '.js');

                    if (filePath === dir && !_.contains(fileName, 'getColors')) {
                        dependencies.push({
                            name: slash('./' + path.join(path.relative(libPath, filePath), stats.name)),
                            param: fileName
                        });
                    }

                    next();
                },
                errors: function(filePath) {
                    throw new Error('Error encountered in path ' + filePath);
                }
            }
        });

        files.push(createCommonJSAdapterFile(dependencies));
    });

    return eventStream.merge.apply(this, files);
});

gulp.task('bump', function() {
    return gulp.src('*.json')
        .pipe(bump())
        .pipe(gulp.dest('.'));
});

gulp.task('commitBump', function() {
    version = require('./package').version;

    return gulp.src('*.json')
        .pipe(git.commit('Released version ' + version));
});

gulp.task('pushBump', function(cb) {
    git.push('origin', 'master', function(err) {
        if (err) { throw err; }
        cb();
    });
});

gulp.task('githubRelease', function(cb) {
    var notesKey = 'release notes';

    if (!_.isString(version)) {
        version = require('./package').version;
    }

    prompt.start();

    prompt.get([notesKey], function(err, result) {
        if (err) { throw err; }

        release({
            token: require('./githubToken.js'),
            owner: 'mjhasbach',
            repo: 'all-colors',
            tag: version,
            name: 'Version ' + version,
            notes: result[notesKey],
            draft: false,
            prerelease: false
        }, function(err) {
            if (err) { throw err; }
            cb();
        });
    });
});

gulp.task('npmPublish', function(cb) {
    exec('npm publish', function(err) {
        if (err) { throw err.message; }
        cb();
    });
});

gulp.task('default', function(cb) {
    runSequence('colors', 'umd', 'site', 'module', cb);
});

gulp.task('release', function(cb) {
    runSequence('bump', 'commitBump', 'pushBump', 'githubRelease', 'npmPublish', cb);
});