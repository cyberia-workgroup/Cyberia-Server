var shelljs = require('shelljs');

module.exports = function(grunt){
    'use strict';
    var meta = require('./utils/meta');

    // Files to use rather than try and use grunt.utils
    var files = {
        jshint: ['Gruntfile.js', 'app/**/*.js', 'tests/**/*.js'],
        concatTestNode: ['tests/node.prefix', 'tests/**/*.js', 'tests/node.suffix'],
        concatTestBrowser: ['tests/browser.prefix', 'tests/**/*.js', 'tests/browser.suffix']
    };

    grunt.initConfig({
        // Allows us to reference values in the package.json file like "name" and "version"
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            // Add the files to look at
            files: files.jshint

        },
        concat: {
            testBrowser: {
                options: {
                    stripBanners: true,
                    banner: meta.banner
                },
                src: files.concatTestBrowser,
                dest: 'dist/tests/browser-test-data.js'
            },
            testNode: {
                options: {
                    stripBanners: true,
                    banner: meta.banner
                },
                src: files.concatTestNode,
                dest: 'dist/tests/node-test-data.js'
            },
            dist: {
                // the files to concatenate
                src: ['src/**/*.js'],
                // the location of the resulting JS file
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        watch: {
            scripts: {
                files: files.jshint,
                tasks: ['jshint', 'jasmine:run']
            }
        }
    });

    [
        'grunt-contrib-jshint',
        'grunt-contrib-concat',
        'grunt-contrib-watch'
    ].forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('build:test:data', ['jshint', 'concat:testBrowser', 'concat:testNode']);
    grunt.registerTask('jasmine:run', 'run Jasmine spec tests inside nodejs',
        function() {
            var exitInfo = shelljs.exec('jasmine JASMINE_CONFIG_PATH=spec/support/jasmine.json');
            if (exitInfo.code !== 0) {
                grunt.fail.fatal('Specs Failed', exitInfo.code);
            }
        }
    );
    grunt.registerTask('build', ['build:test:data', 'jasmine:run']);
    grunt.registerTask('test:all', ['build']);
};
