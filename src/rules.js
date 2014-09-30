var _ = require('underscore');

var _instantiate = function(rule, options){
  debugger;
  return new rule(options);
};
var _makeFatalRule = _.partial(_instantiate, _, {level: 'fatal'});
var _makeWarningRule = _.partial(_instantiate, _, {level: 'warning'});

module.exports = function(fatalRules, warningRules){
  var fatals = _.map(fatalRules, _makeFatalRule);
  var warnings = _.map(warningRules, _makeWarningRule);
  return _.union(fatals, warnings);
};
