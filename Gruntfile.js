module.exports = function (grunt) {

    // Project configuration.
    const mozjpeg = require('imagemin-mozjpeg');
    
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'main.css': 'main.sass'
                }
            }
        },

        imagemin: {
            jpg: {
                options: {
                    progressive: true,
                    optimizationLevel: 5
                },
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.jpg'],
                    dest: 'dest/build'
                }]
            }
        },
    
        watch: {
            scripts: {
                files: ['sass/*.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            }
        },

        browserSync: {
            bsFiles: {
                src: ['./*.html', './css/**/*.css']
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: "./"
                }
            }
        },

    });
    // Load the plugins tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch']);
};

