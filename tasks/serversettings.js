/**
 * Builds server settings found in /src/
 *
 * @usage gulp serversettings
 */

import gulp from 'gulp';
import notify from './notify';

function watchServerSettings() {
    const src = `${process.env.DIRECTORY_SRC}/**/.htaccess`;

    gulp.watch(src, () => {
        notify.log('SERVER SETTINGS: file update detected, rebuilding...');
        buildServerSettings();
    });
}

function buildServerSettings() {
    const src = `${process.env.DIRECTORY_SRC}/**/.htaccess`;

    return gulp
        .src(src)
        .pipe(notify.onError('SERVER SETTINGS: error in htaccess'))
        .pipe(gulp.dest(process.env.DIRECTORY_DEST))
        .on('end', notify.onLog('SERVER SETTINGS: htaccess copy complete'))
}

export default function serversettings() {
    if (process.env.WATCH === 'true') {
        watchServerSettings();
    }

    return buildServerSettings();
}
