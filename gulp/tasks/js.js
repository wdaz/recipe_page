import webpack from 'webpack-stream';

export const jsTask = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "JS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(webpack({
            mode: app.isBuild ? 'production' : 'development',
            output: {
                filename: 'app.min.js'
            },
            devtool: 'source-map'
        }))
        .pipe(app.gulp.dest(app.path.build.js, { sourcemaps: app.isDev }))
        .pipe(app.plugins.browserSync.stream());
}