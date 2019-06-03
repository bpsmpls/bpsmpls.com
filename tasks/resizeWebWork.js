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

import gulp from 'gulp';
import gulpIf from 'gulp-if';
import imagemin from 'gulp-imagemin';
import responsive from 'gulp-responsive';

export default function resizeWebWork() {
    const src = `${process.env.DIRECTORY_SRC}/assets/media/images/web/**/*.+(png|jpg|gif)`;

    return gulp
        .src(src)
        .pipe(responsive({
            '**/*_lg.jpg': {
                width: 1000
            },
            '**/*_md.jpg': {
                width: 700
            },
            '**/*_sm.jpg': {
                width: 300
            }
        },
        {
            // Global configuration for all images
            format: 'jpg',
            quality: 90,
            progressive: false,
            withMetadata: false
        }))
        .pipe(imagemin())
        .pipe(gulp.dest(`${process.env.DIRECTORY_DEST}/assets/media/images/web/`));
}
