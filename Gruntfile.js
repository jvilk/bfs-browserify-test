

module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      all: {
        options: {
          browserifyOptions: {
            builtins: {
              "buffer": require.resolve('bfs-buffer'),
              "fs": require.resolve("bfs-fs"),
              "path": require.resolve("bfs-path"),
              "buffer": require.resolve("bfs-buffer")
            },
            insertGlobalVars: {
              "process": function () { return "require('bfs-process')" },
              'Buffer': function () { return "require('bfs-buffer').Buffer" }
            },
            debug: true,
            // REQUIRED, otherwise browserify will replace internal references to things to
            // other things. Also causes wrappers to fail!
            noParse: ["browserfs"]
          }
        },
        files: {
          './build/bfs-test.js': './browser.js'
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-browserify');
  
  grunt.registerTask('default', ['browserify']);
};
