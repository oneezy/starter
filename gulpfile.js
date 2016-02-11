/*************************************************************************
    DEPENDENCIES
**************************************************************************/
var gulp                = require('gulp');
var del                 = require('del');
var inject              = require('gulp-inject');
var concat              = require('gulp-concat');
var rename              = require('gulp-rename');
var htmlify             = require('gulp-minify-html');
var minify              = require('gulp-minify-css');
var uglify              = require('gulp-uglify');
var watch               = require('gulp-watch');
var sync                = require('browser-sync');
var sequence            = require('run-sequence');



/*******************************************************************************
    FILE PATHS
*******************************************************************************/
var path = {

    // sources
    index_src               :       'front/index.html',
    txt_src                 :       'front/*.txt',
    html_src                :       'front/**/*.html',
    css_src                 :       'front/**/*.css',
    js_src                  :       'front/**/*.js',

    img_src                 :     [ 'front/images/*.jpg',
                                    'front/images/*.gif',
                                    'front/images/*.png'
    ],

    // orders
    css_order               :     [ // Universal
                                    'front/css/reset.css',
                                    'front/css/grid.css',
                                    'front/css/settings.css',

                                    // Mobile
                                    'front/css/mobile/mobile.grid.css',
                                    'front/css/mobile/mobile.settings.css',
                                    'front/css/mobile/mobile.styles.css',

                                    // Tablet
                                    'front/css/tablet/tablet.grid.css',
                                    'front/css/tablet/tablet.settings.css',
                                    'front/css/tablet/tablet.styles.css',

                                    // Desktop
                                    'front/css/desktop/desktop.grid.css',
                                    'front/css/desktop/desktop.settings.css',
                                    'front/css/desktop/desktop.styles.css',

                                    // Lib
                                    'front/lib/materialize/materialize.custom.css',
                                    'front/lib/carousel/owl.carousel.css',
                                    'front/lib/carousel/owl.theme.css',
                                    'front/lib/carousel/owl.transitions.css'
    ],


    js_order                :     [ // Lib
                                    'front/lib/jquery/jquery.min.js',
                                    'front/lib/materialize/materialize.js',
                                    'front/lib/carousel/owl.carousel.min.js',
                                    // 'front/lib/enquire/enquire.min.js',
                                    'front/lib/requestanimationframe/requestanimationframe.js',

                                    // Main
                                    // 'front/js/loader.js',
                                    'front/js/main.js'
                                    // 'front/js/mobile/mobile.main.js',
                                    // 'front/js/tablet/tablet.main.js',
                                    // 'front/js/desktop/desktop.main.js'
    ],

    // dev destinations
    html_dev                :       'front/',
    css_dev                 :       'front/css',
    js_dev                  :       'front/js',
    img_dev                 :       'front/images',

    // build destinations
    build                   :       'build',
    html_build              :       'build/',
    css_build               :       'build/css',
    js_build                :       'build/js',
    img_build               :       'build/images'
};


/*******************************************************************************
    BUILD TASKS
*******************************************************************************/


// INDEX
gulp.task('index', function() {

    gulp.src(path.index_src)
        // Inject CSS
        .pipe(inject(gulp.src(path.css_order, {read: false}), {relative: true}, {ignorePath: 'front/'}))

        // Inject JS
        .pipe(inject(gulp.src(path.js_order, {read: false}), {relative: true}, {ignorePath: 'front/'}))
        .pipe(gulp.dest('front'));
});


// TEXT
gulp.task('txt', function() {
    gulp.src(path.txt_src);
});


// HTML
gulp.task('html', function() {
    gulp.src(path.html_src);
});


// IMAGES
gulp.task('images', function() {
    gulp.src(path.img_src);
});


// STYLES
gulp.task('styles', function() {
    gulp.src(path.css_src);
});


// Scripts
gulp.task('scripts', function() {
    gulp.src(path.js_src);
});



/*******************************************************************************
    WATCH
*******************************************************************************/
gulp.task('watch', function() {
    gulp.watch('front/**/*', ['txt']);
    gulp.watch('front/**/*', ['html']);
    gulp.watch('front/images/**/*', ['images']);
    gulp.watch('front/css/**/*', ['styles']);
    gulp.watch('front/js/**/*', ['scripts']);
});



/*******************************************************************************
    BROWSER SYNC
*******************************************************************************/
gulp.task('sync', function() {
    sync.init([
        path.txt_src,
        path.html_src,
        path.img_src,
        path.css_src,
        path.js_src], {

        server: { baseDir: './front' }
    });
});



/*******************************************************************************
    CLEAN
*******************************************************************************/
gulp.task('clean', function() {
    del([path.build]);
});



/*******************************************************************************
    BUILD
*******************************************************************************/
gulp.task('build', function() {

    // DELETE BUILD
    del([path.build]);

    // TXT
    gulp.src(path.txt_src)
        .pipe(gulp.dest(path.html_build));

    // HTML
    gulp.src(path.html_src)
        .pipe(htmlify())
        .pipe(gulp.dest(path.html_build));

    // IMG
    gulp.src(path.img_src)
        .pipe(gulp.dest(path.img_build));

    // CSS
    gulp.src(path.css_src)

        // Minifies and Concatenates css files and puts in build folder
        .pipe(minify())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest(path.css_build));

    // JS
    gulp.src(path.js_src)
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest(path.js_build));
});


/*******************************************************************************
    DEFAULT
*******************************************************************************/
gulp.task('default', ['txt', 'index', 'html', 'images', 'styles', 'scripts', 'watch', 'sync']);
