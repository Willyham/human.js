'use strict';

var _ = require('underscore');
var args = require('minimist')(process.argv.slice(2));
var glob = require('glob-all');
var path = require('path');
var Human = require('./human');

var directory = _.first(args._) || './';
var allJSFiles = path.join(directory, '**/*.js');
var excludedPattern = '!' + args.exclude;

glob([allJSFiles, excludedPattern], {}, function(error, files){
  var human = new Human({
    files: files
  });
  human.analyse();
});