'use strict';

var _ = require('underscore');
var Rule = require('./rule');

var QuirksRule = Rule.extend({

  initialize: function(){
    this.description = 'Usage of the else keyword';
  },

  /**
   * Simple check for if a node has an 'alternate'
   * @param node
   * @returns {Boolean} True if there is no alternate, false otherwise.
   */
  test: function(node){
    if(node.type !== 'IfStatement'){
      return true;
    }
    return _.isNull(node.alternate);
  }

});

module.exports = QuirksRule;