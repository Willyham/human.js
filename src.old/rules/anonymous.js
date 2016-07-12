'use strict';

var _ = require('underscore');
var Rule = require('./rule');

var AnonymousRule = Rule.extend({

  initialize: function(){
    this.description = 'Anonymous function';
  },

  /**
   * Check for anonymous functions rather than named functions
   * @param node
   * @returns {Boolean} True if there are no anonymous functions, false otherwise
   */
  test: function(node){
    if(node.type !== 'FunctionExpression'){
      return true;
    }
    return !_.isNull(node.id);
  }

});

module.exports = AnonymousRule;