'use strict';
var assert = require('assert');
var grunt = require('grunt');

it('Pick proper css rules', function () {
  var actual = grunt.file.read('tmp/style.css');
  assert(/a{color:red;}/.test(actual));
});