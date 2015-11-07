var _ = require('underscore');

module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      // Use only BrowserFS's FS module.
      use_fs_only: {
        options: {
          browserifyOptions: {
            builtins: _.extend({}, require('browserify/lib/builtins'), {
              "fs": require.resolve("browserfs/dist/node/core/node_fs.js")
            }),
            debug: true
          }
        },
        files: {
          './build/bfs-test.js': './browser.js'
        }
      },
      // Use all of BrowserFS's modules.
      use_all: {
        options: {
          browserifyOptions: {
            builtins: _.extend({}, require('browserify/lib/builtins'), {
              "buffer": require.resolve('bfs-buffer'),
              "fs": require.resolve("browserfs/dist/node/core/node_fs.js"),
              "path": require.resolve("bfs-path")
            }),
            insertGlobalVars: {
              "process": function () { return "require('bfs-process')" },
              'Buffer': function () { return "require('bfs-buffer').Buffer" }
            },
            debug: true
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
