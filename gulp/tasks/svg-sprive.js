import svgSprite from 'gulp-svg-sprite';

export const svgSprive = () => {
    console.log(app.isDev)
    return app.gulp.src(app.path.src.svgIcons, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SVG SPRIVE",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../icons/icons.svg",
                    example: app.isDev
                },
            },
        }))
        .pipe(app.gulp.dest(app.path.build.assets))
}