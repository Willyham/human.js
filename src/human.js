var fs = require('fs');
var _ = require('underscore');
var esprima = require('esprima');
var traverse = require('traverse');

var RuleFactory = require('./rules');
var QuirksRule = require('./rules/quirks');

// RULES
var fatalRules = [];
var warningRules = [QuirksRule];
var rules = RuleFactory(fatalRules, warningRules);

var Human = (function(){
  "use strict";

  var _human = function(options){
    options = options || {};
    this.files = options.files;
  };

  _human.prototype.analyse = function(){
    _.each(this.files, _.bind(function(filename){
      var content = fs.readFileSync(filename, 'utf-8');
      this.analyseContent(content);
    }, this));
  };

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
        console.log('Rule failed!', rule.getDescription());
        console.log('At line ' + node.loc.start.line + ' column ' + node.loc.start.column);
        if(rule.getLevel() === 'fatal'){
          throw new Error('failed');
        }
      });
    });
  };

  return _human;
})();

module.exports = Human;