/**
 * Optimize all GIF, PNG, JPG, SVG assets in /src/assets/media/images
 *
 * Images are losslessly compressed with no degraded image quality.
 * Compressed images will replace the original versions in source directory.
 * Commit compressed images into source control.
 *
 * This task can is a one-off manual run and not part of the normal build process.
 *
 * @usage gulp optimize
 */

import chmod from 'gulp-chmod';
import gulp from 'gulp';
import gulpIf from 'gulp-if';
import imagemin from 'gulp-imagemin';
import responsive from 'gulp-responsive';

export default function resizeWebWork() {
    const src = `${process.env.DIRECTORY_SRC}/assets/media/images/web/**/*.+(png|jpg|gif)`;

    return gulp
        .src(src)
        .pipe(responsive({
            '**/*_desktop.jpg': [
                {
                    width: 1200,
                    rename: { suffix: '-1200' },
                    withoutEnlargement: false
                },
                {
                    width: 1000,
                    rename: { suffix: '-1000' }
                },
                {
                    width: 800,
                    rename: { suffix: '-800' }
                },
                {
                    width: 600,
                    rename: { suffix: '-600' }
                },
            ],
            '**/*_tablet.jpg': [
                {
                    width: 700,
                    rename: { suffix: '-700' }
                },
                {
                    width: 583,
                    rename: { suffix: '-583' }
                },
                {
                    width: 467,
                    rename: { suffix: '-467' }
                },
                {
                    width: 350,
                    rename: { suffix: '-350' }
                },
            ],
            '**/*_mobile.jpg': [
                {
                    width: 300,
                    rename: { suffix: '-300' }
                },
                {
                    width: 250,
                    rename: { suffix: '-250' }
                },
                {
                    width: 200,
                    rename: { suffix: '-200' }
                },
                {
                    width: 150,
                    rename: { suffix: '-150' }
                },
            ]
        },
        {
            // Global configuration for all images
            format: 'jpg',
            quality: 90,
            progressive: false,
            withMetadata: false
        }))
        .pipe(imagemin())
        .pipe(chmod(0o644))
        .pipe(gulp.dest(`${process.env.DIRECTORY_DEST}/assets/media/images/web/`));
}
