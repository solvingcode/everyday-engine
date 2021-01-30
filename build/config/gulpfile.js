const gulp = require('gulp')
const babelify = require('babelify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const path = require('path')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const pump = require('pump')

const rootDir = path.resolve('../../')
const distDir = path.join(rootDir, 'build/dist')

const task = (sources, target, standalone) => {
    return browserify({
        entries: sources.map(src => path.join(rootDir, src)),
        standalone
    })
        .transform(babelify.configure({
            ignore: ['node_modules'],
            presets: ['@babel/preset-env'],
            plugins: [
                '@babel/plugin-syntax-class-properties',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-transform-runtime'
            ]
        }))
        .bundle()
        .pipe(source(target))
        .pipe(gulp.dest(distDir))
}

gulp.task('libs', () =>
    gulp.src(['lib/thirdparty/common/*.js', 'lib/thirdparty/physics/*.js']
        .map(file => path.join(rootDir, file)))
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(distDir))
)

gulp.task('run', () =>
    task(['src/run/main.js'], 'run.js')
)

gulp.task('data', () =>
    task(['src/run/data.js'], 'data.js', 'EngineData')
)

gulp.task('bundle', () =>
    gulp.src(['libs.js', 'run.js']
        .map(file => path.join(distDir, file)))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(distDir))
)

gulp.task('build-run', (cb) =>
    /*pump([
        gulp.src(['bundle.js', 'data.js']
            .map(file => path.join(distDir, file))),
        uglify(),
        gulp.dest(path.join(rootDir, 'run'))
    ], cb)*/
    gulp.src(['bundle.js', 'data.js']
        .map(file => path.join(distDir, file)))
        .pipe(gulp.dest(path.join(rootDir, 'run')))
)