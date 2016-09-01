var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var lazypipe = require('lazypipe');
var pug = require('pug');
var sass = require('node-sass');
var inlineTemplates = require('gulp-inline-ng2-template');
var cache = require('gulp-cached');
var argv = require('yargs')
    .boolean('failOnError').default('failOnError', false) // tslint
    .argv;
var bundle = require('./scripts/bundle');
var YAML = require('yamljs');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
const name    = require('./package.json').name;

var BUILD = tsProject.options.outDir;

var PATHS = {
    src: ['src/**/*.ts', '!src/**/*.spec.ts'],
    templates: ['src/**/*.pug'],
    spec: ['src/**/*.ts', 'test/util/*.ts'],
    typings: 'typings/index.d.ts',
    temp: 'temp/',
    includedComponentsHbs : './src/ng2-material-components.hbs',
    dist: 'dist'
};

function titleCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalize(str) {
     var splittedEnter = str.split(" ");
     var capitalized;
     var capitalizedResult;
     for (var i = 0 ; i < splittedEnter.length ; i++){
         capitalized = splittedEnter[i].charAt(0).toUpperCase();
         splittedEnter[i] = capitalized + splittedEnter[i].substr(1).toLowerCase();
    }
    return splittedEnter.join(" ");
}

// process ng2-material-components.pug file
gulp.task('config', function() {

    // load configuration
    var config = YAML.load('config.yaml');

    var dataSource = {
        layout: [],
        forms: [],
        navigation: [],
    };

    var dataSourceKeys = Object.keys(dataSource);

    dataSourceKeys.forEach(function(dsKey, index, keys) {
        Object.keys(config[dsKey]).forEach(function(key, index, keys) {
            if (config[dsKey][key]) {
                dataSource[dsKey].push({
                    key: key,
                    name: capitalize(key.replace('-', ' ')).replace(' ', '')
                });
            }
        });
    });

    return gulp.src(PATHS.includedComponentsHbs)
        .pipe(handlebars(dataSource, {}))
        .pipe(rename(name + '.ts'))
        .pipe(gulp.dest('./src'));
});


var inlineTemplatesTask = lazypipe()
    .pipe(inlineTemplates, {
        base: '/src',
        useRelativePaths: true,
        customFilePath: function(ext, file) {
            inlineTemplatesTask.filepath = file;
            return file;
        },
        templateProcessor: function(ext, file, cb) {
            const rendered = pug.render(file, {
                doctype: 'html',
                filename: inlineTemplatesTask.filepath,
            });
            cb(null, rendered);
        },
        templateExtension: '.pug',
    });

gulp.task('clean', function() {
    return require('del')(BUILD);
});

gulp.task('scss', function() {
    return gulp.src('./src/scss/app.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(rename(name + '.bundle.css'))
        .pipe(gulp.dest('./dist'))
})

gulp.task('fonts', function() {
    return gulp.src('./src/scss/fonts/**/*.*')
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('images', function() {
    return gulp.src('./src/scss/img/**/*.*')
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('lint:ts', function lint_ts_impl() {
    var tslint = require('gulp-tslint');

    return gulp.src(PATHS.spec)
        .pipe(cache('lint:ts'))
        .pipe(tslint({
            formatter: 'prose',
        }))
        .pipe(tslint.report({
            emitError: argv.failOnError,
            summarizeFailureOutput: true,
        }));
});

gulp.task('build:ts', gulp.series('lint:ts', function build_ts_impl() {
    var merge = require('merge2');

    var tsResult = gulp.src(PATHS.src.concat(PATHS.typings))
        .pipe(inlineTemplatesTask())
        .pipe(ts(tsProject));

    return merge([tsResult.dts, tsResult.js])
        .pipe(cache('build:ts'))
        .pipe(gulp.dest(BUILD));
}));

gulp.task('bundle', function() {
    return bundle({
        mangle: false
    });
});

gulp.task('bundle:min', function() {
    return bundle({
        minify: true,
        sourceMaps: true,
        mangle: false
    });
});

gulp.task('build', gulp.series(
    'clean',
    // 'config',
    'build:ts',
    'scss',
    'fonts',
    'images',
    gulp.parallel('bundle', 'bundle:min')));

gulp.task('build:watch', function() {
    gulp.watch([PATHS.src, PATHS.templates], gulp.series('build:ts', 'bundle'));
});

function startKarmaServer(isTddMode, done) {
    var config = {
        configFile: __dirname + '/karma.conf.js',
        singleRun: !isTddMode,
        autoWatch: isTddMode
    };
    if (argv.logLevel) config.logLevel = argv.logLevel;

    var karmaServer = require('karma').Server;
    var server = new karmaServer(config, done);
    server.start();

    return server;
}

gulp.task('test:clean', function() {
    return require('del')(PATHS.temp);
});

gulp.task('test:build', function() {
    var sourcemaps = require('gulp-sourcemaps');

    var tsResult = gulp.src(PATHS.spec.concat(PATHS.typings))
        .pipe(sourcemaps.init())
        .pipe(inlineTemplatesTask())
        .pipe(ts(tsProject));

    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(cache('test:build'))
        .pipe(gulp.dest(PATHS.temp));
});

gulp.task('test:clean-build', gulp.series('test:clean', 'test:build'));

gulp.task('test', gulp.series('test:clean-build', function test_impl(done) {
    startKarmaServer(false, done);
}));

gulp.task('tdd', gulp.series('test:clean-build', function tdd_impl(done) {
    startKarmaServer(true, function(err) {
        done(err);
        process.exit(1);
    }).on('browser_register', function(browser) {
        gulp.watch([PATHS.spec, PATHS.templates], gulp.series('test:build'));
    });
}));

gulp.task('prepublish', gulp.series('build', function prepublish_impl() {
    return gulp.src(['package.json', '*.md', 'LICENSE'])
        .pipe(gulp.dest(BUILD));
}));

gulp.task('typings:clean', function() {
    return require('del')('typings');
});

// gulp.task('merge-bootstrap', function() {
//
//     gulp.src([
//         './node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
//         './dist/' + name + '.bundle.min.js'
//     ])
//         .pipe(concat(name + '.bundle.min.js'))
//         .pipe(gulp.dest(PATHS.dist));
//
//     return gulp.src([
//         './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
//         './dist/' + name + '.bundle.js'
//     ])
//         .pipe(concat(name + '.bundle.js'))
//         .pipe(gulp.dest(PATHS.dist));
// });


gulp.task('default', gulp.series('build'/*, 'merge-bootstrap' */));
