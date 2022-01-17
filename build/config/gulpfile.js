const gulp = require('gulp')
const babelify = require('babelify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const inject = require('gulp-inject')
const path = require('path')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const pump = require('pump')

const rootDir = path.resolve('../../')
const runDistDir = path.join(rootDir, 'build/dist/run')
const appDistDir = path.join(rootDir, 'build/dist/app')
const previewDistDir = path.join(rootDir, 'build/dist/preview')

const task = (sources, target, standalone, distDir) => {
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

// ***** Tasks for the app *******************//
gulp.task('app-libs', () =>
    gulp.src(['lib/thirdparty/common/*.js', 'lib/thirdparty/zip/*.js']
        .map(file => path.join(rootDir, file)))
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(appDistDir))
)

// build style for the app
gulp.task('app-style', () =>
    gulp.src(['src/app/style/main.css', 'src/app/style/theme/dark.css', 'src/app/style/theme/light.css']
        .map(file => path.join(rootDir, file)))
        .pipe(gulp.dest(appDistDir))
)

// build the entry point of the app
gulp.task('app-main', () =>
    task(['src/app/main.js'], 'main.js', null, appDistDir)
)

//build the static source code of the app (libs and entry point) to bundle file
gulp.task('app-bundle', () =>
    gulp.src(['libs.js', 'main.js']
        .map(file => path.join(appDistDir, file)))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(appDistDir))
)

// generate the index file
gulp.task('app-index', () =>
    gulp.src(['src/app/app-index.html']
        .map(file => path.join(rootDir, file)))
        .pipe(concat('index.html'))
        .pipe(gulp.dest(appDistDir))
)

// build the final executable files (copy bundle and data file to run folder)
gulp.task('app-export', () =>
    gulp.src(['bundle.js', 'main.css', 'dark.css', 'index.html']
        .map(file => path.join(appDistDir, file)))
        .pipe(gulp.dest(path.join(rootDir, 'app')))
)

gulp.task('app-build', gulp.series('app-libs', 'app-main' , 'app-style', 'app-bundle', 'app-index', 'app-export'))

// ******* Task for the run game ***********************//

// build third party libs for run game
gulp.task('run-libs', () =>
    gulp.src(['lib/thirdparty/common/*.js', 'lib/thirdparty/physics/*.js']
        .map(file => path.join(rootDir, file)))
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(runDistDir))
)

// build the entry point of the run game
gulp.task('run-main', () =>
    task(['src/run/main.js'], 'run.js', false, runDistDir)
)

// build the engine data used to read the world game
gulp.task('run-data', () =>
    task(['src/run/data.js'], 'data.js', 'EngineData', runDistDir)
)

// build style for run game
gulp.task('run-style', () =>
    gulp.src(['src/run/style.css']
        .map(file => path.join(rootDir, file)))
        .pipe(gulp.dest(runDistDir))
)

//build the static source code of the game (libs and entry point) to bundle file
gulp.task('run-bundle', () =>
    gulp.src(['libs.js', 'run.js']
        .map(file => path.join(runDistDir, file)))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(runDistDir))
)

// build the final executable files (copy bundle and data file to run folder)
gulp.task('run-export', () =>
    gulp.src(['bundle.js', 'data.js', 'style.css']
        .map(file => path.join(runDistDir, file)))
        .pipe(gulp.dest(path.join(rootDir, 'run')))
)

gulp.task('run-build', gulp.series('run-libs', 'run-main',  'run-data' , 'run-style', 'run-bundle', 'run-export'))

// ******* Task for the preview game ***********************//

// build third party libs for run game
gulp.task('preview-libs', () =>
    gulp.src(['lib/thirdparty/common/*.js', 'lib/thirdparty/physics/*.js']
        .map(file => path.join(rootDir, file)))
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(previewDistDir))
)

// build the entry point of the preview game
gulp.task('preview-main', () =>
    task(['src/preview/main.js'], 'main.js', false, previewDistDir)
)

// build style for preview game
gulp.task('preview-style', () =>
    gulp.src(['src/preview/style/main.css']
        .map(file => path.join(rootDir, file)))
        .pipe(gulp.dest(previewDistDir))
)

//build the static source code of the game (libs and entry point) to bundle file
gulp.task('preview-bundle', () =>
    gulp.src(['libs.js', 'main.js']
        .map(file => path.join(previewDistDir, file)))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(previewDistDir))
)

// generate the index file
gulp.task('preview-index', () =>
    gulp.src(['src/preview/index.html']
        .map(file => path.join(rootDir, file)))
        .pipe(gulp.dest(previewDistDir))
)

// build the final executable files (copy bundle and data file to preview folder)
gulp.task('preview-export', () =>
    gulp.src(['bundle.js', 'main.css', 'index.html']
        .map(file => path.join(previewDistDir, file)))
        .pipe(gulp.dest(path.join(rootDir, 'preview')))
)

gulp.task('preview-build', gulp.series('preview-libs', 'preview-main', 'preview-style',
    'preview-bundle', 'preview-index', 'preview-export'))