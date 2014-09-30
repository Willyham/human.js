'use strict';

var fs = require('fs');
var _ = require('underscore');
var esprima = require('esprima');
var traverse = require('traverse');

var ConsoleReporter = require('./reporters/console');

var ruleFactory = require('./rules');
var QuirksRule = require('./rules/quirks');
var ElseRule = require('./rules/else');

// RULES
var fatalRules = [];
var warningRules = [QuirksRule, ElseRule];
var rules = ruleFactory(fatalRules, warningRules);

// REPORTER
var reporter = new ConsoleReporter();

var Human = (function(){

  /**
   * Constructor function for the Human library
   * @param {Object} [options]
   * @private
   */
  var _human = function(options){
    options = options || {};
    this.files = options.files;
  };

  /**
   * Read each file and analyse the content
   */
  _human.prototype.analyse = function(){
    reporter.start();
    _.each(this.files, _.bind(function(filename){
      var content = fs.readFileSync(filename, 'utf-8');
      reporter.startFile(filename);
      this.analyseContent(content);
      reporter.endFile(filename);
    }, this));
    reporter.finish();
  };

  /**
   * Given the contents of a JS source file, parse the source
   * with esprima, then traverse the AST
   * For each node in the tree, run through the set of rules and report naughties.
   * @param {String} content The source content
   */
  _human.prototype.analyseContent = function(content){
    var code = esprima.parse(content, {loc: true});

    traverse(code).forEach(function(node){
      _.each(rules, function(rule){
        if(!node){
          return;
        }
        if(rule.test(node)){
          return;
        }
        reporter.ruleFailed(rule, node);
        if(rule.getLevel() === 'fatal'){
          throw new Error('failed');
        }
      });
      reporter.processNode(node);
    });
  };


  return _human;
})();

module.exports = Human;