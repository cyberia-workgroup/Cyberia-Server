module.exports = function(grunt){

    // Files to use rather than try and use grunt.utils
    var files = {

    };

    grunt.initConfig({
        // Allows us to reference values in the package.json file like "name" and "version"
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            // Add the files to look at
            files: ['Gruntfile.js', 'app/**/*.js', 'tests/**/*.js'],

        },
        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            dist: {
                // the files to concatenate
                src: ['src/**/*.js'],
                // the location of the resulting JS file
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }
    });

    [
        'grunt-contrib-jshint',
        'grunt-contrib-concat',
        'grunt-contrib-watch'
    ].forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint']);
};