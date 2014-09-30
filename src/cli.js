'use strict';

var argv = require('minimist')(process.argv.slice(2));
var glob = require('glob');
var Human = require('./human');

argv.d = argv.d || './';

glob(argv.d + '**/*.js', {}, function(error, files){
  var human = new Human({
    files: files
  });
  human.analyse();
});