const gulp = require('gulp')
const babelify = require('babelify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const path = require('path')

const rootDir = path.resolve('../../')

const task = (sources, target) => {
    browserify(sources.map(source => path.join(rootDir, source)))
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
        .pipe(gulp.dest('../dist'))
}

gulp.task('libs', (done) => {
    task([
        'lib/thirdparty/lodash.min.js',
        'lib/thirdparty/decomp.min.js',
        'lib/thirdparty/matter.js'
    ], 'libs.js')
    done()
})

gulp.task('export', (done) => {
    task(['src/run/web/main.js'], 'run.js')
    done()
})