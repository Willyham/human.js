'use strict';

var _ = require('underscore');
var extend = require('class-extend').extend;

var Reporter = (function(){

  var _defaults = {
    level: 'warning'
  };

  var _reporter = function(options){
    options = options || {};
    this.options = _.defaults(_.clone(options), _defaults);
  };

  _reporter.prototype.start = _.noop;
  _reporter.prototype.startFile = _.noop;
  _reporter.prototype.processNode = _.noop;
  _reporter.prototype.ruleFailed = _.noop;
  _reporter.prototype.endFile = _.noop;
  _reporter.prototype.finish = _.noop;

  _reporter.extend = extend;
  return _reporter;

})();

module.exports = Reporter;