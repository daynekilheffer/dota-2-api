module.exports = function (grunt) {

    grunt.initConfig({
        jasmine_node : {
            specNameMatcher : 'spec',
            projectRoot: '.',
            requirejs: false,
            forceExit: true,
            jUnit: {
                report: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-jasmine-node');

    grunt.registerTask('test', ['jasmine_node']);

};
