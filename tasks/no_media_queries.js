'use strict';
var eachAsync = require('each-async');
var nmq = require('no-media-queries');

module.exports = function (grunt) {
  grunt.registerMultiTask('no_media_queries', 'Export the css without mediaqueries matching maximum page width.', function () {
    var options = this.options();
    eachAsync(this.files, function (el, i, next) {
      options.source = el.src[0];
      grunt.file.write(el.dest, nmq(grunt.file.read(el.src[0]), options.opts, options.rewokOts));
      next();
    }, this.async());
  });
};
