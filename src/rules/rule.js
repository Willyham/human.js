var _ = require('underscore');
var extend = require('class-extend').extend;

var Rule = (function(){

  var _defaults = {
    level: 'warning'
  };

  var _rule = function(options){
    options = options || {};
    this.options = _.defaults(_.clone(options), _defaults);
  };

  // Implement in sub class
  _rule.prototype.test = _.noop;

  _rule.prototype.getLevel = function(){
    return this.options.level;
  };

  _rule.extend = extend;
  return _rule;

})();

module.exports = Rule;