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

export default function resizeMusicReleases() {
    const src = `${process.env.DIRECTORY_SRC}/assets/media/images/music/releases/*`;

    return gulp
        .src(src)
        .pipe(responsive({
            '**/*.jpg': {
                width: 300
            }
        },
        {
            // Global configuration for all images
            format: 'jpg',
            quality: 90,
            progressive: false,
            withMetadata: false,
        }))
        .pipe(imagemin())
        .pipe(chmod(0o644))
        .pipe(gulp.dest(`${process.env.DIRECTORY_DEST}/assets/media/images/music/releases/`));
}
