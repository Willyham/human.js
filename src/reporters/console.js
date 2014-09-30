'use strict';

var _ = require('underscore');
var Reporter = require('./reporter');

var ConsoleReporter = Reporter.extend({

  _fails: {},
  _nodeCount: 0,
  _currentFile: null,

  _log: function(message){
    process.stdout.write(message);
  },

  start: function(){
    console.log('Running Human.js... ');
  },

  startFile: function(filename){
    this._currentFile = filename;
  },

  ruleFailed: function(rule, node){
    if(!this._fails[this._currentFile]){
      this._fails[this._currentFile] = [];
    }
    this._fails[this._currentFile].push({
      rule: rule,
      node: node
    });
  },

  finish: function(){
    console.log('Finished analysing files');

    var totalErrors = _.reduce(this._fails, function(memo, value){
      return memo + _.size(value);
    }, 0);
    if(!totalErrors){
      console.log('No problems found!');
      return;
    }
    _.each(this._fails, function(errors, filename){
      if(!errors){
        return;
      }
      console.log(_.size(errors) + ' errors found in ' + filename);
      console.log('---------------------------------------------');
      _.each(errors, function(error){
        console.log(error.rule.getDescription() + ' [Line: '+ error.node.loc.start.line +', Column: '+ error.node.loc.start.column +']');
      });
      console.log();
    });
  }

});

module.exports = ConsoleReporter;