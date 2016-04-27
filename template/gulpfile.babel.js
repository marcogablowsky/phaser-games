import gulp from 'gulp';
import sequence from 'run-sequence';
import requireDir from 'require-dir';

requireDir('./tasks/prod');
gulp.task('build', () => {
    sequence('clean:prod',
        [
            'audio:prod',
            'data:prod',
            'img:prod',
            'js:prod'
        ],
        'html:prod',
        'rev:prod'
    );
});

requireDir('./tasks/dev');
gulp.task('default', () => {
    sequence('clean:dev',
        [
            'audio:dev',
            'data:dev',
            'img:dev',
            'js:dev',
            'html:dev'
        ],
        'watch',
        'serve'
    );
});
