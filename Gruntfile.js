/*
 * grunt-no-media-queries
 * https://github.com/danielhusar/grunt-no-media-queries
 *
 * Copyright (c) 2014 Daniel Husar
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    //our task
    no_media_queries: {
      custom_options: {
        options: {
          opts: {
            width: '600px'
          },
          rewokOts: {
            compress: true
          }
        },
        files: {
          'tmp/style.css': 'test/fixtures/style.css'
        }
      }
    },

    //test
    simplemocha: {
      test: {
        src: 'test/*.js'
      }
    }

  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.registerTask('default', ['clean', 'no_media_queries', 'simplemocha']);

};
